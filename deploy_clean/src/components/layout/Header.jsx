import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    Phone,
    Menu,
    Calendar,
    ChevronDown,
    Heart,
    Baby,
    Bone,
    Stethoscope,
    Activity,
    Brain,
    AlertCircle
} from 'lucide-react';

const departments = [
    { name: 'Gastroenterology', slug: 'gastroenterology', icon: Activity },
    { name: 'Gynaecology', slug: 'gynaecology', icon: Heart },
    { name: 'Orthopaedics', slug: 'orthopaedics', icon: Bone },
    { name: 'General Medicine', slug: 'general-medicine', icon: Stethoscope },
    { name: 'Cardiology', slug: 'cardiology', icon: Heart },
    { name: 'Paediatrics', slug: 'paediatrics', icon: Baby },
    { name: 'Critical Care & Anaesthesia', slug: 'critical-care', icon: AlertCircle },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <a href="tel:08632233644" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                            <Phone className="w-4 h-4" />
                            <span className="hidden sm:inline">0863-2233644</span>
                        </a>
                        <a href="mailto:sravaniteja2002@gmail.com" className="hidden md:flex items-center gap-2 hover:text-blue-100 transition-colors">
                            sravaniteja2002@gmail.com
                        </a>
                    </div>
                    <a
                        href="tel:08632352354"
                        className="flex items-center gap-2 bg-red-500 px-3 py-1 rounded-full text-xs font-semibold hover:bg-red-600 transition-colors animate-pulse"
                    >
                        <AlertCircle className="w-3 h-3" />
                        Emergency: 0863-2352354
                    </a>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to={createPageUrl('home')} className="flex items-center gap-3">
                        <img
                            src="https://sravanihospital.org/img/sravani.png"
                            alt="Sravani Hospital Logo"
                            className="h-14"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl items-center justify-center hidden">
                            <span className="text-white font-bold text-xl">S</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link to={createPageUrl('home')} className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-gray-700 hover:text-blue-600">
                                            Home
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link to={createPageUrl('about')} className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-gray-700 hover:text-blue-600">
                                            About Us
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                                        Departments
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-[500px] p-4 grid grid-cols-2 gap-2">
                                            {departments.map((dept) => (
                                                <Link
                                                    key={dept.slug}
                                                    to={createPageUrl(`department?slug=${dept.slug}`)}
                                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                                                >
                                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                                        <dept.icon className="w-5 h-5 text-blue-600" />
                                                    </div>
                                                    <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                                                        {dept.name}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link to={createPageUrl('doctors')} className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-gray-700 hover:text-blue-600">
                                            Doctors
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link to={createPageUrl('facilities')} className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-gray-700 hover:text-blue-600">
                                            Facilities
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link to={createPageUrl('health-packages')} className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-gray-700 hover:text-blue-600">
                                            Health Packages
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link to={createPageUrl('contact')} className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-gray-700 hover:text-blue-600">
                                            Contact
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link to={createPageUrl('patient-portal')}>
                            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                Patient Portal
                            </Button>
                        </Link>
                        <Link to={createPageUrl('book-appointment')}>
                            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-200">
                                <Calendar className="w-4 h-4 mr-2" />
                                Book Appointment
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80">
                            <div className="flex flex-col gap-4 mt-8">
                                <Link
                                    to={createPageUrl('home')}
                                    className="px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg font-medium"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    to={createPageUrl('about')}
                                    className="px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg font-medium"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    About Us
                                </Link>

                                <div className="px-4 py-2">
                                    <p className="text-sm font-semibold text-gray-500 mb-2">Departments</p>
                                    <div className="space-y-1">
                                        {departments.map((dept) => (
                                            <Link
                                                key={dept.slug}
                                                to={createPageUrl(`department?slug=${dept.slug}`)}
                                                className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg text-sm"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                <dept.icon className="w-4 h-4 text-blue-600" />
                                                <span>{dept.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    to={createPageUrl('doctors')}
                                    className="px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg font-medium"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Doctors
                                </Link>
                                <Link
                                    to={createPageUrl('facilities')}
                                    className="px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg font-medium"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Facilities
                                </Link>
                                <Link
                                    to={createPageUrl('health-packages')}
                                    className="px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg font-medium"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Health Packages
                                </Link>
                                <Link
                                    to={createPageUrl('contact')}
                                    className="px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg font-medium"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Contact
                                </Link>

                                <div className="h-px bg-gray-100 my-2" />

                                <Link to={createPageUrl('patient-portal')} onClick={() => setMobileOpen(false)}>
                                    <Button variant="outline" className="w-full justify-start border-blue-600 text-blue-600">
                                        Patient Portal
                                    </Button>
                                </Link>
                                <Link to={createPageUrl('book-appointment')} onClick={() => setMobileOpen(false)}>
                                    <Button className="w-full justify-start bg-blue-600">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Book Appointment
                                    </Button>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
