import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://sqasim42.github.io',
  base: '/Sealing-Portfolio',
  integrations: [react(), icon()],
  vite: {
    // If you had any specific Vite settings in the original file, paste them here.
    // If you are not sure, you can leave this empty or delete the entire "vite" block.
  }
});