# Quick Start Guide

Get your Paycheck Powerhouse website live in minutes!

## 🚀 5-Minute Setup

### 1. Update Your Google Sheets Link

Edit `client/src/pages/Download.tsx` and replace:

```typescript
const googleSheetsLink = "https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/copy";
```

With your actual Google Sheets ID.

### 2. Create GitHub Repository

```bash
cd /home/ubuntu/paycheck-powerhouse-website
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/paycheck-powerhouse-website.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to GitHub repository Settings
2. Click "Pages" in the left sidebar
3. Select "GitHub Actions" as source
4. Done! Your site will be live in a few minutes

## 📍 Your Site URL

- **Default**: `https://YOUR_USERNAME.github.io/paycheck-powerhouse-website/`
- **Custom domain**: `https://your-domain.com/` (after DNS setup)

## 🎨 Customization

### Change Colors

Edit `client/src/index.css`:

```css
:root {
  --primary: var(--color-emerald-600);  /* Change this color */
  /* ... other colors ... */
}
```

### Update Content

Edit `client/src/pages/Home.tsx` to change:
- Headlines
- Descriptions
- Features list
- Pricing
- FAQ items

### Add Your Logo

Place your logo in `client/public/` and update the navigation bar in `Home.tsx`.

## 🔄 Making Updates

After deployment, push changes to automatically redeploy:

```bash
# Make changes
git add .
git commit -m "Update description"
git push
```

## 📊 Site Structure

```
Home (/)
├── Hero Section
├── Features
├── How It Works
├── 50/30/20 Rule
├── Pricing
├── FAQ
└── CTA

Download (/download)
├── Step-by-step instructions
├── Quick help section
└── CTA buttons
```

## ✅ Deployment Checklist

- [ ] Google Sheets link updated
- [ ] Repository created and pushed
- [ ] GitHub Pages enabled
- [ ] Site is live and accessible
- [ ] All links work correctly
- [ ] Mobile responsive verified

## 🎯 Next Steps

1. **Share your site** - Post on social media
2. **Monitor traffic** - Add Google Analytics
3. **Collect feedback** - Add email signup
4. **Optimize** - Improve based on user behavior
5. **Scale** - Add more products or features

## 📞 Need Help?

See `DEPLOYMENT_GUIDE.md` for detailed instructions and troubleshooting.

---

**You're ready to launch! 🚀**
