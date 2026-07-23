import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

import { routeFor } from '../../src/lib/routes';
import type { Locale } from '../../src/lib/site';

const locales: Locale[] = ['fr', 'en', 'it', 'ru'];
type Box = { x: number; y: number; width: number; height: number };

function boxesOverlap(first: Box, second: Box) {
  return !(
    first.x + first.width <= second.x ||
    second.x + second.width <= first.x ||
    first.y + first.height <= second.y ||
    second.y + second.height <= first.y
  );
}

const quoteFixtures: Record<
  Locale,
  {
    path: string;
    name: string;
    email: string;
    locality: string;
    message: string;
    consent: RegExp;
    submit: string;
    success: RegExp;
  }
> = {
  fr: {
    path: '/fr/devis/',
    name: 'Nom',
    email: 'E-mail',
    locality: 'Ville ou code postal',
    message: 'Votre besoin',
    consent: /J’accepte/,
    submit: 'Envoyer la demande',
    success: /bien été reçue/,
  },
  en: {
    path: '/en/quote/',
    name: 'Name',
    email: 'Email',
    locality: 'Town or postcode',
    message: 'What do you need?',
    consent: /I agree/,
    submit: 'Send request',
    success: /was received/,
  },
  it: {
    path: '/it/preventivo/',
    name: 'Nome',
    email: 'E-mail',
    locality: 'Città o CAP',
    message: 'Esigenza',
    consent: /Accetto/,
    submit: 'Invia la richiesta',
    success: /è stata ricevuta/,
  },
  ru: {
    path: '/ru/zayavka/',
    name: 'Имя',
    email: 'Электронная почта',
    locality: 'Город или индекс',
    message: 'Задача',
    consent: /Я согласен/,
    submit: 'Отправить запрос',
    success: /Запрос получен/,
  },
};

test.describe('Tempered Riviera production preview', () => {
  for (const locale of locales) {
    test(`${locale} home is localized and internally complete`, async ({ page }) => {
      await page.goto(`/${locale}/`);

      await expect(page.locator('html')).toHaveAttribute('lang', locale);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
      await expect(page.locator('link[rel="alternate"]')).toHaveCount(5);
      await expect(
        page.getByRole('link', { name: /quote|devis|preventivo|расчёт/i }).first(),
      ).toBeVisible();
    });

    test(`${locale} route family has complete metadata and working internal targets`, async ({
      page,
    }) => {
      for (const path of [
        routeFor(locale, 'services'),
        routeFor(locale, 'installation'),
        routeFor(locale, 'areas'),
        routeFor(locale, 'monaco'),
        routeFor(locale, 'nice'),
        routeFor(locale, 'saintTropez'),
        routeFor(locale, 'quote'),
        routeFor(locale, 'legal'),
        routeFor(locale, 'privacy'),
      ]) {
        const response = await page.goto(path);
        expect(response?.ok(), path).toBe(true);
        await expect(page.locator('html')).toHaveAttribute('lang', locale);
        await expect(page.locator('h1')).toBeVisible();
        await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
        await expect(page.locator('link[rel="alternate"]')).toHaveCount(5);
      }
    });

    test(`${locale} quote flow succeeds`, async ({ page }) => {
      const fixture = quoteFixtures[locale];
      await page.goto(fixture.path);
      await page.getByLabel(fixture.name).fill('Camille Martin');
      await page.getByLabel(fixture.email).fill('camille@example.test');
      await page.getByLabel(fixture.locality).fill('Nice 06000');
      await page
        .getByLabel(fixture.message)
        .fill('Air-conditioning installation planning for a three-room apartment.');
      await page.getByLabel(fixture.consent).check();
      await page.getByRole('button', { name: fixture.submit }).click();
      await expect(page.locator('[data-form-status]')).toContainText(fixture.success);
    });
  }

  test('verified-config mode exposes call and WhatsApp journeys', async ({ page }) => {
    await page.goto('/fr/');

    await expect(page.locator('[data-contact-action="phone"]')).toHaveAttribute(
      'href',
      'tel:+33000000000',
    );
    await expect(page.locator('[data-contact-action="whatsapp"]')).toHaveAttribute(
      'href',
      'https://wa.me/33000000000',
    );
    await expect(page.locator('[data-contact-action="phone"]')).toBeVisible();
    await expect(page.locator('[data-contact-action="whatsapp"]')).toBeVisible();
  });

  test('mobile header controls have disjoint visible bounds from 320 to 390 pixels', async ({
    page,
  }) => {
    for (const width of [320, 360, 390]) {
      await page.setViewportSize({ width, height: 844 });

      for (const path of ['/fr/', '/ru/']) {
        await page.goto(path);

        const controls = [
          page.locator('.nav-shell > summary'),
          page.locator('.wordmark'),
          page.locator('.locale-switcher > summary'),
        ];
        const boxes = await Promise.all(controls.map((control) => control.boundingBox()));

        expect(boxes.every(Boolean), `${path} at ${width}px has visible header controls`).toBe(
          true,
        );

        const [menu, wordmark, locale] = boxes as [Box, Box, Box];
        for (const box of [menu, wordmark, locale]) {
          expect(box.x, `${path} at ${width}px starts inside the viewport`).toBeGreaterThanOrEqual(
            0,
          );
          expect(
            box.x + box.width,
            `${path} at ${width}px ends inside the viewport`,
          ).toBeLessThanOrEqual(width);
        }

        expect(boxesOverlap(menu, wordmark), `${path} at ${width}px menu and wordmark`).toBe(false);
        expect(boxesOverlap(wordmark, locale), `${path} at ${width}px wordmark and locale`).toBe(
          false,
        );
      }
    }
  });

  test('representative locale templates have no serious accessibility violations', async ({
    page,
  }) => {
    for (const path of [
      '/fr/',
      '/fr/services/',
      '/en/services/air-conditioning-installation/',
      '/it/zone/',
      '/ru/regiony/nitstsa/',
      '/fr/devis/',
      '/ru/pravovaya-informatsiya/',
      '/it/privacy/',
    ]) {
      await page.goto(path);
      const results = await new AxeBuilder({ page })
        .exclude('.preview-ribbon')
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      const serious = results.violations.filter(({ impact }) =>
        ['critical', 'serious'].includes(impact || ''),
      );
      expect(serious).toEqual([]);
    }
  });
});
