<!-- docs/.vitepress/theme/components/BlogCard.vue -->
<template>
  <component
    :is="hasLink ? 'a' : 'div'"
    :href="hasLink ? link : undefined"
    class="blog-card block bg-white rounded-lg shadow-md p-6 transition-all duration-300 no-underline"
    :class="{ 'hover:shadow-lg hover:-translate-y-1 cursor-pointer': hasLink }"
  >
    <div class="card-header mb-4">
      <span class="text-xs text-gray-500">{{ date }}</span>
      <h3 class="text-lg font-bold text-morandi-gray mt-2">{{ title }}</h3>
    </div>
    <p class="text-gray-600 mb-4 text-sm">{{ description }}</p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
      >
        {{ tag }}
      </span>
    </div>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: ''
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

const hasLink = computed(() => props.link && props.link !== '#')
</script>

<style scoped>
.blog-card {
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.blog-card:hover {
  border-color: rgba(59, 130, 246, 0.3);
}
</style>
