# Deployment Guide - Paycheck Powerhouse Website

This guide will walk you through deploying your Paycheck Powerhouse website to GitHub Pages.

## 📋 Prerequisites

- GitHub account (free)
- Git installed on your computer
- Project files ready to deploy

## 🚀 Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `paycheck-powerhouse-website` (or your preferred name)
   - **Description**: "Professional landing page for Paycheck Powerhouse budget tracker"
   - **Visibility**: Public (required for GitHub Pages free tier)
   - **Initialize with**: Do NOT check any options (we'll push existing code)
5. Click **"Create repository"**

### Step 2: Initialize Git and Push Code

Open your terminal and navigate to the project directory:

```bash
cd /home/ubuntu/paycheck-powerhouse-website
```

Initialize git and push your code:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Paycheck Powerhouse website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/paycheck-powerhouse-website.git

# Create and push to main branch
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username.**

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source**: Select **"GitHub Actions"**
   - The workflow will automatically deploy on push to main

### Step 4: Verify Deployment

1. Go to your repository
2. Click the **Actions** tab
3. You should see a workflow running (or completed)
4. Once complete, your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/paycheck-powerhouse-website/
   ```

## 🌐 Custom Domain (Optional)

If you have a custom domain (e.g., paycheck-powerhouse.com):

### Step 1: Update DNS Settings

Contact your domain registrar and add a CNAME record:

```
CNAME: www.paycheck-powerhouse.com → YOUR_USERNAME.github.io
```

Or use A records:

```
A: paycheck-powerhouse.com → 185.199.108.153
A: paycheck-powerhouse.com → 185.199.109.153
A: paycheck-powerhouse.com → 185.199.110.153
A: paycheck-powerhouse.com → 185.199.111.153
```

### Step 2: Configure in GitHub

1. Go to repository **Settings** > **Pages**
2. Under "Custom domain", enter your domain: `paycheck-powerhouse.com`
3. Click **Save**
4. Check "Enforce HTTPS" (recommended)

Your site will be available at your custom domain in a few minutes.

## 📝 Update Google Sheets Link

Before deploying, update your Google Sheets template link:

1. Open `client/src/pages/Download.tsx`
2. Find this line:
   ```typescript
   const googleSheetsLink = "https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/copy";
   ```
3. Replace `YOUR_SPREADSHEET_ID` with your actual Google Sheets ID
4. Commit and push the changes:
   ```bash
   git add .
   git commit -m "Update Google Sheets link"
   git push
   ```

## 🔄 Making Updates

After deployment, any changes you push to the `main` branch will automatically redeploy:

```bash
# Make changes to files
# Then:
git add .
git commit -m "Your commit message"
git push
```

The GitHub Actions workflow will automatically build and deploy your changes.

## 🐛 Troubleshooting

### Site not showing up

**Problem**: "404 - Not Found" when visiting your site

**Solutions**:
1. Wait 5-10 minutes for GitHub Pages to process
2. Check that your repository is **Public**
3. Verify the workflow completed successfully in the **Actions** tab
4. Clear your browser cache and try again

### Workflow failed

**Problem**: Red ❌ in the Actions tab

**Solutions**:
1. Click on the failed workflow to see the error
2. Common issues:
   - Missing `pnpm-lock.yaml` - Run `pnpm install` locally and commit
   - Node version mismatch - Check `.github/workflows/deploy.yml`
   - Build errors - Check console output for TypeScript/build errors

### Custom domain not working

**Problem**: Custom domain shows GitHub's 404 page

**Solutions**:
1. Wait 24 hours for DNS to propagate
2. Verify DNS records are correct
3. Check that HTTPS is enforced in repository settings
4. Try clearing browser cache

### Styles not loading

**Problem**: Website shows but looks broken (no colors/styling)

**Solutions**:
1. Check browser console for errors (F12)
2. Verify CSS files are in `dist/public/assets/`
3. Clear browser cache and hard refresh (Ctrl+Shift+R)
4. Check that base path is correct in `vite.config.ts`

## 📊 Monitoring Your Site

### Check Deployment Status

1. Go to repository **Actions** tab
2. See all deployment workflows
3. Click on any workflow to see details

### View Site Analytics

Add Google Analytics:

1. Get your Google Analytics ID
2. Update `.github/workflows/deploy.yml` with your ID
3. Or add it directly in `client/index.html`

## 🔐 Security

Your GitHub Pages site is:
- ✅ Automatically HTTPS encrypted
- ✅ Protected by GitHub's infrastructure
- ✅ No server-side code (static site)
- ✅ No database or user data collection

## 📱 Testing Your Site

Before promoting to production:

1. **Test locally**:
   ```bash
   pnpm dev
   # Visit http://localhost:3000
   ```

2. **Test production build**:
   ```bash
   pnpm build
   pnpm preview
   # Visit http://localhost:4173
   ```

3. **Test on different devices**:
   - Desktop (Chrome, Firefox, Safari, Edge)
   - Tablet (iPad, Android tablet)
   - Mobile (iPhone, Android phone)

## 🚀 Performance Tips

1. **Optimize images** - Use WebP format when possible
2. **Minimize dependencies** - Remove unused packages
3. **Enable compression** - GitHub Pages automatically gzips assets
4. **Cache busting** - Vite automatically handles this with content hashing

## 📞 Support

If you encounter issues:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [Actions workflow logs](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows)
3. Check [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html#github-pages)

## ✅ Deployment Checklist

Before going live:

- [ ] Google Sheets link updated in `Download.tsx`
- [ ] Repository is public
- [ ] GitHub Actions workflow is enabled
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS is enforced
- [ ] Site tested locally and in production
- [ ] All links work correctly
- [ ] Mobile responsive design verified
- [ ] Performance acceptable (< 3s load time)
- [ ] Analytics configured (optional)

## 🎉 You're Live!

Your Paycheck Powerhouse website is now live and ready to sell!

**Next Steps**:
1. Share your site on social media
2. Add to your email signature
3. Market your product
4. Monitor analytics
5. Collect customer feedback
6. Iterate and improve

---

**Happy selling! 🚀**
