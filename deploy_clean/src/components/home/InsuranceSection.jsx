import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

const insuranceProviders = [
  'Star Health', 'ICICI Lombard', 'HDFC Ergo', 'Bajaj Allianz',
  'New India Assurance', 'United India', 'Oriental Insurance', 'Max Bupa',
  'Care Health', 'Aditya Birla', 'Niva Bupa', 'Religare'
];

export default function InsuranceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Insurance Partners
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cashless Treatment with
              <span className="text-green-600"> All Major Insurers</span>
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We have tie-ups with all major insurance companies for cashless hospitalization.
              Our dedicated insurance desk assists you with all claim-related processes.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Cashless hospitalization facility',
                'Dedicated insurance help desk',
                'Quick pre-authorization process',
                'Assistance with claim documentation',
                'Coverage for all departments'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl('Insurance')}>
                <Button className="bg-green-600 hover:bg-green-700">
                  View Insurance Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:+916300175001">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Phone className="w-4 h-4 mr-2" />
                  Insurance: +91 6300 175 001
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Insurance Logos Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                Our Insurance Partners
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {insuranceProviders.map((provider, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center p-4 text-center hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-200"
                  >
                    <span className="text-xs md:text-sm font-medium text-gray-600">
                      {provider}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-500">
                  And many more TPA & Govt. Schemes (EHS, Aarogyasri)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
