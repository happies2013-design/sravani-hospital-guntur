import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Search,
    HelpCircle,
    Phone,
    MessageCircle,
    Calendar,
    CreditCard,
    Shield,
    Stethoscope
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
    { id: 'general', label: 'General', icon: HelpCircle },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'insurance', label: 'Insurance', icon: Shield },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'services', label: 'Medical Services', icon: Stethoscope },
];

const faqs = {
    general: [
        {
            question: 'What are the hospital visiting hours?',
            answer: 'General visiting hours are from 10 AM to 12 PM and 4 PM to 6 PM daily. ICU visiting is limited to 11 AM - 12 PM and 5 PM - 6 PM. Please follow the nursing staff\'s instructions during visits.'
        },
        {
            question: 'Where is the hospital located?',
            answer: 'Sravani Multi-Specialty Hospital is located at Old Bank Road, Kotthapet, Guntur 522001, Andhra Pradesh, India. We are easily accessible from all parts of the city.'
        },
        {
            question: 'What are the emergency contact numbers?',
            answer: 'Emergency: 0863-2352354 (24/7)\nGeneral Enquiry: 0863-2233644\nMobile: 9966177014\nInsurance Desk: +91 6300 175 001'
        },
        {
            question: 'Is parking available at the hospital?',
            answer: 'Yes, we have ample parking space for patients and visitors. Emergency vehicles have a dedicated parking area near the emergency entrance.'
        },
        {
            question: 'Does the hospital have a pharmacy?',
            answer: 'Yes, we have a 24/7 in-house pharmacy with all essential medicines and medical supplies. The pharmacy is located near the main entrance.'
        },
        {
            question: 'Are attendants allowed to stay with patients?',
            answer: 'Yes, one attendant is allowed to stay with the patient. Private rooms have attendant beds. For general wards, attendants can use the attendant seating area.'
        },
    ],
    appointments: [
        {
            question: 'How can I book an appointment?',
            answer: 'You can book an appointment through:\n1. Our website - Click "Book Appointment"\n2. Call us at 0863-2233644 or 9966177014\n3. WhatsApp: 9966177014\n4. Visit the hospital reception'
        },
        {
            question: 'Can I book an appointment online?',
            answer: 'Yes, you can book appointments online through our website 24/7. Visit the "Book Appointment" page, select your department and doctor, choose a convenient date and time, and fill in your details.'
        },
        {
            question: 'How do I reschedule my appointment?',
            answer: 'To reschedule, call our reception at 0863-2233644 at least 24 hours before your appointment. You can also use the Patient Portal to manage your appointments.'
        },
        {
            question: 'What should I bring to my appointment?',
            answer: 'Please bring:\n- Valid ID proof (Aadhar/PAN)\n- Insurance card (if applicable)\n- Previous medical records and reports\n- Current medications list\n- Referral letter (if any)'
        },
        {
            question: 'How early should I arrive for my appointment?',
            answer: 'Please arrive 15-20 minutes before your scheduled appointment time for registration and documentation. First-time patients should arrive 30 minutes early.'
        },
        {
            question: 'What is the consultation fee?',
            answer: 'Consultation fees vary by doctor and specialty, typically ranging from ₹300 to ₹600. The exact fee will be shown when you book an appointment. Additional charges may apply for procedures.'
        },
    ],
    insurance: [
        {
            question: 'Which insurance companies do you accept?',
            answer: 'We accept all major insurance companies including Star Health, ICICI Lombard, HDFC Ergo, Bajaj Allianz, New India Assurance, United India, Max Bupa, Care Health, and many more. Contact our insurance desk for specific queries.'
        },
        {
            question: 'How does cashless treatment work?',
            answer: 'For cashless treatment:\n1. Inform our insurance desk at admission\n2. Submit insurance card and policy documents\n3. We send pre-authorization request to your insurer\n4. Once approved, treatment proceeds without upfront payment\n5. On discharge, you pay only deductibles (if any)'
        },
        {
            question: 'What documents are needed for cashless admission?',
            answer: 'Required documents:\n- Insurance card (original)\n- Policy document\n- ID proof (Aadhar/PAN)\n- Address proof\n- 2 passport photos\n- Previous medical records\n- Corporate ID (for corporate policies)'
        },
        {
            question: 'How long does pre-authorization take?',
            answer: 'For planned admissions, pre-authorization typically takes 24-48 hours. For emergencies, we initiate the process immediately while treatment begins. Contact our insurance desk at +91 6300 175 001 for assistance.'
        },
        {
            question: 'What if my insurance claim is rejected?',
            answer: 'If cashless claim is rejected, you can:\n1. Opt for reimbursement (pay and claim later)\n2. Request re-evaluation with additional documents\n3. Our insurance team will guide you through the appeal process'
        },
        {
            question: 'Are OPD consultations covered under insurance?',
            answer: 'Most health insurance policies cover only hospitalization. However, some comprehensive policies include OPD coverage. Please check your policy or contact your insurance provider for details.'
        },
    ],
    billing: [
        {
            question: 'What payment methods are accepted?',
            answer: 'We accept:\n- Cash\n- Credit/Debit Cards (Visa, MasterCard, RuPay)\n- UPI (Google Pay, PhonePe, Paytm)\n- Net Banking\n- Cheque/DD (for high amounts)\n- Insurance (cashless)'
        },
        {
            question: 'When is payment required?',
            answer: 'For OPD: Payment at the time of consultation.\nFor IPD: Estimated advance at admission, final settlement at discharge.\nFor emergencies: Treatment first, payment can be settled within 48 hours.'
        },
        {
            question: 'Can I get a detailed bill breakdown?',
            answer: 'Yes, we provide detailed itemized bills showing all charges including room rent, doctor fees, medicines, tests, procedures, and other services. You can request a detailed bill from the billing counter.'
        },
        {
            question: 'Are EMI options available for large bills?',
            answer: 'Yes, we offer EMI options through various banks and payment apps for bills above ₹20,000. Please check with our billing department for available EMI partners and terms.'
        },
        {
            question: 'How can I get a copy of my invoice?',
            answer: 'You can:\n1. Get a printed copy from the billing counter\n2. Request email copy (provide your email at billing)\n3. Access through Patient Portal (if registered)\n4. Request duplicate copy at any time with valid ID'
        },
        {
            question: 'Is there a refund policy?',
            answer: 'Refunds for cancellations or overpayments are processed within 7-10 working days. For insurance refunds, timeline depends on the insurer. Contact billing department with your receipt for refund requests.'
        },
    ],
    services: [
        {
            question: 'What departments/specialties are available?',
            answer: 'Our departments include:\n- Gastroenterology\n- Gynaecology & Obstetrics\n- Orthopaedics\n- General Medicine\n- Cardiology\n- Paediatrics\n- Critical Care & Anaesthesia'
        },
        {
            question: 'Is emergency service available 24/7?',
            answer: 'Yes, our emergency department operates 24/7, 365 days a year. We have trained emergency physicians, nurses, and support staff available round the clock. Emergency: 0863-2352354'
        },
        {
            question: 'Do you have ambulance service?',
            answer: 'Yes, we have fully equipped ambulances with ventilators and trained paramedics available 24/7. Call 0863-2352354 or 9966177014 for ambulance service.'
        },
        {
            question: 'What diagnostic facilities are available?',
            answer: 'We have:\n- CT Scan\n- Digital X-Ray\n- Ultrasound (including 4D)\n- ECG & 2D Echo\n- TMT\n- Fully automated pathology lab\n- And more'
        },
        {
            question: 'Do you offer health checkup packages?',
            answer: 'Yes, we offer various health checkup packages including Executive Checkup, Cardiac Checkup, Diabetes Screening, Women\'s Health, Senior Citizen, and Pediatric packages. Visit our Health Packages page for details.'
        },
        {
            question: 'Is home sample collection available?',
            answer: 'Yes, we offer home sample collection for lab tests within Guntur city limits. Call 0863-2233644 to schedule a home collection. Additional charges may apply.'
        },
    ],
};

export default function FAQ() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('general');

    const currentFaqs = faqs[selectedCategory] || [];

    const filteredFaqs = searchQuery
        ? currentFaqs.filter(faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : currentFaqs;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <HelpCircle className="w-16 h-16 mx-auto mb-6 text-purple-200" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
                        <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                            Find answers to common questions about our services
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Search */}
            <section className="bg-white border-b">
                <div className="max-w-3xl mx-auto px-4 py-6">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                            placeholder="Search your question..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 py-6 text-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Categories & FAQs */}
            <section className="py-12">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Category Sidebar */}
                        <div className="md:col-span-1">
                            <div className="sticky top-24 space-y-2">
                                {faqCategories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => {
                                            setSelectedCategory(cat.id);
                                            setSearchQuery('');
                                        }}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${selectedCategory === cat.id
                                                ? 'bg-purple-600 text-white'
                                                : 'bg-white text-gray-700 hover:bg-purple-50'
                                            }`}
                                    >
                                        <cat.icon className="w-5 h-5" />
                                        <span className="font-medium">{cat.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* FAQs */}
                        <div className="md:col-span-3">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">
                                {faqCategories.find(c => c.id === selectedCategory)?.label} Questions
                            </h2>

                            {filteredFaqs.length === 0 ? (
                                <div className="text-center py-12 bg-white rounded-2xl">
                                    <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-600">No questions found matching your search.</p>
                                </div>
                            ) : (
                                <Accordion type="single" collapsible className="space-y-4">
                                    {filteredFaqs.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${index}`}
                                            className="bg-white rounded-xl px-6 border-none shadow-sm"
                                        >
                                            <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-4">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-gray-600 whitespace-pre-line pb-4">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
                    <p className="text-gray-600 mb-8">
                        Our team is ready to help you with any questions not covered here.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:08632233644">
                            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                                <Phone className="w-5 h-5 mr-2" />
                                Call Us: 0863-2233644
                            </Button>
                        </a>
                        <a
                            href="https://wa.me/919966177014"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                WhatsApp Us
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}