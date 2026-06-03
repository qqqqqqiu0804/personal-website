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
let logicalWidth = 0
let logicalHeight = 0

class Particle {
  constructor() {
    this.x = Math.random() * logicalWidth
    this.y = Math.random() * logicalHeight
    this.size = Math.random() * 5 + 2
    this.speedX = Math.random() * 0.5 - 0.25
    this.speedY = Math.random() * 0.5 - 0.25
    this.opacity = Math.random() * 0.3 + 0.3
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x > logicalWidth) this.x = 0
    if (this.x < 0) this.x = logicalWidth
    if (this.y > logicalHeight) this.y = 0
    if (this.y < 0) this.y = logicalHeight
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(167, 139, 250, ${this.opacity})`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

function initParticles() {
  const particleCount = Math.min(Math.floor((logicalWidth * logicalHeight) / 5000), 200)
  particles = []
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }
}

function animate(ctx, canvas) {
  ctx.clearRect(0, 0, logicalWidth, logicalHeight)

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

function setupCanvas(canvas) {
  const dpr = window.devicePixelRatio || 1
  logicalWidth = window.innerWidth
  logicalHeight = window.innerHeight
  canvas.width = logicalWidth * dpr
  canvas.height = logicalHeight * dpr
  canvas.style.width = logicalWidth + 'px'
  canvas.style.height = logicalHeight + 'px'
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)
  return ctx
}

function handleResize() {
  if (canvasRef.value) {
    setupCanvas(canvasRef.value)
    initParticles()
  }
}

onMounted(() => {
  if (canvasRef.value) {
    const ctx = setupCanvas(canvasRef.value)
    initParticles()
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
