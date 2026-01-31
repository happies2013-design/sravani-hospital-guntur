import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Calendar,
    Users,
    CreditCard,
    Activity,
    TrendingUp,
    Clock,
    CheckCircle2,
    AlertCircle,
    FileText,
    Settings,
    LogOut,
    Menu,
    Home,
    Stethoscope,
    Package,
    MessageSquare,
    BarChart3
} from 'lucide-react';
import { format } from 'date-fns';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const sidebarItems = [
    { icon: Home, label: 'Dashboard', page: 'AdminDashboard' },
    { icon: Calendar, label: 'Appointments', page: 'AdminAppointments' },
    { icon: Users, label: 'Patients', page: 'AdminPatients' },
    { icon: Stethoscope, label: 'Doctors', page: 'AdminDoctors' },
    { icon: CreditCard, label: 'Billing', page: 'AdminBilling' },
    { icon: Package, label: 'Inventory', page: 'AdminInventory' },
    { icon: MessageSquare, label: 'Inquiries', page: 'AdminInquiries' },
    { icon: BarChart3, label: 'Reports', page: 'AdminReports' },
    { icon: Settings, label: 'Settings', page: 'AdminSettings' },
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

export default function AdminDashboard() {
    const [user, setUser] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const userData = await base44.auth.me();
                setUser(userData);
            } catch (error) {
                base44.auth.redirectToLogin();
            }
        };
        checkAuth();
    }, []);

    const { data: appointments = [] } = useQuery({
        queryKey: ['adminAppointments'],
        queryFn: () => base44.entities.Appointment.list('-appointment_date', 100),
    });

    const { data: patients = [] } = useQuery({
        queryKey: ['adminPatients'],
        queryFn: () => base44.entities.Patient.list('-created_date', 100),
    });

    const { data: invoices = [] } = useQuery({
        queryKey: ['adminInvoices'],
        queryFn: () => base44.entities.Invoice.list('-created_date', 100),
    });

    const { data: inquiries = [] } = useQuery({
        queryKey: ['adminInquiries'],
        queryFn: () => base44.entities.ContactInquiry.filter({ status: 'new' }),
    });

    const today = format(new Date(), 'yyyy-MM-dd');
    const todayAppointments = appointments.filter(a => a.appointment_date === today);
    const pendingInvoices = invoices.filter(i => i.payment_status === 'pending');
    const totalRevenue = invoices
        .filter(i => i.payment_status === 'paid')
        .reduce((sum, i) => sum + (i.total_amount || 0), 0);

    // Mock chart data
    const appointmentTrends = [
        { name: 'Mon', appointments: 24 },
        { name: 'Tue', appointments: 32 },
        { name: 'Wed', appointments: 28 },
        { name: 'Thu', appointments: 35 },
        { name: 'Fri', appointments: 30 },
        { name: 'Sat', appointments: 42 },
        { name: 'Sun', appointments: 18 },
    ];

    const departmentData = [
        { name: 'General Medicine', value: 35 },
        { name: 'Gynaecology', value: 25 },
        { name: 'Orthopaedics', value: 20 },
        { name: 'Cardiology', value: 12 },
        { name: 'Paediatrics', value: 8 },
    ];

    const statusColors = {
        scheduled: 'bg-yellow-100 text-yellow-700',
        confirmed: 'bg-blue-100 text-blue-700',
        completed: 'bg-green-100 text-green-700',
        cancelled: 'bg-red-100 text-red-700',
    };

    // Define permissions
    const getVisibleSidebarItems = (role) => {
        if (role === 'admin') return sidebarItems;
        if (role === 'doctor') {
            return sidebarItems.filter(item =>
                ['AdminDashboard', 'AdminAppointments', 'AdminPatients', 'AdminInquiries'].includes(item.page)
            );
        }
        return [];
    };

    const visibleItems = getVisibleSidebarItems(user?.role || (user?.email?.includes('admin') ? 'admin' : 'doctor'));

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className={`fixed left-0 top-0 h-full bg-gray-900 text-white transition-all z-50 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
                <div className="p-4 border-b border-gray-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold">S</span>
                        </div>
                        {sidebarOpen && (
                            <div>
                                <h1 className="font-bold">Sravani Hospital</h1>
                                <p className="text-xs text-gray-400 capitalize">{user?.role || 'Admin'} Panel</p>
                            </div>
                        )}
                    </div>
                </div>

                <nav className="p-4 space-y-2">
                    {visibleItems.map((item) => (
                        <Link
                            key={item.page}
                            to={createPageUrl(item.page)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${item.page === 'AdminDashboard'
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                }`}
                        >
                            <item.icon className="w-5 h-5 flex-shrink-0" />
                            {sidebarOpen && <span>{item.label}</span>}
                        </Link>
                    ))}
                </nav>

                <div className="absolute bottom-4 left-4 right-4">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800"
                        onClick={() => base44.auth.logout()}
                    >
                        <LogOut className="w-5 h-5 mr-3" />
                        {sidebarOpen && 'Sign Out'}
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 transition-all ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
                {/* Header */}
                <header className="bg-white border-b px-6 py-4 sticky top-0 z-40">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                            >
                                <Menu className="w-5 h-5" />
                            </Button>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                                <p className="text-sm text-gray-500">{format(new Date(), 'EEEE, MMMM d, yyyy')}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-sm font-medium">{user?.full_name || user?.email}</p>
                                <p className="text-xs text-gray-500 capitalize">{user?.role || 'Admin'}</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-6">
                    {/* Stats Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Today's Appointments</p>
                                        <p className="text-3xl font-bold text-gray-900">{todayAppointments.length}</p>
                                        <p className="text-xs text-green-600 flex items-center mt-1">
                                            <TrendingUp className="w-3 h-3 mr-1" />
                                            +12% from yesterday
                                        </p>
                                    </div>
                                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                                        <Calendar className="w-7 h-7 text-blue-600" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Total Patients</p>
                                        <p className="text-3xl font-bold text-gray-900">{patients.length}</p>
                                        <p className="text-xs text-green-600 flex items-center mt-1">
                                            <TrendingUp className="w-3 h-3 mr-1" />
                                            +5 new this week
                                        </p>
                                    </div>
                                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
                                        <Users className="w-7 h-7 text-green-600" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Revenue (This Month)</p>
                                        <p className="text-3xl font-bold text-gray-900">₹{totalRevenue.toLocaleString()}</p>
                                        <p className="text-xs text-green-600 flex items-center mt-1">
                                            <TrendingUp className="w-3 h-3 mr-1" />
                                            +8% from last month
                                        </p>
                                    </div>
                                    <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center">
                                        <CreditCard className="w-7 h-7 text-purple-600" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Pending Bills</p>
                                        <p className="text-3xl font-bold text-gray-900">{pendingInvoices.length}</p>
                                        <p className="text-xs text-orange-600 flex items-center mt-1">
                                            <AlertCircle className="w-3 h-3 mr-1" />
                                            Needs attention
                                        </p>
                                    </div>
                                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                                        <FileText className="w-7 h-7 text-orange-600" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Charts */}
                    <div className="grid lg:grid-cols-3 gap-6 mb-8">
                        <Card className="lg:col-span-2">
                            <CardHeader>
                                <CardTitle>Appointment Trends</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <AreaChart data={appointmentTrends}>
                                        <defs>
                                            <linearGradient id="colorAppointments" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                        <XAxis dataKey="name" stroke="#9CA3AF" />
                                        <YAxis stroke="#9CA3AF" />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="appointments" stroke="#3B82F6" fill="url(#colorAppointments)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>By Department</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={departmentData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={100}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {departmentData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="space-y-2 mt-4">
                                    {departmentData.map((dept, index) => (
                                        <div key={dept.name} className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                                                <span>{dept.name}</span>
                                            </div>
                                            <span className="font-medium">{dept.value}%</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Recent Activity */}
                    <div className="grid lg:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle>Recent Appointments</CardTitle>
                                <Link to={createPageUrl('AdminAppointments')}>
                                    <Button variant="ghost" size="sm">View All</Button>
                                </Link>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {appointments.slice(0, 5).map((apt) => (
                                        <div key={apt.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <span className="text-blue-600 font-medium">
                                                        {apt.patient_name?.charAt(0) || 'P'}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="font-medium">{apt.patient_name}</p>
                                                    <p className="text-sm text-gray-500">{apt.doctor_name || apt.department}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <Badge className={statusColors[apt.status] || 'bg-gray-100'}>
                                                    {apt.status}
                                                </Badge>
                                                <p className="text-xs text-gray-500 mt-1">{apt.appointment_time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle>New Inquiries</CardTitle>
                                <Link to={createPageUrl('AdminInquiries')}>
                                    <Button variant="ghost" size="sm">View All</Button>
                                </Link>
                            </CardHeader>
                            <CardContent>
                                {inquiries.length === 0 ? (
                                    <div className="text-center py-8 text-gray-500">
                                        <CheckCircle2 className="w-12 h-12 mx-auto mb-2 text-green-500" />
                                        <p>All inquiries handled!</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {inquiries.slice(0, 5).map((inq) => (
                                            <div key={inq.id} className="p-3 bg-gray-50 rounded-xl">
                                                <div className="flex items-center justify-between mb-2">
                                                    <p className="font-medium">{inq.name}</p>
                                                    <Badge variant="outline" className="capitalize">{inq.subject}</Badge>
                                                </div>
                                                <p className="text-sm text-gray-600 line-clamp-2">{inq.message}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}