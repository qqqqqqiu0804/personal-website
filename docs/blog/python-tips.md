---
title: Python 数据分析入门技巧
description: 3 个实用的 Pandas 技巧
date: 2026-06-02
tags: [Python, 数据分析, Pandas]
---

# Python 数据分析入门技巧

<div class="max-w-3xl mx-auto">
  <div class="bg-white rounded-lg shadow-md p-8">
    <p class="text-gray-500 mb-4">发布于 2026-06-02</p>

    <p class="text-gray-600 mb-6">
      Pandas 是 Python 中最常用的数据分析库之一。本文将介绍 3 个实用的 Pandas 技巧，
      帮助你更高效地进行数据分析。
    </p>

    <h2 class="text-xl font-serif mb-4">1. 快速读取数据</h2>
    <div class="bg-gray-100 p-4 rounded mb-4">
      <code class="text-sm">
        import pandas as pd<br>
        df = pd.read_csv('data.csv')
      </code>
    </div>

    <h2 class="text-xl font-serif mb-4">2. 查看数据基本信息</h2>
    <div class="bg-gray-100 p-4 rounded mb-4">
      <code class="text-sm">
        df.info()  # 查看列名、数据类型、非空值<br>
        df.describe()  # 查看统计信息
      </code>
    </div>

    <h2 class="text-xl font-serif mb-4">3. 数据筛选</h2>
    <div class="bg-gray-100 p-4 rounded mb-4">
      <code class="text-sm">
        # 筛选年龄大于 25 的行<br>
        df[df['age'] > 25]<br><br>
        # 多条件筛选<br>
        df[(df['age'] > 25) & (df['city'] == '北京')]
      </code>
    </div>

    <p class="text-gray-600 mt-6">
      掌握这些基础技巧，你就可以开始进行简单的数据分析了。
      更多高级技巧将在后续文章中介绍。
    </p>
  </div>

  <!-- 点赞按钮 -->
  <LikeButton postId="python-tips" />

  <!-- Giscus 评论区 -->
  <Giscus
    repo="qqqqqqiu0804/personal-website"
    repoId="R_kgDOSvBOJA"
    category="Announcements"
    categoryId="DIC_kwDOSvBOJM4C-eF0"
    mapping="pathname"
    strict="0"
    reactionsEnabled="1"
    emitMetadata="1"
    inputPosition="top"
    theme="preferred_color_scheme"
    lang="zh-CN"
    loading="lazy"
  />
</div>
