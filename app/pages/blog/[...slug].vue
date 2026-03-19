<template>
  <div>
    <NuxtLink to="/blog" class="back-link">
      ← 返回博客列表
    </NuxtLink>

    <article v-if="page">
      <header class="article-header">
        <h1>{{ page.title }}</h1>
        <p v-if="page.description">{{ page.description }}</p>
        <div class="blog-meta" style="margin-top: 1rem;">
          <span v-if="page.date">{{ formatDate(page.date) }}</span>
          <div v-if="page.tags" class="blog-tags">
            <span v-for="tag in page.tags" :key="tag" class="blog-tag">{{ tag }}</span>
          </div>
        </div>
      </header>

      <div class="prose">
        <ContentRenderer :value="page" />
      </div>
    </article>

    <div v-else style="text-align: center; padding: 4rem 0; color: var(--color-text-muted);">
      <h2>404 - 文章未找到</h2>
      <p style="margin-top: 0.5rem;">
        <NuxtLink to="/blog">返回博客列表</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(`blog-${route.path}`, () =>
  queryCollection('content').path(route.path).first()
)

if (page.value) {
  useHead({
    title: page.value.title,
    meta: [
      { name: 'description', content: page.value.description }
    ]
  })
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
