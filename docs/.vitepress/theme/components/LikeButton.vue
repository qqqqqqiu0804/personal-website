<!-- docs/.vitepress/theme/components/LikeButton.vue -->
<template>
  <div class="like-button-container">
    <button
      @click="handleLike"
      :class="[
        'like-button',
        'flex items-center gap-2',
        'px-4 py-2 rounded-full',
        'transition-all duration-300',
        liked ? 'bg-morandi-purple text-white' : 'bg-gray-100 text-gray-600',
        'hover:bg-morandi-purple hover:text-white'
      ]"
    >
      <span class="text-lg">{{ liked ? '❤️' : '🤍' }}</span>
      <span class="text-sm font-medium">{{ likeCount }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  postId: {
    type: String,
    required: true
  }
})

const liked = ref(false)
const likeCount = ref(0)

onMounted(() => {
  // 从 localStorage 读取点赞状态
  const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}')
  liked.value = !!likedPosts[props.postId]

  // 从 localStorage 读取点赞数量
  const likeCounts = JSON.parse(localStorage.getItem('likeCounts') || '{}')
  likeCount.value = likeCounts[props.postId] || 0
})

function handleLike() {
  const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}')
  const likeCounts = JSON.parse(localStorage.getItem('likeCounts') || '{}')

  if (liked.value) {
    // 取消点赞
    delete likedPosts[props.postId]
    likeCounts[props.postId] = Math.max(0, (likeCounts[props.postId] || 0) - 1)
    liked.value = false
  } else {
    // 点赞
    likedPosts[props.postId] = true
    likeCounts[props.postId] = (likeCounts[props.postId] || 0) + 1
    liked.value = true
  }

  likeCount.value = likeCounts[props.postId] || 0

  // 保存到 localStorage
  localStorage.setItem('likedPosts', JSON.stringify(likedPosts))
  localStorage.setItem('likeCounts', JSON.stringify(likeCounts))
}
</script>

<style scoped>
.like-button-container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.like-button {
  cursor: pointer;
  border: none;
  outline: none;
}

.like-button:active {
  transform: scale(0.95);
}
</style>
