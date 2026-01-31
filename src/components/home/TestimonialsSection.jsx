import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const sampleTestimonials = [
    {
        id: '1',
        patient_name: 'Ramesh Naidu',
        treatment: 'Cardiac Care',
        rating: 5,
        review: "The cardiac team at Sravani Hospital saved my life. Dr. Lakshmi Devi and her team provided exceptional care during my heart surgery. The facilities are world-class and the staff is very caring.",
        patient_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
        id: '2',
        patient_name: 'Padma Rani',
        treatment: 'Maternity Care',
        rating: 5,
        review: "I had a wonderful delivery experience at Sravani Hospital. The gynaecology team was supportive throughout my pregnancy. The rooms are comfortable and the nurses are extremely helpful.",
        patient_image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
        id: '3',
        patient_name: 'Suresh Kumar',
        treatment: 'Knee Replacement',
        rating: 5,
        review: "After suffering from knee pain for years, Dr. Venkat Rao performed my knee replacement surgery. The recovery was smooth and now I can walk without any pain. Highly recommend!",
        patient_image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
        id: '4',
        patient_name: 'Lakshmi Devi',
        treatment: 'General Medicine',
        rating: 5,
        review: "The doctors here are very thorough and take time to explain everything. The hospital maintains excellent hygiene standards. Very impressed with the care I received.",
        patient_image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
];

export default function TestimonialsSection({ testimonials = sampleTestimonials }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const displayTestimonials = testimonials.length > 0 ? testimonials : sampleTestimonials;

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length);
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4">
                            <Star className="w-4 h-4 fill-yellow-500" />
                            Patient Stories
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Our Patients Say
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Real experiences from our patients who trusted us with their healthcare.
                        </p>
                    </motion.div>
                </div>

                {/* Main Testimonial */}
                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                    <Quote className="w-8 h-8 text-blue-600" />
                                </div>

                                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                                    "{displayTestimonials[currentIndex].review}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={displayTestimonials[currentIndex].patient_image}
                                        alt={displayTestimonials[currentIndex].patient_name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                                    />
                                    <div className="text-left">
                                        <h4 className="font-bold text-gray-900 text-lg">
                                            {displayTestimonials[currentIndex].patient_name}
                                        </h4>
                                        <div className="flex items-center gap-2">
                                            <p className="text-blue-600 font-medium text-sm">
                                                {displayTestimonials[currentIndex].treatment}
                                            </p>
                                            <span className="text-gray-300">|</span>
                                            <div className="flex items-center gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-3 h-3 ${i < displayTestimonials[currentIndex].rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 xl:-left-16 hidden md:block">
                        <Button
                            variant="secondary"
                            size="icon"
                            onClick={prevTestimonial}
                            className="w-12 h-12 rounded-full shadow-lg bg-white hover:bg-gray-50 text-gray-900"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 -right-4 xl:-right-16 hidden md:block">
                        <Button
                            variant="secondary"
                            size="icon"
                            onClick={nextTestimonial}
                            className="w-12 h-12 rounded-full shadow-lg bg-white hover:bg-gray-50 text-gray-900"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex justify-center gap-4 mt-8 md:hidden">
                        <Button
                            variant="secondary"
                            size="icon"
                            onClick={prevTestimonial}
                            className="rounded-full shadow bg-white"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="secondary"
                            size="icon"
                            onClick={nextTestimonial}
                            className="rounded-full shadow bg-white"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {displayTestimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
