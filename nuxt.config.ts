// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
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
        imports: [
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
            Pacifico: true,
            'Carter+One': true,
            'Akaya+Telivigala': true,
            Merienda: {
              wght: [400, 700],
            },
            'Seymour+One': true,
          },
          preconnect: true,
          download: true,
          base64: true,
          fontsDir: 'fonts',
          fontsPath: '~assets/fonts',
        },
      },
    ],
  ],

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/supabase',
    '@formkit/nuxt',
    'nuxt-icons',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
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

  // vite: {
  //   vue: {
  //     reactivityTransform: true,
  //   },
  // },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  devtools: {
    enabled: true,
  },
};
