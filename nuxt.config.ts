// import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {
            cssPath: '~/assets/css/tailwind.css',
            configPath: 'tailwind.config.ts',
            exposeConfig: false,
            config: {
              content: ['content/**/**.md'],
            },
            injectPosition: 0,
            viewer: true,
          },
          autoprefixer: {},
        },
      },
    },
    transpile: ['vue-toastification'],
  },
  buildModules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `usePinia()`
          'defineStore',
          // automatically imports `usePinia()` as `usePiniaStore()`
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        googleFonts: {
          families: {
            Roboto: true,
            Lobster: true,
          },
        },
      },
    ],
  ],
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    '@nuxtjs/supabase',
    'nuxt-icons',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
    dataValue: 'theme',
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  // vite: {
  //   vue: {
  //     reactivityTransform: true,
  //   },
  // },
})
