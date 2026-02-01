import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';

export default function Privacy() {
    const sections = [
        {
            title: 'Information We Collect',
            icon: FileText,
            content: [
                'Personal identification information (Name, email address, phone number, etc.)',
                'Medical history and health information',
                'Appointment and consultation records',
                'Payment and billing information',
                'Technical data (IP address, browser type, device information)'
            ]
        },
        {
            title: 'How We Use Your Information',
            icon: Eye,
            content: [
                'To provide and maintain our healthcare services',
                'To schedule and manage appointments',
                'To communicate with you about your health and treatments',
                'To process payments and maintain billing records',
                'To improve our services and patient experience',
                'To comply with legal obligations'
            ]
        },
        {
            title: 'Data Security',
            icon: Lock,
            content: [
                'We implement industry-standard security measures to protect your data',
                'All sensitive information is encrypted during transmission',
                'Access to patient data is restricted to authorized personnel only',
                'Regular security audits and updates are performed',
                'We maintain secure backup systems for data protection'
            ]
        },
        {
            title: 'Your Rights',
            icon: Shield,
            content: [
                'Right to access your personal and medical information',
                'Right to request corrections to your data',
                'Right to request deletion of your data (subject to legal requirements)',
                'Right to opt-out of marketing communications',
                'Right to file a complaint with relevant authorities'
            ]
        }
    ];

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
                            <Shield className="w-5 h-5" />
                            <span className="text-sm font-medium">Your Privacy Matters</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            How we collect, use, and protect your personal information
                        </p>
                        <p className="text-sm text-blue-200 mt-4">
                            Last Updated: February 1, 2026
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Introduction */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        At Sravani Multi-Specialty Hospital, we are committed to protecting your privacy and ensuring
                        the security of your personal and medical information. This Privacy Policy explains how we
                        collect, use, disclose, and safeguard your information when you visit our hospital or use our
                        services.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        By using our services, you agree to the collection and use of information in accordance with
                        this policy. We comply with all applicable data protection laws and regulations, including
                        the Information Technology Act, 2000 and related rules.
                    </p>
                </motion.div>

                {/* Main Sections */}
                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-8 shadow-lg mb-6"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                <section.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                        </div>
                        <ul className="space-y-3">
                            {section.content.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}

                {/* Additional Sections */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl p-8 shadow-lg mb-6"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Disclosure</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        We do not sell, trade, or otherwise transfer your personal information to third parties
                        without your consent, except in the following circumstances:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>When required by law or legal process</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>To trusted service providers who assist in operating our hospital</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>For insurance claims and billing purposes</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>In case of medical emergencies or referrals to other healthcare providers</span>
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl p-8 shadow-lg mb-6"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our website uses cookies to enhance your browsing experience. Cookies are small files that
                        a site or its service provider transfers to your computer's hard drive through your web
                        browser. You can choose to disable cookies through your browser settings, but this may
                        affect certain features of our website.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-2xl p-8 shadow-lg mb-6"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We may update our Privacy Policy from time to time. We will notify you of any changes by
                        posting the new Privacy Policy on this page and updating the "Last Updated" date. You are
                        advised to review this Privacy Policy periodically for any changes.
                    </p>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
                >
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="text-blue-100 mb-6">
                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5" />
                            <a href="tel:08632233644" className="hover:text-blue-200 transition-colors">
                                0863-2233644
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5" />
                            <a href="mailto:sravaniteja2002@gmail.com" className="hover:text-blue-200 transition-colors">
                                sravaniteja2002@gmail.com
                            </a>
                        </div>
                        <div className="flex items-start gap-3">
                            <FileText className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <span>Old Bank Road, Kotthapet, Guntur 522001, Andhra Pradesh, India</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
