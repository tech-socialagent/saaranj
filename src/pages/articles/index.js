// pages/index.js
import ArticleCard from '@/components/articles/ArticleCard';
import Head from 'next/head';

export default function Home({ articles, error: serverError }) {
  if (serverError) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-red-600">{serverError}</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Latest Articles | Saaranj</title>
        <meta 
          name="Articles | Saaranj" 
          content="Explore our latest articles and insights on Saaranj" 
        />
        <meta property="og:title" content="Latest Articles | Saaranj" />
        <meta 
          property="og:description" 
          content="Explore our latest articles and insights on Saaranj" 
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Saaranj" />
      </Head>

      <div className="min-h-screen bg-secondary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-medium text-primary mb-8">Latest Articles</h1>
          {articles && articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600">
              No articles found
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  try {
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const host = req.headers.host;

    // Fetch data directly from Drupal instead of going through our API route
    const response = await fetch(
      'https://admin.saaranj.com/jsonapi/node/articles?include=field_images',
      {
        headers: {
          'Accept': 'application/json',
        }
      }
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();

    // Process the data
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

    return {
      props: {
        articles: articlesWithImages,
        error: null
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    return {
      props: {
        articles: [],
        error: 'Failed to load articles'
      }
    };
  }
}