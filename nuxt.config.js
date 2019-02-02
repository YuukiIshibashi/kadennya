require('dotenv').config();
const { API_KEY } = process.env;

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'kadennya',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css:[
    "~/assets/scss/Foundation/base.scss",
    "~/assets/scss/Layout/inner.scss",
    "~/assets/scss/Object/utility/font_size.scss",
    "~/assets/scss/Object/utility/font.scss",
    "~/assets/scss/Object/utility/colors.scss",
    "~/assets/scss/Object/utility/common.scss",
    "~assets/scss/Object/utility/margin_padding_width.scss",
  ],
  modules: [
    '@nuxtjs/markdownit'
  ],
 
  markdownit: {
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true,  // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
    // 目次を作るためのライブラリ。別途インストールが必要
    use: [
      'markdown-it-toc' // 目次を作るためのライブラリ。別途インストールが必要
    ]
  },
  env: {
    API_KEY
  }
}

