export const locales = ['fr', 'en', 'it', 'ru'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

const publicEnv = import.meta.env || {};
const configuredSiteOrigin = publicEnv.PUBLIC_SITE_ORIGIN || publicEnv.PUBLIC_SITE_URL || '';
const siteOrigin = configuredSiteOrigin || 'http://127.0.0.1:4321';
const basePath = (publicEnv.BASE_URL || '/').replace(/\/+$/, '');
const siteUrl = new URL(`${basePath || ''}/`, siteOrigin).href.replace(/\/$/, '');
const isPreview = !configuredSiteOrigin;
const quoteEndpoint = publicEnv.PUBLIC_QUOTE_ENDPOINT || (isPreview ? '/api/quote' : '');

export const siteConfig = {
  publicName: 'Alexandre Kryshen',
  legalName: 'Alexandre Kryshen',
  legalForm: 'Entrepreneur individuel',
  baseLocality: 'Nice',
  siret: '849 573 779 00014',
  siteOrigin,
  basePath,
  siteUrl,
  phone: publicEnv.PUBLIC_CONTACT_PHONE || '',
  whatsapp: publicEnv.PUBLIC_WHATSAPP_NUMBER || '',
  quoteEndpoint,
  quoteFormAvailable: Boolean(quoteEndpoint),
  isPreview,
} as const;

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function phoneHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}

export function whatsappHref(phone: string): string {
  return `https://wa.me/${phone.replace(/\D/g, '')}`;
}
