// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head: {
      title: 'Nuxt Dojo',
      meta: [
        {
          name: 'description',
          content: 'My incredible Nuxt 3 app'
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        }
      ]
    }
  },
  runtimeConfig : {
    currencyKey: process.env.CURRENCY_API_KEY,
    public: {},
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
