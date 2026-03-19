---
title: 'Vue 3 组合式 API 最佳实践'
description: '深入了解 Vue 3 Composables 的使用方式和最佳实践'
date: '2026-03-17'
tags: ['vue', 'composables', '最佳实践']
image: '/images/vue-composables.jpg'
---

# Vue 3 组合式 API 最佳实践

Vue 3 的组合式 API（Composition API）是一种强大的代码组织方式，让你的逻辑更具复用性。

## 什么是 Composable？

Composable 是一个利用 Vue 组合式 API 来封装有状态逻辑的函数。

```typescript
// composables/useCounter.ts
export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }
  
  function reset() {
    count.value = initialValue
  }
  
  return { count, increment, decrement, reset }
}
```

## 使用示例

```vue
<template>
  <div>
    <p>计数：{{ count }}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script setup>
const { count, increment, decrement, reset } = useCounter(0)
</script>
```

## 命名规范

- 以 `use` 开头：`useCounter`、`useFetch`、`useAuth`
- 返回响应式数据和方法
- 保持单一职责

## 实用 Composable 示例

### useFetch

```typescript
export function useFetch<T>(url: string) {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(true)

  fetch(url)
    .then(res => res.json())
    .then(json => { data.value = json })
    .catch(err => { error.value = err })
    .finally(() => { loading.value = false })

  return { data, error, loading }
}
```

## 总结

组合式 API 让 Vue 3 的代码组织更加灵活。善用 Composable 可以大幅提升代码的复用性和可维护性。
