// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module'],
  app: {
    baseURL: '/nuxt-app/', // リポジトリ名に合わせて変更
    buildAssetsDir: '/_nuxt/', // ビルドされたアセットのディレクトリ
  },
  nitro: {
    preset: 'github-pages' // GitHub Pages用のプリセット
  },
  generate: {
    dir: 'docs', // GitHub Pagesで使用するディレクトリ
  },
  build: {
    transpile: ['vuetify'], // 必要に応じて追加
  },
  css: ['vuetify/lib/styles/main.css'], // Vuetifyのスタイルを含む
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    ssr: {
      noExternal: ['vuetify'], // Vuetifyを外部化しない
    },
  },
})