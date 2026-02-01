import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, CheckCircle, XCircle, Phone, Mail } from 'lucide-react';

export default function Terms() {
    const sections = [
        {
            title: 'Acceptance of Terms',
            content: 'By accessing and using the services of Sravani Multi-Specialty Hospital, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.'
        },
        {
            title: 'Services Provided',
            content: 'Sravani Hospital provides multi-specialty healthcare services including but not limited to consultations, diagnostics, treatments, surgeries, and emergency care. All services are subject to availability and medical necessity as determined by our qualified healthcare professionals.'
        },
        {
            title: 'Appointment Policy',
            items: [
                'Appointments can be booked online, by phone, or in person',
                'Please arrive 15 minutes before your scheduled appointment time',
                'Cancellations must be made at least 24 hours in advance',
                'Late arrivals may result in rescheduling of the appointment',
                'The hospital reserves the right to reschedule appointments due to emergencies'
            ]
        },
        {
            title: 'Payment Terms',
            items: [
                'Payment is due at the time of service unless prior arrangements have been made',
                'We accept cash, credit/debit cards, and digital payments',
                'Insurance claims are subject to verification and approval',
                'Patients are responsible for any amounts not covered by insurance',
                'Refunds are processed as per hospital policy and applicable regulations'
            ]
        },
        {
            title: 'Patient Responsibilities',
            items: [
                'Provide accurate and complete medical history',
                'Follow prescribed treatment plans and medication schedules',
                'Inform healthcare providers of any allergies or adverse reactions',
                'Respect hospital staff, other patients, and property',
                'Maintain confidentiality of other patients\' information',
                'Comply with hospital rules and regulations'
            ]
        },
        {
            title: 'Medical Records',
            items: [
                'All medical records are the property of the hospital',
                'Patients have the right to access their medical records',
                'Copies of records can be requested with proper authorization',
                'Medical records are maintained as per legal requirements',
                'Confidentiality of medical records is strictly maintained'
            ]
        },
        {
            title: 'Limitation of Liability',
            content: 'While we strive to provide the highest quality of care, Sravani Hospital shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our liability is limited to the extent permitted by applicable law.'
        },
        {
            title: 'Emergency Services',
            content: 'Our emergency department operates 24/7. In case of a medical emergency, patients will be treated based on the severity of their condition (triage system). Emergency services may involve additional costs not covered by standard consultation fees.'
        },
        {
            title: 'Intellectual Property',
            content: 'All content on our website, including text, graphics, logos, and images, is the property of Sravani Hospital and protected by copyright laws. Unauthorized use or reproduction is strictly prohibited.'
        },
        {
            title: 'Modifications to Terms',
            content: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified terms.'
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
                            <FileText className="w-5 h-5" />
                            <span className="text-sm font-medium">Legal Information</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Please read these terms carefully before using our services
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
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <AlertCircle className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Notice</h2>
                            <p className="text-gray-600 leading-relaxed">
                                These Terms of Service ("Terms") govern your use of Sravani Multi-Specialty Hospital's
                                services, facilities, and website. By using our services, you acknowledge that you have
                                read, understood, and agree to be bound by these Terms. These Terms apply to all
                                visitors, patients, and users of our services.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Main Sections */}
                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white rounded-2xl p-8 shadow-lg mb-6"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                        {section.content && (
                            <p className="text-gray-600 leading-relaxed">{section.content}</p>
                        )}
                        {section.items && (
                            <ul className="space-y-3">
                                {section.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                ))}

                {/* Prohibited Activities */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl p-8 shadow-lg mb-6"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Activities</h2>
                    <p className="text-gray-600 mb-4">The following activities are strictly prohibited:</p>
                    <ul className="space-y-3">
                        {[
                            'Providing false or misleading information',
                            'Disrupting hospital operations or services',
                            'Harassment of staff or other patients',
                            'Unauthorized recording or photography',
                            'Smoking or consumption of alcohol on premises',
                            'Bringing weapons or dangerous items into the hospital'
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-600">
                                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Governing Law */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-2xl p-8 shadow-lg mb-6"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                    <p className="text-gray-600 leading-relaxed">
                        These Terms shall be governed by and construed in accordance with the laws of India.
                        Any disputes arising from these Terms or the use of our services shall be subject to
                        the exclusive jurisdiction of the courts in Guntur, Andhra Pradesh.
                    </p>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
                >
                    <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
                    <p className="text-blue-100 mb-6">
                        If you have any questions or concerns about these Terms of Service, please contact us:
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5" />
                            <a href="tel:08632233644" className="hover:text-blue-200 transition-colors">
                                0863-2233644 / 9966177014
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

                {/* Acknowledgment */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 text-center"
                >
                    <p className="text-gray-700 font-medium">
                        By using our services, you acknowledge that you have read and understood these Terms of Service
                        and agree to be bound by them.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
