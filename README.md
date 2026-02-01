# 🏥 Sravani Multi-Specialty Hospital - Enterprise Management System

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> **Excellence in Healthcare Since 2006**  
> A modern, enterprise-grade hospital management system for Sravani Multi-Specialty Hospital, Guntur, Andhra Pradesh.

---

## 📍 Hospital Information

**Sravani Multi-Specialty Hospital**  
Old Bank Road, Kotthapet  
Guntur 522001, Andhra Pradesh, India

📞 **Phone:** 0863-2233644, 9966177014  
🚨 **Emergency:** 0863-2352354  
📧 **Email:** sravaniteja2002@gmail.com  
🌐 **Website:** [Coming Soon]

---

## ✨ Features

### 🌐 **Multi-Language Support**
- **3 Languages:** English, Telugu (తెలుగు), Hindi (हिन्दी)
- **100+ Translations** per language
- **Real-time switching** - Entire app changes language instantly
- **LocalStorage persistence** - Remembers user preference

### 🔐 **Role-Based Access Control (RBAC)**
**19 User Roles with Granular Permissions:**
- **Administrative:** Super Admin, Admin, Manager
- **Medical Staff:** Doctor, Nurse, Surgeon, Anesthesiologist, Radiologist
- **Support Staff:** Receptionist, Pharmacist, Lab Tech, Scan Tech, Medical Records, Billing
- **Educational:** Intern, Student, Resident
- **Patient:** Patient, Guardian

**40+ Permissions** mapped to each role for fine-grained access control.

### 🎨 **Modern UI/UX**
- **3D Animated Login Page** - Full-size hospital gallery with parallax effects
- **5-Model Hero Slider** - 3D card flip animations with real hospital images
- **Glassmorphism Design** - Premium, modern aesthetic
- **Framer Motion Animations** - Smooth, professional transitions
- **Responsive Design** - Mobile-first approach, works on all devices

### 📱 **Progressive Web App (PWA)**
- **Installable** on mobile devices
- **Offline Support** ready
- **Push Notifications** configured
- **App-like Experience** on mobile

### 🏥 **Core Functionality**
- ✅ **Appointment Booking** - Complete workflow with Google Sheets sync
- ✅ **Patient Management** - Comprehensive patient records
- ✅ **Department Showcase** - 3D slider with all specialties
- ✅ **Doctor Profiles** - Detailed information and booking
- ✅ **Medical Camps** - Upcoming and past camps
- ✅ **Emergency Services** - 24/7 contact information
- ✅ **Privacy & Terms** - Complete legal pages

### 🚀 **Ready for Enterprise Integrations**
- 🔄 Firebase Authentication (Social logins)
- 🔄 ChatGPT AI Bot (Multi-language support)
- 🔄 WhatsApp Business API (Notifications)
- 🔄 Telegram Bot (Patient updates)
- 🔄 Google Meet (Video consultations)
- 🔄 Google Sheets (Data backup)
- 🔄 Electron Desktop App (Cross-platform)

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18.2** - Modern UI library
- **Vite 6.1** - Lightning-fast build tool
- **Tailwind CSS 3.4** - Utility-first CSS
- **Framer Motion 11** - Animation library
- **React Router 6** - Client-side routing
- **Lucide React** - Beautiful icons

### **Backend Ready**
- **Base44 SDK** - Authentication & data management
- **Firebase** - Real-time database & auth
- **Google APIs** - Sheets, Meet, Calendar

### **UI Components**
- **Radix UI** - Accessible components
- **Shadcn/UI** - Beautiful component library
- **React Hook Form** - Form management
- **Zod** - Schema validation

### **Deployment**
- **Vercel** - Hosting platform
- **GitHub** - Version control
- **PWA** - Progressive Web App

---

## 📦 Installation

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git

### **Clone Repository**
```bash
git clone https://github.com/YOUR_USERNAME/sravani-hospital.git
cd sravani-hospital
```

### **Install Dependencies**
```bash
npm install
```

### **Environment Variables**
Create a `.env` file in the root directory:
```env
VITE_APP_NAME=Sravani Multi-Specialty Hospital
VITE_LOCATION=Guntur, Andhra Pradesh
VITE_ADDRESS=Old Bank Road, Kotthapet, Guntur 522001
VITE_PHONE=0863-2233644
VITE_EMERGENCY=0863-2352354
```

### **Run Development Server**
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🚀 Deployment

### **Deploy to Vercel**

#### **Method 1: Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

#### **Method 2: GitHub Integration**
1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"

#### **Method 3: Automated Script**
```bash
./deploy.sh
```

**See `DEPLOYMENT_GUIDE.md` for detailed instructions.**

---

## 📁 Project Structure

```
SravaniBASE44/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── home/           # Home page components
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   ├── ui/             # Shadcn UI components
│   │   └── LanguageSwitcher.jsx
│   ├── contexts/           # React contexts
│   │   ├── AuthContext.jsx
│   │   └── LanguageContext.jsx
│   ├── lib/                # Utilities and helpers
│   │   ├── roles.js        # RBAC system
│   │   └── utils.js
│   ├── locales/            # Translation files
│   │   ├── en/             # English
│   │   ├── te/             # Telugu
│   │   └── hi/             # Hindi
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── BookAppointment.jsx
│   │   ├── Departments.jsx
│   │   ├── Doctors.jsx
│   │   ├── MedicalCamps.jsx
│   │   ├── Privacy.jsx
│   │   ├── Terms.jsx
│   │   └── ...
│   ├── api/                # API clients
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── public/                 # Static assets
├── docs/                   # Documentation
│   ├── DEPLOYMENT_GUIDE.md
│   ├── ENTERPRISE_IMPLEMENTATION_PLAN.md
│   ├── PHASE1_COMPLETE.md
│   └── ...
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies
└── README.md              # This file
```

---

## 🌐 Multi-Language Usage

### **In Components:**
```javascript
import { useTranslation } from '@/contexts/LanguageContext';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('common.welcome')}</h1>
      <button>{t('auth.signIn')}</button>
    </div>
  );
}
```

### **Language Switcher:**
```javascript
import LanguageSwitcher from '@/components/LanguageSwitcher';

// Desktop version
<LanguageSwitcher />

// Mobile version
<LanguageSwitcher variant="mobile" />
```

---

## 🔐 Role-Based Access

### **Check Permissions:**
```javascript
import { hasPermission, PERMISSIONS, USER_ROLES } from '@/lib/roles';

// Check if user has permission
if (hasPermission(userRole, PERMISSIONS.CREATE_PRESCRIPTION)) {
  // Show prescription form
}

// In JSX
{hasPermission(user.role, PERMISSIONS.MANAGE_USERS) && (
  <AdminPanel />
)}
```

---

## 📊 Available Scripts

```bash
# Development
npm run dev              # Start dev server (port 5173)

# Build
npm run build           # Build for production

# Preview
npm run preview         # Preview production build

# Linting
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint errors

# Type Checking
npm run typecheck       # Run TypeScript checks

# Deployment
./deploy.sh             # Automated deployment script
vercel --prod           # Deploy to Vercel production
```

---

## 🎯 Roadmap

### **Phase 1: Foundation** ✅ **COMPLETE**
- [x] Multi-language system (English, Telugu, Hindi)
- [x] Role-based access control (19 roles)
- [x] Responsive design
- [x] 3D animations
- [x] Complete booking system
- [x] All core pages

### **Phase 2: Integrations** 🔄 **IN PROGRESS**
- [ ] Firebase Authentication
- [ ] Social logins (Google, Facebook, Instagram)
- [ ] ChatGPT AI chatbot
- [ ] WhatsApp Business API
- [ ] Telegram bot
- [ ] Google Sheets integration
- [ ] Google Meet video consultations
- [ ] SMS notifications

### **Phase 3: Advanced Features** ⏳ **PLANNED**
- [ ] Electron desktop app
- [ ] Enhanced role-specific dashboards
- [ ] Lab/Scan management modules
- [ ] Billing & payment system
- [ ] Inventory management
- [ ] Advanced analytics
- [ ] Report generation
- [ ] Mobile native app (React Native)

---

## 📖 Documentation

Comprehensive documentation is available in the root directory:

- **`DEPLOYMENT_GUIDE.md`** - Complete deployment instructions
- **`QUICK_DEPLOY.md`** - Quick start deployment
- **`ENTERPRISE_IMPLEMENTATION_PLAN.md`** - Full project roadmap
- **`PHASE1_COMPLETE.md`** - Phase 1 implementation summary
- **`BOOKING_ANALYSIS.md`** - Booking system analysis
- **`ENHANCED_UI_COMPLETE.md`** - UI/UX enhancements

---

## 🤝 Contributing

This is a private hospital management system. For contributions or inquiries, please contact:

**Email:** sravaniteja2002@gmail.com  
**Phone:** 0863-2233644

---

## 📄 License

Copyright © 2026 Sravani Multi-Specialty Hospital. All rights reserved.

This software is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

---

## 🙏 Acknowledgments

- **Base44 SDK** - Authentication and data management
- **Vercel** - Hosting and deployment
- **Shadcn/UI** - Beautiful component library
- **Radix UI** - Accessible primitives
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling framework

---

## 📞 Support

### **Technical Support:**
- GitHub Issues: [Create an issue](https://github.com/YOUR_USERNAME/sravani-hospital/issues)
- Email: sravaniteja2002@gmail.com

### **Hospital Contact:**
- **Phone:** 0863-2233644, 9966177014
- **Emergency:** 0863-2352354
- **Address:** Old Bank Road, Kotthapet, Guntur 522001, Andhra Pradesh

---

## 🌟 Features Showcase

### **Login Page**
- Full-size hospital gallery (60% width)
- 6 rotating real hospital images
- 3D parallax mouse tracking
- Premium glassmorphism design
- Quick access role buttons

### **Hero Section**
- 5-model 3D slider
- Real hospital images from gallery
- Interactive navigation (dots + numbers)
- Smooth spring animations
- Stats and emergency banner

### **Booking System**
- Multi-step form
- Department selection
- Doctor selection
- Date/time picker
- Google Sheets sync
- Confirmation page

### **Responsive Design**
- Mobile-first approach
- Touch-optimized
- Bottom navigation on mobile
- Adaptive layouts
- Native-like experience

---

## 🎨 Design Philosophy

- **Modern & Premium** - High-end aesthetics
- **3D & Depth** - Perspective transforms
- **Interactive** - Engaging animations
- **Professional** - Medical credibility
- **User-Friendly** - Clear navigation
- **Accessible** - WCAG compliant
- **Performant** - Fast loading

---

## 📈 Performance

**Target Metrics:**
- Lighthouse Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90
- Page Load: < 2 seconds
- First Contentful Paint: < 1.5s

---

## 🏆 Awards & Recognition

**Sravani Multi-Specialty Hospital**
- 18+ Years of Excellence
- 50,000+ Patients Treated
- 24/7 Emergency Services
- NABH Accredited
- Multi-Specialty Care

---

**Built with ❤️ for Sravani Multi-Specialty Hospital, Guntur**

**Excellence in Healthcare Since 2006**

---

## 🔗 Quick Links

- [Live Demo](#) - Coming soon
- [Documentation](./DEPLOYMENT_GUIDE.md)
- [Roadmap](./ENTERPRISE_IMPLEMENTATION_PLAN.md)
- [Hospital Website](https://sravanihospital.org)

---

**Made in India 🇮🇳 | Serving Guntur, Andhra Pradesh**
