import DefaultTheme from 'vitepress/theme'
import './styles/tailwind.css'
import './styles/vars.css'
import './styles/animations.css'
import ParticleBackground from './components/ParticleBackground.vue'
import ProjectCard from './components/ProjectCard.vue'
import BlogCard from './components/BlogCard.vue'
import ToolCard from './components/ToolCard.vue'
import TagCloud from './components/TagCloud.vue'
import Giscus from './components/Giscus.vue'
import Umami from './components/Umami.vue'
import LikeButton from './components/LikeButton.vue'
import Timeline from './components/Timeline.vue'

// ScrollTrigger: IntersectionObserver for .scroll-trigger elements
function initScrollTrigger() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  function scan() {
    document.querySelectorAll('.scroll-trigger').forEach((el) => {
      if (!el.classList.contains('visible')) {
        observer.observe(el)
      }
    })
  }

  scan()
  document.addEventListener('DOMContentLoaded', scan)
  window.addEventListener('load', scan)

  // VitePress route change triggers DOM update
  if (typeof window !== 'undefined') {
    window.addEventListener('vitepress:page-prepare', scan)
  }

  // Fallback: MutationObserver catches dynamic content
  const mutationObserver = new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (node.nodeType === 1) {
          if (node.classList && node.classList.contains('scroll-trigger')) {
            observer.observe(node)
          }
          node.querySelectorAll && node.querySelectorAll('.scroll-trigger').forEach((el) => {
            if (!el.classList.contains('visible')) {
              observer.observe(el)
            }
          })
        }
      }
    }
  })
  mutationObserver.observe(document.body, { childList: true, subtree: true })
}

export default {
  extends: DefaultTheme,
  setup() {
    if (typeof window !== 'undefined') {
      initScrollTrigger()
    }
  },
  enhanceApp({ app }) {
    app.component('ParticleBackground', ParticleBackground)
    app.component('ProjectCard', ProjectCard)
    app.component('BlogCard', BlogCard)
    app.component('ToolCard', ToolCard)
    app.component('TagCloud', TagCloud)
    app.component('Giscus', Giscus)
    app.component('Umami', Umami)
    app.component('LikeButton', LikeButton)
    app.component('Timeline', Timeline)
  }
}
