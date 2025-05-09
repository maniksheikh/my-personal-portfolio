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
    }
  }
})
