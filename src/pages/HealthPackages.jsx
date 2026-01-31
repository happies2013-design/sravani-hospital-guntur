import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    CheckCircle2,
    Clock,
    Phone,
    Star,
    Heart,
    Activity,
    Baby,
    User,
    Calendar,
    ArrowRight
} from 'lucide-react';

const samplePackages = [
    {
        id: '1',
        name: 'Executive Health Checkup',
        slug: 'executive',
        description: 'Comprehensive health screening for working professionals to ensure overall wellness and early detection of potential health issues.',
        tests_included: [
            'Complete Blood Count (CBC)',
            'Liver Function Test (LFT)',
            'Kidney Function Test (KFT)',
            'Lipid Profile',
            'Blood Sugar (Fasting & PP)',
            'Thyroid Profile (T3, T4, TSH)',
            'Urine Routine',
            'Chest X-Ray',
            'ECG',
            'Physician Consultation'
        ],
        price: 2999,
        discounted_price: 2499,
        duration: '3-4 hours',
        category: 'executive',
        recommended_for: 'Adults 25-50 years',
        is_featured: true
    },
    {
        id: '2',
        name: 'Diabetes Screening Package',
        slug: 'diabetes',
        description: 'Specialized package for diabetes risk assessment and monitoring for those with family history or lifestyle risk factors.',
        tests_included: [
            'Fasting Blood Sugar',
            'Post Prandial Blood Sugar',
            'HbA1c',
            'Lipid Profile',
            'Kidney Function Test',
            'Urine Microalbumin',
            'Eye Examination',
            'Foot Examination',
            'Diabetologist Consultation'
        ],
        price: 1999,
        discounted_price: 1599,
        duration: '2-3 hours',
        category: 'diabetes',
        recommended_for: 'Adults with diabetes or family history',
        is_featured: true
    },
    {
        id: '3',
        name: 'Cardiac Health Package',
        slug: 'cardiac',
        description: 'Complete cardiac evaluation to assess heart health and detect any cardiovascular risks early.',
        tests_included: [
            'Lipid Profile',
            'Blood Sugar',
            'ECG',
            '2D Echocardiography',
            'Treadmill Test (TMT)',
            'hs-CRP',
            'Chest X-Ray',
            'Cardiologist Consultation'
        ],
        price: 4999,
        discounted_price: 3999,
        duration: '4-5 hours',
        category: 'cardiac',
        recommended_for: 'Adults 40+ or with heart disease history',
        is_featured: true
    },
    {
        id: '4',
        name: "Women's Wellness Package",
        slug: 'women',
        description: "Comprehensive health screening designed specifically for women's unique health needs.",
        tests_included: [
            'Complete Blood Count',
            'Thyroid Profile',
            'Pap Smear',
            'Breast Examination',
            'Pelvic Ultrasound',
            'Bone Density Test',
            'Vitamin D',
            'Calcium',
            'Gynaecologist Consultation'
        ],
        price: 3499,
        discounted_price: 2999,
        duration: '3-4 hours',
        category: 'women',
        recommended_for: 'Women 30+ years',
        is_featured: true
    },
    {
        id: '5',
        name: 'Senior Citizen Package',
        slug: 'senior',
        description: 'Complete health assessment for seniors covering all vital parameters and age-related health concerns.',
        tests_included: [
            'Complete Blood Count',
            'Liver & Kidney Function',
            'Lipid Profile',
            'Blood Sugar (Fasting & PP)',
            'Thyroid Profile',
            'Vitamin B12 & D',
            'Bone Density (DEXA)',
            'ECG',
            '2D Echo',
            'Chest X-Ray',
            'Eye Examination',
            'Physician Consultation'
        ],
        price: 5999,
        discounted_price: 4999,
        duration: '5-6 hours',
        category: 'senior',
        recommended_for: 'Adults 60+ years',
        is_featured: false
    },
    {
        id: '6',
        name: 'Pediatric Wellness Package',
        slug: 'pediatric',
        description: 'Health checkup package designed for children to monitor growth, development, and overall health.',
        tests_included: [
            'Complete Blood Count',
            'Blood Sugar',
            'Vitamin D',
            'Iron Studies',
            'Growth Assessment',
            'Vision Screening',
            'Hearing Test',
            'Pediatrician Consultation'
        ],
        price: 1999,
        discounted_price: 1499,
        duration: '2-3 hours',
        category: 'pediatric',
        recommended_for: 'Children 3-15 years',
        is_featured: false
    }
];

const categoryIcons = {
    executive: Activity,
    diabetes: Activity,
    cardiac: Heart,
    women: User,
    senior: User,
    pediatric: Baby
};

const categoryColors = {
    executive: 'bg-blue-100 text-blue-600',
    diabetes: 'bg-orange-100 text-orange-600',
    cardiac: 'bg-red-100 text-red-600',
    women: 'bg-pink-100 text-pink-600',
    senior: 'bg-purple-100 text-purple-600',
    pediatric: 'bg-green-100 text-green-600'
};

export default function HealthPackages() {
    const { data: packages = [] } = useQuery({
        queryKey: ['healthPackages'],
        queryFn: () => base44.entities.HealthPackage.list(),
    });

    const displayPackages = packages.length > 0 ? packages : samplePackages;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-green-600 to-green-800 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Health Checkup Packages</h1>
                        <p className="text-xl text-green-100 max-w-2xl mx-auto">
                            Comprehensive health screening packages designed for different age groups and health needs
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Health Checkup */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Regular Health Checkups?</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: Activity, title: 'Early Detection', desc: 'Identify health issues before they become serious' },
                            { icon: Heart, title: 'Preventive Care', desc: 'Take proactive steps to maintain good health' },
                            { icon: Clock, title: 'Save Time', desc: 'All tests under one roof in a single visit' },
                            { icon: Star, title: 'Expert Care', desc: 'Consultation with specialist doctors' }
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 bg-gray-50 rounded-2xl"
                            >
                                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-7 h-7 text-green-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayPackages.map((pkg, index) => {
                            const Icon = categoryIcons[pkg.category] || Activity;
                            const colorClass = categoryColors[pkg.category] || 'bg-gray-100 text-gray-600';

                            return (
                                <motion.div
                                    key={pkg.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
                                >
                                    {/* Header */}
                                    <div className="p-6 border-b">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClass}`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            {pkg.is_featured && (
                                                <Badge className="bg-yellow-100 text-yellow-700">Popular</Badge>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                        <p className="text-gray-600 text-sm">{pkg.description}</p>
                                    </div>

                                    {/* Tests */}
                                    <div className="p-6 border-b">
                                        <p className="text-sm font-semibold text-gray-900 mb-3">
                                            Includes {pkg.tests_included?.length || 0} Tests:
                                        </p>
                                        <div className="space-y-2 max-h-40 overflow-y-auto">
                                            {pkg.tests_included?.slice(0, 6).map((test) => (
                                                <div key={test} className="flex items-center gap-2 text-sm">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                    <span className="text-gray-700">{test}</span>
                                                </div>
                                            ))}
                                            {pkg.tests_included?.length > 6 && (
                                                <p className="text-blue-600 text-sm font-medium">
                                                    +{pkg.tests_included.length - 6} more tests
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-6 border-b bg-gray-50">
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Clock className="w-4 h-4" />
                                                <span>{pkg.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <User className="w-4 h-4" />
                                                <span>{pkg.recommended_for}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price & CTA */}
                                    <div className="p-6">
                                        <div className="flex items-end gap-2 mb-4">
                                            <span className="text-3xl font-bold text-gray-900">
                                                ₹{pkg.discounted_price || pkg.price}
                                            </span>
                                            {pkg.discounted_price && pkg.discounted_price < pkg.price && (
                                                <>
                                                    <span className="text-lg text-gray-400 line-through">₹{pkg.price}</span>
                                                    <Badge className="bg-green-100 text-green-700 ml-2">
                                                        {Math.round((1 - pkg.discounted_price / pkg.price) * 100)}% OFF
                                                    </Badge>
                                                </>
                                            )}
                                        </div>
                                        <Link to={createPageUrl(`BookPackage?id=${pkg.id}`)}>
                                            <Button className="w-full bg-green-600 hover:bg-green-700">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                Book Now
                                            </Button>
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Need a Customized Health Package?
                    </h2>
                    <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                        Contact us to create a personalized health checkup package based on your specific needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:08632233644">
                            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                                <Phone className="w-5 h-5 mr-2" />
                                Call: 0863-2233644
                            </Button>
                        </a>
                        <Link to={createPageUrl('Contact')}>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                Contact Us
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}