import React from 'react';
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
  Mail
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
  hospitalImage: 'https://sravanihospital.org/img/photo.jpg',
  mainDoctor: {
    name: 'Dr. Posani Srinivasa Rao',
    qualification: 'F.R.C.S.',
    expertise: 'Expert in full spectrum management of gastrointestinal, liver and bowel diseases'
  }
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Top Bar with Contact Info */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm gap-2">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a href={`mailto:${hospitalInfo.email}`} className="flex items-center gap-1 hover:text-blue-200">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{hospitalInfo.email}</span>
            </a>
            <a href={`tel:${hospitalInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-1 hover:text-blue-200">
              <Phone className="w-4 h-4" />
              <span>{hospitalInfo.phone}</span>
            </a>
            <span className="hidden md:flex items-center gap-1">
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

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo & Badge */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={hospitalInfo.logo}
                alt="Sravani Hospital Logo"
                className="h-16 md:h-20"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                NABH Accredited
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              World - Class <span className="text-blue-600">Healthcare</span> <br />
              With a Personal Touch
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Experience the best of medical care with our team of 50+ experts and advanced technology.
              {hospitalInfo.tagline}.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to={createPageUrl('book-appointment')}>
                <Button className="h-12 px-8 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl shadow-blue-200">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <Link to={createPageUrl('contact')}>
                <Button variant="outline" className="h-12 px-8 text-lg border-blue-600 text-blue-600 hover:bg-blue-50">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Emergency Banner */}
            <div className="mt-8 md:mt-12 bg-red-50 border border-red-100 rounded-xl p-4 md:p-6 flex items-start gap-4 max-w-lg">
              <div className="bg-red-100 p-3 rounded-full shrink-0">
                <Phone className="w-6 h-6 text-red-600 animate-pulse" />
              </div>
              <div>
                <p className="font-semibold text-red-900">Emergency 24x7</p>
                <p className="text-red-700 text-sm mb-1">Trauma & Critical Care Services</p>
                <a href={`tel:${hospitalInfo.emergency.replace(/\s/g, '')}`} className="text-2xl font-bold text-red-600 hover:underline inline-block">
                  {hospitalInfo.emergency}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image/Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-[500px]"
          >
            <Hero3DSlider />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Hero3DSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const slides = [
    "https://sravanihospital.org/img/photo.jpg",
    "/img/hero-slide-1.jpg",
    "/img/hero-slide-2.png"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
      <div className="relative w-full h-[400px] md:h-[500px]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={currentIndex}
            src={slides[currentIndex]}
            alt={`Sravani Hospital Highlights ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
            initial={{ opacity: 0, rotateY: -90, x: 100 }}
            animate={{ opacity: 1, rotateY: 0, x: 0, zIndex: 1 }}
            exit={{ opacity: 0, rotateY: 90, x: -100, zIndex: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.8
            }}
          />
        </AnimatePresence>

        {/* Floating Badge (Static on top of slider) */}
        <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-4 w-fit mx-auto lg:mx-0"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Head Surgeon</p>
              <p className="text-sm font-bold text-gray-900">{hospitalInfo.mainDoctor.name}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
