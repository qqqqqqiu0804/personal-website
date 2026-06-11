---
title: 用微信控制本地AI助手：cc-connect + mimo 完整教程
description: 10分钟配置，手机发微信就能让AI帮你干活
date: 2026-06-12
tags: [AI, cc-connect, mimo, 微信, 教程]
---

# 用微信控制本地AI助手：cc-connect + mimo 完整教程

<div class="max-w-3xl mx-auto">
  <div class="bg-white rounded-lg shadow-md p-8">
    <p class="text-gray-500 mb-4">发布于 2026-06-12</p>

    <p class="text-gray-600 mb-6">
      写代码写到一半要出门？手机发条微信就能让AI继续干活。本教程将带你10分钟配置好 cc-connect + mimo + 微信的完整方案。
    </p>

    <h2 class="text-xl font-serif mb-4">效果演示</h2>
    <div class="bg-gray-100 p-4 rounded mb-4">
      <code class="text-sm">
        你（微信）：帮我看看今天的GitHub trending<br>
        AI（微信回复）：今天热门项目有：<br>
        1. xxx - 一个xxx的项目<br>
        2. yyy - 另一个xxx的项目<br>
        ...
      </code>
    </div>

    <h2 class="text-xl font-serif mb-4">方案选择</h2>
    <div class="bg-gray-100 p-4 rounded mb-4">
      <code class="text-sm">
        方案 | 优点 | 缺点<br>
        cc-connect + 微信 | 免费、简单、无需公网IP | 需要ilink服务<br>
        cc-connect + Telegram | 稳定、功能全 | 需要VPN或海外手机号<br>
        cc-connect + 飞书 | 企业级、稳定 | 需要企业账号<br>
        菠萝 | 轻量、专为Claude Code设计 | 每次要扫码
      </code>
    </div>

    <h2 class="text-xl font-serif mb-4">1. 环境准备</h2>
    <div class="bg-gray-100 p-4 rounded mb-4">
      <code class="text-sm">
        # 安装Node.js<br>
        # https://nodejs.org/zh-cn/download/<br><br>
        # 安装cc-connect<br>
        npm install -g cc-connect<br><br>
        # 验证安装<br>
        cc-connect --version
      </code>
    </div>

    <h2 class="text-xl font-serif mb-4">2. 创建配置文件</h2>
    <div class="bg-gray-100 p-4 rounded mb-4">
      <code class="text-sm">
        # 创建配置目录<br>
        mkdir $env:USERPROFILE\.cc-connect<br><br>
        # 创建配置文件<br>
        New-Item -Path $env:USERPROFILE\.cc-connect\config.toml -ItemType File
      </code>
    </div>

    <h2 class="text-xl font-serif mb-4">3. 编辑配置文件</h2>
    <div class="bg-gray-100 p-4 rounded mb-4">
      <code class="text-sm">
        language = "zh"<br><br>
        [log]<br>
        level = "info"<br><br>
        [display]<br>
        mode = "compact"<br>
        thinking_messages = false<br>
        tool_messages = false<br><br>
        [instant_reply]<br>
        enabled = true<br>
        content = "正在思考..."<br><br>
        [[projects]]<br>
        name = "my-project"<br>
        show_context_indicator = false<br>
        reply_footer = false<br>
        admin_from = "*"<br>
        reset_on_idle_mins = 30<br><br>
        [projects.agent]<br>
        type = "opencode"<br><br>
        [projects.agent.options]<br>
        cmd = "mimo"<br>
        work_dir = "C:\\Users\\你的用户名"<br><br>
        [[projects.platforms]]<br>
        type = "weixin"<br><br>
        [projects.platforms.options]<br>
        token = "你的token"<br>
        allow_from = "*"<br>
        base_url = "https://ilinkai.weixin.qq.com"<br>
        account_id = "你的account_id"
      </code>
    </div>

    <h2 class="text-xl font-serif mb-4">4. 启动和测试</h2>
    <div class="bg-gray-100 p-4 rounded mb-4">
      <code class="text-sm">
        # 启动cc-connect<br>
        cc-connect<br><br>
        # 看到类似输出就成功了<br>
        # INFO cc-connect is running projects=1<br><br>
        # 测试：微信发消息 "你好"
      </code>
    </div>

    <h2 class="text-xl font-serif mb-4">5. 常用命令</h2>
    <div class="bg-gray-100 p-4 rounded mb-4">
      <code class="text-sm">
        /help - 查看帮助<br>
        /new - 新建会话<br>
        /list - 查看会话列表<br>
        /switch - 切换会话<br>
        /status - 查看状态<br>
        /dir - 查看/切换目录<br>
        /mode - 查看模式<br>
        /model - 查看模型列表<br>
        帮助 - 触发/help（别名）
      </code>
    </div>

    <h2 class="text-xl font-serif mb-4">6. 高级配置</h2>
    <div class="bg-gray-100 p-4 rounded mb-4">
      <code class="text-sm">
        # 启用流式预览<br>
        [stream_preview]<br>
        enabled = true<br>
        interval_ms = 1500<br><br>
        # 配置速率限制<br>
        [rate_limit]<br>
        max_messages = 30<br>
        window_secs = 60<br><br>
        # 添加自定义命令<br>
        [[commands]]<br>
        name = "time"<br>
        description = "显示当前时间"<br>
        exec = "Get-Date -Format 'yyyy-MM-dd HH:mm:ss'"
      </code>
    </div>

    <p class="text-gray-600 mt-6">
      配置一次，终身受益。出门在外，手机发条消息，AI就能帮你干活。
    </p>
  </div>

  <!-- 点赞按钮 -->
  <LikeButton postId="cc-connect-mimo-wechat" />

  <!-- Giscus 评论区 -->
  <Giscus
    repo="qqqqqqiu0804/personal-website"
    repoId="R_kgDOSvBOJA"
    category="Announcements"
    categoryId="DIC_kwDOSvBOJM4C-eF0"
    mapping="pathname"
    strict="0"
    reactionsEnabled="1"
    emitMetadata="1"
    inputPosition="top"
    theme="preferred_color_scheme"
    lang="zh-CN"
    loading="lazy"
  />
</div>
