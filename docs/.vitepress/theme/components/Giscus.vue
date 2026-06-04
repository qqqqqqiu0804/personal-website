<!-- docs/.vitepress/theme/components/Giscus.vue -->
<template>
  <div class="giscus-container mt-8">
    <div ref="giscusRef" class="giscus"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useData } from 'vitepress'

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
    default: '1'
  },
  inputPosition: {
    type: String,
    default: 'top'
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

const giscusRef = ref(null)
const { page } = useData()

function createGiscusScript() {
  // Remove previous Giscus iframe if any
  const container = giscusRef.value
  if (!container) return
  container.innerHTML = ''

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

  container.appendChild(script)
}

onMounted(() => {
  createGiscusScript()
})

// Re-initialize Giscus when VitePress route changes (SPA navigation)
watch(
  () => page.value.relativePath,
  () => {
    createGiscusScript()
  }
)

onUnmounted(() => {
  // Clean up the Giscus container on unmount to avoid stale iframes
  const container = giscusRef.value
  if (container) {
    container.innerHTML = ''
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
