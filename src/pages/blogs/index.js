// pages/index.js
import ArticleCard from '@/components/blogs/BlogsCard';
import Head from 'next/head';

export default function Home({ blogs, error: serverError }) {
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
        <title>Latest blogs | Saaranj</title>
        <meta 
          name="blogs | Saaranj" 
          content="Explore our latest blogs and insights on Saaranj" 
        />
        <meta property="og:title" content="Latest blogs | Saaranj" />
        <meta 
          property="og:description" 
          content="Explore our latest blogs and insights on Saaranj" 
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Saaranj" />
      </Head>

      <div className="min-h-screen bg-secondary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-medium text-primary mb-8">Latest blogs</h1>
          {blogs && blogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600">
              No blogs found
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
    const apiUrl = `${protocol}://${host}/api/blogs`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const { data: blogs } = await response.json();

    return {
      props: {
        blogs,
        error: null
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    return {
      props: {
        blogs: [],
        error: 'Failed to load blogs'
      }
    };
  }
}

