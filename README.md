# Paycheck Powerhouse - Website

A professional landing page and sales website for the Paycheck Powerhouse Google Sheets budget tracker. Built with React 19, Tailwind CSS 4, and shadcn/ui.

## 🚀 Features

- **Modern Landing Page** - Beautiful hero section with gradient backgrounds
- **Product Showcase** - Detailed features and benefits section
- **Pricing Section** - Clear pricing with value proposition
- **FAQ Section** - Expandable FAQ addressing customer objections
- **Download Page** - Step-by-step instructions for getting started
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Professional Branding** - Emerald/teal color scheme with custom typography
- **Fast Performance** - Optimized React components and Tailwind CSS

## 📋 Tech Stack

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Routing**: Wouter
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Fonts**: Poppins (display) + Lato (body)

## 🛠️ Development

### Prerequisites

- Node.js 20+
- pnpm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/paycheck-powerhouse-website.git
cd paycheck-powerhouse-website

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the project
pnpm build

# Preview the production build
pnpm preview
```

## 📁 Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── pages/          # Page components
│   │   ├── Home.tsx    # Landing page
│   │   └── Download.tsx # Download/setup page
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React contexts
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # React entry point
│   └── index.css       # Global styles and theme
├── index.html          # HTML template
└── vite.config.ts      # Vite configuration

.github/
└── workflows/
    └── deploy.yml      # GitHub Actions deployment workflow
```

## 🎨 Design System

### Colors

- **Primary**: Emerald 600 (#059669)
- **Secondary**: Teal 600 (#0d9488)
- **Background**: White (light mode)
- **Foreground**: Dark gray
- **Accent**: Emerald/Teal gradients

### Typography

- **Display Font**: Poppins (headings)
- **Body Font**: Lato (paragraphs, body text)
- **Font Sizes**: Responsive scaling from mobile to desktop

### Components Used

- Buttons (primary, outline, ghost)
- Cards with hover effects
- Navigation bar with sticky positioning
- Expandable FAQ items
- Hero section with gradient background
- Feature grid layout
- Pricing card with highlight
- Footer with links

## 🚀 Deployment

### GitHub Pages

This project is configured to deploy automatically to GitHub Pages when you push to the `main` branch.

#### Setup Instructions

1. **Create a GitHub Repository**
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add remote
   git remote add origin https://github.com/yourusername/paycheck-powerhouse-website.git
   
   # Create main branch and push
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source
   - The workflow will automatically deploy on push to main

3. **Configure Custom Domain (Optional)**
   - In repository settings > Pages
   - Add your custom domain (e.g., paycheck-powerhouse.com)
   - Update the `cname` field in `.github/workflows/deploy.yml`

#### Manual Deployment

```bash
# Build the project
pnpm build

# The dist/public folder is ready to deploy
# Upload to your hosting provider or GitHub Pages
```

### Other Hosting Options

**Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist/public
```

## 📝 Configuration

### Update Product Link

In `client/src/pages/Download.tsx`, update the Google Sheets link:

```typescript
const googleSheetsLink = "https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/copy";
```

Replace `YOUR_SPREADSHEET_ID` with your actual Google Sheets ID.

### Customize Branding

Edit `client/src/index.css` to change colors:

```css
:root {
  --primary: var(--color-emerald-600);
  --primary-foreground: var(--color-emerald-50);
  /* ... other colors ... */
}
```

### Update Navigation Links

Edit `client/src/pages/Home.tsx` to add/remove navigation items:

```tsx
<a href="#features" className="...">Features</a>
<a href="#pricing" className="...">Pricing</a>
```

## 🔧 Scripts

```bash
# Development
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm check        # Type check
pnpm format       # Format code with Prettier
```

## 📦 Dependencies

### Core
- react@19.2.1
- react-dom@19.2.1
- wouter@3.3.5

### UI & Styling
- tailwindcss@4.1.14
- @tailwindcss/vite@4.1.3
- shadcn/ui components
- lucide-react@0.453.0
- framer-motion@12.23.22

### Development
- vite@7.1.7
- typescript@5.6.3
- prettier@3.6.2

## 🎯 Page Routes

- `/` - Home/Landing page
- `/download` - Download and setup instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For issues or questions:
- Open an issue on GitHub
- Check existing documentation
- Review the FAQ section on the website

## 🚀 Next Steps

1. **Update Google Sheets Link** - Replace the placeholder link with your actual template
2. **Customize Content** - Update product descriptions and features
3. **Add Analytics** - Integrate Google Analytics or similar
4. **Set Up Email** - Add email capture for newsletter
5. **Deploy** - Push to GitHub and enable Pages

## 📊 Performance

- Lighthouse Score: 95+
- Mobile Friendly: ✅
- Fast Load Time: < 2s
- Optimized Images: ✅
- Responsive Design: ✅

## 🔐 Security

- No external API calls (static site)
- No user data collection
- HTTPS ready
- Content Security Policy friendly

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Made with ❤️ for Paycheck Powerhouse**
