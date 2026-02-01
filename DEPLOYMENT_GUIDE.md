# 🚀 Vercel Deployment Guide - Sravani Hospital Guntur

## 📍 **Hospital Information**

**Name:** Sravani Multi-Specialty Hospital  
**Location:** Guntur, Andhra Pradesh, India  
**Address:** Old Bank Road, Kotthapet, Guntur 522001  
**Phone:** 0863-2233644, 9966177014  
**Emergency:** 0863-2352354  

---

## 🎯 **Deployment Steps**

### **Method 1: Deploy via Vercel CLI (Recommended)**

#### **Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

#### **Step 2: Login to Vercel**
```bash
vercel login
```

#### **Step 3: Build the Project**
```bash
npm run build
```

#### **Step 4: Deploy**
```bash
# For production deployment:
vercel --prod

# For preview deployment:
vercel
```

---

### **Method 2: Deploy via Vercel Dashboard**

#### **Step 1: Push to GitHub**
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for Vercel deployment - Sravani Hospital Guntur"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/sravani-hospital.git

# Push to GitHub
git push -u origin main
```

#### **Step 2: Import to Vercel**
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Configure project:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

#### **Step 3: Add Environment Variables**
In Vercel dashboard, add these environment variables:

```
VITE_APP_NAME=Sravani Multi-Specialty Hospital
VITE_LOCATION=Guntur, Andhra Pradesh
VITE_ADDRESS=Old Bank Road, Kotthapet, Guntur 522001
VITE_PHONE=0863-2233644
VITE_EMERGENCY=0863-2352354
```

#### **Step 4: Deploy**
Click "Deploy" and wait for deployment to complete.

---

## 🌐 **Custom Domain Setup**

### **Option 1: Vercel Subdomain**
Your app will be available at:
```
https://sravani-hospital-guntur.vercel.app
```

### **Option 2: Custom Domain**
1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain (e.g., `sravanihospital.com`)
4. Update DNS records as instructed by Vercel

**Recommended domains:**
- `sravanihospital.com`
- `sravanihospital.in`
- `sravaniguntur.com`

---

## 📋 **Pre-Deployment Checklist**

### **1. Environment Variables**
- [ ] Create `.env.production` file
- [ ] Add all required API keys
- [ ] Configure Firebase credentials
- [ ] Set up Base44 SDK keys

### **2. Build Configuration**
- [x] `vercel.json` configured
- [x] `package.json` build script ready
- [x] Vite config optimized
- [ ] Environment variables set

### **3. Code Quality**
- [ ] Run `npm run lint` - Fix all errors
- [ ] Run `npm run build` - Ensure successful build
- [ ] Test locally with `npm run preview`
- [ ] Check all routes work correctly

### **4. Assets**
- [x] Images optimized
- [x] Fonts loaded
- [x] Icons configured
- [x] Favicon set

### **5. SEO**
- [ ] Meta tags configured
- [ ] Open Graph tags added
- [ ] Sitemap generated
- [ ] Robots.txt configured

---

## 🔧 **Build Commands**

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Run linter
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel
vercel --prod
```

---

## 🌍 **Regional Configuration**

The app is configured to deploy to **Mumbai (bom1)** region for optimal performance in India.

**Vercel Regions:**
- `bom1` - Mumbai, India (Current)
- `sin1` - Singapore
- `hnd1` - Tokyo, Japan

---

## 📊 **Performance Optimization**

### **Already Implemented:**
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Image optimization
- ✅ Minification
- ✅ Compression

### **Recommended:**
- [ ] Enable Vercel Analytics
- [ ] Set up Vercel Speed Insights
- [ ] Configure caching headers
- [ ] Enable edge functions

---

## 🔐 **Security Configuration**

### **Headers to Add (in vercel.json):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 📱 **Mobile App Configuration**

### **PWA Setup:**
The app is configured as a Progressive Web App:
- ✅ Service Worker
- ✅ Web Manifest
- ✅ Offline Support
- ✅ Install Prompt

**Users can install on mobile:**
1. Visit the website
2. Click "Add to Home Screen"
3. App icon appears on home screen

---

## 🎨 **Branding Assets**

### **Required Files:**
- [x] `/public/logo.png` - Main logo
- [x] `/public/favicon.ico` - Browser icon
- [x] `/public/manifest.json` - PWA manifest
- [ ] `/public/og-image.png` - Social media preview (1200x630)
- [ ] `/public/apple-touch-icon.png` - iOS icon (180x180)

---

## 📞 **Post-Deployment**

### **1. Test Everything:**
```bash
# Visit your deployed URL
# Test all pages
# Check mobile responsiveness
# Verify all forms work
# Test appointment booking
# Check language switching
```

### **2. Set Up Monitoring:**
- [ ] Enable Vercel Analytics
- [ ] Set up error tracking (Sentry)
- [ ] Configure uptime monitoring
- [ ] Set up alerts

### **3. SEO & Marketing:**
- [ ] Submit to Google Search Console
- [ ] Create Google My Business listing
- [ ] Add to hospital directories
- [ ] Share on social media

---

## 🔄 **Continuous Deployment**

Once connected to GitHub, Vercel will automatically:
- ✅ Deploy on every push to `main` branch
- ✅ Create preview deployments for PRs
- ✅ Run build checks
- ✅ Notify on deployment status

---

## 🐛 **Troubleshooting**

### **Build Fails:**
```bash
# Clear cache and rebuild
rm -rf node_modules dist .next
npm install
npm run build
```

### **Environment Variables Not Working:**
- Ensure they start with `VITE_`
- Restart dev server after adding
- Check Vercel dashboard settings

### **Routes Not Working:**
- Verify `vercel.json` rewrites
- Check `vite.config.js` settings
- Ensure all routes are in `pages.config.js`

---

## 📈 **Analytics & Monitoring**

### **Vercel Analytics:**
```bash
# Install
npm install @vercel/analytics

# Add to App.jsx
import { Analytics } from '@vercel/analytics/react';

<Analytics />
```

### **Google Analytics:**
Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

---

## 🎯 **Success Metrics**

After deployment, monitor:
- ✅ Page load time < 2 seconds
- ✅ Lighthouse score > 90
- ✅ Mobile responsiveness
- ✅ SEO score > 90
- ✅ Accessibility score > 90

---

## 📞 **Support Contacts**

**Technical Support:**
- Vercel Support: https://vercel.com/support
- Documentation: https://vercel.com/docs

**Hospital Contact:**
- Phone: 0863-2233644
- Email: sravaniteja2002@gmail.com
- Address: Old Bank Road, Kotthapet, Guntur 522001

---

## 🚀 **Quick Deploy Command**

```bash
# One-command deployment
npm run build && vercel --prod
```

---

## 📝 **Deployment Checklist**

- [ ] Code committed to Git
- [ ] Environment variables configured
- [ ] Build successful locally
- [ ] All tests passing
- [ ] Linter errors fixed
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] Analytics set up
- [ ] Monitoring configured
- [ ] Team notified

---

## 🎉 **Post-Deployment URLs**

After deployment, your app will be available at:

**Production:**
- https://sravani-hospital-guntur.vercel.app
- https://your-custom-domain.com (if configured)

**Preview:**
- https://sravani-hospital-guntur-git-[branch].vercel.app

---

## 📚 **Additional Resources**

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router on Vercel](https://vercel.com/guides/deploying-react-with-vercel)
- [Custom Domains](https://vercel.com/docs/concepts/projects/custom-domains)

---

**Ready to deploy! 🚀**

Run: `vercel --prod`

---

**Sravani Multi-Specialty Hospital**  
**Guntur, Andhra Pradesh**  
**Excellence in Healthcare Since 2006**
