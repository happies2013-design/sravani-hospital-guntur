import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
    Phone,
    Ambulance,
    AlertCircle,
    Clock,
    Heart,
    Activity,
    Shield,
    CheckCircle2,
    MapPin
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const emergencyServices = [
    {
        icon: Ambulance,
        title: '24/7 Ambulance Service',
        description: 'Ventilator-equipped ambulances with trained paramedics available round the clock for emergency transport.'
    },
    {
        icon: Heart,
        title: 'Cardiac Emergency',
        description: 'Immediate care for heart attacks, cardiac arrest, and other cardiac emergencies with quick intervention.'
    },
    {
        icon: Activity,
        title: 'Trauma Care',
        description: 'Expert trauma team for accident victims, injuries, and other traumatic emergencies.'
    },
    {
        icon: Shield,
        title: 'Critical Care ICU',
        description: 'State-of-the-art ICU with advanced life support systems and round-the-clock monitoring.'
    }
];

const emergencySteps = [
    {
        title: 'In Case of Medical Emergency',
        steps: [
            'Call our emergency number immediately: 0863-2352354',
            'Provide your location and brief description of the emergency',
            'Our ambulance will be dispatched immediately',
            'Keep the patient calm and comfortable until help arrives',
            'If conscious, do not give food or water to the patient'
        ]
    },
    {
        title: 'In Case of Heart Attack',
        steps: [
            'Call emergency immediately: 0863-2352354',
            'Have the patient sit or lie down in a comfortable position',
            'Loosen any tight clothing',
            'If prescribed, give aspirin (if not allergic)',
            'Be prepared to perform CPR if the person becomes unresponsive'
        ]
    },
    {
        title: 'In Case of Stroke',
        steps: [
            'Remember FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency',
            'Call 0863-2352354 immediately',
            'Note the time symptoms started',
            'Keep the patient lying down with head slightly elevated',
            'Do not give any food, water, or medication'
        ]
    },
    {
        title: 'In Case of Accident/Injury',
        steps: [
            'Call emergency: 0863-2352354',
            'Do not move the patient if spinal injury is suspected',
            'Apply pressure to stop bleeding using clean cloth',
            'Keep the patient warm and calm',
            'Do not remove any objects embedded in wounds'
        ]
    }
];

export default function Emergency() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-red-600 to-red-800 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                            <AlertCircle className="w-12 h-12" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Emergency Services</h1>
                        <p className="text-xl text-red-100 max-w-2xl mx-auto mb-8">
                            24/7 Emergency care with fully equipped trauma center and expert medical team
                        </p>
                        <a href="tel:08632352354">
                            <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 text-xl px-10 py-6 animate-pulse">
                                <Phone className="w-6 h-6 mr-3" />
                                Emergency: 0863-2352354
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Quick Contact */}
            <section className="bg-red-500 py-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5" />
                            <span>Emergency:</span>
                            <a href="tel:08632352354" className="font-bold text-lg hover:underline">0863-2352354</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Ambulance className="w-5 h-5" />
                            <span>Ambulance:</span>
                            <a href="tel:9966177014" className="font-bold text-lg hover:underline">9966177014</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5" />
                            <span className="font-bold">Available 24/7</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Services */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Emergency Services</h2>
                        <p className="text-gray-600">Comprehensive emergency care facilities</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {emergencyServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 bg-red-50 rounded-2xl"
                            >
                                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Emergency Room Facilities */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Room Facilities</h2>
                            <div className="space-y-4">
                                {[
                                    'Fully equipped trauma care unit',
                                    'Advanced cardiac life support',
                                    'Emergency operation theater',
                                    'Blood bank with all blood groups',
                                    'Pediatric emergency care',
                                    'Stroke and heart attack protocols',
                                    'Advanced ventilators and monitors',
                                    'Dedicated emergency pharmacy'
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=600&h=400&fit=crop"
                                alt="Emergency Room"
                                className="w-full rounded-3xl shadow-xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What to Do in Emergency */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do in an Emergency</h2>
                        <p className="text-gray-600">Follow these guidelines while waiting for emergency help</p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {emergencySteps.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-red-50 rounded-xl px-6 border-none"
                            >
                                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                                    <div className="flex items-center gap-3">
                                        <AlertCircle className="w-5 h-5 text-red-600" />
                                        {item.title}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ol className="space-y-2 pl-8">
                                        {item.steps.map((step, i) => (
                                            <li key={i} className="text-gray-700 list-decimal">{step}</li>
                                        ))}
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Location */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-red-600 rounded-3xl p-8 md:p-12 text-white">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <MapPin className="w-12 h-12 mb-4" />
                                <h2 className="text-2xl font-bold mb-4">Emergency Department Location</h2>
                                <p className="text-red-100 mb-6">
                                    Our emergency department is located at the main hospital entrance
                                    with dedicated parking for emergency vehicles.
                                </p>
                                <div className="space-y-2">
                                    <p className="font-semibold">Sravani Multi-Specialty Hospital</p>
                                    <p className="text-red-100">Old Bank Road, Kotthapet</p>
                                    <p className="text-red-100">Guntur 522001, Andhra Pradesh</p>
                                </div>
                                <a
                                    href="https://maps.google.com/?q=Old+Bank+Road+Kotthapet+Guntur"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-6 bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition-colors"
                                >
                                    <MapPin className="w-5 h-5" />
                                    Get Directions
                                </a>
                            </div>
                            <div>
                                <div className="bg-white rounded-2xl p-4 h-64">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.0789!2d80.4388!3d16.2969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sOld+Bank+Road%2C+Kotthapet%2C+Guntur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, borderRadius: '0.5rem' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        title="Hospital Location"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency CTA */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Emergency Help?</h2>
                    <p className="text-gray-600 mb-8">
                        Don't hesitate to call us. Our emergency team is available 24/7 to help you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:08632352354">
                            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8">
                                <Phone className="w-5 h-5 mr-2" />
                                Call Emergency: 0863-2352354
                            </Button>
                        </a>
                        <a href="tel:9966177014">
                            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 text-lg px-8">
                                <Ambulance className="w-5 h-5 mr-2" />
                                Ambulance: 9966177014
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}