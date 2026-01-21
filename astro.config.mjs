// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://colegioimperatrice.com.br',
  integrations: [react()],
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
});
