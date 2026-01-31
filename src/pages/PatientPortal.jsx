import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Calendar,
    FileText,
    CreditCard,
    User,
    Clock,
    Download,
    Eye,
    Phone,
    ArrowRight,
    CheckCircle2,
    XCircle,
    AlertCircle,
    Loader2
} from 'lucide-react';

export default function PatientPortal() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const isAuth = await base44.auth.isAuthenticated();
                if (isAuth) {
                    const userData = await base44.auth.me();
                    setUser(userData);
                }
            } catch (error) {
                console.log('Not authenticated');
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    const { data: appointments = [] } = useQuery({
        queryKey: ['patientAppointments', user?.email],
        queryFn: async () => {
            if (!user?.email) return [];
            return base44.entities.Appointment.filter({ patient_email: user.email }, '-appointment_date');
        },
        enabled: !!user?.email,
    });

    const { data: medicalRecords = [] } = useQuery({
        queryKey: ['patientRecords', user?.email],
        queryFn: async () => {
            if (!user?.email) return [];
            return base44.entities.MedicalRecord.filter({ created_by: user.email }, '-record_date');
        },
        enabled: !!user?.email,
    });

    const { data: invoices = [] } = useQuery({
        queryKey: ['patientInvoices', user?.email],
        queryFn: async () => {
            if (!user?.email) return [];
            return base44.entities.Invoice.filter({ created_by: user.email }, '-created_date');
        },
        enabled: !!user?.email,
    });

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-50">
                {/* Hero */}
                <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white"
                        >
                            <User className="w-16 h-16 mx-auto mb-6 text-blue-200" />
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Portal</h1>
                            <p className="text-xl text-blue-100 mb-8">
                                Access your medical records, appointments, and billing information
                            </p>
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-blue-50"
                                onClick={() => base44.auth.redirectToLogin()}
                            >
                                Sign In to Your Account
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">What You Can Do</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Calendar,
                                    title: 'Manage Appointments',
                                    description: 'View, reschedule, or cancel your upcoming appointments easily'
                                },
                                {
                                    icon: FileText,
                                    title: 'Medical Records',
                                    description: 'Access your prescriptions, lab reports, and medical history'
                                },
                                {
                                    icon: CreditCard,
                                    title: 'Billing & Payments',
                                    description: 'View invoices, make payments, and track insurance claims'
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                                >
                                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <feature.icon className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-12 bg-blue-600">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">New Patient?</h2>
                        <p className="text-blue-100 mb-6">
                            Book your first appointment and we'll create your account automatically.
                        </p>
                        <Link to={createPageUrl('book-appointment')}>
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                                <Calendar className="w-5 h-5 mr-2" />
                                Book Appointment
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        );
    }

    const statusColors = {
        scheduled: 'bg-yellow-100 text-yellow-700',
        confirmed: 'bg-blue-100 text-blue-700',
        completed: 'bg-green-100 text-green-700',
        cancelled: 'bg-red-100 text-red-700',
        'no-show': 'bg-gray-100 text-gray-700'
    };

    const upcomingAppointments = appointments.filter(a =>
        new Date(a.appointment_date) >= new Date() && a.status !== 'cancelled'
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between text-white">
                        <div>
                            <p className="text-blue-200">Welcome back,</p>
                            <h1 className="text-2xl font-bold">{user.full_name || user.email}</h1>
                        </div>
                        <Button
                            variant="outline"
                            className="border-white text-white hover:bg-white/10"
                            onClick={() => base44.auth.logout()}
                        >
                            Sign Out
                        </Button>
                    </div>
                </div>
            </section>

            {/* Dashboard */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Quick Stats */}
                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <Calendar className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">{upcomingAppointments.length}</p>
                                        <p className="text-gray-600 text-sm">Upcoming Appointments</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                        <FileText className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">{medicalRecords.length}</p>
                                        <p className="text-gray-600 text-sm">Medical Records</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                                        <CreditCard className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">{invoices.filter(i => i.payment_status === 'pending').length}</p>
                                        <p className="text-gray-600 text-sm">Pending Bills</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <Link to={createPageUrl('book-appointment')}>
                                    <Button className="w-full h-full bg-blue-600 hover:bg-blue-700">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Book Appointment
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Tabs */}
                    <Tabs defaultValue="appointments" className="space-y-6">
                        <TabsList className="bg-white shadow-sm">
                            <TabsTrigger value="appointments">Appointments</TabsTrigger>
                            <TabsTrigger value="records">Medical Records</TabsTrigger>
                            <TabsTrigger value="billing">Billing</TabsTrigger>
                            <TabsTrigger value="profile">Profile</TabsTrigger>
                        </TabsList>

                        {/* Appointments Tab */}
                        <TabsContent value="appointments">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Your Appointments</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {appointments.length === 0 ? (
                                        <div className="text-center py-8">
                                            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                            <p className="text-gray-600">No appointments found</p>
                                            <Link to={createPageUrl('book-appointment')}>
                                                <Button className="mt-4">Book Your First Appointment</Button>
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {appointments.map((apt) => (
                                                <div
                                                    key={apt.id}
                                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                                            <Calendar className="w-6 h-6 text-blue-600" />
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold">{apt.doctor_name || 'Doctor'}</p>
                                                            <p className="text-gray-600 text-sm">{apt.department}</p>
                                                            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                                                <Clock className="w-4 h-4" />
                                                                {apt.appointment_date} at {apt.appointment_time}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Badge className={statusColors[apt.status] || 'bg-gray-100'}>
                                                        {apt.status}
                                                    </Badge>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Medical Records Tab */}
                        <TabsContent value="records">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Medical Records</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {medicalRecords.length === 0 ? (
                                        <div className="text-center py-8">
                                            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                            <p className="text-gray-600">No medical records found</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {medicalRecords.map((record) => (
                                                <div
                                                    key={record.id}
                                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                                            <FileText className="w-6 h-6 text-green-600" />
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold">{record.title}</p>
                                                            <p className="text-gray-600 text-sm capitalize">{record.record_type?.replace('-', ' ')}</p>
                                                            <p className="text-sm text-gray-500">{record.record_date}</p>
                                                        </div>
                                                    </div>
                                                    {record.file_url && (
                                                        <a href={record.file_url} target="_blank" rel="noopener noreferrer">
                                                            <Button variant="outline" size="sm">
                                                                <Download className="w-4 h-4 mr-2" />
                                                                Download
                                                            </Button>
                                                        </a>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Billing Tab */}
                        <TabsContent value="billing">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Billing & Invoices</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {invoices.length === 0 ? (
                                        <div className="text-center py-8">
                                            <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                            <p className="text-gray-600">No invoices found</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {invoices.map((invoice) => (
                                                <div
                                                    key={invoice.id}
                                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                                            <CreditCard className="w-6 h-6 text-orange-600" />
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold">Invoice #{invoice.invoice_number}</p>
                                                            <p className="text-gray-600 text-sm">₹{invoice.total_amount}</p>
                                                        </div>
                                                    </div>
                                                    <Badge className={
                                                        invoice.payment_status === 'paid'
                                                            ? 'bg-green-100 text-green-700'
                                                            : invoice.payment_status === 'pending'
                                                                ? 'bg-yellow-100 text-yellow-700'
                                                                : 'bg-red-100 text-red-700'
                                                    }>
                                                        {invoice.payment_status}
                                                    </Badge>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Profile Tab */}
                        <TabsContent value="profile">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Your Profile</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-sm text-gray-600">Full Name</label>
                                                <p className="font-medium">{user.full_name || '-'}</p>
                                            </div>
                                            <div>
                                                <label className="text-sm text-gray-600">Email</label>
                                                <p className="font-medium">{user.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </div>
    );
}