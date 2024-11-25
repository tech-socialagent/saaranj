// pages/api/articles/[id].js
export default async function handler(req, res) {
  const { id } = req.query;
  
  if (!id) {
    return res.status(400).json({ error: 'Article slug is required' });
  }

  try {
    // Use filter to find article by field_slug and include field_images
    const apiUrl = new URL('https://admin.saaranj.com/jsonapi/node/articles');
    apiUrl.searchParams.append('include', 'field_images');
    apiUrl.searchParams.append('filter[field_slug]', id);
    
    console.log('Fetching from:', apiUrl.toString());

    const response = await fetch(apiUrl.toString());
    
    if (!response.ok) {
      return res.status(response.status).json({
        error: `Failed to fetch article (${response.status})`
      });
    }

    const data = await response.json();
    
    // Check if any article was found
    if (!data.data || data.data.length === 0) {
      return res.status(404).json({
        error: 'Article not found'
      });
    }

    // Get the first article
    const article = data.data[0];

    // Process included images
    if (data.included) {
      const imageData = data.included.find(item => 
        item.type === 'file--file' && 
        item.id === article.relationships?.field_images?.data?.id
      );

      if (imageData) {
        // Get the full image URL
        const imageUrl = imageData.attributes?.uri?.url;
        if (imageUrl) {
          // Add the domain if the URL is relative
          article.imageUrl = imageUrl.startsWith('http') 
            ? imageUrl 
            : `https://admin.saaranj.com${imageUrl}`;
        }

        // Add image metadata
        article.imageMetadata = {
          alt: imageData.meta?.alt || article.attributes.title,
          title: imageData.meta?.title || '',
          width: imageData.meta?.width,
          height: imageData.meta?.height
        };
      }
    }

    // Add image from field_meta_description if available
    const metaDescription = article.attributes?.field_meta_description;
    if (metaDescription) {
      // Parse any image tags from the meta description
      const imgMatch = metaDescription.match(/<img[^>]+src="([^">]+)"/);
      if (imgMatch) {
        const imgSrc = imgMatch[1];
        article.metaImage = imgSrc.startsWith('http') 
          ? imgSrc 
          : `https://admin.saaranj.com${imgSrc}`;
      }
    }

    // Handle inline images in the body content
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

    const responseData = {
      data: article,
      included: data.included
    };

    // Add caching headers
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
    
    return res.status(200).json(responseData);
  } catch (error) {
    console.error('Error fetching article:', error);
    return res.status(500).json({ error: 'Failed to fetch article from CMS' });
  }
}
