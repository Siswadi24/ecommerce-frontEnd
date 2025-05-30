// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@vueuse/nuxt', "@pinia/nuxt"],
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: ''
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        }
      ]
    }
  },
  // vite: {
  //   server: {
  //     allowedHosts: ["e37b-36-72-217-237.ngrok-free.app"],
  //   },
  // },
  runtimeConfig: {
    public: {
      clientIdGoogleSignIn: ""
    }
  },
  routeRules: {
    '/server/**': { proxy: `${import.meta.env.NUXT_BASE_URL}/**` }
  }
})