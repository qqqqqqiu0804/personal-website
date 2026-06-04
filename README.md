# HXT 的个人网站

一个基于 VitePress 构建的个人网站，展示项目、博客和工具箱。

## 在线访问

🔗 [https://qqqqqqiu0804.github.io/personal-website/](https://qqqqqqiu0804.github.io/personal-website/)

## 功能模块

- **首页** - 个人介绍与导航入口
- **项目展示** - vibecoding 小项目合集
- **技术博客** - 编程经验与学习心得
- **工具箱** - 实用小工具和脚本
- **关于我** - 技能专长、成长经历、兴趣爱好
- **留言板** - 互动交流

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Vue 3](https://vuejs.org/) - 前端框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Umami](https://umami.is/) - 网站访问统计

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
docs/
├── .vitepress/
│   ├── config.ts          # VitePress 配置
│   └── theme/
│       ├── components/    # Vue 组件
│       └── styles/        # 样式文件
├── index.md               # 首页
├── about/                 # 关于我
├── blog/                  # 博客文章
├── projects/              # 项目展示
├── tools/                 # 工具箱
├── contact/               # 联系方式
└── guestbook/             # 留言板
```

## 部署

项目通过 GitHub Actions 自动部署到 GitHub Pages。推送到 `main` 分支后会自动触发构建和部署。

## 许可证

MIT License
