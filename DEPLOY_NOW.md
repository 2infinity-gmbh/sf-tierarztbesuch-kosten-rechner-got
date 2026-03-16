# 🚀 Deploy TierTarif - Quick Start Guide

## ✅ Current Status
- ✅ Website fully built and tested
- ✅ All 6 pages working correctly
- ✅ Calculator functional
- ✅ Build passes with 0 errors
- ✅ Git repository initialized
- ✅ GitHub Actions workflow configured
- ✅ Firebase config files ready

---

## 🔥 Deploy to Firebase (Automatic)

### Prerequisites Check:
```bash
# Verify build works
npm run build
# ✅ Should complete with "6 page(s) built in Xms"

# Check git status
git status
# ✅ Should show "working tree clean"
```

### Deployment Steps:

#### 1️⃣ **Ensure Firebase Service Account Secret is Set**

The GitHub Actions workflow needs the `FIREBASE_SERVICE_ACCOUNT_B64` secret.

**If not already set**, add it via:
- GitHub repo → Settings → Secrets and variables → Actions
- Click "New repository secret"
- Name: `FIREBASE_SERVICE_ACCOUNT_B64`
- Value: Base64-encoded service account JSON

#### 2️⃣ **Push to GitHub (triggers auto-deploy)**

```bash
# The main branch is already synced, but if you made local changes:
git add .
git commit -m "feat: ready for deployment"
git push origin main
```

#### 3️⃣ **Monitor Deployment**

Watch the deployment process:
- **GitHub**: https://github.com/2infinity-gmbh/sf-tierarztbesuch-kosten-rechner-got/actions
- Look for "Deploy to Firebase Hosting" workflow
- Should complete in ~2-3 minutes

#### 4️⃣ **Verify Live Site**

Once deployed, visit:
- **Production URL**: https://tierarztbesuch-kosten-rechner-got.de

**Test Checklist**:
- [ ] Homepage loads
- [ ] Calculator works (select treatment, calculate costs)
- [ ] Navigation menu works (desktop + mobile)
- [ ] All pages accessible (/artikel, /got, /impressum, /datenschutz)
- [ ] Analytics script loads (check browser dev tools → Network)
- [ ] Mobile responsive (test on phone or resize browser)

---

## 🛠️ Manual Firebase Deploy (Alternative)

If you want to deploy manually (without GitHub Actions):

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy
firebase deploy --only hosting
```

---

## 📊 Post-Deployment

### 1. **Verify Analytics**
- Wait 24 hours for first data
- Check Plausible dashboard: https://plausible.io/tierarztbesuch-kosten-rechner-got.de
- Ensure traffic is being tracked

### 2. **SEO Submission**
Submit sitemap to search engines:
- **Google Search Console**: https://search.google.com/search-console
  - Add property: `tierarztbesuch-kosten-rechner-got.de`
  - Submit sitemap: `https://tierarztbesuch-kosten-rechner-got.de/sitemap-index.xml`
- **Bing Webmaster Tools**: https://www.bing.com/webmasters

### 3. **Monitor Performance**
- Check Firebase Hosting metrics
- Review GitHub Actions logs for any deployment issues
- Monitor error logs (if any)

---

## 🔧 Making Updates

To update the site after initial deployment:

```bash
# 1. Make your changes
# Edit files in src/pages/ or src/layouts/

# 2. Test locally
npm run dev
# Visit http://localhost:4321

# 3. Build and verify
npm run build
npm run preview

# 4. Commit and push
git add .
git commit -m "feat: your update description"
git push origin main

# 5. GitHub Actions automatically deploys
# Check Actions tab for deployment status
```

---

## 📁 Key Files Reference

### Configuration:
- `astro.config.mjs` - Astro settings, site URL
- `firebase.json` - Firebase hosting config
- `.firebaserc` - Firebase project ID
- `.github/workflows/deploy.yml` - CI/CD pipeline

### Content:
- `src/pages/index.astro` - Homepage calculator
- `src/layouts/BaseLayout.astro` - Main layout with SEO
- `src/content/config.ts` - Blog collection schema

### Deployment:
- `dist/` - Built static files (created by `npm run build`)
- `package.json` - Dependencies and scripts

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist .astro
npm install
npm run build
```

### GitHub Actions Fails
1. Check Actions tab for error logs
2. Verify `FIREBASE_SERVICE_ACCOUNT_B64` secret exists
3. Ensure Firebase project ID matches in `.firebaserc`
4. Check Firebase quotas/billing

### Site Not Updating
1. Clear browser cache (Ctrl+Shift+R)
2. Check Firebase Hosting dashboard for latest deployment time
3. Verify GitHub Actions completed successfully
4. Wait 2-5 minutes for CDN propagation

---

## ✨ Success Indicators

**Deployment is successful when**:
- ✅ GitHub Actions workflow shows green checkmark
- ✅ Firebase Console shows latest deployment
- ✅ Website loads at https://tierarztbesuch-kosten-rechner-got.de
- ✅ Calculator works correctly
- ✅ All pages accessible
- ✅ Analytics script loads (check browser Network tab)

---

## 🎯 Next Steps After Deployment

1. **Content Expansion**:
   - Add more articles to `/artikel` directory
   - Create more detailed GOT information pages
   - Add FAQ section

2. **Monetization**:
   - Replace ad placeholders with real ad code
   - Integrate Google AdSense or other ad network

3. **Features**:
   - Add more treatment types to calculator
   - Create comparison tables
   - Add downloadable PDF cost estimates

4. **SEO**:
   - Build backlinks
   - Create more keyword-optimized content
   - Monitor Google Search Console

---

## 📞 Support

**Project Repository**: https://github.com/2infinity-gmbh/sf-tierarztbesuch-kosten-rechner-got

**Documentation**:
- Astro: https://docs.astro.build
- Firebase: https://firebase.google.com/docs/hosting
- TailwindCSS: https://tailwindcss.com/docs

---

**🚀 Ready to Deploy!**

The site is fully built and tested. Just push to main branch and let GitHub Actions handle the rest!

```bash
git push origin main
```
