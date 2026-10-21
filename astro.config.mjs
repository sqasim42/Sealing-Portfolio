import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-iconset';
import tailwindcss from '@tailwindcss/vite'; // <-- Import the Vite plugin

export default defineConfig({
  site: 'https://sqasim42.github.io',
  base: '/Sealing-Portfolio',
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()], // <-- Add the plugin here
  },
});