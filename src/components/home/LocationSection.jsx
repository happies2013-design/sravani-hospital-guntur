import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function LocationSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                            <MapPin className="w-4 h-4" />
                            Find Us
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Visit Our Hospital
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Conveniently located in the heart of Guntur city with easy access from all areas.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {/* Address Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Hospital Address</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Old Bank Road, Kotthapet,<br />
                                        Guntur 522001,<br />
                                        Andhra Pradesh, India
                                    </p>
                                    <a
                                        href="https://maps.google.com/?q=Sravani+Hospital+Guntur"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium mt-3 hover:underline"
                                    >
                                        <Navigation className="w-4 h-4" />
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Contact Numbers</h3>
                                    <div className="space-y-2 text-sm">
                                        <a href="tel:08632233644" className="block text-gray-600 hover:text-blue-600 transition-colors">
                                            <span className="text-gray-500">Reception:</span> 0863-2233644
                                        </a>
                                        <a href="tel:9966177014" className="block text-gray-600 hover:text-blue-600 transition-colors">
                                            <span className="text-gray-500">Mobile:</span> 9966177014
                                        </a>
                                        <a href="tel:08632352354" className="block text-red-600 font-semibold">
                                            <span className="text-gray-500">Emergency:</span> 0863-2352354
                                        </a>
                                        <a href="tel:+916300175001" className="block text-gray-600 hover:text-blue-600 transition-colors">
                                            <span className="text-gray-500">Insurance:</span> +91 6300 175 001
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email & Hours Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Hours & Email</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="text-gray-600">
                                            <span className="text-gray-500 block">Emergency:</span> 24/7 Open
                                        </div>
                                        <div className="text-gray-600">
                                            <span className="text-gray-500 block">OPD:</span> 9:00 AM - 9:00 PM
                                        </div>
                                        <a href="mailto:sravaniteja2002@gmail.com" className="block text-blue-600 hover:underline mt-2">
                                            sravaniteja2002@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 h-[500px]"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.4468633785367!2d80.44368525808796!3d16.297495996962375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7536d5555555%3A0xe549bd0083234857!2sSravani+Hospitals!5e0!3m2!1sen!2sin!4v1525091223976"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Hospital Location"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
