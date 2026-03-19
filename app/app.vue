<template>
  <div>
    <NuxtRouteAnnouncer />
    <header class="site-header">
      <div class="header-inner">
        <NuxtLink to="/" class="site-logo">
          Nuxt<span>Content</span>
        </NuxtLink>
        <nav>
          <ul class="site-nav">
            <li><NuxtLink to="/">首页</NuxtLink></li>
            <li><NuxtLink to="/blog">博客</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="page-container">
      <NuxtPage />
    </main>
    <footer class="site-footer">
      <p>© {{ new Date().getFullYear() }} NuxtContent — 使用 Nuxt Content 驱动</p>
    </footer>
  </div>
</template>
