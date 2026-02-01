import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Heart, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function MedicalCamps() {
    const [registrationOpen, setRegistrationOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        camp: ''
    });

    const upcomingCamps = [
        {
            id: 1,
            title: 'Free General Health Checkup Camp',
            date: '15th February 2026',
            time: '9:00 AM - 2:00 PM',
            location: 'Community Hall, Guntur',
            services: ['Blood Pressure Check', 'Blood Sugar Test', 'BMI Assessment', 'General Consultation'],
            icon: '🏥',
            color: 'from-blue-500 to-blue-600'
        },
        {
            id: 2,
            title: 'Women\'s Health Awareness Camp',
            date: '22nd February 2026',
            time: '10:00 AM - 3:00 PM',
            location: 'Sravani Hospital Campus',
            services: ['Gynecology Consultation', 'Breast Cancer Screening', 'Bone Density Test', 'Nutrition Counseling'],
            icon: '👩‍⚕️',
            color: 'from-pink-500 to-pink-600'
        },
        {
            id: 3,
            title: 'Cardiac Health Screening Camp',
            date: '1st March 2026',
            time: '8:00 AM - 1:00 PM',
            location: 'Municipal Grounds, Guntur',
            services: ['ECG', 'Cholesterol Test', 'Cardiac Consultation', 'Diet Planning'],
            icon: '❤️',
            color: 'from-red-500 to-red-600'
        },
        {
            id: 4,
            title: 'Pediatric Vaccination Camp',
            date: '8th March 2026',
            time: '9:00 AM - 4:00 PM',
            location: 'Sravani Hospital',
            services: ['Routine Vaccinations', 'Growth Monitoring', 'Pediatric Consultation', 'Nutrition Guidance'],
            icon: '👶',
            color: 'from-green-500 to-green-600'
        }
    ];

    const pastCamps = [
        {
            title: 'Diabetes Awareness Camp',
            date: 'January 2026',
            participants: 250,
            image: '🩺'
        },
        {
            title: 'Eye Care Camp',
            date: 'December 2025',
            participants: 180,
            image: '👁️'
        },
        {
            title: 'Dental Health Camp',
            date: 'November 2025',
            participants: 200,
            image: '🦷'
        }
    ];

    const handleRegister = (campId) => {
        setFormData({ ...formData, camp: campId });
        setRegistrationOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration submission
        alert('Registration submitted successfully! We will contact you soon.');
        setRegistrationOpen(false);
        setFormData({ name: '', phone: '', email: '', camp: '' });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Heart className="w-5 h-5" />
                            <span className="text-sm font-medium">Community Health Initiative</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Camps</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Free health checkups and awareness programs for the community
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Upcoming Camps */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Medical Camps</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join our free medical camps and take a step towards better health
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {upcomingCamps.map((camp, index) => (
                        <motion.div
                            key={camp.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <div className={`h-2 bg-gradient-to-r ${camp.color}`}></div>
                            <div className="p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="text-4xl">{camp.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{camp.title}</h3>
                                        <div className="space-y-2 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-blue-600" />
                                                <span>{camp.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-blue-600" />
                                                <span>{camp.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-blue-600" />
                                                <span>{camp.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Services Offered:</h4>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {camp.services.map((service, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                                                <span>{service}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button
                                    onClick={() => handleRegister(camp.id)}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                                >
                                    Register Now
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Past Camps Stats */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
                        <p className="text-gray-600">Recent medical camps organized by Sravani Hospital</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {pastCamps.map((camp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 text-center shadow-lg"
                            >
                                <div className="text-5xl mb-3">{camp.image}</div>
                                <h3 className="font-bold text-gray-900 mb-2">{camp.title}</h3>
                                <p className="text-sm text-gray-600 mb-3">{camp.date}</p>
                                <div className="flex items-center justify-center gap-2 text-blue-600">
                                    <Users className="w-5 h-5" />
                                    <span className="font-semibold">{camp.participants}+ Participants</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                            <div className="text-gray-600">Camps Organized</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">10,000+</div>
                            <div className="text-gray-600">People Served</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                            <div className="text-gray-600">Free Service</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center">
                            <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
                            <div className="text-gray-600">Expert Doctors</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">Want to Organize a Camp in Your Area?</h2>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        We conduct medical camps in schools, colleges, corporate offices, and community centers.
                        Contact us to organize a free health camp for your community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:08632233644" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                            <Phone className="w-5 h-5" />
                            Call: 0863-2233644
                        </a>
                        <a href="mailto:sravaniteja2002@gmail.com" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                            <Mail className="w-5 h-5" />
                            Email Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Registration Modal */}
            {registrationOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-2xl p-8 max-w-md w-full"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Register for Camp</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="name">Full Name *</Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="mt-1"
                                />
                            </div>
                            <div>
                                <Label htmlFor="phone">Phone Number *</Label>
                                <Input
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    required
                                    className="mt-1"
                                />
                            </div>
                            <div>
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="mt-1"
                                />
                            </div>
                            <div className="flex gap-3 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setRegistrationOpen(false)}
                                    className="flex-1"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                                >
                                    Register
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
