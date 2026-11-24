# 机场clash (jichang-clash.xyz)

> 🚀 2026 现代化高速稳定机场推荐平台与 Clash 全平台配置指南

本项目是专为 **机场测评、节点推荐、返利联盟（Affiliate）与 Clash 客户端配置教程** 量身定制的现代静态站点。基于 **Astro 5 + Tailwind CSS** 构建，具备纯静态、极速秒开、对搜索引擎（Google/Bing/Baidu）超友好（SEO 满分）、零服务器成本等特点。

---

## 🌟 预置特性

- **现代科技暗色调 UI**：专为梯子/科技圈打造的玻璃拟态（Glassmorphism）与夜间模式，视觉高级。
- **机场数据模块化解耦**：所有推荐机场数据集中存放在 [`src/data/airports.ts`](file:///c:/Users/user/Desktop/新团%20博客/jichang-clash.xyz/src/data/airports.ts)，**无需写代码，直接修改文件即可添加/修改机场、改价格、换邀请链接、修改优惠码**。
- **高转化转化元件**：
  - 一键复制专属折扣优惠码并弹出 Toast 提示
  - 醒目的直达官网选购 CTA 按钮
  - 核心参数横向对比表格（价格、线路、协议、流媒体/ChatGPT解锁、评分）
- **教程中心**：
  - 预设新一代桌面客户端 **Clash Verge Rev** 完整新手图文配置教程（[`src/pages/tutorials/clash-verge.astro`](file:///c:/Users/user/Desktop/新团%20博客/jichang-clash.xyz/src/pages/tutorials/clash-verge.astro)）
- **完整 SEO 强化**：
  - 规范链接（Canonical URL：`https://jichang-clash.xyz`）
  - Open Graph / Twitter 社交分享卡片
  - 结构化数据（JSON-LD Schema.org）
  - 内置 `robots.txt` 与站点地图规范

---

## 📁 目录结构

```text
jichang-clash.xyz/
├── public/                 # 静态资源 (favicon, robots.txt)
├── src/
│   ├── components/         # 组件模块 (Header, Hero, AirportCard, 对比表, 教程, FAQ, Footer)
│   ├── data/
│   │   └── airports.ts     # ⭐️ 核心数据配置！新增或修改机场都在这里改！
│   ├── layouts/
│   │   └── Layout.astro    # 统一页面布局与全局 SEO Meta
│   ├── pages/
│   │   ├── index.astro     # 首页（推荐大厅 + 对比表 + 问答）
│   │   └── tutorials/      # 教程页面（Clash Verge 配置等）
│   └── styles/
│       └── global.css      # 全局样式与 Tailwind
├── astro.config.mjs        # Astro 配置文件（已绑定域名 jichang-clash.xyz）
├── tailwind.config.mjs     # Tailwind 配置文件
└── package.json            # 依赖与脚本
```

---

## 🛠️ 本地运行与开发

在终端（PowerShell 或 CMD）中运行：

### 1. 启动本地预览调试服务
```bash
npm run dev
```
启动后在浏览器打开终端提示的地址（通常是 `http://localhost:4321`）即可实时预览和修改效果。

### 2. 打包生成静态网页
```bash
npm run build
```
打包生成的所有纯静态文件保存在 `dist/` 文件夹中。

---

## ☁️ 部署到线上（免费且抗攻击推荐）

由于本站是纯静态网站，**完全不需要花钱买 VPS 服务器**，最推荐直接使用 **Cloudflare Pages**（全球免费 CDN，自带防 DDoS 保护，支持自定义域名 `jichang-clash.xyz`）：

1. 将本项目推送到你的 GitHub / GitLab 仓库。
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)，进入 **Workers & Pages** -> **Create application** -> **Pages**。
3. 连接 GitHub 仓库，选择该仓库。
4. 构建设置填入：
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. 点击 **Save and Deploy** 部署。
6. 在 Cloudflare Pages 项目设置的 **Custom domains** 中添加 `jichang-clash.xyz`，自动配置免费 SSL 证书并全球生效！
