import vuetify from 'vite-plugin-vuetify';

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
    },
    plugins: [
      vuetify({
        styles: { configFile: 'assets/vuetify-settings.scss' } // 必要に応じて設定ファイルを指定
      })
    ]
  },

  app: {
    baseURL: '/nuxt-app/' // リポジトリ名に合わせて変更
  },

  nitro: {
    preset: 'github-pages',
    esbuild: {
      options: {
        loaders: {
          '.css': 'text'
        }
      }
    }
  },

  compatibilityDate: '2025-04-03'
});