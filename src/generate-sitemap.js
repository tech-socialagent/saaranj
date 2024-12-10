// src/generate-sitemap.js
import { writeFile } from 'fs/promises';
import prettier from 'prettier';

// Static routes that are always present
const staticRoutes = [
    '',  // homepage
    'earth-movers',
    'careers',
    'contact',
    'prime-homes',
    'ready-mix-concrete',
    'road-developers',
    'solid-block'
];

async function fetchArticles() {
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
            throw new Error(`Failed to fetch articles: ${response.status}`);
        }

        const data = await response.json();
        return data.data.map(article => ({
            slug: article.attributes.path?.alias?.replace('/', '') || `blog/${article.id}`,
            lastModified: article.attributes.changed || article.attributes.created
        }));
    } catch (error) {
        console.error('Error fetching articles:', error);
        return [];
    }
}

async function generateSitemap() {
    try {
        // Fetch dynamic articles
        const articles = await fetchArticles();
        console.log(`Fetched ${articles.length} articles`);

        // Create sitemap content
        const sitemap = `
            <?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                ${staticRoutes.map(route => `
                    <url>
                        <loc>https://saaranj.com/${route}</loc>
                        <lastmod>${new Date().toISOString()}</lastmod>
                        <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
                        <priority>${route === '' ? '1.0' : '0.8'}</priority>
                    </url>
                `).join('')}
                
                ${articles.map(article => `
                    <url>
                        <loc>https://saaranj.com/${article.slug}</loc>
                        <lastmod>${new Date(article.lastModified).toISOString()}</lastmod>
                        <changefreq>weekly</changefreq>
                        <priority>0.7</priority>
                    </url>
                `).join('')}
            </urlset>
        `;

        // Format the XML
        const formatted = await prettier.format(sitemap, {
            parser: 'html'
        });

        // Write the sitemap file
        await writeFile('public/sitemap.xml', formatted);
        console.log('Sitemap generated successfully!');
        
        // Log summary
        console.log(`Total URLs in sitemap: ${staticRoutes.length + articles.length}`);
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

// Execute the generator
generateSitemap();