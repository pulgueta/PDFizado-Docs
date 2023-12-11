import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.pdfizado.com',
  integrations: [tailwind(), sitemap()],
  image: {
    service: squooshImageService()
  },
  output: "server",
  adapter: vercel()
});