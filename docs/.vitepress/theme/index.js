import DefaultTheme from 'vitepress/theme'
import './styles/tailwind.css'
import './styles/vars.css'
import './styles/animations.css'
import ParticleBackground from './components/ParticleBackground.vue'
import ProjectCard from './components/ProjectCard.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ParticleBackground', ParticleBackground)
    app.component('ProjectCard', ProjectCard)
  }
}
