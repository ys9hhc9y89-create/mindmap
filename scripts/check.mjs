import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('..', import.meta.url);
const read = file => readFile(new URL(file, root), 'utf8');

JSON.parse(await read('manifest.webmanifest'));
const worker = await read('service-worker.js');
const html = await read('index.html');
const app = await read('app.js');
const externalUrl = /https?:\/\/(?!www\.w3\.org\/2000\/svg)/i;
const appNetworkApi = /(?:fetch\s*\(|XMLHttpRequest|WebSocket|sendBeacon)/i;
const remoteScript = /<script[^>]+src\s*=\s*["']https?:\/\//i;

if (externalUrl.test(worker) || externalUrl.test(html) || externalUrl.test(app)
  || appNetworkApi.test(app) || remoteScript.test(html)) {
  throw new Error('Verbotene externe Ressource oder Netzwerk-API gefunden.');
}

const cacheFiles = [...worker.matchAll(/['"](\.\/[^'"]+)['"]/g)].map(match => match[1]);
for (const file of cacheFiles) {
  await read(file.slice(2));
}

console.log(`PASS: Manifest, Offline-Dateien (${cacheFiles.length}) und Datenschutz-Netzwerkprüfung.`);
