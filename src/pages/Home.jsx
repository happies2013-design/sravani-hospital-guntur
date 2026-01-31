import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import DepartmentSlider3D from '@/components/home/DepartmentSlider3D';
import DepartmentsSection from '@/components/home/DepartmentsSection';
import FacilitiesSection from '@/components/home/FacilitiesSection';
import DoctorsSection from '@/components/home/DoctorsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import InsuranceSection from '@/components/home/InsuranceSection';
import BlogSection from '@/components/home/BlogSection';
import LocationSection from '@/components/home/LocationSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <DepartmentSlider3D />
            <DepartmentsSection />
            <FacilitiesSection />
            <DoctorsSection />
            <TestimonialsSection />
            <InsuranceSection />
            <BlogSection />
            <LocationSection />
            <CTASection />
        </div>
    );
}