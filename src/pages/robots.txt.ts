import type { APIRoute } from 'astro';
import { siteConfig } from '../lib/site';

export const GET: APIRoute = () => {
  const content = siteConfig.isPreview
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\nSitemap: ${siteConfig.siteUrl}/sitemap-index.xml\n`;

  return new Response(content, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
    },
  });
};
