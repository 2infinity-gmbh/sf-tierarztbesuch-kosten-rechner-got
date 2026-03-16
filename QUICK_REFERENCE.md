# Quick Reference Guide - TierTarif

## 🚀 Quick Start Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
```

### Testing Build
```bash
npm run build        # Must succeed before deployment
```

### Git Operations
```bash
git status           # Check current status
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push             # Deploy to Firebase (auto via GitHub Actions)
```

---

## 📁 Project Structure

```
tierarztbesuch-kosten-rechner-got/
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro      # Main layout with SEO
│   │   └── ArticleLayout.astro   # Article layout
│   ├── pages/
│   │   ├── index.astro           # Calculator homepage
│   │   ├── got.astro             # GOT info page
│   │   ├── impressum.astro       # Legal imprint
│   │   ├── datenschutz.astro     # Privacy policy
│   │   ├── artikel/
│   │   │   ├── index.astro       # Article index
│   │   │   └── tierarztkosten-rechner-was-kostet-tierarztbesuch.astro
│   │   └── sitemap.xml.ts        # Dynamic sitemap
│   ├── content/
│   │   └── config.ts             # Content collections config
│   └── styles/
│       └── global.css            # Global Tailwind styles
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── .github/
│   └── workflows/
│       └── deploy.yml            # Firebase auto-deploy
├── firebase.json                 # Firebase config
├── .firebaserc                   # Firebase project
├── astro.config.mjs              # Astro config
├── tailwind.config.mjs           # Tailwind config
└── package.json                  # Dependencies
```

---

## 🔑 Key Files to Know

### Configuration
- `astro.config.mjs` - Site URL, integrations
- `tailwind.config.mjs` - Theme colors, plugins
- `firebase.json` - Hosting config
- `.firebaserc` - Firebase project ID

### Layouts
- `src/layouts/BaseLayout.astro` - SEO, header, footer
- All pages use this layout

### Important Pages
- `src/pages/index.astro` - Calculator (main page)
- `src/pages/got.astro` - GOT information
- Legal pages: impressum.astro, datenschutz.astro

---

## 🎨 Design Tokens

### Colors
```js
primary-600: #0284c7  // Main blue
primary-700: #0369a1  // Hover blue
gray-900: #111827     // Text
gray-600: #4b5563     // Secondary text
```

### Breakpoints
```
sm:  640px   // Small tablets
md:  768px   // Tablets
lg:  1024px  // Desktop
```

---

## 📝 Adding Content

### New Article
1. Create file: `src/pages/artikel/my-article.astro`
2. Use ArticleLayout
3. Add to sitemap.xml.ts
4. Build and test

### Update Calculator Rates
Edit `src/pages/index.astro`:
```javascript
const treatmentCosts = {
  examination: 23.62,
  vaccination: 11.50,
  // ... update as needed
};
```

---

## 🔍 SEO Checklist for New Pages

- [ ] Unique title (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] H1 tag (one per page)
- [ ] Canonical URL set
- [ ] Add to sitemap.xml.ts
- [ ] Internal links from other pages
- [ ] Schema markup (if applicable)

---

## 🚨 Troubleshooting

### Build Fails
```bash
npm run build  # Check error message
npm ci         # Clean install if needed
```

### Git Push Fails
```bash
git pull --rebase origin main
git push
```

### Deploy Not Working
1. Check GitHub Actions tab
2. Verify Firebase secrets in repo settings
3. Check deploy.yml syntax

---

## 📊 Analytics

**Platform:** Plausible Analytics
**URL:** https://plausible.io
**Site:** tierarztbesuch-kosten-rechner-got.de

Tracking:
- Page views
- Referrers
- Country (anonymous)
- Device type

---

## 🔒 Secrets & Environment

**GitHub Secrets Required:**
- `GITHUB_TOKEN` (automatic)
- `FIREBASE_SERVICE_ACCOUNT_B64` (set by admin)

**No .env file needed** - Static site, no runtime secrets

---

## 📱 Testing Checklist

Before pushing to production:

- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] Calculator works correctly
- [ ] All links functional
- [ ] Mobile responsive (test at 375px, 768px, 1024px)
- [ ] SEO tags present (view source)
- [ ] Analytics script loads
- [ ] Forms work without errors

---

## 🎯 Performance Targets

- **Build Size:** < 300KB ✅ (Currently 192KB)
- **Lighthouse Performance:** 90+ ✅
- **Lighthouse SEO:** 100 ✅
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s

---

## 📞 Important URLs

**Live Site:**
https://tierarztbesuch-kosten-rechner-got.de

**GitHub Repo:**
https://github.com/2infinity-gmbh/sf-tierarztbesuch-kosten-rechner-got

**Firebase Console:**
https://console.firebase.google.com/project/tierarztbesuch-kosten-rechner-

**Plausible Dashboard:**
https://plausible.io/tierarztbesuch-kosten-rechner-got.de

---

## ✅ Deployment Workflow

1. **Make changes** locally
2. **Test:** `npm run build`
3. **Commit:** `git add . && git commit -m "description"`
4. **Push:** `git push`
5. **Auto-deploy** via GitHub Actions
6. **Verify** live site in ~2-3 minutes

---

## 🎓 Learning Resources

**Astro:**
https://docs.astro.build

**TailwindCSS:**
https://tailwindcss.com/docs

**Firebase Hosting:**
https://firebase.google.com/docs/hosting

**GOT 2022 Reference:**
https://www.bundestieraerztekammer.de/tierhalter/got/

---

*Last updated: March 16, 2026*
