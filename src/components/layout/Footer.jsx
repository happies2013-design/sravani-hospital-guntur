
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Linkedin,
    Heart,
    ArrowRight
} from 'lucide-react';

export default function Footer() {
    const quickLinks = [
        { name: 'About Us', page: 'about' },
        { name: 'Our Doctors', page: 'doctors' },
        { name: 'Facilities', page: 'facilities' },
        { name: 'Health Packages', page: 'health-packages' },
        { name: 'Book Appointment', page: 'book-appointment' },
        { name: 'Contact Us', page: 'contact' },
    ];

    const departments = [
        { name: 'Gastroenterology', slug: 'gastroenterology' },
        { name: 'Gynaecology', slug: 'gynaecology' },
        { name: 'Orthopaedics', slug: 'orthopaedics' },
        { name: 'General Medicine', slug: 'general-medicine' },
        { name: 'Cardiology', slug: 'cardiology' },
        { name: 'Paediatrics', slug: 'paediatrics' },
    ];

    const patientServices = [
        { name: 'Patient Portal', page: 'patient-portal' },
        { name: 'Insurance & Panel', page: 'insurance' },
        { name: 'Emergency Services', page: 'emergency' },
        { name: 'Medical Camps', page: 'medical-camps' },
        { name: 'Blog', page: 'blog' },
        { name: 'FAQ', page: 'faq' },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Newsletter Section */}
            <div className="border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Stay Updated with Health Tips</h3>
                            <p className="text-gray-400">Subscribe to our newsletter for the latest health advice and hospital updates.</p>
                        </div>
                        <div className="flex w-full md:w-auto gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 md:w-72 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    {/* Hospital Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src="https://sravanihospital.org/img/sravani.png"
                                alt="Sravani Hospital Logo"
                                className="h-14"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                }}
                            />
                            <div>
                                <h2 className="text-xl font-bold leading-tight">Sravani</h2>
                                <p className="text-xs text-gray-400">Multi-Specialty Hospital</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Established in 2006, Sravani Multi-Specialty Hospital has been serving the Guntur community
                            with comprehensive healthcare services across multiple specializations with a commitment
                            to excellence and compassionate care.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-400 text-sm">
                                    Old Bank Road, Kotthapet,<br />
                                    Guntur 522001, Andhra Pradesh, India
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                <div className="text-sm">
                                    <a href="tel:08632233644" className="text-gray-400 hover:text-white transition-colors">0863-2233644</a>
                                    <span className="text-gray-600 mx-2">|</span>
                                    <a href="tel:9966177014" className="text-gray-400 hover:text-white transition-colors">9966177014</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                <a href="mailto:sravaniteja2002@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    sravaniteja2002@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                <p className="text-gray-400 text-sm">24/7 Emergency Services</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.page}>
                                    <Link
                                        to={createPageUrl(link.page)}
                                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Departments */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Departments</h3>
                        <ul className="space-y-3">
                            {departments.map((dept) => (
                                <li key={dept.slug}>
                                    <Link
                                        to={createPageUrl(`department?slug=${dept.slug}`)}
                                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {dept.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Patient Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Patient Services</h3>
                        <ul className="space-y-3">
                            {patientServices.map((service) => (
                                <li key={service.page}>
                                    <Link
                                        to={createPageUrl(service.page)}
                                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Sravani Multi-Specialty Hospital. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <Link to={createPageUrl('privacy')} className="hover:text-white transition-colors">Privacy Policy</Link>
                            <span>|</span>
                            <Link to={createPageUrl('terms')} className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}