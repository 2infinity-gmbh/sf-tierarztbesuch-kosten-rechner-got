import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tierarztbesuch-kosten-rechner-got.de',
  integrations: [tailwind()],
  output: 'static',
  trailingSlash: 'ignore',
});