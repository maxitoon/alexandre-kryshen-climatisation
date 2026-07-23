import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const site =
  process.env.PUBLIC_SITE_ORIGIN || process.env.PUBLIC_SITE_URL || 'http://127.0.0.1:4321';
const base = process.env.PUBLIC_BASE_PATH || '/';
const siteRoot = new URL(base.endsWith('/') ? base : `${base}/`, site).href;

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'it', 'ru'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => page !== siteRoot,
    }),
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
