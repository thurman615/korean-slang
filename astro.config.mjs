import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://korean-slang.pages.dev', // Cloudflare Pages URL (배포 후 변경)
  integrations: [sitemap()],
});
