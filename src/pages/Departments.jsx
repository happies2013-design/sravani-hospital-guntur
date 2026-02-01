import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Calendar,
    Activity,
    Heart,
    Bone,
    Stethoscope,
    Baby,
    AlertCircle,
    CheckCircle2
} from 'lucide-react';

const departments = [
    {
        name: 'Gastroenterology',
        slug: 'gastroenterology',
        icon: Activity,
        color: 'from-orange-500 to-red-500',
        bgColor: 'bg-orange-50',
        iconColor: 'text-orange-600',
        image: 'https://sravanihospital.org/img/doctor-2.jpg',
        description: 'Expert care for digestive disorders with advanced endoscopy services. Dr. Posani Srinivasa Rao, F.R.C.S., has expertise in full spectrum management of gastrointestinal, liver and bowel diseases.',
        services: ['Diagnostic Endoscopy', 'Colonoscopy', 'ERCP', 'Liver Disease Management', 'Laparoscopy']
    },
    {
        name: 'Gynaecology',
        slug: 'gynaecology',
        icon: Heart,
        color: 'from-pink-500 to-rose-500',
        bgColor: 'bg-pink-50',
        iconColor: 'text-pink-600',
        image: 'https://sravanihospital.org/img/doctor-3.jpg',
        description: 'Comprehensive women\'s healthcare including maternity services, high-risk pregnancy management, laparoscopic surgeries, and infertility treatments.',
        services: ['Maternity Care', 'Laparoscopic Surgery', 'Infertility Treatment', 'High-Risk Pregnancy', 'Gynecological Surgeries']
    },
    {
        name: 'Orthopaedics',
        slug: 'orthopaedics',
        icon: Bone,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50',
        iconColor: 'text-blue-600',
        image: 'https://sravanihospital.org/img/doctor-4.jpg',
        description: 'Advanced bone and joint care with expertise in joint replacement surgeries, arthroscopy, trauma care, and sports medicine.',
        services: ['Joint Replacement', 'Arthroscopy', 'Trauma Care', 'Sports Medicine', 'Spine Surgery']
    },
    {
        name: 'General Medicine',
        slug: 'general-medicine',
        icon: Stethoscope,
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-green-50',
        iconColor: 'text-green-600',
        image: 'https://sravanihospital.org/img/doctor-5.jpg',
        description: 'Comprehensive primary healthcare and chronic disease management including diabetes care, hypertension management, and preventive health checkups.',
        services: ['Diabetes Care', 'Hypertension', 'Health Checkups', 'Infectious Diseases', 'Preventive Care']
    },
    {
        name: 'Paediatrics',
        slug: 'paediatrics',
        icon: Baby,
        color: 'from-purple-500 to-violet-500',
        bgColor: 'bg-purple-50',
        iconColor: 'text-purple-600',
        image: 'https://sravanihospital.org/img/doctor-51.jpg',
        description: 'Specialized child healthcare from newborns to adolescents including NICU services, vaccination programs, and growth monitoring.',
        services: ['NICU Services', 'Vaccination', 'Growth Monitoring', 'Pediatric Emergency', 'Child Nutrition']
    },
    {
        name: 'Critical Care & Anaesthesia',
        slug: 'critical-care',
        icon: AlertCircle,
        color: 'from-gray-600 to-gray-800',
        bgColor: 'bg-gray-50',
        iconColor: 'text-gray-600',
        image: 'https://sravanihospital.org/img/doctor-1.jpg',
        description: 'State-of-the-art ICU with advanced life support systems, 24/7 monitoring by intensivists, and comprehensive critical care.',
        services: ['24/7 ICU', 'Ventilator Support', 'Trauma Care', 'Post-Surgery Care', 'Multi-Organ Support']
    }
];

export default function Departments() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Departments</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Specialized medical departments with expert doctors delivering comprehensive healthcare since 2006
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Departments Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {departments.map((dept, index) => (
                            <motion.div
                                key={dept.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={dept.image}
                                            alt={dept.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${dept.color} opacity-60`} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4">
                                            <div className={`w-12 h-12 ${dept.bgColor} rounded-xl flex items-center justify-center`}>
                                                <dept.icon className={`w-6 h-6 ${dept.iconColor}`} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                                        <p className="text-gray-600 text-sm mb-4 flex-1">{dept.description}</p>

                                        {/* Services */}
                                        <div className="mb-4">
                                            <p className="text-sm font-medium text-gray-700 mb-2">Key Services:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {dept.services.slice(0, 3).map((service) => (
                                                    <span
                                                        key={service}
                                                        className={`text-xs px-2 py-1 ${dept.bgColor} ${dept.iconColor} rounded-full`}
                                                    >
                                                        {service}
                                                    </span>
                                                ))}
                                                {dept.services.length > 3 && (
                                                    <span className="text-xs text-gray-500">+{dept.services.length - 3} more</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <div className="flex gap-2">
                                            <Link to={createPageUrl(`book-appointment?department=${dept.slug}`)} className="flex-1">
                                                <Button variant="outline" className="w-full">
                                                    Learn More
                                                </Button>
                                            </Link>
                                            <Link to={createPageUrl(`BookAppointment?department=${dept.slug}`)}>
                                                <Button className="bg-blue-600 hover:bg-blue-700">
                                                    <Calendar className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Need Medical Assistance?
                    </h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Our expert doctors are ready to help you. Book an appointment or call us for consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to={createPageUrl('book-appointment')}>
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                                <Calendar className="w-5 h-5 mr-2" />
                                Book Appointment
                            </Button>
                        </Link>
                        <a href="tel:08632233644">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                Call: 0863-2233644
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}