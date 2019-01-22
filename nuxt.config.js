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
    "~/assets/scss/Object/utility/font_size.scss",
    "~/assets/scss/Object/utility/font.scss",
    "~/assets/scss/Object/utility/colors.scss",
    "~/assets/scss/Object/utility/common.scss"
  ],
}

