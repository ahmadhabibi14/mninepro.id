import { SitePriorityMap, StaticPages, type SiteObj } from '@/lib/pages';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const linkItems: SiteObj[] = [...StaticPages];
  const sitemap: string = generateSitemap(linkItems);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}

function generateSitemap(linkItems: SiteObj[]): string {
  const siteURL: string = 'https://indonesiarespon.org';
  const sitemapEntries = linkItems
    .map((site: SiteObj) => `<url>
  <loc>${siteURL}${site.path}</loc>
  <changefreq>${site.changefreq}</changefreq>
  <priority>${SitePriorityMap[site.priority || 'high']}</priority>
  <lastmod>${site.lastModified ? site.lastModified : new Date().toISOString()}</lastmod>
</url>`.trim())
    .join('');

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${sitemapEntries}</urlset>`;

  sitemap = sitemap.replace(/\n/g, '');
  return sitemap;
}