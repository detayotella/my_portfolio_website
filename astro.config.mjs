// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // TODO: set `site` to the production URL once the domain is chosen.
  // It unlocks canonical URLs and the @astrojs/sitemap integration:
  //   npm i @astrojs/sitemap  →  integrations: [mdx(), sitemap()], site: 'https://…'
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
