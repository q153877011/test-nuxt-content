// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

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
    },
    // 使用 PostgreSQL 替代默认的 SQLite
    // 解决 Vercel Serverless 中 better-sqlite3 native 模块崩溃的问题
    database: {
      type: 'postgresql',
      url: process.env.POSTGRES_URL,
    }
  },

  css: ['~/assets/css/main.css'],

  // ===== Vercel 部署配置 =====
  nitro: {
    // 用空模块替换 better-sqlite3，防止 native .node 模块在 Vercel Lambda 中加载崩溃
    // Nuxt Content 会把所有 db connector 都打包，但我们只用 postgresql
    alias: {
      'better-sqlite3': resolve(__dirname, 'node_modules/unenv/dist/runtime/mock/empty.mjs'),
    },
  },
})
