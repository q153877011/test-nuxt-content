---
title: 'Markdown 写作技巧'
description: '掌握 Markdown 写作的实用技巧，提升你的内容创作效率'
date: '2026-03-18'
tags: ['markdown', '写作', '技巧']
image: '/images/markdown-tips.jpg'
---

# Markdown 写作技巧

Markdown 是一种轻量级标记语言，让你专注于内容本身。以下是一些实用技巧。

## 文本格式化

- **粗体** — 使用 `**文字**`
- *斜体* — 使用 `*文字*`
- ~~删除线~~ — 使用 `~~文字~~`
- `行内代码` — 使用反引号

## 列表

### 无序列表

- 项目一
- 项目二
  - 子项目 A
  - 子项目 B

### 有序列表

1. 第一步
2. 第二步
3. 第三步

## 引用

> 写作是思考的延伸，Markdown 让这个过程更加流畅。

## 表格

| 语法 | 效果 | 说明 |
|------|------|------|
| `# 标题` | 一级标题 | 最大 |
| `## 标题` | 二级标题 | 次大 |
| `### 标题` | 三级标题 | 中等 |

## 图片与链接

链接：`[文字](URL)` → [Nuxt 官网](https://nuxt.com)

图片：`![alt](URL)` → 与链接类似，前面加 `!`

## 代码块

使用三个反引号包裹代码块，并指定语言：

```vue
<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
const title = 'Hello Vue!'
const description = '这是一个 Vue 组件'
</script>
```

## 任务列表

- [x] 学习 Markdown 基础
- [x] 了解 Front Matter
- [ ] 掌握高级技巧
- [ ] 写一篇博客

掌握这些技巧，你就能高效地用 Markdown 进行内容创作了！
