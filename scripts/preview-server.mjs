import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';

import { quoteRequestSchema } from '../src/lib/quote-schema.mjs';

const appRoot = resolve(import.meta.dirname, '..');
const distRoot = process.env.DIST_ROOT
  ? resolve(appRoot, process.env.DIST_ROOT)
  : join(appRoot, 'dist');
const port = Number(process.env.PORT || 4321);

/** @type {Record<string, string>} */
const contentTypes = {
  '.avif': 'image/avif',
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
};

/**
 * @param {import('node:http').ServerResponse} response
 * @param {number} status
 * @param {unknown} value
 */
function sendJson(response, status, value) {
  response.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  });
  response.end(JSON.stringify(value));
}

/** @param {import('node:http').IncomingMessage} request */
async function readJson(request) {
  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    size += chunk.length;
    if (size > 65_536) throw new Error('Payload too large');
    chunks.push(chunk);
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

/**
 * @param {import('node:http').IncomingMessage} request
 * @param {import('node:http').ServerResponse} response
 */
async function handleQuote(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('allow', 'POST');
    sendJson(response, 405, { ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const payload = await readJson(request);
    const result = quoteRequestSchema.safeParse(payload);

    if (!result.success) {
      sendJson(response, 422, {
        ok: false,
        error: 'Validation failed',
        issues: result.error.issues,
      });
      return;
    }

    sendJson(response, 200, {
      ok: true,
      receipt: 'preview-only',
      persisted: false,
    });
  } catch (error) {
    sendJson(response, 400, {
      ok: false,
      error: error instanceof Error ? error.message : 'Invalid request',
    });
  }
}

/** @param {string} urlPath */
function resolveStaticPath(urlPath) {
  const cleanPath = normalize(decodeURIComponent(urlPath.split('?')[0] || '/')).replace(
    /^(\.\.[/\\])+/,
    '',
  );
  let filePath = resolve(distRoot, `.${cleanPath}`);

  if (!filePath.startsWith(distRoot)) return null;

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, 'index.html');
  } else if (!extname(filePath)) {
    filePath = join(filePath, 'index.html');
  }

  return filePath;
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host || `127.0.0.1:${port}`}`);

  if (url.pathname === '/api/quote') {
    await handleQuote(request, response);
    return;
  }

  const filePath = resolveStaticPath(url.pathname);

  if (!filePath || !existsSync(filePath) || !statSync(filePath).isFile()) {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  response.writeHead(200, {
    'content-type': contentTypes[extname(filePath)] || 'application/octet-stream',
    'cache-control': filePath.endsWith('.html')
      ? 'no-cache'
      : 'public, max-age=31536000, immutable',
  });
  createReadStream(filePath).pipe(response);
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Tempered Riviera preview: http://127.0.0.1:${port}/fr/`);
});
