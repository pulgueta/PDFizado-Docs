import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://docs.pdfizado.com',
  integrations: [tailwind(), sitemap()],
  image: {
    service: squooshImageService(),
  }
});