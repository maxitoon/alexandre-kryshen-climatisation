# Alexandre Kryshen · Climatisation Côte d’Azur

Public, static-first website for Alexandre Kryshen’s air-conditioning installation and
quotation activity across the Monaco–Saint-Tropez corridor.

## Live website

<https://maxitoon.github.io/alexandre-kryshen-climatisation/>

The site contains 61 generated HTML pages: a language gateway plus 15 localized route
families in French, English, Italian, and Russian. Eight distinct location families cover
Monaco, Menton, Nice, Antibes, Cannes, Fréjus, Sainte-Maxime, and Saint-Tropez without
implying local branches.

## Local development

```sh
npm ci
npm run dev
```

The local preview includes a deterministic, non-persisting `/api/quote` receiver for test
purposes only.

## Verification

```sh
npm run check
npm run lint
npm run test
npm run build:pages
npm run test:e2e
npm audit --omit=dev
```

## GitHub Pages

`.github/workflows/deploy.yml` builds and deploys the site from `main` using Astro’s official
GitHub Pages action. The production build is configured for the project subpath and contains
no secret values. Phone, WhatsApp, and quote delivery stay inactive until verified public
configuration is added.
