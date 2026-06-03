<!-- docs/.vitepress/theme/components/Umami.vue -->
<template>
  <div class="umami-stats" v-if="showStats">
    <span class="text-sm text-gray-500">
      本站访问量：<span class="font-bold">{{ pageViews }}</span>
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  websiteId: {
    type: String,
    required: true
  },
  apiUrl: {
    type: String,
    default: 'https://api.umami.is/v1'
  },
  showStats: {
    type: Boolean,
    default: true
  }
})

const pageViews = ref(0)

onMounted(async () => {
  try {
    const response = await fetch(`${props.apiUrl}/websites/${props.websiteId}/stats`)
    const data = await response.json()
    pageViews.value = data.pageviews.value
  } catch (error) {
    console.error('Failed to fetch Umami stats:', error)
  }
})
</script>

<style scoped>
.umami-stats {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
