import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: {
    host: true, // Automaticky otevře server pro celou lokální síť (místo psaní --host)
    port: 4322, // Můžete si vynutit konkrétní port, pokud chcete
  }
});
