// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/content'],

  content: {
    // Content 模块配置
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3
        },
        highlight: {
          // 代码高亮主题
          theme: 'github-dark'
        }
      }
    }
  },

  css: ['~/assets/css/main.css'],

  // ===== 部署配置 =====
  // Vercel 部署时会自动检测，也可以显式指定：
  // nitro: {
  //   preset: 'vercel'
  // },

  // ===== 混合渲染配置 =====
  // 可以为不同路由指定不同的渲染策略
  routeRules: {
    // 首页：预渲染为静态页面
    '/': { prerender: true },
    // 博客列表页：ISR 模式
    '/blog': { isr: 60 },
    // 博客文章详情页：ISR 模式，缓存 60 秒后后台重新验证
    '/blog/**': { isr: 60 }
  }
})
