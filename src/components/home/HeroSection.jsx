import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Phone,
  Clock,
  Shield,
  Award,
  ArrowRight,
  MapPin,
  Mail,
  Sparkles,
  Heart,
  Activity,
  Users,
  Building2
} from 'lucide-react';

const hospitalInfo = {
  name: 'Sravani Multi-Specialty Hospital',
  tagline: 'We Care, We Cure',
  address: 'Old Bank Road, Kotthapet, Guntur 522001, A.P',
  email: 'sravaniteja2002@gmail.com',
  phone: '0863 - 2233644, 9966177014',
  insurance: '+91 6300 175 001',
  emergency: '0863 - 2352354',
  logo: 'https://sravanihospital.org/img/sravani.png',
  mainDoctor: {
    name: 'Dr. Posani Srinivasa Rao',
    qualification: 'F.R.C.S.',
    expertise: 'Expert in full spectrum management of gastrointestinal, liver and bowel diseases'
  }
};

// 5 Gallery Models for 3D Slider
const heroSlides = [
  {
    id: 1,
    image: "https://sravanihospital.org/img/gallery/0.jpg",
    title: "State-of-the-Art Facilities",
    subtitle: "Modern Healthcare Infrastructure",
    badge: "Advanced Technology",
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: 2,
    image: "https://sravanihospital.org/img/gallery/1.jpg",
    title: "Expert Medical Team",
    subtitle: "50+ Specialist Doctors",
    badge: "Experienced Professionals",
    color: "from-purple-600 to-pink-500"
  },
  {
    id: 3,
    image: "https://sravanihospital.org/img/gallery/2.jpg",
    title: "Advanced Equipment",
    subtitle: "Latest Medical Technology",
    badge: "Cutting-Edge Care",
    color: "from-green-600 to-emerald-500"
  },
  {
    id: 4,
    image: "https://sravanihospital.org/img/gallery/3.jpg",
    title: "Patient Care Excellence",
    subtitle: "Compassionate Healthcare",
    badge: "Patient-Centered",
    color: "from-orange-600 to-amber-500"
  },
  {
    id: 5,
    image: "https://sravanihospital.org/img/gallery/4.jpg",
    title: "24/7 Emergency Services",
    subtitle: "Always Here for You",
    badge: "Round-the-Clock Care",
    color: "from-red-600 to-rose-500"
  }
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
      {/* Top Bar with Contact Info */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm gap-2">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a href={`mailto:${hospitalInfo.email}`} className="flex items-center gap-1.5 hover:text-blue-200 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{hospitalInfo.email}</span>
            </a>
            <a href={`tel:${hospitalInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-blue-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>{hospitalInfo.phone}</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {hospitalInfo.address}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Insurance: {hospitalInfo.insurance}</span>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-10 w-80 h-80 bg-cyan-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 30, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            {/* Logo & Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <motion.img
                src={hospitalInfo.logo}
                alt="Sravani Hospital Logo"
                className="h-16 md:h-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-semibold shadow-lg"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Shield className="w-4 h-4" />
                NABH Accredited
              </motion.div>
            </div>

            <motion.h1
              className="text-4xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              World-Class{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Healthcare
              </span>
              <br />
              With a Personal Touch
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Experience the best of medical care with our team of <strong>50+ expert doctors</strong> and
              state-of-the-art technology. {hospitalInfo.tagline}.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">18+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-1">50K+</div>
                <div className="text-xs text-gray-600">Happy Patients</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                <div className="text-xs text-gray-600">Emergency Care</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to={createPageUrl('book-appointment')}>
                <Button className="h-14 px-8 text-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-xl shadow-blue-200 group">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={createPageUrl('contact')}>
                <Button variant="outline" className="h-14 px-8 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                  Contact Us
                  <Phone className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>

            {/* Emergency Banner */}
            <motion.div
              className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6 flex items-start gap-4 max-w-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                className="bg-red-500 p-3 rounded-full shrink-0"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Phone className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <p className="font-bold text-red-900 text-lg">Emergency 24×7</p>
                <p className="text-red-700 text-sm mb-2">Trauma & Critical Care Services</p>
                <a
                  href={`tel:${hospitalInfo.emergency.replace(/\s/g, '')}`}
                  className="text-3xl font-bold text-red-600 hover:text-red-700 transition-colors inline-block"
                >
                  {hospitalInfo.emergency}
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: 3D Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block h-[600px]"
          >
            <Hero3DSlider />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Hero3DSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentSlide = heroSlides[currentIndex];

  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
      <div className="relative w-full h-full">
        {/* Main Slider */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{
              opacity: 0,
              rotateY: direction > 0 ? 90 : -90,
              scale: 0.8,
              x: direction > 0 ? 100 : -100
            }}
            animate={{
              opacity: 1,
              rotateY: 0,
              scale: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              rotateY: direction > 0 ? -90 : 90,
              scale: 0.8,
              x: direction > 0 ? -100 : 100
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              duration: 0.8
            }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Image Container with 3D Effect */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              {/* Image */}
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${currentSlide.color} opacity-30 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${currentSlide.color} rounded-full mb-4`}>
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-semibold">{currentSlide.badge}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{currentSlide.title}</h3>
                  <p className="text-white/90 text-lg">{currentSlide.subtitle}</p>
                </motion.div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-white/30 rounded-tr-2xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-white/30 rounded-bl-2xl" />
            </div>

            {/* Floating Icons */}
            <motion.div
              className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart className="w-10 h-10 text-red-500" />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
          {heroSlides.map((slide, index) => (
            <motion.button
              key={slide.id}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all ${index === currentIndex
                  ? 'w-12 bg-gradient-to-r from-blue-600 to-cyan-500'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Side Indicators */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-16 space-y-4">
          {heroSlides.map((slide, index) => (
            <motion.button
              key={slide.id}
              onClick={() => handleDotClick(index)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${index === currentIndex
                  ? `bg-gradient-to-br ${slide.color} shadow-lg scale-110`
                  : 'bg-white/50 hover:bg-white/80'
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`text-sm font-bold ${index === currentIndex ? 'text-white' : 'text-gray-600'}`}>
                {index + 1}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Floating Stats Badge */}
      <motion.div
        className="absolute -bottom-8 left-8 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-4 border-2 border-blue-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
          <Award className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">Head Surgeon</p>
          <p className="text-sm font-bold text-gray-900">{hospitalInfo.mainDoctor.name}</p>
          <p className="text-xs text-gray-600">{hospitalInfo.mainDoctor.qualification}</p>
        </div>
      </motion.div>
    </div>
  );
};
