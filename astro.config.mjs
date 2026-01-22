// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://colegioimperatrice.com.br',
  integrations: [sitemap()],
  image: {
    domains: ['rush-cms.s3.us-east-2.amazonaws.com'],
  },
  vite: {
    plugins: [
      Icons({
        compiler: 'astro',
      }),
      tailwindcss(),
    ],
  }
})