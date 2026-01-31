import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Calendar, Award } from 'lucide-react';

// Sample doctors data - will be replaced with actual data from database
const sampleDoctors = [
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    specialization: 'Gastroenterologist',
    qualification: 'MBBS, MD, DM (Gastro)',
    experience_years: 15,
    profile_image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop',
    department: 'Gastroenterology'
  },
  {
    id: '2',
    name: 'Dr. Priya Sharma',
    specialization: 'Gynaecologist',
    qualification: 'MBBS, MS (OBG)',
    experience_years: 12,
    profile_image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop',
    department: 'Gynaecology'
  },
  {
    id: '3',
    name: 'Dr. Venkat Rao',
    specialization: 'Orthopaedic Surgeon',
    qualification: 'MBBS, MS (Ortho)',
    experience_years: 18,
    profile_image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop',
    department: 'Orthopaedics'
  },
  {
    id: '4',
    name: 'Dr. Lakshmi Devi',
    specialization: 'Cardiologist',
    qualification: 'MBBS, MD, DM (Cardio)',
    experience_years: 20,
    profile_image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop',
    department: 'Cardiology'
  },
];

export default function DoctorsSection({ doctors = sampleDoctors }) {
  const displayDoctors = doctors.length > 0 ? doctors.slice(0, 4) : sampleDoctors;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Expert Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Specialists
            </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              Our team of highly qualified and experienced doctors are dedicated
              to providing you with the best medical care.
            </p>
          </motion.div>

          <Link to={createPageUrl('doctors')}>
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
              View All Doctors
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-4 group hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={doctor.profile_image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <Link to={createPageUrl('doctors')}>
                    <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-2">{doctor.specialization}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                  <Award className="w-4 h-4" />
                  <span>{doctor.experience_years}+ Years Exp</span>
                </div>
                <div className="flex justify-center">
                  <Link to={createPageUrl('book-appointment')}>
                    <Button variant="outline" size="sm" className="w-full border-blue-200 hover:bg-blue-50 hover:text-blue-700 text-gray-600">
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
