import DefaultTheme from 'vitepress/theme'
import './styles/tailwind.css'
import './styles/vars.css'
import './styles/animations.css'
import ParticleBackground from './components/ParticleBackground.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ParticleBackground', ParticleBackground)
  }
}
