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
/>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
  <BlogCard
    title="Python 数据分析入门技巧"
    description="3 个实用的 Pandas 技巧"
    date="2026-06-02"
    link="/blog/python-tips"
    :tags="['Python', '数据分析']"
  />
  <BlogCard
    title="Vue 3 组件开发"
    description="Vue 3 Composition API 实战"
    date="2026-06-01"
    :tags="['Vue', '前端']"
  />
</div>
