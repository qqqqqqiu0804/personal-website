---
title: 光伏行业舆情与股价关联分析系统
description: 基于 Python 的毕业设计项目
---

[← 返回项目列表](/projects/)

# 光伏行业舆情与股价关联分析系统

<div class="max-w-4xl mx-auto">
  <!-- 项目截图轮播 -->
  <div class="bg-white rounded-lg shadow-md p-4 mb-6">
    <ScreenshotCarousel
      :screenshots="[
        { src: '/personal-website/images/projects/stock-analysis-1.png', alt: '系统主界面' },
        { src: '/personal-website/images/projects/stock-analysis-2.png', alt: '数据分析结果' },
        { src: '/personal-website/images/projects/stock-analysis-3.png', alt: '可视化报告' }
      ]"
    />
  </div>

  <div class="bg-white rounded-lg shadow-md p-8 mb-6">
    <h2 class="text-2xl font-serif mb-4">项目简介</h2>
    <p class="text-gray-600 mb-4">
      这是一个基于 Python 的毕业设计项目，用于分析光伏行业舆情与股价之间的关联关系。
      通过爬取新闻数据、社交媒体数据，结合股价数据，进行情感分析和关联分析。
    </p>
    <div class="flex flex-wrap gap-2 mb-4">
      <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded font-medium">Python</span>
      <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded font-medium">数据分析</span>
      <span class="bg-indigo-100 text-indigo-700 px-3 py-1 rounded font-medium">机器学习</span>
      <span class="bg-teal-100 text-teal-700 px-3 py-1 rounded font-medium">NLP</span>
    </div>
    <a
      href="https://github.com/qqqqqqiu0804/stock_analysis"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block bg-morandi-purple text-white px-6 py-2 rounded hover:bg-morandi-dark transition-colors no-underline"
    >
      查看源码
    </a>
  </div>

  <div class="bg-white rounded-lg shadow-md p-8 mb-6">
    <h2 class="text-2xl font-serif mb-4">技术栈</h2>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>Python 3.9+</li>
      <li>Pandas - 数据处理</li>
      <li>Matplotlib/Seaborn - 数据可视化</li>
      <li>Scikit-learn - 机器学习</li>
      <li>Jieba - 中文分词</li>
      <li>Requests/BeautifulSoup - 网页爬虫</li>
    </ul>
  </div>

  <div class="bg-white rounded-lg shadow-md p-8">
    <h2 class="text-2xl font-serif mb-4">功能特点</h2>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>自动爬取光伏行业新闻</li>
      <li>情感分析和关键词提取</li>
      <li>股价数据获取和处理</li>
      <li>舆情与股价关联分析</li>
      <li>可视化分析报告</li>
    </ul>
  </div>
</div>
