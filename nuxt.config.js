export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'abler-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/universal-storage',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'https://api.themoviedb.org'
  },

  // Storage settings (@nuxtjs/universal-storage)
  storage:  {
    vuex: {
      namespace: 'storage'
    },
    cookie: {
      prefix: '',
      options: {
        path: '/'
      }
    },
    localStorage: {
      prefix: ''
    },
    ignoreExceptions: false,
    initialState: {
      requestToken: false,
      sessionId: false
    }
  },

  // Env
  env: {
    apiHost: process.env.apiHost || 'https://c0d489745752.ngrok.io',
    apiKEY: process.env.apiKEY || 'f4734793cc9b5cfc9ea6dc84051503f5',
    baseURL: process.env.baseURL || 'https://api.themoviedb.org/3'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
