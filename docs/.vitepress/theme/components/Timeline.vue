<!-- docs/.vitepress/theme/components/Timeline.vue -->
<template>
  <div class="timeline-container">
    <div class="timeline">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="timeline-item"
        :class="{ 'timeline-item-right': index % 2 === 1 }"
      >
        <div class="timeline-dot"></div>
        <div class="timeline-content bg-white rounded-lg shadow-md p-6">
          <div class="timeline-date text-sm text-morandi-purple font-bold mb-2">
            {{ item.date }}
          </div>
          <h3 class="text-lg font-bold text-morandi-gray mb-2">{{ item.title }}</h3>
          <p class="text-gray-600 text-sm">{{ item.description }}</p>
          <div v-if="item.tags" class="flex flex-wrap gap-2 mt-3">
            <span
              v-for="tag in item.tags"
              :key="tag"
              class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.timeline-container {
  position: relative;
  padding: 2rem 0;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--vp-c-brand), var(--vp-c-brand-light));
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  width: 50%;
  padding-right: 2rem;
  margin-bottom: 2rem;
}

.timeline-item-right {
  margin-left: 50%;
  padding-right: 0;
  padding-left: 2rem;
}

.timeline-dot {
  position: absolute;
  right: -8px;
  top: 1.5rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--vp-c-brand);
  border: 3px solid var(--vp-c-bg);
  box-shadow: 0 0 0 3px var(--vp-c-brand);
  z-index: 1;
}

.timeline-item-right .timeline-dot {
  left: -8px;
  right: auto;
}

.timeline-content {
  position: relative;
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 1.5rem;
  right: -8px;
  border: 8px solid transparent;
  border-left-color: var(--vp-c-bg-elv);
}

.timeline-item-right .timeline-content::before {
  left: -8px;
  right: auto;
  border-left-color: transparent;
  border-right-color: var(--vp-c-bg-elv);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 0;
  }

  .timeline-item,
  .timeline-item-right {
    width: 100%;
    padding-left: 2rem;
    padding-right: 0;
    margin-left: 0;
  }

  .timeline-dot,
  .timeline-item-right .timeline-dot {
    left: -8px;
    right: auto;
  }

  .timeline-content::before,
  .timeline-item-right .timeline-content::before {
    left: -8px;
    right: auto;
    border-left-color: transparent;
    border-right-color: var(--vp-c-bg-elv);
  }
}
</style>
