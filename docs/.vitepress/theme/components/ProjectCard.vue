<!-- docs/.vitepress/theme/components/ProjectCard.vue -->
<template>
  <a
    :href="link"
    target="_blank"
    class="project-card block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 no-underline"
  >
    <div class="card-header mb-4">
      <h3 class="text-lg font-bold text-morandi-gray">{{ title }}</h3>
    </div>
    <p class="text-gray-600 mb-4 text-sm">{{ description }}</p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
      >
        {{ tag }}
      </span>
    </div>
  </a>
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
    default: '#'
  },
  tags: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.project-card {
  border: 1px solid rgba(167, 139, 250, 0.1);
}

.project-card:hover {
  border-color: rgba(167, 139, 250, 0.3);
}
</style>
