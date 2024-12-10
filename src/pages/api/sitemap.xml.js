// pages/api/sitemap.xml.js
const baseUrl = 'https://saaranj.com';

async function getAllArticleSlugs() {
  try {
    const response = await fetch(
      'https://admin.saaranj.com/jsonapi/node/articles',
      {
        headers: {
          'Accept': 'application/json',
        },
        next: { revalidate: 3600 } // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }

    const data = await response.json();
    return data.data.map(article => article.attributes.field_slug);
  } catch (error) {
    console.error('Error fetching article slugs:', error);
    return [];
  }
}

function generateSiteMap(articleSlugs) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Static pages -->
     <url>
       <loc>${baseUrl}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>1.00</priority>
     </url>
     <url>
       <loc>${baseUrl}/earth-movers</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.80</priority>
     </url>
     <url>
       <loc>${baseUrl}/careers</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.80</priority>
     </url>
     <url>
       <loc>${baseUrl}/contact</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.80</priority>
     </url>
     <url>
       <loc>${baseUrl}/prime-homes</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.80</priority>
     </url>
     <url>
       <loc>${baseUrl}/ready-mix-concrete</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.80</priority>
     </url>
     <url>
       <loc>${baseUrl}/road-developers</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.80</priority>
     </url>
     <url>
       <loc>${baseUrl}/solid-block</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.80</priority>
     </url>
     <url>
       <loc>${baseUrl}/blogs</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.80</priority>
     </url>

     <!-- Dynamic blog pages -->
     ${articleSlugs
       .map((slug) => {
         const encodedSlug = encodeURIComponent(slug);
         return `
       <url>
           <loc>${baseUrl}/blogs/${encodedSlug}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <priority>0.64</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const articleSlugs = await getAllArticleSlugs();
    
    // Set headers
    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=3600'); // Cache for 1 hour

    // Generate and send sitemap
    const sitemap = generateSiteMap(articleSlugs);
    return res.status(200).send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return a basic sitemap with static routes on error
    const sitemap = generateSiteMap([]);
    return res.status(200).send(sitemap);
  }
}