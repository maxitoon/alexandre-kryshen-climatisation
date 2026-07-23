import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

import { content } from '../src/lib/content';
import {
  alternateRoutes,
  locationPageKeys,
  pageKeys,
  routeFor,
  staticRoutes,
} from '../src/lib/routes';
import { locales } from '../src/lib/site';

describe('localized route and content contract', () => {
  it('creates one unique route for every page and locale', () => {
    const routes = staticRoutes();
    const paths = routes.map(({ locale, key }) => routeFor(locale, key));

    expect(routes).toHaveLength(locales.length * pageKeys.length);
    expect(pageKeys).toHaveLength(15);
    expect(locationPageKeys).toHaveLength(8);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('keeps every city page locally distinct', () => {
    for (const locale of locales) {
      const descriptions = locationPageKeys.map((key) => content[locale][key].metaDescription);
      const bodies = locationPageKeys.map((key) =>
        content[locale][key].sections.map(({ body }) => body).join(' '),
      );
      expect(new Set(descriptions).size).toBe(locationPageKeys.length);
      expect(new Set(bodies).size).toBe(locationPageKeys.length);
    }
  });

  it('keeps every localized page complete', () => {
    const incomplete: string[] = [];

    for (const locale of locales) {
      for (const key of pageKeys) {
        const page = content[locale][key];
        expect(page.metaTitle.length).toBeGreaterThan(20);
        if (page.metaDescription.length <= 60) {
          incomplete.push(`${locale}/${key} description (${page.metaDescription.length})`);
        }
        expect(page.title.length).toBeGreaterThan(8);
        expect(page.lede.length).toBeGreaterThan(30);
        expect(page.sections).toHaveLength(2);
      }
    }

    expect(incomplete).toEqual([]);
  });

  it('emits reciprocal locale alternates and x-default', () => {
    for (const key of pageKeys) {
      const alternates = alternateRoutes(key);
      expect(alternates.map(({ locale }) => locale)).toEqual([...locales, 'x-default']);
      expect(new Set(alternates.map(({ path }) => path)).size).toBe(locales.length);
    }
  });

  it('retains inspected ImageGen provenance', () => {
    const path = resolve('src/content/asset-provenance.json');
    const assets = JSON.parse(readFileSync(path, 'utf8'));

    expect(assets).toHaveLength(6);
    for (const asset of assets) {
      expect(asset.generationMode).toBe('Built-in ImageGen');
      expect(asset.inspection).toContain('Passed');
    }

    for (const filename of [
      'hero-riviera-interior.png',
      'installation-planning-detail.png',
      'coastal-apartment-context.png',
      'seasonal-villa-context.png',
      'hospitality-context.png',
      'coastal-corridor-relief.png',
    ]) {
      expect(existsSync(resolve('src/assets', filename))).toBe(true);
    }
  });
});
