import React from 'react';
import { motion } from 'framer-motion';
import {
    Ambulance,
    FlaskConical,
    Pill,
    ScanLine,
    Heart,
    Baby,
    Bed,
    Stethoscope,
    Syringe,
    Activity,
    Shield,
    Clock,
    CheckCircle2,
    Phone
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const facilities = [
    {
        category: 'Emergency & Critical Care',
        items: [
            {
                icon: Ambulance,
                title: '24/7 Emergency Care',
                description: 'Round-the-clock emergency services with fully equipped trauma care unit. Our emergency team is trained to handle all types of medical emergencies with quick response times.',
                features: ['Trauma Care', 'Cardiac Emergency', 'Stroke Management', 'Accident Care'],
                image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=600&h=400&fit=crop'
            },
            {
                icon: Activity,
                title: 'Intensive Care Unit (ICU)',
                description: 'State-of-the-art ICU with advanced monitoring systems, ventilators, and round-the-clock care by intensivists and trained nursing staff.',
                features: ['24/7 Monitoring', 'Ventilator Support', 'Specialized Nursing', 'Modern Equipment'],
                image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop'
            },
            {
                icon: Ambulance,
                title: 'Ambulance Services',
                description: 'Fleet of ventilator-equipped ambulances available 24/7 for emergency patient transport with trained paramedics.',
                features: ['GPS Tracking', 'Ventilator Equipped', 'Trained Paramedics', 'Quick Response'],
                image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=600&h=400&fit=crop'
            },
        ]
    },
    {
        category: 'Diagnostics & Imaging',
        items: [
            {
                icon: ScanLine,
                title: 'Radiology & Imaging',
                description: 'Advanced imaging facilities including CT Scan, Digital X-Ray, Ultrasound, and Mammography for accurate diagnosis.',
                features: ['CT Scan', 'Digital X-Ray', '3D/4D Ultrasound', 'Mammography'],
                image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop'
            },
            {
                icon: FlaskConical,
                title: 'Pathology Laboratory',
                description: 'Fully automated laboratory with advanced analyzers for accurate and quick diagnostic reports. NABL accredited lab.',
                features: ['Automated Analyzers', 'Quick Results', 'Home Sample Collection', 'NABL Accredited'],
                image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop'
            },
            {
                icon: Heart,
                title: 'Cardiac Diagnostics',
                description: 'Complete cardiac diagnostic services including ECG, 2D Echo, TMT, and Holter monitoring.',
                features: ['ECG', '2D Echocardiography', 'TMT', 'Holter Monitoring'],
                image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&h=400&fit=crop'
            },
        ]
    },
    {
        category: 'Pharmacy & Support Services',
        items: [
            {
                icon: Pill,
                title: '24/7 Pharmacy',
                description: 'In-house pharmacy with complete range of medicines, surgical supplies, and medical equipment available round the clock.',
                features: ['All Medicines Available', 'Affordable Prices', '24/7 Service', 'Home Delivery'],
                image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop'
            },
            {
                icon: Syringe,
                title: 'Blood Bank',
                description: 'Fully equipped blood bank facility with proper storage and testing capabilities. Safe blood transfusion services.',
                features: ['All Blood Groups', 'Component Therapy', 'Safe Storage', '24/7 Available'],
                image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&h=400&fit=crop'
            },
            {
                icon: Activity,
                title: 'Physiotherapy Center',
                description: 'Modern physiotherapy unit with trained therapists for rehabilitation and recovery programs.',
                features: ['Post-Surgery Rehab', 'Sports Injuries', 'Neurological Rehab', 'Orthopedic Care'],
                image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
            },
        ]
    },
    {
        category: 'Patient Care Facilities',
        items: [
            {
                icon: Bed,
                title: 'Private & General Wards',
                description: 'Comfortable rooms and wards with modern amenities, nurse call system, and round-the-clock nursing care.',
                features: ['AC Rooms', 'Attached Bathroom', 'TV & WiFi', 'Attendant Facility'],
                image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop'
            },
            {
                icon: Baby,
                title: 'Maternity Ward',
                description: 'Specialized maternity ward with labor room, NICU, and post-natal care facilities for mother and newborn.',
                features: ['Labor Room', 'NICU', 'Breastfeeding Support', 'Newborn Care'],
                image: 'https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=600&h=400&fit=crop'
            },
            {
                icon: Stethoscope,
                title: 'Operation Theaters',
                description: 'State-of-the-art modular operation theaters with laminar air flow, advanced anesthesia workstations, and monitoring systems.',
                features: ['Modular OT', 'Laminar Flow', 'Advanced Equipment', 'Strict Sterilization'],
                image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop'
            },
        ]
    },
];

export default function Facilities() {
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Facilities</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            World-class infrastructure and advanced medical technology for comprehensive healthcare
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-12 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: Bed, value: '100+', label: 'Beds' },
                            { icon: Activity, value: '10+', label: 'ICU Beds' },
                            { icon: Stethoscope, value: '4', label: 'Operation Theaters' },
                            { icon: Clock, value: '24/7', label: 'Emergency Services' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 bg-gray-50 rounded-2xl"
                            >
                                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                                <p className="text-gray-600 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities by Category */}
            {facilities.map((category, catIndex) => (
                <section key={category.category} className={`py-16 ${catIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-bold text-gray-900 mb-10"
                        >
                            {category.category}
                        </motion.h2>

                        <div className="space-y-8">
                            {category.items.map((facility, index) => (
                                <motion.div
                                    key={facility.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                                >
                                    <div className="lg:w-1/2">
                                        <img
                                            src={facility.image}
                                            alt={facility.title}
                                            className="w-full h-64 lg:h-80 object-cover rounded-3xl shadow-xl"
                                        />
                                    </div>
                                    <div className="lg:w-1/2">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                                <facility.icon className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">{facility.title}</h3>
                                        </div>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {facility.description}
                                        </p>
                                        <div className="grid grid-cols-2 gap-3">
                                            {facility.features.map((feature) => (
                                                <div key={feature} className="flex items-center gap-2">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    <span className="text-gray-700 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Need Medical Assistance?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Our facilities are equipped to handle all your healthcare needs. Contact us for appointments or emergency care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:08632352354">
                            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                                <Phone className="w-5 h-5 mr-2" />
                                Emergency: 0863-2352354
                            </Button>
                        </a>
                        <a href="tel:08632233644">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                <Phone className="w-5 h-5 mr-2" />
                                General: 0863-2233644
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}