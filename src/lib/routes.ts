import { defaultLocale, locales, type Locale } from './site';

export const pageKeys = [
  'home',
  'services',
  'installation',
  'areas',
  'monaco',
  'menton',
  'nice',
  'antibes',
  'cannes',
  'frejus',
  'sainteMaxime',
  'saintTropez',
  'quote',
  'legal',
  'privacy',
] as const;

export type PageKey = (typeof pageKeys)[number];

export const locationPageKeys = [
  'monaco',
  'menton',
  'nice',
  'antibes',
  'cannes',
  'frejus',
  'sainteMaxime',
  'saintTropez',
] as const satisfies readonly PageKey[];

export type LocationPageKey = (typeof locationPageKeys)[number];

const routeSegments: Record<Locale, Record<PageKey, string>> = {
  fr: {
    home: '',
    services: 'services',
    installation: 'services/installation-climatisation',
    areas: 'zones',
    monaco: 'zones/monaco',
    menton: 'zones/menton',
    nice: 'zones/nice',
    antibes: 'zones/antibes',
    cannes: 'zones/cannes',
    frejus: 'zones/frejus',
    sainteMaxime: 'zones/sainte-maxime',
    saintTropez: 'zones/saint-tropez',
    quote: 'devis',
    legal: 'mentions-legales',
    privacy: 'confidentialite',
  },
  en: {
    home: '',
    services: 'services',
    installation: 'services/air-conditioning-installation',
    areas: 'areas',
    monaco: 'areas/monaco',
    menton: 'areas/menton',
    nice: 'areas/nice',
    antibes: 'areas/antibes',
    cannes: 'areas/cannes',
    frejus: 'areas/frejus',
    sainteMaxime: 'areas/sainte-maxime',
    saintTropez: 'areas/saint-tropez',
    quote: 'quote',
    legal: 'legal',
    privacy: 'privacy',
  },
  it: {
    home: '',
    services: 'servizi',
    installation: 'servizi/installazione-climatizzazione',
    areas: 'zone',
    monaco: 'zone/monaco',
    menton: 'zone/mentone',
    nice: 'zone/nizza',
    antibes: 'zone/antibes',
    cannes: 'zone/cannes',
    frejus: 'zone/frejus',
    sainteMaxime: 'zone/sainte-maxime',
    saintTropez: 'zone/saint-tropez',
    quote: 'preventivo',
    legal: 'note-legali',
    privacy: 'privacy',
  },
  ru: {
    home: '',
    services: 'uslugi',
    installation: 'uslugi/ustanovka-konditsionerov',
    areas: 'regiony',
    monaco: 'regiony/monako',
    menton: 'regiony/menton',
    nice: 'regiony/nitstsa',
    antibes: 'regiony/antib',
    cannes: 'regiony/kanny',
    frejus: 'regiony/frezhyus',
    sainteMaxime: 'regiony/sent-maksim',
    saintTropez: 'regiony/sen-trope',
    quote: 'zayavka',
    legal: 'pravovaya-informatsiya',
    privacy: 'konfidentsialnost',
  },
};

const routeEnv = import.meta.env || {};
const basePath = (routeEnv.BASE_URL || '/').replace(/\/+$/, '');

export function routeFor(locale: Locale, key: PageKey): string {
  const segment = routeSegments[locale][key];
  return segment ? `${basePath}/${locale}/${segment}/` : `${basePath}/${locale}/`;
}

export function pageKeyFromPath(locale: Locale, path: string | undefined): PageKey | undefined {
  const normalized = (path || '').replace(/^\/|\/$/g, '');
  return pageKeys.find((key) => routeSegments[locale][key] === normalized);
}

export function alternateRoutes(
  key: PageKey,
): Array<{ locale: Locale | 'x-default'; path: string }> {
  return [
    ...locales.map((locale) => ({ locale, path: routeFor(locale, key) })),
    { locale: 'x-default' as const, path: routeFor(defaultLocale, key) },
  ];
}

export function adjacentLocationKeys(key: LocationPageKey): LocationPageKey[] {
  const index = locationPageKeys.indexOf(key);
  return [locationPageKeys[index - 1], locationPageKeys[index + 1]].filter(
    (candidate): candidate is LocationPageKey => Boolean(candidate),
  );
}

export function staticRoutes(): Array<{
  locale: Locale;
  key: PageKey;
  path: string;
}> {
  return locales.flatMap((locale) =>
    pageKeys.map((key) => ({
      locale,
      key,
      path: routeSegments[locale][key],
    })),
  );
}
