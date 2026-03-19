---
title: 'Nuxt Content 入门指南'
description: '学习如何使用 Nuxt Content 构建你的内容驱动网站'
date: '2026-03-19'
tags: ['nuxt', 'content', '教程']
image: '/images/getting-started.jpg'
---

# Nuxt Content 入门指南

Nuxt Content 是一个强大的模块，让你可以用 Markdown、YAML、CSV 或 JSON 文件来管理网站内容。

## 安装

首先安装 `@nuxt/content` 模块：

```bash
npm install @nuxt/content
```

然后在 `nuxt.config.ts` 中添加模块：

```typescript
export default defineNuxtConfig({
  modules: ['@nuxt/content']
})
```

## 创建内容

在项目根目录创建 `content/` 文件夹，然后添加 Markdown 文件：

```markdown
---
title: '我的第一篇文章'
description: '这是文章描述'
---

# 标题

这里是文章内容。
```

## Front Matter

每个 Markdown 文件都可以包含 YAML front matter，用来定义元数据：

| 字段 | 说明 |
|------|------|
| `title` | 文章标题 |
| `description` | 文章描述 |
| `date` | 发布日期 |
| `tags` | 标签列表 |

## 代码高亮

Nuxt Content 内置了代码高亮功能，支持多种编程语言：

```javascript
const greeting = 'Hello, Nuxt Content!'
console.log(greeting)
```

```python
def hello():
    print("Hello from Python!")
```

## 总结

Nuxt Content 让内容管理变得简单而优雅。开始用 Markdown 写作吧！
