// nuxt.config.ts
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.css'],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    ssr: {
      noExternal: ['vuetify']
    }
  },

  // GitHub Pages用の設定
  app: {
    baseURL: '/nuxt-app/' // リポジトリ名に合わせて変更
  },

  nitro: {
    preset: 'github-pages',
    // CSSファイルの処理に関する問題を解決
    esbuild: {
      options: {
        loaders: {
          '.css': 'text'
        }
      }
    }
  },

  compatibilityDate: '2025-04-03'
})