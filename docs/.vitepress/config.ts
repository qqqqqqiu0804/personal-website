import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/personal-website/',
  title: 'HXT 的个人网站',
  description: '数据科学教授 & Python 专家',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects/' },
      { text: '博客', link: '/blog/' },
      { text: '工具', link: '/tools/' },
      { text: '关于', link: '/about/' },
      { text: '联系', link: '/contact/' },
    ],
    sidebar: {
      '/projects/': [
        {
          text: '项目展示',
          items: [
            { text: '全部项目', link: '/projects/' },
          ]
        }
      ],
      '/blog/': [
        {
          text: '博客',
          items: [
            { text: '全部文章', link: '/blog/' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/qqqqqqiu0804' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
  },
})
