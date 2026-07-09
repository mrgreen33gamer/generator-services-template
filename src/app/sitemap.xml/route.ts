import { NextResponse } from 'next/server';
import { getAllPosts } from '&/blog-posts';
export const revalidate = 0;
export async function GET() {
  const baseUrl = 'https://www.powerholdgenerators.com';
  const today = new Date().toISOString().split('T')[0];
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/industries', priority: '0.85', changefreq: 'monthly' },
    { url: '/service-areas', priority: '0.85', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/blogs', priority: '0.7', changefreq: 'weekly' },
    { url: '/privacy-policy', priority: '0.4', changefreq: 'yearly' },
  ];
  const coreServices = [
    '/services/standby-generators','/services/portable-generators','/services/transfer-switches',
    '/services/generator-maintenance','/services/load-calculations','/services/emergency-service',
  ].map(url => ({ url, priority: '0.90', changefreq: 'weekly' }));
  const industries = [
    '/industries/homebuilders','/industries/healthcare-clinics','/industries/agriculture',
  ].map(url => ({ url, priority: '0.80', changefreq: 'monthly' }));
  const blogPages = getAllPosts().map((post) => ({ url: `/blogs/${post.slug}`, priority: '0.70', changefreq: 'monthly' }));
  const allPages = [...staticPages, ...coreServices, ...industries, ...blogPages];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  allPages.forEach(({ url, priority, changefreq }) => {
    xml += `  <url>\n    <loc>${baseUrl}${url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
  });
  xml += '</urlset>';
  return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=300, stale-while-revalidate=60' } });
}
