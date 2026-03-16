import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tierarztbesuch-kosten-rechner-got.de',
  integrations: [
    tailwind(),
    sitemap()
  ],
  output: 'static',
  trailingSlash: 'ignore',
});