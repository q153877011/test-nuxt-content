<template>
  <div>
    <div class="hero" style="padding: 2rem 0;">
      <h1>博客</h1>
      <p>探索文章、教程与技术分享</p>
    </div>

    <div class="blog-list">
      <NuxtLink
        v-for="post in posts"
        :key="post.path"
        :to="post.path"
        class="blog-card"
      >
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
        <div class="blog-meta">
          <span v-if="post.date">{{ formatDate(post.date) }}</span>
          <div v-if="post.tags" class="blog-tags">
            <span v-for="tag in post.tags" :key="tag" class="blog-tag">{{ tag }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>

    <p v-if="!posts?.length" style="text-align: center; color: var(--color-text-muted); padding: 3rem 0;">
      还没有文章，快去 <code>content/blog/</code> 目录下创建吧！
    </p>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('content')
    .where('path', 'LIKE', '/blog/%')
    .order('date', 'DESC')
    .all()
)

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
