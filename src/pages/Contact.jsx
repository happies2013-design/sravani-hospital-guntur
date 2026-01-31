import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageCircle,
    CheckCircle2,
    Loader2,
    Building2,
    Ambulance,
    Shield
} from 'lucide-react';

const contactInfo = [
    {
        icon: MapPin,
        title: 'Hospital Address',
        details: ['Old Bank Road, Kotthapet', 'Guntur 522001', 'Andhra Pradesh, India'],
        color: 'bg-blue-100 text-blue-600'
    },
    {
        icon: Phone,
        title: 'Phone Numbers',
        details: ['Reception: 0863-2233644', 'Mobile: 9966177014', 'Emergency: 0863-2352354'],
        color: 'bg-green-100 text-green-600'
    },
    {
        icon: Mail,
        title: 'Email Address',
        details: ['sravaniteja2002@gmail.com'],
        color: 'bg-purple-100 text-purple-600'
    },
    {
        icon: Clock,
        title: 'Working Hours',
        details: ['OPD: 9 AM - 8 PM', 'Emergency: 24/7', 'Pharmacy: 24/7'],
        color: 'bg-orange-100 text-orange-600'
    },
];

const departmentContacts = [
    { name: 'General Enquiry', number: '0863-2233644' },
    { name: 'Appointment', number: '9966177014' },
    { name: 'Emergency', number: '0863-2352354' },
    { name: 'Insurance Desk', number: '+91 6300 175 001' },
    { name: 'Billing', number: '0863-2233644' },
    { name: 'Laboratory', number: '0863-2233644' },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        department: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const submitInquiry = useMutation({
        mutationFn: (data) => base44.entities.ContactInquiry.create(data),
        onSuccess: () => setSubmitted(true),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        submitInquiry.mutate(formData);
    };

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
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            We're here to help. Reach out to us for appointments, queries, or emergency assistance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Emergency Banner */}
            <section className="bg-red-500 py-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
                        <Ambulance className="w-6 h-6 animate-pulse" />
                        <span className="font-semibold">24/7 Emergency Services:</span>
                        <a href="tel:08632352354" className="text-2xl font-bold hover:underline">
                            0863-2352354
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${info.color}`}>
                                    <info.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-3">{info.title}</h3>
                                <div className="space-y-1">
                                    {info.details.map((detail, i) => (
                                        <p key={i} className="text-gray-600 text-sm">{detail}</p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                            {submitted ? (
                                <div className="bg-green-50 rounded-2xl p-8 text-center">
                                    <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600">
                                        Thank you for contacting us. We'll get back to you shortly.
                                    </p>
                                    <Button
                                        className="mt-4"
                                        onClick={() => {
                                            setSubmitted(false);
                                            setFormData({ name: '', email: '', phone: '', subject: 'general', department: '', message: '' });
                                        }}
                                    >
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
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

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label>Subject *</Label>
                                            <Select
                                                value={formData.subject}
                                                onValueChange={(value) => setFormData({ ...formData, subject: value })}
                                            >
                                                <SelectTrigger className="mt-1">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="general">General Enquiry</SelectItem>
                                                    <SelectItem value="appointment">Appointment</SelectItem>
                                                    <SelectItem value="insurance">Insurance Query</SelectItem>
                                                    <SelectItem value="billing">Billing</SelectItem>
                                                    <SelectItem value="feedback">Feedback</SelectItem>
                                                    <SelectItem value="complaint">Complaint</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label>Department (Optional)</Label>
                                            <Select
                                                value={formData.department}
                                                onValueChange={(value) => setFormData({ ...formData, department: value })}
                                            >
                                                <SelectTrigger className="mt-1">
                                                    <SelectValue placeholder="Select department" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="gastroenterology">Gastroenterology</SelectItem>
                                                    <SelectItem value="gynaecology">Gynaecology</SelectItem>
                                                    <SelectItem value="orthopaedics">Orthopaedics</SelectItem>
                                                    <SelectItem value="general-medicine">General Medicine</SelectItem>
                                                    <SelectItem value="cardiology">Cardiology</SelectItem>
                                                    <SelectItem value="paediatrics">Paediatrics</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="message">Message *</Label>
                                        <Textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                            rows={5}
                                            className="mt-1"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700"
                                        disabled={submitInquiry.isPending}
                                    >
                                        {submitInquiry.isPending ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
                            <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.0789!2d80.4388!3d16.2969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sOld+Bank+Road%2C+Kotthapet%2C+Guntur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Sravani Hospital Location"
                                />
                            </div>

                            <a
                                href="https://maps.google.com/?q=Old+Bank+Road+Kotthapet+Guntur"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 font-medium mt-4 hover:underline"
                            >
                                <MapPin className="w-4 h-4" />
                                Get Directions on Google Maps
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Department Contacts */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Department-wise Contact</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {departmentContacts.map((dept) => (
                            <div
                                key={dept.name}
                                className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm border border-gray-100"
                            >
                                <span className="font-medium text-gray-900">{dept.name}</span>
                                <a
                                    href={`tel:${dept.number.replace(/\s/g, '')}`}
                                    className="text-blue-600 font-semibold hover:underline"
                                >
                                    {dept.number}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WhatsApp CTA */}
            <section className="py-12 bg-green-600">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-2">Quick Contact via WhatsApp</h2>
                    <p className="text-green-100 mb-6">Get instant responses for your queries</p>
                    <a
                        href="https://wa.me/919966177014?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Chat on WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
}