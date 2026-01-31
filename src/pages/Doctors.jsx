import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Search,
    Calendar,
    Star,
    Award,
    Clock,
    Filter,
    LayoutGrid,
    List,
    MapPin
} from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'gastroenterology', label: 'Gastroenterology' },
    { value: 'gynaecology', label: 'Gynaecology' },
    { value: 'orthopaedics', label: 'Orthopaedics' },
    { value: 'general-medicine', label: 'General Medicine' },
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'paediatrics', label: 'Paediatrics' },
    { value: 'critical-care', label: 'Critical Care' },
];

const sampleDoctors = [
    {
        id: '1',
        name: 'Dr. Posani Srinivasa Rao',
        department: 'gastroenterology',
        specialization: 'Gastroenterologist & Hepatologist',
        qualification: 'MBBS, MD, F.R.C.S.',
        experience_years: 18,
        consultation_fee: 500,
        languages: 'English, Telugu, Hindi',
        opd_timings: 'Mon-Fri: 8:30 AM - 5:00 PM, Sat: 9:30 AM - 1:00 PM',
        profile_image: 'https://sravanihospital.org/img/doctor-2.jpg',
        bio: 'Expert in full spectrum management of gastrointestinal, liver and bowel diseases. Founder of Sravani Hospital.'
    },
    {
        id: '2',
        name: 'Dr. Priya Sharma',
        department: 'gynaecology',
        specialization: 'Gynaecologist & Obstetrician',
        qualification: 'MBBS, MS (OBG), Fellowship in Infertility',
        experience_years: 12,
        consultation_fee: 400,
        languages: 'English, Telugu, Hindi',
        opd_timings: 'Mon-Sat: 9 AM - 1 PM, 4 PM - 7 PM',
        profile_image: 'https://sravanihospital.org/img/doctor-3.jpg',
        bio: 'Specializes in high-risk pregnancies and minimally invasive gynecological surgeries.'
    },
    {
        id: '3',
        name: 'Dr. Venkat Rao',
        department: 'orthopaedics',
        specialization: 'Orthopaedic & Joint Replacement Surgeon',
        qualification: 'MBBS, MS (Ortho), Fellowship in Arthroplasty',
        experience_years: 18,
        consultation_fee: 500,
        languages: 'English, Telugu',
        opd_timings: 'Mon-Sat: 10 AM - 1 PM, 5 PM - 8 PM',
        profile_image: 'https://sravanihospital.org/img/doctor-4.jpg',
        bio: 'Performed over 2000 successful joint replacement surgeries.'
    },
    {
        id: '4',
        name: 'Dr. Lakshmi Devi',
        department: 'cardiology',
        specialization: 'Interventional Cardiologist',
        qualification: 'MBBS, MD, DM (Cardiology)',
        experience_years: 20,
        consultation_fee: 600,
        languages: 'English, Telugu, Hindi',
        opd_timings: 'Mon-Sat: 9 AM - 12 PM, 4 PM - 6 PM',
        profile_image: 'https://sravanihospital.org/img/doctor-5.jpg',
        bio: 'Leading cardiologist known for complex cardiac interventions.'
    },
    {
        id: '5',
        name: 'Dr. Suresh Reddy',
        department: 'general-medicine',
        specialization: 'General Physician & Diabetologist',
        qualification: 'MBBS, MD (Medicine)',
        experience_years: 14,
        consultation_fee: 300,
        languages: 'English, Telugu, Hindi',
        opd_timings: 'Mon-Sat: 9 AM - 1 PM, 5 PM - 8 PM',
        profile_image: 'https://sravanihospital.org/img/doctor-5.jpg',
        bio: 'Specializes in diabetes management and preventive healthcare.'
    },
    {
        id: '6',
        name: 'Dr. Kavitha Rani',
        department: 'paediatrics',
        specialization: 'Pediatrician & Neonatologist',
        qualification: 'MBBS, MD (Paediatrics), Fellowship in Neonatology',
        experience_years: 10,
        consultation_fee: 400,
        languages: 'English, Telugu',
        opd_timings: 'Mon-Sat: 10 AM - 2 PM, 5 PM - 8 PM',
        profile_image: 'https://sravanihospital.org/img/doctor-51.jpg',
        bio: 'Dedicated to providing comprehensive care for children from birth to adolescence.'
    },
];

export default function Doctors() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [viewMode, setViewMode] = useState('grid');

    const { data: doctors = [], isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: () => base44.entities.Doctor.list(),
    });

    const displayDoctors = doctors.length > 0 ? doctors : sampleDoctors;

    const filteredDoctors = displayDoctors.filter(doctor => {
        const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doctor.specialization?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDepartment = selectedDepartment === 'all' || doctor.department === selectedDepartment;
        return matchesSearch && matchesDepartment;
    });

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
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Expert Doctors</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Meet our team of highly qualified specialists committed to your health
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters */}
            <section className="bg-white border-b sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <div className="relative flex-1 sm:w-80">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input
                                    placeholder="Search doctors by name or specialty..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                                <SelectTrigger className="w-full sm:w-52">
                                    <Filter className="w-4 h-4 mr-2" />
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {departments.map(dept => (
                                        <SelectItem key={dept.value} value={dept.value}>
                                            {dept.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex gap-2">
                            <Button
                                variant={viewMode === 'grid' ? 'default' : 'outline'}
                                size="icon"
                                onClick={() => setViewMode('grid')}
                            >
                                <LayoutGrid className="w-4 h-4" />
                            </Button>
                            <Button
                                variant={viewMode === 'list' ? 'default' : 'outline'}
                                size="icon"
                                onClick={() => setViewMode('list')}
                            >
                                <List className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Doctors Grid/List */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4">
                    {isLoading ? (
                        <div className={`grid ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-6`}>
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6">
                                    <Skeleton className="w-24 h-24 rounded-full mx-auto mb-4" />
                                    <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                                    <Skeleton className="h-4 w-1/2 mx-auto" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <p className="text-gray-600 mb-6">{filteredDoctors.length} doctors found</p>

                            <div className={`grid ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-6`}>
                                {filteredDoctors.map((doctor, index) => (
                                    <motion.div
                                        key={doctor.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {viewMode === 'grid' ? (
                                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                                                <div className="text-center mb-4">
                                                    <img
                                                        src={doctor.profile_image || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop'}
                                                        alt={doctor.name}
                                                        className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-blue-100 group-hover:border-blue-200 transition-colors"
                                                    />
                                                </div>
                                                <div className="text-center">
                                                    <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                                                    <p className="text-blue-600 text-sm font-medium mb-2">{doctor.specialization}</p>
                                                    <p className="text-gray-500 text-xs mb-4">{doctor.qualification}</p>

                                                    <div className="flex items-center justify-center gap-4 text-xs text-gray-600 mb-4">
                                                        <span className="flex items-center gap-1">
                                                            <Award className="w-3 h-3 text-blue-500" />
                                                            {doctor.experience_years}+ Yrs
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                            4.9
                                                        </span>
                                                    </div>

                                                    <div className="flex gap-2">
                                                        <Link to={createPageUrl(`DoctorProfile?id=${doctor.id}`)} className="flex-1">
                                                            <Button variant="outline" className="w-full text-sm">
                                                                View Profile
                                                            </Button>
                                                        </Link>
                                                        <Link to={createPageUrl(`BookAppointment?doctor=${doctor.id}`)} className="flex-1">
                                                            <Button className="w-full text-sm bg-blue-600 hover:bg-blue-700">
                                                                <Calendar className="w-3 h-3 mr-1" />
                                                                Book
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                                <div className="flex gap-6">
                                                    <img
                                                        src={doctor.profile_image || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop'}
                                                        alt={doctor.name}
                                                        className="w-24 h-24 rounded-2xl object-cover flex-shrink-0"
                                                    />
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                                                                <p className="text-blue-600 text-sm font-medium">{doctor.specialization}</p>
                                                                <p className="text-gray-500 text-xs mt-1">{doctor.qualification}</p>
                                                            </div>
                                                            <div className="text-right">
                                                                <p className="text-lg font-bold text-gray-900">₹{doctor.consultation_fee}</p>
                                                                <p className="text-gray-500 text-xs">Consultation</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                                                            <span className="flex items-center gap-1">
                                                                <Award className="w-4 h-4 text-blue-500" />
                                                                {doctor.experience_years}+ Years
                                                            </span>
                                                            <span className="flex items-center gap-1">
                                                                <Clock className="w-4 h-4 text-green-500" />
                                                                {doctor.opd_timings?.split(',')[0]}
                                                            </span>
                                                            <span className="flex items-center gap-1">
                                                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                                4.9 (120+ reviews)
                                                            </span>
                                                        </div>

                                                        <div className="flex gap-2 mt-4">
                                                            <Link to={createPageUrl(`DoctorProfile?id=${doctor.id}`)}>
                                                                <Button variant="outline">View Profile</Button>
                                                            </Link>
                                                            <Link to={createPageUrl(`BookAppointment?doctor=${doctor.id}`)}>
                                                                <Button className="bg-blue-600 hover:bg-blue-700">
                                                                    <Calendar className="w-4 h-4 mr-2" />
                                                                    Book Appointment
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}