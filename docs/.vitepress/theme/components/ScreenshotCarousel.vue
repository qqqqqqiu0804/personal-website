<!-- docs/.vitepress/theme/components/ScreenshotCarousel.vue -->
<template>
  <div class="carousel-container relative">
    <!-- 图片轮播 -->
    <div class="relative overflow-hidden rounded-lg bg-gray-100">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(screenshot, index) in screenshots"
          :key="index"
          class="w-full flex-shrink-0"
        >
          <img
            :src="screenshot.src"
            :alt="screenshot.alt || `截图 ${index + 1}`"
            class="w-full h-auto object-contain"
            style="max-height: 500px;"
          />
        </div>
      </div>

      <!-- 左右箭头 -->
      <button
        v-if="screenshots.length > 1"
        @click="prev"
        class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
      >
        ‹
      </button>
      <button
        v-if="screenshots.length > 1"
        @click="next"
        class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
      >
        ›
      </button>
    </div>

    <!-- 指示器 -->
    <div v-if="screenshots.length > 1" class="flex justify-center gap-2 mt-4">
      <button
        v-for="(_, index) in screenshots"
        :key="index"
        @click="currentIndex = index"
        :class="[
          'w-2 h-2 rounded-full transition-colors',
          currentIndex === index ? 'bg-morandi-purple' : 'bg-gray-300 hover:bg-gray-400'
        ]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  screenshots: {
    type: Array,
    required: true,
    default: () => []
  }
})

const currentIndex = ref(0)

function prev() {
  currentIndex.value = currentIndex.value === 0
    ? props.screenshots.length - 1
    : currentIndex.value - 1
}

function next() {
  currentIndex.value = currentIndex.value === props.screenshots.length - 1
    ? 0
    : currentIndex.value + 1
}
</script>

<style scoped>
.carousel-container {
  max-width: 100%;
}
</style>
