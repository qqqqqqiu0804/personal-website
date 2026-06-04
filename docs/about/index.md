---
title: 关于我
description: 数据科学探索者 & vibecoding 爱好者
---

# 关于我

<div class="max-w-3xl mx-auto">
  <div class="bg-white rounded-lg shadow-md p-8 mb-6">
    <div class="flex items-start gap-6">
      <!-- 头像 -->
      <Avatar
        src="/personal-website/images/avatar.png"
        alt="HXT 的头像"
        size="lg"
        :show-status="true"
      />
      <div class="flex-1">
        <h2 class="text-2xl font-serif mb-4">HXT</h2>
        <p class="text-gray-600 mb-4">
          数据科学探索者，vibecoding 爱好者，黄婷婷单推。
        </p>
        <p class="text-gray-600 mb-4">
          喜欢用代码创造有趣的东西，在数据科学的路上不断探索。
          享受 vibecoding 的乐趣，把想法变成现实。
        </p>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg shadow-md p-8 mb-6">
    <h2 class="text-2xl font-serif mb-4">技能专长</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <h3 class="font-bold text-morandi-gray mb-2">编程语言</h3>
        <div class="flex flex-wrap gap-2">
          <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded">Python</span>
          <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded">JavaScript</span>
          <span class="bg-green-100 text-green-800 px-3 py-1 rounded">SQL</span>
        </div>
      </div>
      <div>
        <h3 class="font-bold text-morandi-gray mb-2">数据科学</h3>
        <div class="flex flex-wrap gap-2">
          <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded">数据分析</span>
          <span class="bg-red-100 text-red-800 px-3 py-1 rounded">机器学习</span>
          <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded">深度学习</span>
        </div>
      </div>
      <div>
        <h3 class="font-bold text-morandi-gray mb-2">工具框架</h3>
        <div class="flex flex-wrap gap-2">
          <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded">Pandas</span>
          <span class="bg-teal-100 text-teal-800 px-3 py-1 rounded">NumPy</span>
          <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded">Scikit-learn</span>
        </div>
      </div>
      <div>
        <h3 class="font-bold text-morandi-gray mb-2">其他技能</h3>
        <div class="flex flex-wrap gap-2">
          <span class="bg-cyan-100 text-cyan-800 px-3 py-1 rounded">数据可视化</span>
          <span class="bg-lime-100 text-lime-800 px-3 py-1 rounded">大数据处理</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 个人时间线 -->
  <div class="bg-white rounded-lg shadow-md p-8 mb-6">
    <h2 class="text-2xl font-serif mb-4">成长经历</h2>
    <Timeline
      :items="[
        {
          date: '2024',
          title: '开始学习数据科学',
          description: '接触 Python 和数据分析，开始探索数据科学的世界。',
          tags: ['Python', '数据分析']
        },
        {
          date: '2025',
          title: '第一个 vibecoding 项目',
          description: '完成了第一个 vibecoding 项目，体验到用代码创造的乐趣。',
          tags: ['HTML', 'CSS', 'JavaScript']
        },
        {
          date: '2026',
          title: '搭建个人网站',
          description: '使用 VitePress 搭建个人网站，展示项目和分享学习心得。',
          tags: ['VitePress', 'Vue', 'Tailwind CSS']
        }
      ]"
    />
  </div>

  <div class="bg-white rounded-lg shadow-md p-8 mb-6">
    <h2 class="text-2xl font-serif mb-4">兴趣爱好</h2>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>黄婷婷单推 🌸</li>
      <li>百合 ABO 小说阅读</li>
      <li>vibecoding</li>
      <li>数据分析项目</li>
      <li>开源项目贡献</li>
    </ul>
  </div>

  <div class="bg-white rounded-lg shadow-md p-8">
    <h2 class="text-2xl font-serif mb-4">联系方式</h2>
    <div class="space-y-3">
      <div class="flex items-center gap-3">
        <span class="text-gray-500 w-16">GitHub:</span>
        <a href="https://github.com/qqqqqqiu0804" target="_blank" rel="noopener noreferrer" class="text-morandi-purple hover:underline">
          qqqqqqiu0804
        </a>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-gray-500 w-16">邮箱:</span>
        <span>837530223@qq.com</span>
      </div>
    </div>
  </div>
</div>
