import { defineConfig } from 'vite'
const { resolve } = require('path')

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/v3/web/",
  server:{
    cors: "*"
  },
  build: {
    rollupOptions: {
      output:{
        entryFileNames: "[name]-HASH-[hash].js",
        assetFileNames:"[name]-HASH-[hash][extname]",
        chunkFileNames:"[name]-HASH-[hash].js"
      },
      input: {
        lnb: resolve(__dirname, './lnb.html'),
        fnb: resolve(__dirname, './fnb.html')
      }
    },
    manifest: true,
    outDir: "dist/v3/web",
    assetsDir: "",
    sourcemap: true

  },
  plugins: [vue()]
})
