import { defineConfig } from 'astro/config';

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  root: 'src',
  integrations: [vue({
    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue
  })],
  vite: {
    resolve: {
      alias: {
        // '@src':'src',
        // '@'
      }
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: 'assets/asset.[hash][extname]',
        },
      },
    },
  },
});
