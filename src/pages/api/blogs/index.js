// pages/api/articles.js
export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch(
      'https://admin.saaranj.com/jsonapi/node/articles?include=field_images',
      {
        headers: {
          'Accept': 'application/json',
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`Drupal API responded with status: ${response.status}`);
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

    // Add cache headers for better performance
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

    res.status(200).json({
      data: articlesWithImages
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ 
      error: 'Failed to fetch articles',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}