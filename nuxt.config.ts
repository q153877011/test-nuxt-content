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
 nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      wrangler: {
        d1_databases: [
          {
            binding: 'DB',
            database_name: 'test-nuxt-content',
            database_id: 'f0d4d832-57f0-4312-8ac6-6ea55d8db4af'
          }
        ]
      },
    },
  },
})
