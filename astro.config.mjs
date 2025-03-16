import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind'; // Use @astrojs/tailwind instead of @tailwindcss/vite
import react from '@astrojs/react';
import { remarkMeeting } from './src/plugins/remark-meeting.js';

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx({
      remarkPlugins: [remarkMeeting],
    }),
    sitemap(),
    react(),
    tailwind(), // Add this
  ],
  // Remove vite.plugins if using @astrojs/tailwind (it handles Vite internally)
});