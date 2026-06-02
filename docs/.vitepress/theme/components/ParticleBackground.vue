<!-- docs/.vitepress/theme/components/ParticleBackground.vue -->
<template>
  <div class="particle-container">
    <canvas ref="canvasRef" class="particle-canvas"></canvas>
    <div class="particle-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationId = null
let particles = []

class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 3 + 1
    this.speedX = Math.random() * 0.5 - 0.25
    this.speedY = Math.random() * 0.5 - 0.25
    this.opacity = Math.random() * 0.5 + 0.2
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x > this.canvas.width) this.x = 0
    if (this.x < 0) this.x = this.canvas.width
    if (this.y > this.canvas.height) this.y = 0
    if (this.y < 0) this.y = this.canvas.height
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(167, 139, 250, ${this.opacity})`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

function initParticles(canvas) {
  const particleCount = Math.floor((canvas.width * canvas.height) / 10000)
  particles = []
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(canvas))
  }
}

function animate(ctx, canvas) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  particles.forEach(particle => {
    particle.update()
    particle.draw(ctx)
  })

  // 连接近距离的粒子
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 100) {
        ctx.strokeStyle = `rgba(167, 139, 250, ${0.1 * (1 - distance / 100)})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }

  animationId = requestAnimationFrame(() => animate(ctx, canvas))
}

function handleResize() {
  if (canvasRef.value) {
    canvasRef.value.width = window.innerWidth
    canvasRef.value.height = window.innerHeight
    initParticles(canvasRef.value)
  }
}

onMounted(() => {
  if (canvasRef.value) {
    canvasRef.value.width = window.innerWidth
    canvasRef.value.height = window.innerHeight
    initParticles(canvasRef.value)
    const ctx = canvasRef.value.getContext('2d')
    animate(ctx, canvasRef.value)
  }
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.particle-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.particle-content {
  position: relative;
  z-index: 1;
}
</style>
