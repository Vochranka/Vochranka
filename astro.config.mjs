import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vochranka.cz',
  server: {
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
