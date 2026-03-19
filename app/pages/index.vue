<template>
  <div>
    <div class="hero">
      <h1>内容驱动的网站</h1>
      <p>使用 Nuxt Content 和 Markdown 轻松创建你的博客与文档站点</p>
    </div>

    <ContentRenderer v-if="page" :value="page">
      <template #default="{ value }">
        <div class="prose">
          <ContentRendererMarkdown :value="value" />
        </div>
      </template>
    </ContentRenderer>

    <section style="margin-top: 3rem;">
      <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1.25rem;">最新文章</h2>
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
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryCollection('content').path('/').first()
)

const { data: posts } = await useAsyncData('latest-posts', () =>
  queryCollection('content')
    .path('/blog')
    .order('date', 'DESC')
    .limit(5)
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
