
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
<<<<<<< HEAD
    'element-ui/lib/theme-chalk/index.css'
=======
>>>>>>> 1684d41fc5fdc73c8258d95903a4a30442346ce2
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
<<<<<<< HEAD
    '@/plugins/element-ui'
=======
>>>>>>> 1684d41fc5fdc73c8258d95903a4a30442346ce2
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
<<<<<<< HEAD
    transpile: [/^element-ui/],
=======
>>>>>>> 1684d41fc5fdc73c8258d95903a4a30442346ce2
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
