// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://colegioimperatrice.com.br',
  integrations: [sitemap()],
  image: {
    service: passthroughImageService(),
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