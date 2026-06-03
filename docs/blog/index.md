---
title: 博客
description: 分享编程经验与心得
---

# 博客

<TagCloud
  :tags="[
    { name: 'Python', count: 10 },
    { name: 'JavaScript', count: 8 },
    { name: '数据分析', count: 6 },
    { name: '机器学习', count: 4 },
    { name: '前端', count: 3 },
    { name: 'Vue', count: 2 },
    { name: 'React', count: 1 },
  ]"
  @select="handleTagSelect"
/>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
  <BlogCard
    title="Python 数据分析入门"
    description="学习使用 Pandas 进行数据分析"
    date="2026-06-02"
    :tags="['Python', '数据分析']"
  />
  <BlogCard
    title="Vue 3 组件开发"
    description="Vue 3 Composition API 实战"
    date="2026-06-01"
    :tags="['Vue', '前端']"
  />
</div>
