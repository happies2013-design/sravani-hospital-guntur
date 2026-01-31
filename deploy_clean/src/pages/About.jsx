
import React from 'react';
import { motion } from 'framer-motion';
import {
    Award,
    Users,
    Heart,
    Target,
    Eye,
    Shield,
    CheckCircle2,
    Building2,
    Stethoscope,
    Clock,
    Star
} from 'lucide-react';

const milestones = [
    { year: '2006', title: 'Hospital Founded', description: 'Sravani Hospital established with a vision to provide quality healthcare' },
    { year: '2010', title: 'First Expansion', description: 'Added new departments including Cardiology and Orthopaedics' },
    { year: '2014', title: 'ICU Wing', description: 'State-of-the-art ICU facility inaugurated' },
    { year: '2018', title: 'Advanced Diagnostics', description: 'Introduced CT Scan and advanced imaging services' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched online appointment booking and patient portal' },
    { year: '2024', title: 'Present Day', description: 'Serving 100,000+ patients with 50+ specialist doctors' },
];

const values = [
    {
        icon: Heart,
        title: 'Compassion',
        description: 'We treat every patient with empathy, understanding, and genuine care.'
    },
    {
        icon: Award,
        title: 'Excellence',
        description: 'We strive for the highest standards in medical care and patient outcomes.'
    },
    {
        icon: Shield,
        title: 'Integrity',
        description: 'We maintain transparency and ethical practices in all our services.'
    },
    {
        icon: Users,
        title: 'Teamwork',
        description: 'Our collaborative approach ensures comprehensive patient care.'
    },
];

const certifications = [
    'ISO 9001:2015 Certified',
    'NABH Accredited',
    'Quality Management System Certified',
    'Bio-Medical Waste Management Compliant',
];

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20">
                <div className="absolute inset-0 bg-[url('https://sravanihospital.org/img/about/1.jpg')] bg-cover bg-center opacity-20" />
                <div className="relative max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <img
                            src="https://sravanihospital.org/img/sravani.png"
                            alt="Sravani Hospital"
                            className="h-20 mx-auto mb-6"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sravani Multi-Specialty Hospital</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            We Care, We Cure - Delivering compassionate healthcare since 2006
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                                <Building2 className="w-4 h-4" />
                                Our Story
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                A Legacy of Healing Since 2006
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Sravani Multi-Specialty Hospital was established in 2006 with a vision to provide
                                    world-class healthcare services to the people of Guntur and surrounding regions.
                                    What started as a small healthcare facility has grown into one of the most trusted
                                    multi-specialty hospitals in Andhra Pradesh.
                                </p>
                                <p>
                                    Our founder's vision was simple yet profound: to make quality healthcare accessible
                                    to everyone, regardless of their economic background. This vision continues to guide
                                    us as we expand our services and embrace new technologies.
                                </p>
                                <p>
                                    Today, we are proud to serve over 100,000 patients annually with a team of 50+
                                    highly qualified doctors and 200+ dedicated staff members across 7 medical specialties.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://sravanihospital.org/img/photo.jpg"
                                alt="Sravani Hospital Building"
                                className="rounded-3xl shadow-2xl"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop';
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8"
                        >
                            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To provide comprehensive, compassionate, and affordable healthcare services
                                to our community while maintaining the highest standards of medical excellence.
                                We are committed to treating every patient with dignity and respect, ensuring
                                their physical and emotional well-being.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8"
                        >
                            <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To be recognized as the leading healthcare institution in Andhra Pradesh,
                                known for our clinical excellence, patient-centered care, and contribution
                                to medical education and research. We aspire to set new benchmarks in
                                healthcare delivery and patient outcomes.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <p className="text-gray-600 text-lg">
                            These values guide everything we do at Sravani Hospital
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
                            >
                                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
                        {[
                            { value: '18+', label: 'Years of Service' },
                            { value: '50+', label: 'Expert Doctors' },
                            { value: '1L+', label: 'Patients Served' },
                            { value: '7', label: 'Specialties' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                                <p className="text-blue-200">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
                        <p className="text-gray-600 text-lg">Milestones that shaped Sravani Hospital</p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2" />

                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-center gap-8 mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                    }`}
                            >
                                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <div className="bg-gray-50 rounded-2xl p-6 inline-block">
                                        <span className="text-blue-600 font-bold text-lg">{milestone.year}</span>
                                        <h3 className="font-bold text-gray-900 mt-1">{milestone.title}</h3>
                                        <p className="text-gray-600 text-sm mt-2">{milestone.description}</p>
                                    </div>
                                </div>
                                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10" />
                                <div className="flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Certifications & Accreditations
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Recognized for our commitment to quality and safety
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex items-center gap-4"
                            >
                                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                                <span className="font-medium text-gray-800">{cert}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}