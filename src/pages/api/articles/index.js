// pages/api/articles.js
export default async function handler(req, res) {
  try {
    const response = await fetch('https://admin.saaranj.com/jsonapi/node/articles?include=field_images');
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Process the data to combine included images with articles
    const included = data.included ? data.included.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {}) : {};

    // Attach image URLs to articles
    const articlesWithImages = data.data.map(article => {
      const imageRelationship = article.relationships?.field_images?.data;
      if (imageRelationship && included[imageRelationship.id]) {
        article.imageUrl = `https://admin.saaranj.com${included[imageRelationship.id].attributes.uri.url}`;
      }
      return article;
    });

    // Add cache headers
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

    res.status(200).json({
      data: articlesWithImages,
      included: data.included
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
}
