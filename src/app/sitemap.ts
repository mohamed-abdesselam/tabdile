import { getProducts } from "@/actions/getProducts";
import { MetadataRoute } from "next";

const locales = ['ar', 'en', 'fr']; // Supported locales

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    try {
        const products = await getProducts({ isPublished: true }) || [];
        
        const productsUrls = products.flatMap((product) =>
            locales.map((locale) => ({
                url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://kodevz.vercel.app'}/${locale}/products/${product._id}`,
                lastModified: new Date().toISOString(), // Explicit ISO format for date
            }))
        );

        const staticUrls = locales.flatMap((locale) => [
            {
                url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://kodevz.vercel.app'}/${locale}/`,
                lastModified: new Date().toISOString(),
            },
            {
                url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://kodevz.vercel.app'}/${locale}/about`,
                lastModified: new Date().toISOString(),
            },
        ]);

        return [...staticUrls, ...productsUrls];
    } catch (error) {
        console.error("Error generating sitemap:", error);
        return [];
    }
}
