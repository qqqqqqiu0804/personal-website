<!-- docs/.vitepress/theme/components/Giscus.vue -->
<template>
  <div class="giscus-container mt-8">
    <div class="giscus"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  repo: {
    type: String,
    required: true
  },
  repoId: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: 'Announcements'
  },
  categoryId: {
    type: String,
    required: true
  },
  mapping: {
    type: String,
    default: 'pathname'
  },
  strict: {
    type: String,
    default: '0'
  },
  reactionsEnabled: {
    type: String,
    default: '1'
  },
  emitMetadata: {
    type: String,
    default: '0'
  },
  inputPosition: {
    type: String,
    default: 'bottom'
  },
  theme: {
    type: String,
    default: 'preferred_color_scheme'
  },
  lang: {
    type: String,
    default: 'zh-CN'
  },
  loading: {
    type: String,
    default: 'lazy'
  }
})

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', props.repo)
  script.setAttribute('data-repo-id', props.repoId)
  script.setAttribute('data-category', props.category)
  script.setAttribute('data-category-id', props.categoryId)
  script.setAttribute('data-mapping', props.mapping)
  script.setAttribute('data-strict', props.strict)
  script.setAttribute('data-reactions-enabled', props.reactionsEnabled)
  script.setAttribute('data-emit-metadata', props.emitMetadata)
  script.setAttribute('data-input-position', props.inputPosition)
  script.setAttribute('data-theme', props.theme)
  script.setAttribute('data-lang', props.lang)
  script.setAttribute('data-loading', props.loading)
  script.crossOrigin = 'anonymous'
  script.async = true

  const container = document.querySelector('.giscus')
  if (container) {
    container.appendChild(script)
  }
})
</script>

<style scoped>
.giscus-container {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
