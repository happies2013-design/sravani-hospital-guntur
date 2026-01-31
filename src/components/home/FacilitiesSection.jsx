import React from 'react';
import { motion } from 'framer-motion';
import {
  Ambulance,
  FlaskConical,
  Pill,
  ScanLine,
  Clock,
  Shield,
  CheckCircle2
} from 'lucide-react';

const facilities = [
  {
    icon: Ambulance,
    title: '24/7 Emergency Care',
    description: 'Round-the-clock emergency services with fully equipped trauma care unit and ventilator-equipped ambulances.',
    features: ['Trauma Care', 'ICU Available', 'Expert Team'],
    color: 'from-red-500 to-rose-500',
    bgImage: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=400&h=300&fit=crop'
  },
  {
    icon: ScanLine,
    title: 'Advanced Diagnostics',
    description: 'State-of-the-art imaging including CT Scan, MRI, Digital X-Ray, and Ultrasound facilities.',
    features: ['CT Scan', 'MRI', 'Digital X-Ray'],
    color: 'from-blue-500 to-cyan-500',
    bgImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop'
  },
  {
    icon: Pill,
    title: '24/7 Pharmacy',
    description: 'In-house pharmacy with complete range of medicines and medical supplies available round the clock.',
    features: ['All Medicines', 'Affordable Prices', '24/7 Open'],
    color: 'from-green-500 to-emerald-500',
    bgImage: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop'
  },
  {
    icon: FlaskConical,
    title: 'Modern Laboratory',
    description: 'Fully automated pathology lab with quick turnaround time and accurate diagnostic reports.',
    features: ['Quick Results', 'Accurate Tests', 'Home Collection'],
    color: 'from-purple-500 to-violet-500',
    bgImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop'
  },
];

export default function FacilitiesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              Our Facilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class Infrastructure
            </h2>
            <p className="text-gray-600 text-lg">
              Modern facilities and advanced medical equipment to provide you
              with the best healthcare experience.
            </p>
          </motion.div>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="absolute inset-0">
                <img
                  src={facility.bgImage}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-90" />
              </div>

              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300`}>
                  <facility.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {facility.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {facility.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-sm font-medium text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
