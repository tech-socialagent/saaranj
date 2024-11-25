export default async function handler(req, res) {
  try {
    // Fetch articles with included relationships
    const response = await fetch('https://admin.saaranj.com/jsonapi/node/articles?include=field_images');
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

    res.status(200).json({
      data: articlesWithImages,
      included: data.included
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
}
