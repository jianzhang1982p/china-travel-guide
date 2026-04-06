# 🇨🇳 China Travel Guide - 从零到上线完整教程

> 用 2 小时创建一个面向外国游客的中国旅游指南网站

---

## 📋 项目简介

**网站地址：** https://thechinatravelguide.com

**目标用户：** 来中国旅游的外国游客（会说英语）

**核心内容：**
- 💳 支付指南（支付宝/微信绑定教程）
- 📱 网络解决方案（eSIM + VPN）
- 🚇 交通导航（滴滴 + 地铁 + 高铁）

---

## 🛠️ 技术栈

| 组件 | 技术 | 成本 |
|------|------|------|
| 框架 | Next.js 14 | 免费 |
| 样式 | Tailwind CSS | 免费 |
| 部署 | Vercel | 免费 |
| 域名 | Namecheap | ~$11/年 |
| 统计 | Google Analytics | 免费 |

**总成本：** 首年 ~$11，之后 ~$11/年

---

## 🚀 完整开发流程

### 第一步：创建 Next.js 项目

```bash
# 创建项目目录
mkdir china-travel-guide
cd china-travel-guide

# 初始化项目
npm init -y

# 安装依赖
npm install next react react-dom
npm install --save-dev typescript @types/node @types/react tailwindcss autoprefixer postcss
```

**或者直接用我们创建好的项目：**

```bash
cd /Users/clawuser/china-travel-guide
```

---

### 第二步：配置项目文件

#### 1. 创建 `package.json`

```json
{
  "name": "china-travel-guide",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0"
  }
}
```

#### 2. 创建 `tsconfig.json`

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "jsx": "preserve"
  }
}
```

#### 3. 创建 `tailwind.config.js`

```javascript
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### 4. 创建 `next.config.js`

```javascript
module.exports = {
  output: 'export',
  images: { unoptimized: true }
}
```

---

### 第三步：创建页面内容

#### 目录结构

```
china-travel-guide/
├── src/
│   └── app/
│       ├── layout.tsx      # 布局文件
│       ├── page.tsx        # 主页面
│       ├── globals.css     # 全局样式
│       └── icon.svg        # 网站图标
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

#### 创建 `src/app/layout.tsx`

```tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'China Travel Guide - Essential Tips for Foreigners',
  description: 'Your complete guide to traveling in China',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X4Y4KZHH6J"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X4Y4KZHH6J');
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
```

#### 创建 `src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

#### 创建 `src/app/icon.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="50" fill="#DC2626"/>
  <path d="M50 15 L56 42 L85 50 L56 58 L50 85 L44 58 L15 50 L44 42 Z" fill="#FFFFFF"/>
  <circle cx="50" cy="50" r="6" fill="#FFFFFF"/>
</svg>
```

#### 创建 `src/app/page.tsx`

主页面内容包含三个核心板块：

1. **💳 Payment in China** - 支付宝/微信支付教程
2. **📱 Internet & Connectivity** - eSIM + VPN 方案
3. **🚇 Getting Around** - 滴滴 + 地铁 + 高铁指南

（完整代码见项目文件）

---

### 第四步：本地测试

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

---

### 第五步：购买域名

#### 1. 打开 Namecheap

访问：https://www.namecheap.com

#### 2. 搜索域名

搜索你想要的域名，例如：
- `thechinatravelguide.com`
- `chinatravelguide.com`
- `visit china.guide`

**⚠️ 注意：**
- 选择 `.com` 后缀（最专业）
- 避开 Premium 域名（太贵）
- 首年价格 ~$10-15 正常

#### 3. 结账购买

填写你的真实信息（拼音）：
```
Address:    [你的街道地址拼音]
City:       [你的城市拼音]
State:      [省份拼音]
Postal Code: [你的邮编]
Country:    China
Phone:      +86.[你的手机号]
```

**⚠️ 不要用优惠券！** 有些优惠券会导致订单失败。

**总价：** ~$11.48（含 ICANN Fee $0.20）

---

### 第六步：部署到 Vercel

#### 1. 安装 Vercel CLI（首次需要）

```bash
npm install -g vercel
```

#### 2. 登录 Vercel

```bash
npx vercel login
```

会打开浏览器让你登录，登录一次后就不用再登录了。

#### 3. 部署

```bash
# 构建并部署
npm run build
npx vercel deploy --prod
```

**部署成功后会看到：**
```
Production: https://china-travel-guide-xxx.vercel.app
Aliased: https://thechinatravelguide.com
```

---

### 第七步：配置域名 DNS

#### 1. Vercel 添加域名

```bash
cd /Users/clawuser/china-travel-guide
npx vercel domains add thechinatravelguide.com
```

#### 2. Namecheap 配置 DNS

登录 Namecheap → Domain List → 找到域名 → Manage → Advanced DNS

**添加两条记录：**

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | `@` | `76.76.21.21` | Automatic |
| CNAME | `www` | `cname.vercel-dns.com` | Automatic |

**删除原有的默认记录**（停车页面）。

#### 3. 等待生效

DNS 传播需要 5-30 分钟。

验证：
```bash
dig thechinatravelguide.com +short
# 应该返回：76.76.21.21
```

---

### 第八步：配置 Google Analytics

#### 1. 创建 GA 账号

访问：https://analytics.google.com

1. 登录 Google 账号
2. 创建账号：`China Travel Guide`
3. 创建数据流：选择 Web
4. 输入网址：`https://thechinatravelguide.com`
5. 获取 Measurement ID：`G-XXXXXXXXXX`

#### 2. 嵌入代码

在 `src/app/layout.tsx` 的 `<head>` 中添加：

```tsx
<head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  />
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `,
    }}
  />
</head>
```

#### 3. 重新部署

```bash
npm run build
npx vercel deploy --prod
```

#### 4. 验证数据

访问 https://analytics.google.com → Reports → Realtime

打开你的网站，应该能看到实时访问数据。

---

## 📊 后续优化建议

### 内容扩展

- 🏨 住宿指南（哪些酒店能接待外国人）
- 🍜 美食攻略（点菜指南 + 忌口沟通卡片）
- 🏥 紧急联系（大使馆电话 + 常用药购买）
- 💬 常用中文（拼音 + 英文对照）
- 🛂 签证政策（免签国家列表 + 144 小时过境免签）

### 变现方式

1. **联盟营销**（推荐）
   - Trip.com Affiliate（酒店/机票佣金 3-8%）
   - Airalo Affiliate（eSIM 推荐 $1-3/单）
   - Klook Affiliate（景点门票 5-10%）

2. **数字产品**
   - PDF 离线指南（$9.99）
   - 城市深度攻略（$14.99/城市）

3. **付费咨询**
   - 1 对 1 行程规划（$50-100/小时）

### 推广渠道

- **Reddit:** r/ChinaTravel, r/travel
- **Quora:** 搜索 "traveling to China" 相关问题
- **Facebook Groups:** China Travel, Expats in China
- **TikTok/Instagram:** 短视频引流

---

## 💡 经验总结

### ✅ 做对的事情

1. **用 Next.js + Vercel** - 部署超简单，自动 HTTPS
2. **买 .com 域名** - 专业、可信、好记
3. **聚焦核心痛点** - 支付/网络/交通，不做大而全
4. **先上线再迭代** - 2 小时 MVP，快速验证

### ⚠️ 踩过的坑

1. **Namecheap 优惠券** - 不要用！可能导致订单失败
2. **DNS 配置** - 记得删除默认的停车页面记录
3. **SSL 证书** - Vercel 自动配置，等 5-15 分钟
4. **favicon 缓存** - 更新后需要强制刷新才能看到

### 🎯 关键决策

| 决策 | 选项 | 选择 | 理由 |
|------|------|------|------|
| 域名后缀 | .com/.cn/.app | .com | 国际化、专业 |
| 注册商 | Namecheap/阿里云 | Namecheap | 省心、国际友好 |
| 部署平台 | Vercel/Netlify | Vercel | CLI 好用、自动 HTTPS |
| 统计工具 | GA/百度统计 | GA | 目标用户在国外 |

---

## 📁 项目文件清单

```
china-travel-guide/
├── src/
│   └── app/
│       ├── layout.tsx          # 布局 + GA 代码
│       ├── page.tsx            # 主页面内容
│       ├── globals.css         # 全局样式
│       └── icon.svg            # 网站图标
├── package.json                # 项目配置
├── tsconfig.json              # TypeScript 配置
├── tailwind.config.js         # Tailwind 配置
├── next.config.js             # Next.js 配置
├── postcss.config.js          # PostCSS 配置
└── README.md                  # 本教程
```

---

## 🚀 快速开始

```bash
# 克隆项目
cd /Users/clawuser/china-travel-guide

# 安装依赖
npm install

# 本地开发
npm run dev

# 构建部署
npm run build
npx vercel deploy --prod
```

---

## 📞 资源链接

- **项目源码：** `/Users/clawuser/china-travel-guide`
- **网站地址：** https://thechinatravelguide.com
- **Vercel 后台：** https://vercel.com/jians-projects-a1b3c8b7/china-travel-guide
- **Google Analytics:** https://analytics.google.com
- **Namecheap 管理:** https://www.namecheap.com/myaccount/domains/

---

## 🎉 总结

**从零到上线，总共用了约 2 小时：**

- 30 分钟 - 项目搭建 + 内容编写
- 15 分钟 - 购买域名
- 10 分钟 - 部署到 Vercel
- 10 分钟 - 配置 DNS
- 15 分钟 - 配置 Google Analytics
- 等待时间 - DNS 传播 + SSL 证书

**总成本：$11.48/年（域名费用）**

**核心经验：** 用对工具，快速上线，边做边优化！

---

_最后更新：2026-03-31_
_作者：辛海璐（小辛）_
