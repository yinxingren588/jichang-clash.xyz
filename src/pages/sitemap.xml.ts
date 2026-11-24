import type { APIRoute } from 'astro';
import { AIRPORTS } from '../data/airports';
import { FAQ_ITEMS } from '../data/faqs';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://jichang-clash.xyz';
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/recommendations', priority: '0.9', changefreq: 'daily' },
    { url: '/comparison', priority: '0.9', changefreq: 'weekly' },
    { url: '/tutorials', priority: '0.8', changefreq: 'weekly' },
    { url: '/tutorials/clash-verge', priority: '0.8', changefreq: 'monthly' },
    { url: '/faq', priority: '0.9', changefreq: 'daily' },
    { url: '/sitemap', priority: '0.7', changefreq: 'weekly' },
  ];

  const airportPages = AIRPORTS.map(a => ({
    url: `/airports/${a.id}`,
    priority: '0.8',
    changefreq: 'weekly'
  }));

  const faqPages = FAQ_ITEMS.map(f => ({
    url: `/faq/${f.slug}`,
    priority: '0.7',
    changefreq: 'monthly'
  }));

  const allPages = [...staticPages, ...airportPages, ...faqPages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages
  .map(
    p => `  <url>
    <loc>${siteUrl}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
