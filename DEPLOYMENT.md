# DEAM Website Deployment Guide

This guide explains how to deploy the DEAM website to various platforms.

## Prerequisites
- Node.js 18+ installed
- All required assets placed in `/public/assets/`

## Development
```bash
npm install
npm run dev
```

## Building for Production
```bash
npm run build
```

## Deployment Options

### 1. Netlify (Recommended)
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

**Netlify Configuration (netlify.toml):**
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 2. Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### 3. GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist",
   "predeploy": "npm run build"
   ```
3. Run: `npm run deploy`

### 4. Static Hosting
1. Build: `npm run build`
2. Upload the `dist` folder contents to your web server

## Required Assets Checklist

Before deployment, ensure all these assets are in `/public/assets/`:

### Images
- [ ] `header-background.jpeg` - Hero background
- [ ] `teknofest-2021.jpg` to `teknofest-2024.jpg` - Teknofest photos
- [ ] `gallery-1.jpg` to `gallery-8.jpg` - Gallery images
- [ ] `naima.jpg`, `sezgin.jpg`, `umay.jpg`, `umay-yc01.jpg` - Car photos
- [ ] `sponsor-1.png` to `sponsor-6.png` - Sponsor logos

### Documents
- [ ] `DEAM-SD.pdf` - Sponsorship document

## Performance Optimization
- Compress images before uploading
- Use WebP format for better compression
- Consider lazy loading for images
- Minify CSS and JavaScript (handled by Vite build)

## SEO Considerations
- Update social media links in the footer
- Add Google Analytics tracking if needed
- Ensure all images have proper alt text
- Submit sitemap to search engines

## Maintenance
- Regular content updates
- Keep dependencies updated
- Monitor website performance
- Backup website files regularly
