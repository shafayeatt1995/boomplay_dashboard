export default {
  server: {
    port: 8080,
  },
  head: {
    htmlAttrs: { lang: "en" },
    title: "BoomPlay Downloader - Download BoomPlay to MP3",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "description",
        content:
          "BoomPlay Downloader is your go-to source for fast and free downloads of your favorite BoomPlay music to mp3. Experience high-quality audio  downloads at the click of a button.",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/images/logo.png",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        rel: "stylesheet",
      },
    ],
  },

  css: [],

  plugins: ["@/plugins/slide.js"],

  components: true,

  buildModules: ["@nuxtjs/tailwindcss"],

  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next", "vue2-editor/nuxt"],

  auth: {
    strategies: {
      cookie: {
        provider: "laravel/jwt",
        scheme: "refresh",
        url: "/api/",
        endpoints: {
          login: { url: "auth/login", method: "post" },
          logout: { url: "auth/logout", method: "get" },
          refresh: { url: "user/refresh", method: "post" },
          user: { url: "user/profile", method: "get" },
        },
        autoLogout: true,
        user: { property: "user" },
        token: {
          property: "token",
          maxAge: 60 * 60 * 24 * 30,
          global: true,
          type: "Bearer",
        },
        refreshToken: {
          data: "refresh_token",
          maxAge: 60 * 60 * 24 * 30,
          tokenRequired: true,
          property: "refresh_token",
        },
      },
    },
    redirect: {
      home: "/dashboard",
      logout: "/login",
      login: "/login",
      callback: "/login",
    },
  },

  router: {
    middleware: ["auth"],
  },

  build: {},

  serverMiddleware: [{ path: "/api", handler: "~/backend/index.js" }],
};
