import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      "@/*": "green4life/src/lib/*",
    },
  },
  preprocess: vitePreprocess()
};


export default config;