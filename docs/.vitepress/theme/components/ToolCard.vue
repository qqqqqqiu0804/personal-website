<!-- docs/.vitepress/theme/components/ToolCard.vue -->
<template>
  <div class="tool-card bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
    <div class="card-header mb-4">
      <h3 class="text-lg font-bold text-morandi-gray">{{ title }}</h3>
    </div>
    <p class="text-gray-600 mb-4 text-sm">{{ description }}</p>
    <div class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="tag in tags"
        :key="tag"
        class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
      >
        {{ tag }}
      </span>
    </div>
    <a
      v-if="link"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block bg-morandi-purple text-white px-4 py-2 rounded hover:bg-morandi-dark transition-colors text-sm no-underline"
    >
      查看详情
    </a>
    <span
      v-else
      class="inline-block bg-gray-300 text-gray-600 px-4 py-2 rounded text-sm"
    >
      详情开发中
    </span>
  </div>
</template>

<script setup>
defineProps({
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
    default: ''
  },
  tags: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.tool-card {
  border: 1px solid rgba(16, 185, 129, 0.1);
}

.tool-card:hover {
  border-color: rgba(16, 185, 129, 0.3);
}
</style>
