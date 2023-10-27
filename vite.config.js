import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Inspect({
      build: true,
      outputDir: '.vite-inspect'
    }),
    Components({
      resolvers: [VantResolver()],
    }),],

})
