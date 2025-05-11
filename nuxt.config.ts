export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    },
    optimizeDeps: {
      include: ['three']
    }
  },
  build: {
    transpile: ['three']
  }
})
