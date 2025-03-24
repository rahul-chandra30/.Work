import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { remarkComponents } from './src/plugins/remark-components.js';

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx({
      remarkPlugins: [remarkComponents],
    }),
    sitemap(),
    react(),
    tailwind(),
  ],
});