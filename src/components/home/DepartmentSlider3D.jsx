import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';

const departments = [
  {
    id: 1,
    name: 'Gastroenterology',
    slug: 'gastroenterology',
    description: 'Expert care for digestive disorders with advanced endoscopy services. Our doctor Dr. Posani Srinivasa Rao, F.R.C.S., has expertise in full spectrum management of gastrointestinal, liver and bowel diseases.',
    image: 'https://sravanihospital.org/img/doctor-2.jpg',
    icon: '🫄',
    color: 'from-orange-500 to-red-500',
    features: ['Advanced Endoscopy', 'Liver Disease Management', 'ERCP Procedures', 'Colonoscopy']
  },
  {
    id: 2,
    name: 'Gynaecology',
    slug: 'gynaecology',
    description: 'Comprehensive women\'s healthcare including maternity services, high-risk pregnancy management, laparoscopic surgeries, and infertility treatments with compassionate care.',
    image: 'https://sravanihospital.org/img/doctor-3.jpg',
    icon: '👩‍⚕️',
    color: 'from-pink-500 to-rose-500',
    features: ['Maternity Care', 'Laparoscopic Surgery', 'Infertility Treatment', 'High-Risk Pregnancy']
  },
  {
    id: 3,
    name: 'Orthopaedics',
    slug: 'orthopaedics',
    description: 'Advanced bone and joint care with expertise in joint replacement surgeries, arthroscopy, trauma care, and sports medicine for optimal mobility and pain-free living.',
    image: 'https://sravanihospital.org/img/doctor-4.jpg',
    icon: '🦴',
    color: 'from-blue-500 to-cyan-500',
    features: ['Joint Replacement', 'Arthroscopy', 'Trauma Care', 'Sports Medicine']
  },
  {
    id: 4,
    name: 'General Medicine',
    slug: 'general-medicine',
    description: 'Comprehensive primary healthcare and chronic disease management including diabetes care, hypertension management, and preventive health checkups.',
    image: 'https://sravanihospital.org/img/doctor-5.jpg',
    icon: '🩺',
    color: 'from-green-500 to-emerald-500',
    features: ['Diabetes Care', 'Hypertension', 'Health Checkups', 'Infectious Diseases']
  },
  {
    id: 5,
    name: 'Paediatrics',
    slug: 'paediatrics',
    description: 'Specialized child healthcare from newborns to adolescents including NICU services, vaccination programs, and growth monitoring with child-friendly environment.',
    image: 'https://sravanihospital.org/img/doctor-51.jpg',
    icon: '👶',
    color: 'from-purple-500 to-violet-500',
    features: ['NICU Services', 'Vaccination', 'Growth Monitoring', 'Pediatric Emergency']
  },
  {
    id: 6,
    name: 'Critical Care & Anaesthesia',
    slug: 'critical-care',
    description: 'State-of-the-art ICU with advanced life support systems, 24/7 monitoring by intensivists, and comprehensive critical care for life-threatening conditions.',
    image: 'https://sravanihospital.org/img/doctor-1.jpg',
    icon: '🏥',
    color: 'from-gray-600 to-gray-800',
    features: ['24/7 ICU', 'Ventilator Support', 'Trauma Care', 'Post-Surgery Care']
  }
];

export default function DepartmentSlider3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % departments.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % departments.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + departments.length) % departments.length);
    setIsAutoPlaying(false);
  };

  const currentDept = departments[currentIndex];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">Our Specialties</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Centers of Excellence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combining medical expertise with state-of-the-art technology to deliver comprehensive healthcare across multiple specialties.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden min-h-[500px] border border-gray-100">
            <div className="grid lg:grid-cols-2 h-full">
              {/* Left: Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <span className="text-9xl">{currentDept.icon}</span>
                </div>

                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 * direction }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 * direction }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white mb-6 bg-gradient-to-r ${currentDept.color}`}>
                      {currentDept.name}
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      {currentDept.name}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {currentDept.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {currentDept.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentDept.color}`} />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link to={createPageUrl(`Department?slug=${currentDept.slug}`)}>
                        <Button className={`bg-gradient-to-r ${currentDept.color} hover:opacity-90 transition-opacity`}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Link to={createPageUrl('BookAppointment')}>
                        <Button variant="outline" className="border-gray-200 hover:bg-gray-50">
                          Book Appointment
                          <Calendar className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: Image */}
              <div className="relative h-[300px] lg:h-auto overflow-hidden bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={currentDept.image}
                    alt={currentDept.name}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-l" />

                {/* Navigation Buttons */}
                <div className="absolute bottom-6 right-6 flex gap-3 z-20">
                  <Button
                    size="icon"
                    variant="secondary"
                    onClick={handlePrev}
                    className="rounded-full bg-white/90 hover:bg-white text-gray-900 backdrop-blur-sm shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    onClick={handleNext}
                    className="rounded-full bg-white/90 hover:bg-white text-gray-900 backdrop-blur-sm shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {departments.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
