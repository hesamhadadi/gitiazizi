import { chromium } from 'playwright';

const base = 'https://giti-final.vercel.app';

const pages = [
  { path: '/', out: 'public/screenshots/home.jpg', waitFor: 'h1', scroll: 0 },
  { path: '/collections', out: 'public/screenshots/collections.jpg', waitFor: 'h1', scroll: 520 },
  { path: '/research', out: 'public/screenshots/research.jpg', waitFor: 'h1', scroll: 430 },
  { path: '/cv', out: 'public/screenshots/cv.jpg', waitFor: 'h1', scroll: 260 },
  { path: '/contact', out: 'public/screenshots/contact.jpg', waitFor: 'h1', scroll: 180 },
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1.5 });
const page = await context.newPage();

for (const p of pages) {
  const url = `${base}${p.path}`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForSelector(p.waitFor, { timeout: 30000 });
  await page.waitForTimeout(2200);

  if (p.scroll > 0) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), p.scroll);
    await page.waitForTimeout(1000);
  }

  await page.addStyleTag({ content: 'body::after{display:none!important;} [style*="z-index: 9999"], .fixed.z-\\[9999\\]{display:none!important;}' }).catch(() => {});

  await page.screenshot({ path: p.out, type: 'jpeg', quality: 82, fullPage: false, animations: 'disabled' });
  console.log(`Captured ${p.out}`);
}

await browser.close();
