<!-- docs/.vitepress/theme/components/Avatar.vue -->
<template>
  <div class="avatar-container" :class="containerClass">
    <div class="avatar-wrapper" :class="wrapperClass">
      <img
        v-show="!imageError"
        :src="src"
        :alt="alt"
        class="avatar-image"
        :class="imageClass"
        @error="handleError"
      />
      <div v-if="imageError" class="avatar-fallback">
        <span class="avatar-fallback-text">?</span>
      </div>
      <div v-if="showBorder" class="avatar-border"></div>
    </div>
    <div v-if="showStatus" class="avatar-status">
      <span class="status-dot"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: '头像'
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  showBorder: {
    type: Boolean,
    default: true
  },
  showStatus: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: true
  }
})

const imageError = ref(false)

const containerClass = computed(() => ({
  [`avatar-${props.size}`]: true
}))

const wrapperClass = computed(() => ({
  'avatar-wrapper': true,
  'avatar-rounded': props.rounded,
  'avatar-square': !props.rounded
}))

const imageClass = computed(() => ({
  'avatar-image': true,
  'avatar-rounded': props.rounded,
  'avatar-square': !props.rounded
}))

function handleError() {
  imageError.value = true
}
</script>

<style scoped>
.avatar-container {
  position: relative;
  display: inline-block;
}

.avatar-wrapper {
  position: relative;
  overflow: hidden;
}

.avatar-sm {
  width: 64px;
  height: 64px;
}

.avatar-md {
  width: 96px;
  height: 96px;
}

.avatar-lg {
  width: 128px;
  height: 128px;
}

.avatar-xl {
  width: 192px;
  height: 192px;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.avatar-image:hover {
  transform: scale(1.05);
}

.avatar-rounded {
  border-radius: 50%;
}

.avatar-square {
  border-radius: 12px;
}

.avatar-border {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: inherit;
  border: 4px solid var(--vp-c-brand);
  pointer-events: none;
}

.avatar-status {
  position: absolute;
  bottom: 4px;
  right: 4px;
}

.status-dot {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #10B981;
  border: 3px solid var(--vp-c-bg);
}

.avatar-fallback {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--vp-c-bg-alt);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-fallback-text {
  font-size: 2rem;
  color: var(--vp-c-text-mute);
}
</style>
