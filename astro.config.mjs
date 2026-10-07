import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vochranka.cz',
  integrations: [tailwind(), sitemap()],
  server: {
    host: true, // Automaticky otevře server pro celou lokální síť (místo psaní --host)
    port: 4322, // Můžete si vynutit konkrétní port, pokud chcete
  }
});
