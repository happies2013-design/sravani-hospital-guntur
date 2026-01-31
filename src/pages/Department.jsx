import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
    Calendar,
    CheckCircle2,
    Star,
    Award,
    Phone,
    ArrowRight,
    Heart,
    Activity,
    Bone,
    Stethoscope,
    Baby,
    AlertCircle
} from 'lucide-react';

const departmentData = {
    'gastroenterology': {
        name: 'Gastroenterology',
        icon: Activity,
        color: 'from-orange-500 to-red-500',
        description: 'Our Gastroenterology department offers comprehensive care for all digestive system disorders. From common conditions like acid reflux to complex liver diseases, our expert team provides accurate diagnosis and effective treatment.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
        services: [
            'Diagnostic & Therapeutic Endoscopy',
            'Colonoscopy & Polypectomy',
            'ERCP (Bile Duct Procedures)',
            'Liver Disease Management',
            'Inflammatory Bowel Disease Care',
            'Peptic Ulcer Treatment',
            'Hepatitis Treatment',
            'Gastrointestinal Cancer Screening'
        ],
        conditions: [
            'Acid Reflux (GERD)',
            'Peptic Ulcers',
            'Irritable Bowel Syndrome (IBS)',
            'Inflammatory Bowel Disease',
            'Liver Cirrhosis',
            'Hepatitis B & C',
            'Gallstones',
            'Pancreatitis'
        ],
        equipment: [
            'Advanced Video Endoscopy System',
            'Colonoscopy Equipment',
            'FibroScan for Liver Assessment',
            'Capsule Endoscopy'
        ]
    },
    'gynaecology': {
        name: 'Gynaecology & Obstetrics',
        icon: Heart,
        color: 'from-pink-500 to-rose-500',
        description: "Our Gynaecology and Obstetrics department provides comprehensive women's healthcare services from adolescence through menopause. We specialize in high-risk pregnancies, minimally invasive surgeries, and fertility treatments.",
        image: 'https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=800&h=500&fit=crop',
        services: [
            'Antenatal & Postnatal Care',
            'High-Risk Pregnancy Management',
            'Normal & Cesarean Delivery',
            'Laparoscopic Gynae Surgeries',
            'Hysteroscopy',
            'Infertility Treatment',
            'Menopause Management',
            'Cancer Screening (Pap Smear)'
        ],
        conditions: [
            'Pregnancy Care',
            'PCOD/PCOS',
            'Uterine Fibroids',
            'Endometriosis',
            'Menstrual Disorders',
            'Infertility',
            'Ovarian Cysts',
            'Cervical Problems'
        ],
        equipment: [
            '4D Ultrasound',
            'Fetal Monitor (CTG)',
            'Laparoscopic Equipment',
            'Hysteroscope'
        ]
    },
    'orthopaedics': {
        name: 'Orthopaedics',
        icon: Bone,
        color: 'from-blue-500 to-cyan-500',
        description: 'Our Orthopaedics department specializes in the diagnosis and treatment of bone, joint, and muscle disorders. We offer advanced joint replacement surgeries, sports medicine, and trauma care with excellent outcomes.',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop',
        services: [
            'Total Knee Replacement',
            'Total Hip Replacement',
            'Arthroscopic Surgery',
            'Spine Surgery',
            'Trauma & Fracture Care',
            'Sports Injury Treatment',
            'Pediatric Orthopaedics',
            'Physiotherapy & Rehabilitation'
        ],
        conditions: [
            'Arthritis',
            'Knee Pain',
            'Back Pain',
            'Fractures',
            'Sports Injuries',
            'Disc Problems',
            'Ligament Injuries',
            'Bone Tumors'
        ],
        equipment: [
            'C-Arm Image Intensifier',
            'Arthroscopy System',
            'Advanced Joint Implants',
            'Dexa Scan'
        ]
    },
    'general-medicine': {
        name: 'General Medicine',
        icon: Stethoscope,
        color: 'from-green-500 to-emerald-500',
        description: 'Our General Medicine department provides comprehensive primary healthcare services. Our experienced physicians diagnose and treat a wide range of medical conditions and provide preventive healthcare guidance.',
        image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=500&fit=crop',
        services: [
            'Comprehensive Health Checkups',
            'Diabetes Management',
            'Hypertension Care',
            'Infectious Disease Treatment',
            'Thyroid Disorders',
            'Respiratory Conditions',
            'Fever & General Illness',
            'Preventive Healthcare'
        ],
        conditions: [
            'Diabetes',
            'Hypertension',
            'Thyroid Disorders',
            'Respiratory Infections',
            'Dengue & Malaria',
            'Typhoid',
            'Chronic Diseases',
            'Allergies'
        ],
        equipment: [
            'ECG Machine',
            'Pulse Oximeter',
            'Glucometer',
            'Nebulizer'
        ]
    },
    'cardiology': {
        name: 'Cardiology',
        icon: Heart,
        color: 'from-red-500 to-pink-500',
        description: 'Our Cardiology department offers comprehensive cardiac care with advanced diagnostics and interventional procedures. From preventive cardiac care to complex interventions, our cardiologists provide expert treatment.',
        image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&h=500&fit=crop',
        services: [
            'Cardiac Consultation',
            '2D Echocardiography',
            'ECG & TMT',
            '24-Hour Holter Monitoring',
            'Coronary Angiography',
            'Angioplasty & Stenting',
            'Pacemaker Implantation',
            'Heart Failure Management'
        ],
        conditions: [
            'Heart Attack',
            'Coronary Artery Disease',
            'Heart Failure',
            'Arrhythmias',
            'Hypertension',
            'Valvular Heart Disease',
            'Congenital Heart Defects',
            'Peripheral Vascular Disease'
        ],
        equipment: [
            '2D Echo Machine',
            'TMT Machine',
            'Holter Monitor',
            'Cath Lab (Angiography)'
        ]
    },
    'paediatrics': {
        name: 'Paediatrics',
        icon: Baby,
        color: 'from-purple-500 to-violet-500',
        description: 'Our Paediatrics department provides comprehensive healthcare for children from newborns to adolescents. Our child-friendly environment and experienced pediatricians ensure the best care for your little ones.',
        image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=500&fit=crop',
        services: [
            'Newborn Care & NICU',
            'Vaccination Programs',
            'Growth & Development Assessment',
            'Pediatric Emergencies',
            'Childhood Infections',
            'Asthma & Allergies',
            'Nutritional Counseling',
            'Adolescent Health'
        ],
        conditions: [
            'Newborn Jaundice',
            'Childhood Infections',
            'Asthma',
            'Allergies',
            'Growth Disorders',
            'Nutritional Deficiencies',
            'Childhood Obesity',
            'Developmental Delays'
        ],
        equipment: [
            'Neonatal Incubator',
            'Phototherapy Unit',
            'Pediatric Ventilator',
            'Infant Warmer'
        ]
    },
    'critical-care': {
        name: 'Critical Care & Anaesthesia',
        icon: AlertCircle,
        color: 'from-gray-600 to-gray-800',
        description: 'Our Critical Care department provides intensive care services with state-of-the-art ICU facilities. Our team of intensivists and trained nurses provide round-the-clock care for critically ill patients.',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop',
        services: [
            'Medical ICU',
            'Surgical ICU',
            'Ventilator Support',
            'Dialysis Support',
            'Post-Operative Care',
            'Sepsis Management',
            'Trauma Care',
            'Multi-Organ Failure Management'
        ],
        conditions: [
            'Respiratory Failure',
            'Shock',
            'Sepsis',
            'Multi-Organ Failure',
            'Post-Surgery Care',
            'Trauma',
            'Poisoning',
            'Cardiac Emergencies'
        ],
        equipment: [
            'Advanced Ventilators',
            'Multi-Parameter Monitors',
            'Dialysis Machines',
            'Defibrillators'
        ]
    }
};

const sampleDoctors = {
    'gastroenterology': [
        { id: '1', name: 'Dr. Rajesh Kumar', qualification: 'MBBS, MD, DM (Gastro)', experience_years: 15, profile_image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop' }
    ],
    'gynaecology': [
        { id: '2', name: 'Dr. Priya Sharma', qualification: 'MBBS, MS (OBG)', experience_years: 12, profile_image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop' }
    ],
    'orthopaedics': [
        { id: '3', name: 'Dr. Venkat Rao', qualification: 'MBBS, MS (Ortho)', experience_years: 18, profile_image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop' }
    ],
    'general-medicine': [
        { id: '5', name: 'Dr. Suresh Reddy', qualification: 'MBBS, MD (Medicine)', experience_years: 14, profile_image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop' }
    ],
    'cardiology': [
        { id: '4', name: 'Dr. Lakshmi Devi', qualification: 'MBBS, MD, DM (Cardio)', experience_years: 20, profile_image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop' }
    ],
    'paediatrics': [
        { id: '6', name: 'Dr. Kavitha Rani', qualification: 'MBBS, MD (Paediatrics)', experience_years: 10, profile_image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop' }
    ],
    'critical-care': [
        { id: '7', name: 'Dr. Ramesh Babu', qualification: 'MBBS, MD (Anaesthesia)', experience_years: 16, profile_image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop' }
    ]
};

export default function Department() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug') || 'gastroenterology';

    const dept = departmentData[slug] || departmentData['gastroenterology'];
    const deptDoctors = sampleDoctors[slug] || [];

    const { data: doctors = [] } = useQuery({
        queryKey: ['doctors', slug],
        queryFn: async () => {
            const allDoctors = await base44.entities.Doctor.list();
            return allDoctors.filter(d => d.department === slug);
        },
    });

    const displayDoctors = doctors.length > 0 ? doctors : deptDoctors;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className={`bg-gradient-to-br ${dept.color} py-20`}>
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <dept.icon className="w-10 h-10" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{dept.name}</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            {dept.description}
                        </p>
                        <Link to={createPageUrl('book-appointment')}>
                            <Button size="lg" className="mt-8 bg-white text-gray-900 hover:bg-gray-100">
                                <Calendar className="w-5 h-5 mr-2" />
                                Book Appointment
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Main Image */}
            <section className="py-12">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        src={dept.image}
                        alt={dept.name}
                        className="w-full h-64 md:h-96 object-cover rounded-3xl shadow-xl"
                    />
                </div>
            </section>

            {/* Services & Conditions */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Services */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Offered</h2>
                            <div className="space-y-3">
                                {dept.services.map((service) => (
                                    <div key={service} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-gray-700">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Conditions */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Conditions Treated</h2>
                            <div className="grid grid-cols-2 gap-3">
                                {dept.conditions.map((condition) => (
                                    <div key={condition} className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm">{condition}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Equipment */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Equipment & Technology</h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {dept.equipment.map((item) => (
                            <div key={item} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                                <span className="text-gray-800 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Doctors */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Specialists</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {displayDoctors.map((doctor) => (
                            <motion.div
                                key={doctor.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                            >
                                <img
                                    src={doctor.profile_image || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop'}
                                    alt={doctor.name}
                                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow"
                                />
                                <h3 className="font-bold text-gray-900 text-lg">{doctor.name}</h3>
                                <p className="text-gray-600 text-sm mb-2">{doctor.qualification}</p>
                                <p className="text-blue-600 text-sm mb-4">
                                    <Award className="w-4 h-4 inline mr-1" />
                                    {doctor.experience_years}+ Years Experience
                                </p>
                                <Link to={createPageUrl(`book-appointment?doctor=${doctor.id}`)}>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Book Appointment
                                    </Button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Need Expert {dept.name} Care?
                    </h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Our specialists are ready to help you. Book an appointment or call us for a consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to={createPageUrl('book-appointment')}>
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                                <Calendar className="w-5 h-5 mr-2" />
                                Book Appointment
                            </Button>
                        </Link>
                        <a href="tel:08632233644">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                <Phone className="w-5 h-5 mr-2" />
                                Call: 0863-2233644
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}