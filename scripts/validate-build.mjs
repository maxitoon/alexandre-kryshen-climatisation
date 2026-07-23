import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const appRoot = resolve(import.meta.dirname, '..');
const distRoot = process.env.DIST_ROOT
  ? resolve(appRoot, process.env.DIST_ROOT)
  : join(appRoot, 'dist');
const locales = ['fr', 'en', 'it', 'ru'];
const basePath = (process.env.PUBLIC_BASE_PATH || '').replace(/\/+$/, '');
const publicSiteOrigin = process.env.PUBLIC_SITE_ORIGIN || process.env.PUBLIC_SITE_URL || '';
const publicSiteRoot = publicSiteOrigin
  ? new URL(`${basePath || ''}/`, publicSiteOrigin).href.replace(/\/$/, '')
  : '';
/** @type {string[]} */
const errors = [];
/** @type {Map<string, string>} */
const titles = new Map();

/** @param {string} directory @returns {string[]} */
function walk(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

/**
 * @param {string} html
 * @param {RegExp} expression
 * @param {string} label
 * @param {string} source
 */
function matchOne(html, expression, label, source) {
  const match = html.match(expression);
  if (!match) errors.push(`${source}: missing ${label}`);
  return match?.[1] || '';
}

/** @param {string} pathname */
function targetExists(pathname) {
  const buildPath =
    basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`))
      ? pathname.slice(basePath.length) || '/'
      : pathname;

  if (
    buildPath.startsWith('/_astro/') ||
    buildPath.startsWith('/images/') ||
    buildPath === '/robots.txt' ||
    buildPath.startsWith('/sitemap')
  ) {
    const assetPath = join(distRoot, buildPath.replace(/^\//, ''));
    return existsSync(assetPath);
  }

  const pagePath = buildPath.endsWith('/')
    ? join(distRoot, buildPath.replace(/^\//, ''), 'index.html')
    : join(distRoot, buildPath.replace(/^\//, ''));
  return existsSync(pagePath);
}

if (!existsSync(distRoot)) {
  throw new Error('dist/ does not exist. Run astro build first.');
}

const htmlFiles = walk(distRoot).filter((file) => extname(file) === '.html');

if (htmlFiles.length !== 61) {
  errors.push(
    `Expected 61 HTML files (gateway + 15 pages × 4 locales), found ${htmlFiles.length}.`,
  );
}

for (const file of htmlFiles) {
  const source = relative(distRoot, file);
  const html = readFileSync(file, 'utf8');
  const title = matchOne(html, /<title>([^<]+)<\/title>/, 'title', source);
  const locale = source.split('/')[0] || '';

  if (titles.has(title)) {
    errors.push(`${source}: duplicate title also used by ${titles.get(title)}`);
  } else {
    titles.set(title, source);
  }

  if (locales.includes(locale)) {
    matchOne(html, /<meta name="description" content="([^"]+)"/, 'description', source);
    const canonical = matchOne(html, /<link rel="canonical" href="([^"]+)"/, 'canonical', source);

    const language = matchOne(html, /<html lang="([^"]+)"/, 'html lang', source);
    if (language !== locale) errors.push(`${source}: lang ${language} does not match ${locale}`);

    const hreflangs = [...html.matchAll(/hreflang="([^"]+)"/g)].map((match) => match[1]);
    for (const expected of [...locales, 'x-default']) {
      if (!hreflangs.includes(expected)) errors.push(`${source}: missing hreflang ${expected}`);
    }

    if (publicSiteRoot) {
      if (!canonical.startsWith(`${publicSiteRoot}/`)) {
        errors.push(`${source}: canonical is outside the configured public site root`);
      }
      if (!/<meta name="robots" content="index,follow"/.test(html)) {
        errors.push(`${source}: public localized page is not indexable`);
      }
      if (html.includes('preview-ribbon')) {
        errors.push(`${source}: public build contains the preview ribbon`);
      }
    }

    const jsonBlocks = [
      ...html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g),
    ];
    if (jsonBlocks.length === 0) errors.push(`${source}: missing JSON-LD`);
    for (const block of jsonBlocks) {
      const json = block[1];
      if (!json) {
        errors.push(`${source}: empty JSON-LD`);
        continue;
      }
      try {
        JSON.parse(json);
      } catch {
        errors.push(`${source}: invalid JSON-LD`);
      }
    }
  }

  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (!href) continue;
    if (
      !href.startsWith('/') ||
      href.startsWith('//') ||
      href.startsWith('/api/') ||
      href.includes('#')
    ) {
      continue;
    }

    const pathname = new URL(href, 'http://local.test').pathname;
    if (!targetExists(pathname)) errors.push(`${source}: broken internal link ${pathname}`);
  }

  for (const match of html.matchAll(/(?:src|srcset)="([^"]+)"/g)) {
    const candidates = (match[1] || '')
      .split(',')
      .map((candidate) => candidate.trim().split(/\s+/)[0])
      .filter((candidate) => candidate?.startsWith('/'));
    for (const candidate of candidates) {
      if (!candidate) continue;
      const pathname = new URL(candidate, 'http://local.test').pathname;
      if (!targetExists(pathname)) errors.push(`${source}: broken image target ${pathname}`);
    }
  }

  if (
    !process.env.ALLOW_TEST_CONTACTS &&
    /(?:\+33000000000|tel:\+33000000000|wa\.me\/33000000000)/.test(html)
  ) {
    errors.push(`${source}: contains synthetic E2E contact data`);
  }

  if (/lorem ipsum|example\.com|climdenfert/i.test(html)) {
    errors.push(`${source}: contains placeholder or competitor text`);
  }

  if (
    publicSiteRoot &&
    !process.env.PUBLIC_QUOTE_ENDPOINT &&
    html.includes('data-quote-form') &&
    !/data-form-available="false"[\s\S]*?<fieldset disabled>/.test(html)
  ) {
    errors.push(`${source}: public form is not safely disabled without a receiver`);
  }
}

for (const required of ['robots.txt', 'sitemap-index.xml', 'images/hero-riviera-interior.png']) {
  if (!existsSync(join(distRoot, required))) errors.push(`Missing build artifact: ${required}`);
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(
    `Validated ${htmlFiles.length} HTML files, localized metadata, JSON-LD, links, and assets.`,
  );
}
