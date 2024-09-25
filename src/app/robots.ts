import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/', // Allow all content for all user agents
                disallow: [], // No disallowed paths
            },
            {
                userAgent: 'facebookexternalhit',
                allow: '/', // Specifically allow Facebook to crawl the entire site
            }
        ],
        // List all locale-based sitemaps
        sitemap: [
            `https://kodevz.vercel.app/ar/sitemap.xml`,
            `https://kodevz.vercel.app/en/sitemap.xml`,
            `https://kodevz.vercel.app/fr/sitemap.xml`,
        ],
    };
}
