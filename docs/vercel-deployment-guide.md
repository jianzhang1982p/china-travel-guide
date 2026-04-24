# China Travel Guide - Vercel 部署指南

## 📋 项目信息

- **项目名称**: China Travel Guide
- **域名**: thechinatravelguide.com
- **框架**: Next.js 14.2.35
- **部署平台**: Vercel
- **Vercel 项目**: https://vercel.com/jians-projects-a1b3c8b7/china-travel-guide

---

## 🚀 快速部署步骤

### 1. 准备工作

```bash
# 进入项目目录
cd /Users/clawuser/china-travel-guide

# 安装依赖（如果需要）
npm install

# 登录 Vercel
npx vercel login
```

### 2. 部署到生产环境

```bash
# 部署命令
npx vercel --prod
```

### 3. 自动部署（可选）

如果连接了 GitHub：
```bash
# 推送代码后自动部署
git add .
git commit -m "更新内容"
git push
```

---

## 📁 项目结构

```
china-travel-guide/
├── public/
│   ├── icon.svg
│   ├── sitemap.xml          # SEO Sitemap
│   └── robots.txt           # SEO Robots 配置
├── src/
│   └── app/
│       ├── layout.tsx       # 全局布局（含 SEO metadata）
│       ├── page.tsx         # 首页
│       ├── globals.css      # 全局样式
│       ├── visa/
│       │   └── page.tsx     # 签证指南页面
│       ├── payment/
│       │   ├── how-to-setup-alipay/page.tsx    # 支付宝设置
│       │   └── wechat-pay-foreigners/page.tsx  # 微信支付
│       ├── internet/
│       │   └── best-esim-for-china/page.tsx    # eSIM 推荐
│       └── transport/
│           └── high-speed-rail-booking/page.tsx # 高铁购票
├── docs/
│   └── 12306-foreigner-guide.md  # 推广文章
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## ⚙️ Vercel 配置

### 环境变量（无需配置）

项目使用静态生成，不需要环境变量。

### 构建设置

- **Build Command**: `npm run build`
- **Output Directory**: `out` (自动检测)
- **Install Command**: `npm install`

### 域名配置

- **主域名**: thechinatravelguide.com
- **自动 HTTPS**: ✅ 已启用
- **自动重定向**: ✅ www → 非 www

---

## 🔧 常见问题解决

### 1. 部署失败 - 语法错误

```bash
# 本地测试构建
npm run build

# 检查错误
npx vercel --debug
```

### 2. Vercel 登录过期

```bash
# 重新登录
npx vercel login
```

### 3. 部署后页面 404

- 检查路由文件命名：`page.tsx`
- 检查导入路径是否正确
- 本地运行测试：`npm run dev`

### 4. SEO 不生效

- 清除浏览器缓存
- 等待 Google 重新抓取（24-48 小时）
- 检查 Google Search Console

---

## 📊 SEO 配置

### 已配置项目

- ✅ Meta 标题和描述（每个页面独立）
- ✅ Open Graph 标签（社交媒体分享）
- ✅ Twitter Card 标签
- ✅ Sitemap.xml（6 个页面）
- ✅ Robots.txt
- ✅ Google Search Console 验证
- ✅ Google Analytics

### Sitemap 位置

```
https://thechinatravelguide.com/sitemap.xml
```

### Google Search Console

- **验证状态**: ✅ 已验证
- **验证令牌**: `LVD-NyjL8SbovN03ydW0jn0SYWgB1mQ_F_mkQznlcW4`
- **Sitemap 状态**: ✅ 已提交（6 个 URL）

---

## 🎯 页面列表

| 页面 | 路径 | 状态 |
|------|------|------|
| 首页 | `/` | ✅ 已上线 |
| 签证指南 | `/visa` | ✅ 已上线 |
| 支付宝设置 | `/payment/how-to-setup-alipay` | ✅ 已上线 |
| 微信支付 | `/payment/wechat-pay-foreigners` | ✅ 已上线 |
| eSIM 推荐 | `/internet/best-esim-for-china` | ✅ 已上线 |
| 高铁购票 | `/transport/high-speed-rail-booking` | ✅ 已上线 |

---

## 📈 性能指标

- **构建时间**: ~20 秒
- **页面大小**: ~87.5 KB (First Load JS)
- **部署时间**: ~30 秒
- **CDN**: Vercel Edge Network (全球加速)

---

## 🔐 安全配置

- ✅ HTTPS 自动启用
- ✅ 自动安全头
- ✅ DDoS 保护
- ✅ 无服务器函数隔离

---

## 📝 更新日志

### 2026-04-08
- ✅ 添加完整 SEO metadata
- ✅ 创建 sitemap.xml
- ✅ 创建 robots.txt
- ✅ 添加 Google Search Console 验证
- ✅ 提交 Sitemap 到 Google
- ✅ 所有 6 个页面已索引

### 2026-04-07
- ✅ 创建高铁购票指南页面
- ✅ 更新首页链接
- ✅ 部署上线

### 2026-04-02
- ✅ 创建 eSIM 推荐页面
- ✅ 创建微信支付页面
- ✅ 部署上线

---

## 🚀 下一步建议

### 内容扩展
- [ ] VPN 使用指南
- [ ] 必备 App 推荐
- [ ] 城市交通指南
- [ ] 酒店住宿指南

### SEO 优化
- [ ] 添加更多长尾关键词
- [ ] 创建博客页面
- [ ] 添加内部链接
- [ ] 优化页面加载速度

### 推广引流
- [ ] 发布 Reddit 文章
- [ ] Quora 回答问题
- [ ] 旅游论坛分享
- [ ] 社交媒体运营

---

## 📞 联系方式

- **网站**: https://thechinatravelguide.com
- **反馈邮箱**: feedback@thechinatravelguide.com
- **GitHub**: https://github.com/jianzhang1982p/china-travel-guide

---

## 💡 提示

1. **每次更新后记得部署**: `npx vercel --prod`
2. **定期检查 Google Search Console**: 查看索引状态和搜索表现
3. **备份重要配置**: 保存 Vercel 项目 ID 和域名配置
4. **监控网站性能**: 使用 Google Analytics 和 Search Console

---

**最后更新**: 2026-04-08
**文档版本**: 1.0
