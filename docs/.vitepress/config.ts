import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/personal-website/',
  title: 'HXT 的个人网站',
  description: '数据科学探索者 & vibecoding 爱好者',
  lang: 'zh-CN',

  // 头部配置
  head: [
    ['meta', { name: 'author', content: 'HXT' }],
    ['meta', { name: 'keywords', content: '数据科学, Python, 个人网站, 博客' }],
    ['link', { rel: 'icon', href: '/personal-website/favicon.ico' }],
    // Umami 统计脚本
    ['script', { defer: true, 'data-website-id': 'bd1077cf-e94c-4107-bd44-03aac024849c', src: 'https://cloud.umami.is/script.js' }],
  ],

  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects/' },
      { text: '博客', link: '/blog/' },
      { text: '工具', link: '/tools/' },
      { text: '关于', link: '/about/' },
      { text: '联系', link: '/contact/' },
      { text: '留言板', link: '/guestbook/' },
    ],

    // 侧边栏
    sidebar: {
      '/projects/': [
        {
          text: '项目展示',
          items: [
            { text: '全部项目', link: '/projects/' },
            { text: '光伏行业分析系统', link: '/projects/stock-analysis' },
            { text: '期末复习管理系统', link: '/projects/study-manager' },
            { text: 'Java 测验系统', link: '/projects/java-quiz-system' },
            { text: 'htmlppt', link: '/projects/htmlppt' },
            { text: 'kahuang', link: '/projects/kahuang' },
            { text: 'vibecoding', link: '/projects/vibecoding' },
          ]
        }
      ],
      '/blog/': [
        {
          text: '博客',
          items: [
            { text: '全部文章', link: '/blog/' },
            { text: 'Python 技巧', link: '/blog/python-tips' },
            { text: 'cc-connect + mimo + 微信', link: '/blog/cc-connect-mimo-wechat' },
          ]
        }
      ],
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/qqqqqqiu0804' }
    ],

    // 搜索配置
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

    // 页脚配置
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026 HXT'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/qqqqqqiu0804/personal-website/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
    },
  },
})
