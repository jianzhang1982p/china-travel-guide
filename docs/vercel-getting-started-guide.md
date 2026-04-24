# Vercel 部署操作指南（新手版）

## 📖 什么是 Vercel？

Vercel 是一个免费的网站托管平台，专门用于部署：
- Next.js 网站
- React 应用
- 静态网站
- Node.js 后端

**优点：**
- ✅ 免费套餐够用
- ✅ 自动 HTTPS
- ✅ 全球 CDN 加速
- ✅ 自动部署（连接 GitHub 后）
- ✅ 支持自定义域名

---

## 🚀 快速开始（3 步部署）

### 步骤 1：注册 Vercel 账号

1. 访问 https://vercel.com
2. 点击 **"Sign Up"**
3. 选择登录方式：
   - GitHub（推荐）
   - GitLab
   - Bitbucket
   - Email

**提示：** 用 GitHub 账号登录最方便！

---

### 步骤 2：安装 Vercel CLI（命令行工具）

**在终端执行：**

```bash
# 安装 Vercel CLI
npm install -g vercel
```

**验证安装：**

```bash
vercel --version
```

如果显示版本号，说明安装成功！

---

### 步骤 3：部署网站

**在终端执行：**

```bash
# 1. 进入项目目录
cd /你的/项目/路径

# 2. 登录 Vercel
npx vercel login

# 3. 首次部署
npx vercel

# 4. 部署到生产环境
npx vercel --prod
```

**完成！** 🎉 你的网站已经上线了！

---

## 📋 常用命令

| 命令 | 作用 | 使用场景 |
|------|------|----------|
| `npx vercel login` | 登录 Vercel | 首次使用或登录过期 |
| `npx vercel` | 部署到预览环境 | 测试新更改 |
| `npx vercel --prod` | 部署到生产环境 | 正式上线 |
| `npx vercel ls` | 列出所有项目 | 查看已部署项目 |
| `npx vercel link` | 连接现有项目 | 切换项目目录 |

---

## 🔧 常见问题解决

### 1. 登录过期

**错误信息：** `The specified token is not valid`

**解决方法：**

```bash
# 重新登录
npx vercel login
```

---

### 2. 部署失败 - 构建错误

**错误信息：** `Build failed because of webpack errors`

**解决方法：**

```bash
# 本地测试构建
npm run build

# 查看具体错误
npx vercel --debug
```

---

### 3. 部署失败 - 权限问题

**错误信息：** `Permission denied`

**解决方法：**

```bash
# 使用 npx（不需要全局安装）
npx vercel --prod

# 或者修复权限
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

---

### 4. 找不到项目

**错误信息：** `Cannot find project`

**解决方法：**

```bash
# 连接现有项目
npx vercel link

# 或者创建新项目
npx vercel
```

---

### 5. 部署后页面 404

**可能原因：**
- 路由文件命名错误
- 导入路径不正确
- 静态资源路径错误

**解决方法：**

```bash
# 本地运行测试
npm run dev

# 访问 http://localhost:3000 测试
```

---

## 🌐 自定义域名配置

### 步骤 1：在 Vercel 添加域名

1. 访问 https://vercel.com/dashboard
2. 选择你的项目
3. 点击 **"Domains"**
4. 输入你的域名（如 `example.com`）
5. 点击 **"Add"**

### 步骤 2：在域名服务商配置 DNS

**在 Namecheap（或其他服务商）添加 DNS 记录：**

| 类型 | 主机 | 值 | TTL |
|------|------|-----|-----|
| A | @ | 76.76.21.21 | Automatic |
| CNAME | www | cname.vercel-dns.com | Automatic |

### 步骤 3：等待生效

- DNS 更改通常需要 **15-30 分钟** 生效
- 有时可能需要几小时

### 步骤 4：验证

在浏览器访问你的域名：
```
https://example.com
```

如果显示你的网站，说明配置成功！✅

---

## 📊 查看部署状态

### 方法 1：Vercel Dashboard

1. 访问 https://vercel.com/dashboard
2. 点击你的项目
3. 查看 **"Deployments"** 标签

**可以看到：**
- 部署时间
- 部署状态（成功/失败）
- 部署日志
- 预览链接

### 方法 2：命令行

```bash
# 查看部署列表
npx vercel ls

# 查看部署日志
npx vercel logs
```

---

## 🔄 自动部署（连接 GitHub）

### 步骤 1：在 Vercel 连接 GitHub

1. 访问 https://vercel.com/new
2. 点击 **"Import Git Repository"**
3. 选择 GitHub
4. 授权 Vercel 访问你的 GitHub
5. 选择你的仓库
6. 点击 **"Import"**
7. 点击 **"Deploy"**

### 步骤 2：推送代码自动部署

```bash
# 提交代码
git add .
git commit -m "更新内容"
git push

# Vercel 会自动部署！
```

---

## 💡 最佳实践

### 1. 部署流程

```bash
# 开发时
npm run dev

# 测试构建
npm run build

# 部署到生产环境
npx vercel --prod
```

### 2. 版本管理

- **预览部署**: `npx vercel`（测试用）
- **生产部署**: `npx vercel --prod`（正式上线）

### 3. 环境变量

**添加环境变量：**

```bash
# 在 Vercel Dashboard
Settings → Environment Variables → Add
```

**在代码中使用：**

```javascript
const apiKey = process.env.MY_API_KEY;
```

---

## 📈 免费套餐限制

| 项目 | 限制 |
|------|------|
| 项目数量 | 无限 |
| 带宽 | 100 GB/月 |
| 构建时间 | 6,000 分钟/月 |
| 服务器功能 | 100 GB-Hours/月 |
| 自定义域名 | 无限 |
| HTTPS | ✅ 免费自动 |

**提示：** 对于个人项目和小网站，免费套餐完全够用！

---

## 🎯 检查清单

部署前检查：

- [ ] 代码已提交到 Git
- [ ] 本地测试通过（`npm run dev`）
- [ ] 构建测试通过（`npm run build`）
- [ ] 已登录 Vercel（`npx vercel login`）
- [ ] 项目目录正确

部署后检查：

- [ ] 网站可以访问
- [ ] 所有页面正常
- [ ] 没有 404 错误
- [ ] HTTPS 已启用
- [ ] 自定义域名已配置（如果有）

---

## 📞 获取帮助

### Vercel 官方文档

- 文档：https://vercel.com/docs
- 支持：https://vercel.com/support

### 社区

- Discord: https://vercel.com/discord
- GitHub: https://github.com/vercel/vercel
- Twitter: @vercel

---

## 🎓 学习资源

### 新手教程

1. Vercel 官方教程：https://vercel.com/docs/getting-started
2. Next.js 教程：https://nextjs.org/learn
3. YouTube 教程：搜索 "Vercel deployment tutorial"

### 进阶学习

- 服务器端渲染（SSR）
- 静态站点生成（SSG）
- API 路由
- 中间件（Middleware）

---

**最后更新**: 2026-04-08
**文档版本**: 1.0（通用版）

---

## ✅ 快速参考卡片

```
╔═══════════════════════════════════════════╗
║         Vercel 部署快速参考              ║
╠═══════════════════════════════════════════╣
║ 1. 安装：npm install -g vercel           ║
║ 2. 登录：npx vercel login                ║
║ 3. 部署：npx vercel --prod               ║
║                                           ║
║ 常用命令：                                ║
║ • npx vercel login    - 登录             ║
║ • npx vercel          - 预览部署         ║
║ • npx vercel --prod   - 生产部署         ║
║ • npx vercel ls       - 列出项目         ║
║                                           ║
║ 遇到问题：                                ║
║ • 构建失败 → npm run build               ║
║ • 登录过期 → npx vercel login            ║
║ • 页面 404  → 检查路由文件命名            ║
╚═══════════════════════════════════════════╝
```

---

**祝你部署顺利！** 🚀
