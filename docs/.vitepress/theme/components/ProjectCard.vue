<!-- docs/.vitepress/theme/components/ProjectCard.vue -->
<template>
  <a
    :href="link"
    :target="link.startsWith('http') ? '_blank' : undefined"
    :rel="link.startsWith('http') ? 'noopener noreferrer' : undefined"
    class="project-card block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 no-underline"
  >
    <!-- 项目截图 -->
    <div class="relative h-48 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="w-full h-full object-cover"
      />
      <div v-else class="flex items-center justify-center h-full">
        <span class="text-6xl">{{ icon || '📁' }}</span>
      </div>
      <!-- star 数量 -->
      <div
        v-if="stars !== null"
        class="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1"
      >
        <span>⭐</span>
        <span>{{ stars }}</span>
      </div>
    </div>

    <!-- 内容区 -->
    <div class="p-5">
      <div class="flex items-center gap-2 mb-2">
        <h3 class="text-lg font-bold text-gray-800">{{ title }}</h3>
      </div>
      <p class="text-gray-500 text-sm mb-4 line-clamp-2">{{ description }}</p>

      <!-- 技术栈标签 -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          :class="getTagClass(tag)"
          class="px-2 py-1 rounded text-xs font-medium"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: '#'
  },
  tags: {
    type: Array,
    default: () => []
  },
  image: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: '📁'
  },
  repo: {
    type: String,
    default: ''
  }
})

const stars = ref(null)

onMounted(async () => {
  if (props.repo) {
    try {
      const res = await fetch(`https://api.github.com/repos/${props.repo}`)
      const data = await res.json()
      stars.value = data.stargazers_count || 0
    } catch {
      stars.value = null
    }
  }
})

function getTagClass(tag) {
  const tagColors = {
    'Python': 'bg-blue-100 text-blue-700',
    'JavaScript': 'bg-yellow-100 text-yellow-700',
    'TypeScript': 'bg-blue-100 text-blue-800',
    'Java': 'bg-orange-100 text-orange-700',
    'HTML': 'bg-red-100 text-red-700',
    'CSS': 'bg-pink-100 text-pink-700',
    'Vue': 'bg-green-100 text-green-700',
    'React': 'bg-cyan-100 text-cyan-700',
    '数据分析': 'bg-purple-100 text-purple-700',
    '机器学习': 'bg-indigo-100 text-indigo-700',
    '深度学习': 'bg-violet-100 text-violet-700',
    'NLP': 'bg-teal-100 text-teal-700',
    '文学': 'bg-rose-100 text-rose-700',
    '开源': 'bg-gray-100 text-gray-700',
  }
  return tagColors[tag] || 'bg-gray-100 text-gray-600'
}
</script>

<style scoped>
.project-card {
  border: 1px solid rgba(167, 139, 250, 0.1);
}

.project-card:hover {
  border-color: rgba(167, 139, 250, 0.3);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
