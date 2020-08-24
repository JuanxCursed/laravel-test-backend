export default {
  mode: 'spa',
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
  css: [
    'flatpickr/dist/flatpickr.css',
    '~/assets/vendor/nucleo/css/nucleo.css',
    '~/assets/vendor/fontawesome-free/css/all.min.css',
    '~/assets/scss/argon.scss',
    '~/assets/scss/app.scss',
  ],
  plugins: [
    '~plugins/argon-dashboard',
    '~plugins/vue-the-mask',
    '~plugins/validation',
    '~plugins/axios',
  ],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/moment'],
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {},
  render: {
    bundleRenderer: {
      shouldPreload: (_, type) => {
        return ['script', 'style', 'font'].includes(type)
      },
    },
  },
  bootstrapVue: {
    bootstrapCSS: true, // Or `css: false`
    bootstrapVueCSS: true, // Or `bvCSS: false`
    icons: true,
  },
  transpile: ['vee-validate/dist/rules'],
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },
}
