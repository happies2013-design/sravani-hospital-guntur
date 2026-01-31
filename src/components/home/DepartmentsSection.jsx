import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Activity, Bone, Stethoscope, Baby, AlertCircle, Sparkles } from 'lucide-react';

const departments = [
  {
    name: 'Gastroenterology',
    slug: 'gastroenterology',
    icon: Activity,
    description: 'Comprehensive digestive health care with advanced endoscopy and colonoscopy services.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600'
  },
  {
    name: 'Gynaecology',
    slug: 'gynaecology',
    icon: Heart,
    description: "Expert women's health services including maternity care and gynecological surgeries.",
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600'
  },
  {
    name: 'Orthopaedics',
    slug: 'orthopaedics',
    icon: Bone,
    description: 'Advanced bone and joint care with joint replacement and sports medicine expertise.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    name: 'General Medicine',
    slug: 'general-medicine',
    icon: Stethoscope,
    description: 'Complete primary healthcare and management of chronic conditions.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    name: 'Cardiology',
    slug: 'cardiology',
    icon: Heart,
    description: 'State-of-the-art cardiac care with advanced diagnostics and interventions.',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    name: 'Paediatrics',
    slug: 'paediatrics',
    icon: Baby,
    description: 'Specialized child healthcare from newborn care to adolescent medicine.',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
];

export default function DepartmentsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Our Specialties
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Centers of Excellence
            </h2>
            <p className="text-gray-600 text-lg">
              World-class medical care across multiple specialties with experienced doctors
              and state-of-the-art facilities.
            </p>
          </motion.div>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={createPageUrl(`Department?slug=${dept.slug}`)} className="group block h-full">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:border-blue-100 group-hover:-translate-y-1">
                  <div className={`w-14 h-14 ${dept.bgColor} rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}>
                    <dept.icon className={`w-7 h-7 ${dept.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center justify-between">
                    {dept.name}
                    <ArrowRight className="w-5 h-5 text-gray-300 transform group-hover:translate-x-1 group-hover:text-blue-500 transition-all" />
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {dept.description}
                  </p>

                  <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${dept.color} transition-all duration-500 rounded-full`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to={createPageUrl('Departments')} className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
            View All Departments
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
