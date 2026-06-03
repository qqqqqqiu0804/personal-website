import DefaultTheme from 'vitepress/theme'
import './styles/tailwind.css'
import './styles/vars.css'
import './styles/animations.css'
import ParticleBackground from './components/ParticleBackground.vue'
import ProjectCard from './components/ProjectCard.vue'
import BlogCard from './components/BlogCard.vue'
import ToolCard from './components/ToolCard.vue'
import TagCloud from './components/TagCloud.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ParticleBackground', ParticleBackground)
    app.component('ProjectCard', ProjectCard)
    app.component('BlogCard', BlogCard)
    app.component('ToolCard', ToolCard)
    app.component('TagCloud', TagCloud)
  }
}
