// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module'],
  app: {
    baseURL: '/nuxt-app/', // リポジトリ名に合わせて変更
  },
  nitro: {
    preset: 'github-pages' // GitHub Pages用のプリセット
  }
})