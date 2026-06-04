<!-- docs/.vitepress/theme/components/HobbyCard.vue -->
<template>
  <div class="hobby-card bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
    <div class="hobby-icon text-4xl mb-4">
      {{ icon }}
    </div>
    <h3 class="text-lg font-bold text-morandi-gray mb-2">{{ title }}</h3>
    <p class="text-gray-600 text-sm mb-4">{{ description }}</p>
    <div v-if="tags && tags.length" class="flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
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
.hobby-card {
  border: 1px solid rgba(167, 139, 250, 0.1);
}

.hobby-card:hover {
  border-color: rgba(167, 139, 250, 0.3);
  transform: translateY(-4px);
}

.hobby-icon {
  line-height: 1;
}
</style>
