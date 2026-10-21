// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-iconset';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sqasim42.github.io',
  base: '/Sealing-Portfolio',
  // ... any other settings you already had (like integrations) stay here
});