import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Calendar,
    Phone,
    Clock,
    Award,
    GraduationCap,
    Languages,
    Star,
    MapPin,
    ArrowLeft,
    CheckCircle2
} from 'lucide-react';

const sampleDoctors = {
    '1': {
        id: '1',
        name: 'Dr. Posani Srinivasa Rao',
        department: 'gastroenterology',
        specialization: 'Gastroenterologist & Hepatologist',
        qualification: 'MBBS, MD, F.R.C.S.',
        experience_years: 18,
        consultation_fee: 500,
        languages: 'English, Telugu, Hindi',
        opd_timings: 'Mon-Fri: 8:30 AM - 5:00 PM, Sat: 9:30 AM - 1:00 PM',
        bio: 'Dr. Posani Srinivasa Rao has expertise in full spectrum management of gastrointestinal, liver and bowel diseases. He is the founder and chief consultant at Sravani Hospital.',
        education: 'MBBS - Guntur Medical College\nMD (Medicine) - Osmania Medical College\nF.R.C.S. - Royal College of Surgeons',
        achievements: 'Founder of Sravani Hospital\nPerformed 10000+ endoscopic procedures\nPioneer in Laparoscopic Surgery in Guntur',
        profile_image: 'https://sravanihospital.org/img/doctor-2.jpg'
    },
    '2': {
        id: '2',
        name: 'Dr. Priya Sharma',
        department: 'gynaecology',
        specialization: 'Gynaecologist & Obstetrician',
        qualification: 'MBBS, MS (OBG), Fellowship in Infertility',
        experience_years: 12,
        consultation_fee: 400,
        languages: 'English, Telugu, Hindi',
        opd_timings: 'Mon-Sat: 9 AM - 1 PM, 4 PM - 7 PM',
        bio: 'Specializes in high-risk pregnancies and minimally invasive gynecological surgeries.',
        education: 'MBBS - NTR University\nMS (OBG) - Gandhi Medical College\nFellowship in Infertility - Mumbai',
        achievements: 'Conducted 3000+ deliveries\nExpert in laparoscopic surgery',
        profile_image: 'https://sravanihospital.org/img/doctor-3.jpg'
    },
    '3': {
        id: '3',
        name: 'Dr. Venkat Rao',
        department: 'orthopaedics',
        specialization: 'Orthopaedic & Joint Replacement Surgeon',
        qualification: 'MBBS, MS (Ortho), Fellowship in Arthroplasty',
        experience_years: 18,
        consultation_fee: 500,
        languages: 'English, Telugu',
        opd_timings: 'Mon-Sat: 10 AM - 1 PM, 5 PM - 8 PM',
        bio: 'Dr. Venkat Rao has performed over 2000 successful joint replacement surgeries.',
        education: 'MBBS - Andhra Medical College\nMS (Ortho) - JIPMER\nFellowship in Arthroplasty - Germany',
        achievements: '2000+ joint replacements\nPioneer in robotic surgery',
        profile_image: 'https://sravanihospital.org/img/doctor-4.jpg'
    },
    '4': {
        id: '4',
        name: 'Dr. Lakshmi Devi',
        department: 'cardiology',
        specialization: 'Interventional Cardiologist',
        qualification: 'MBBS, MD, DM (Cardiology)',
        experience_years: 20,
        consultation_fee: 600,
        languages: 'English, Telugu, Hindi',
        opd_timings: 'Mon-Sat: 9 AM - 12 PM, 4 PM - 6 PM',
        bio: 'Leading cardiologist known for complex cardiac interventions.',
        education: 'MBBS - Osmania Medical College\nMD (Medicine) - NIMS\nDM (Cardiology) - AIIMS',
        achievements: '1000+ angioplasties\nExpert in complex interventions',
        profile_image: 'https://sravanihospital.org/img/doctor-5.jpg'
    },
    '5': {
        id: '5',
        name: 'Dr. Suresh Reddy',
        department: 'general-medicine',
        specialization: 'General Physician & Diabetologist',
        qualification: 'MBBS, MD (Medicine)',
        experience_years: 14,
        consultation_fee: 300,
        languages: 'English, Telugu, Hindi',
        opd_timings: 'Mon-Sat: 9 AM - 1 PM, 5 PM - 8 PM',
        bio: 'Specializes in diabetes management and preventive healthcare.',
        education: 'MBBS - Guntur Medical College\nMD (Medicine) - Gandhi Medical College',
        achievements: 'Managing 5000+ diabetic patients\nHealth awareness programs',
        profile_image: 'https://sravanihospital.org/img/doctor-5.jpg'
    },
    '6': {
        id: '6',
        name: 'Dr. Kavitha Rani',
        department: 'paediatrics',
        specialization: 'Pediatrician & Neonatologist',
        qualification: 'MBBS, MD (Paediatrics), Fellowship in Neonatology',
        experience_years: 10,
        consultation_fee: 400,
        languages: 'English, Telugu',
        opd_timings: 'Mon-Sat: 10 AM - 2 PM, 5 PM - 8 PM',
        bio: 'Dedicated to providing comprehensive care for children from birth to adolescence.',
        education: 'MBBS - NTR University\nMD (Paediatrics) - Niloufer Hospital\nFellowship in Neonatology',
        achievements: 'Cared for 10000+ children\nNICU expert',
        profile_image: 'https://sravanihospital.org/img/doctor-51.jpg'
    }
};

export default function DoctorProfile() {
    const urlParams = new URLSearchParams(window.location.search);
    const doctorId = urlParams.get('id') || '1';

    const { data: doctors = [] } = useQuery({
        queryKey: ['doctor', doctorId],
        queryFn: () => base44.entities.Doctor.list(),
    });

    const dbDoctor = doctors.find(d => d.id === doctorId);
    const doctor = dbDoctor || sampleDoctors[doctorId] || sampleDoctors['1'];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <Link to={createPageUrl('doctors')} className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Doctors
                    </Link>

                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            src={doctor.profile_image || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop'}
                            alt={doctor.name}
                            className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border-4 border-white shadow-xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white text-center md:text-left"
                        >
                            <h1 className="text-3xl md:text-4xl font-bold mb-2">{doctor.name}</h1>
                            <p className="text-blue-200 text-lg mb-4">{doctor.specialization}</p>
                            <p className="text-white/90 mb-4">{doctor.qualification}</p>

                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                <Badge className="bg-white/20 text-white border-0 px-4 py-2">
                                    <Award className="w-4 h-4 mr-2" />
                                    {doctor.experience_years}+ Years Experience
                                </Badge>
                                <Badge className="bg-white/20 text-white border-0 px-4 py-2">
                                    <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                                    4.9 Rating
                                </Badge>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
                            <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
                        </motion.div>

                        {/* Education */}
                        {doctor.education && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg"
                            >
                                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5 text-blue-600" />
                                    Education & Training
                                </h2>
                                <div className="space-y-3">
                                    {doctor.education.split('\n').map((edu, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-600">{edu}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Achievements */}
                        {doctor.achievements && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-2xl p-6 shadow-lg"
                            >
                                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-blue-600" />
                                    Achievements
                                </h2>
                                <div className="space-y-3">
                                    {doctor.achievements.split('\n').map((achievement, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-600">{achievement}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Book Appointment Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl p-6 shadow-lg sticky top-24"
                        >
                            <div className="text-center mb-6">
                                <p className="text-gray-500 text-sm">Consultation Fee</p>
                                <p className="text-3xl font-bold text-gray-900">₹{doctor.consultation_fee}</p>
                            </div>

                            <Link to={createPageUrl(`book-appointment?doctor=${doctor.id}`)}>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4" size="lg">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Book Appointment
                                </Button>
                            </Link>

                            <div className="space-y-4 pt-4 border-t">
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-gray-900">OPD Timings</p>
                                        <p className="text-sm text-gray-600">{doctor.opd_timings}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Languages className="w-5 h-5 text-blue-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-gray-900">Languages</p>
                                        <p className="text-sm text-gray-600">{doctor.languages}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-gray-900">Location</p>
                                        <p className="text-sm text-gray-600">Sravani Hospital, Guntur</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t">
                                <a href="tel:08632233644">
                                    <Button variant="outline" className="w-full">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Call for Appointment
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}