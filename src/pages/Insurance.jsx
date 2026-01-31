import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
    Shield,
    CheckCircle2,
    Phone,
    FileText,
    HelpCircle,
    ArrowRight,
    Building2,
    CreditCard
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// Insurance providers from Sravani Hospital website
const insuranceProviders = [
    { name: 'TTL Health Care', logo: '🏥' },
    { name: 'FHPL', logo: '💊' },
    { name: 'GHPL', logo: '🏨' },
    { name: 'Medi Assist', logo: '💙' },
    { name: 'Medi Seva', logo: '💚' },
    { name: 'MD India', logo: '🇮🇳' },
    { name: 'ICICI Prudential', logo: '🔵' },
    { name: 'I Care', logo: '❤️' },
    { name: 'Chola MS', logo: '🌊' },
    { name: 'United Health Care', logo: '🤝' },
    { name: 'Star Health Insurance', logo: '⭐' },
    { name: 'Heritage', logo: '🏛️' },
    { name: 'Roth Shield Health Care', logo: '🛡️' },
    { name: 'Dedicated Health Services', logo: '💜' },
    { name: 'Ericson', logo: '🔷' },
    { name: 'Medicare', logo: '🏥' },
    { name: 'Raksha TPA Pvt.Ltd.', logo: '🛡️' },
    { name: 'Future Generali India', logo: '🌟' },
];

const claimProcess = [
    {
        step: 1,
        title: 'Inform Insurance Desk',
        description: 'Contact our insurance desk at the time of admission with your insurance card and policy details.'
    },
    {
        step: 2,
        title: 'Document Submission',
        description: 'Submit required documents including ID proof, insurance card, and policy copy.'
    },
    {
        step: 3,
        title: 'Pre-Authorization',
        description: 'Our team will send pre-authorization request to your insurance company for approval.'
    },
    {
        step: 4,
        title: 'Approval & Treatment',
        description: 'Once approved, proceed with treatment. Our team handles all communication with the insurer.'
    },
    {
        step: 5,
        title: 'Discharge & Settlement',
        description: 'On discharge, insurance covers approved amount. Pay only the deductibles if any.'
    }
];

const requiredDocuments = [
    'Insurance Card (original)',
    'Policy Document',
    'ID Proof (Aadhar/PAN/Passport)',
    'Address Proof',
    'Recent Passport Size Photos (2)',
    'Previous Medical Records (if any)',
    'Referral Letter (if applicable)',
    'Corporate ID (for corporate policies)'
];

const faqs = [
    {
        question: 'What is cashless hospitalization?',
        answer: 'Cashless hospitalization means you can get treated at our hospital without paying upfront. The insurance company directly settles the bill with the hospital based on your policy coverage.'
    },
    {
        question: 'How do I check if my insurance is accepted?',
        answer: 'You can call our insurance desk at +91 6300 175 001 or visit our hospital with your insurance card. We work with almost all major insurance providers in India.'
    },
    {
        question: 'What if my pre-authorization is rejected?',
        answer: "If pre-authorization is rejected, you can either opt for reimbursement (pay first, claim later) or discuss with our insurance desk for alternatives. Our team will help you understand the reason and guide you through the process."
    },
    {
        question: 'How long does pre-authorization take?',
        answer: 'For planned admissions, pre-authorization typically takes 24-48 hours. For emergencies, we initiate pre-authorization immediately and treatment begins without delay.'
    },
    {
        question: 'What expenses are not covered under insurance?',
        answer: 'Generally, cosmetic procedures, OPD consultations, pre-existing conditions (during waiting period), consumables, and certain room upgrades may not be covered. Coverage varies by policy.'
    },
    {
        question: 'Can I use insurance for day care procedures?',
        answer: 'Yes, most insurance policies cover day care procedures like dialysis, chemotherapy, cataract surgery, etc. Check your policy for specific coverage.'
    }
];

export default function Insurance() {
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
                        <Shield className="w-16 h-16 mx-auto mb-6 text-green-200" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Insurance & Cashless Facility</h1>
                        <p className="text-xl text-green-100 max-w-2xl mx-auto">
                            We accept all major health insurance policies for cashless hospitalization
                        </p>
                        <a href="tel:+916300175001">
                            <Button size="lg" className="mt-8 bg-white text-green-600 hover:bg-green-50">
                                <Phone className="w-5 h-5 mr-2" />
                                Insurance Helpline: +91 6300 175 001
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: CreditCard, title: 'Cashless Treatment', desc: 'No upfront payment required' },
                            { icon: FileText, title: 'Quick Processing', desc: 'Fast pre-authorization' },
                            { icon: Building2, title: 'All Major Insurers', desc: 'Wide network coverage' },
                            { icon: HelpCircle, title: 'Dedicated Desk', desc: 'Expert assistance available' }
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 bg-green-50 rounded-2xl"
                            >
                                <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Insurance Partners */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Insurance Partners</h2>
                        <p className="text-gray-600">We have tie-ups with all major insurance companies</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {insuranceProviders.map((provider, index) => (
                            <motion.div
                                key={provider.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.03 }}
                                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                            >
                                <span className="text-2xl mb-2 block">{provider.logo}</span>
                                <span className="text-xs font-medium text-gray-700">{provider.name}</span>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 text-sm mt-6">+ Many more TPA partners</p>
                </div>
            </section>

            {/* Claim Process */}
            <section className="py-12 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cashless Claim Process</h2>
                        <p className="text-gray-600">Simple steps to avail cashless treatment</p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-200 -translate-x-1/2 hidden md:block" />

                        <div className="space-y-8">
                            {claimProcess.map((item, index) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`flex items-center gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="bg-gray-50 p-6 rounded-2xl">
                                            <span className="text-green-600 font-bold">Step {item.step}</span>
                                            <h3 className="font-semibold text-gray-900 mt-1">{item.title}</h3>
                                            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 z-10">
                                        {item.step}
                                    </div>
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Required Documents */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h2>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <div className="space-y-3">
                                    {requiredDocuments.map((doc) => (
                                        <div key={doc} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                            <span className="text-gray-700">{doc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Insurance Desk</h2>
                            <div className="bg-green-600 text-white p-6 rounded-2xl shadow-lg">
                                <p className="text-lg mb-6">
                                    Our dedicated insurance team is available to assist you with all your insurance-related queries.
                                </p>
                                <div className="space-y-4">
                                    <a
                                        href="tel:+916300175001"
                                        className="flex items-center gap-3 bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-colors"
                                    >
                                        <Phone className="w-6 h-6" />
                                        <div>
                                            <p className="font-semibold">Insurance Helpline</p>
                                            <p className="text-green-100">+91 6300 175 001</p>
                                        </div>
                                    </a>
                                    <p className="text-green-100 text-sm">
                                        Available: Monday - Saturday, 9 AM - 6 PM
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-12 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-gray-50 rounded-xl px-6 border-none"
                            >
                                <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Have Questions About Your Insurance?
                    </h2>
                    <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                        Our insurance desk is ready to help you understand your coverage and process your claims.
                    </p>
                    <a href="tel:+916300175001">
                        <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                            <Phone className="w-5 h-5 mr-2" />
                            Call Insurance Desk: +91 6300 175 001
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}