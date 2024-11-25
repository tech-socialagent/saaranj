// pages/api/articles/[id].js
export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;

  if (!id) {
      return res.status(400).json({ error: 'Article slug is required' });
  }

  try {
      const apiUrl = new URL('https://admin.saaranj.com/jsonapi/node/articles');
      apiUrl.searchParams.append('include', 'field_images');
      apiUrl.searchParams.append('filter[field_slug]', id);

      console.log('Fetching from:', apiUrl.toString());

      const response = await fetch(apiUrl.toString(), {
          headers: {
              'Accept': 'application/json',
          }
      });

      if (!response.ok) {
          throw new Error(`CMS responded with status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.data || data.data.length === 0) {
          return res.status(404).json({ error: 'Article not found' });
      }

      const article = data.data[0];
      
      // Process images and metadata
      if (data.included) {
          const imageData = data.included.find(item =>
              item.type === 'file--file' &&
              item.id === article.relationships?.field_images?.data?.id
          );

          if (imageData) {
              const imageUrl = imageData.attributes?.uri?.url;
              if (imageUrl) {
                  article.imageUrl = imageUrl.startsWith('http')
                      ? imageUrl
                      : `https://admin.saaranj.com${imageUrl}`;
              }

              article.imageMetadata = {
                  alt: imageData.meta?.alt || article.attributes.title,
                  title: imageData.meta?.title || '',
                  width: imageData.meta?.width,
                  height: imageData.meta?.height
              };
          }
      }

      // Process meta description images
      if (article.attributes?.field_meta_description) {
          const imgMatch = article.attributes.field_meta_description.match(/<img[^>]+src="([^">]+)"/);
          if (imgMatch) {
              const imgSrc = imgMatch[1];
              article.metaImage = imgSrc.startsWith('http')
                  ? imgSrc
                  : `https://admin.saaranj.com${imgSrc}`;
          }
      }

      // Process inline images in body content
      if (article.attributes?.body?.value) {
          const processedBody = article.attributes.body.value.replace(
              /<img[^>]+src="([^"]+)"/g,
              (match, src) => {
                  const fullSrc = src.startsWith('http')
                      ? src
                      : `https://admin.saaranj.com${src}`;
                  return match.replace(src, fullSrc);
              }
          );
          article.attributes.body.value = processedBody;
          article.attributes.body.processed = processedBody;
      }

      // Add cache headers
      res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

      return res.status(200).json({
          data: article,
          included: data.included
      });
  } catch (error) {
      console.error('Error fetching article:', error);
      return res.status(500).json({
          error: 'Failed to fetch article from CMS',
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
  }
}