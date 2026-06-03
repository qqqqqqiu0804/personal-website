<!-- docs/.vitepress/theme/components/TagCloud.vue -->
<template>
  <div class="tag-cloud flex flex-wrap gap-2">
    <span
      v-for="tag in tags"
      :key="tag.name"
      :class="[
        'px-3 py-1 rounded-full text-sm cursor-pointer transition-all duration-300',
        tag.count > 5 ? 'bg-morandi-purple text-white' :
        tag.count > 2 ? 'bg-purple-100 text-purple-800' :
        'bg-gray-100 text-gray-600',
        'hover:bg-morandi-purple hover:text-white'
      ]"
      @click="$emit('select', tag.name)"
    >
      {{ tag.name }}
      <span class="text-xs ml-1 opacity-75">({{ tag.count }})</span>
    </span>
  </div>
</template>

<script setup>
defineProps({
  tags: {
    type: Array,
    required: true,
    default: () => []
  }
})

defineEmits(['select'])
</script>
