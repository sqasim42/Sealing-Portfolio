import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite'; // <-- New import

export default defineConfig({
  site: 'https://sqasim42.github.io',
  base: '/Sealing-Portfolio',
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()], // <-- New Vite plugin
  },
});