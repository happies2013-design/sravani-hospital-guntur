import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
    Search,
    Filter,
    Calendar as CalendarIcon,
    Phone,
    Mail,
    Clock,
    CheckCircle2,
    XCircle,
    MoreVertical,
    Download,
    Plus,
    ArrowLeft,
    User,
    Stethoscope
} from 'lucide-react';
import { format } from 'date-fns';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'scheduled', label: 'Scheduled' },
    { value: 'confirmed', label: 'Confirmed' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'no-show', label: 'No Show' },
];

const statusColors = {
    scheduled: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    confirmed: 'bg-blue-100 text-blue-700 border-blue-200',
    completed: 'bg-green-100 text-green-700 border-green-200',
    cancelled: 'bg-red-100 text-red-700 border-red-200',
    'no-show': 'bg-gray-100 text-gray-700 border-gray-200',
};

export default function AdminAppointments() {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [dateFilter, setDateFilter] = useState(null);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const queryClient = useQueryClient();

    const { data: appointments = [], isLoading } = useQuery({
        queryKey: ['adminAppointments'],
        queryFn: () => base44.entities.Appointment.list('-appointment_date'),
    });

    const updateAppointment = useMutation({
        mutationFn: ({ id, data }) => base44.entities.Appointment.update(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['adminAppointments'] });
            setSelectedAppointment(null);
        },
    });

    const filteredAppointments = appointments.filter(apt => {
        const matchesSearch =
            apt.patient_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            apt.patient_phone?.includes(searchQuery) ||
            apt.doctor_name?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'all' || apt.status === statusFilter;
        const matchesDate = !dateFilter || apt.appointment_date === format(dateFilter, 'yyyy-MM-dd');
        return matchesSearch && matchesStatus && matchesDate;
    });

    const handleStatusChange = (appointmentId, newStatus) => {
        updateAppointment.mutate({ id: appointmentId, data: { status: newStatus } });
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white border-b px-6 py-4 sticky top-0 z-40">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link to={createPageUrl('admin-dashboard')}>
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">Appointments</h1>
                            <p className="text-sm text-gray-500">Manage patient appointments</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Export
                        </Button>
                        <Link to={createPageUrl('book-appointment')}>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                <Plus className="w-4 h-4 mr-2" />
                                New Appointment
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="p-6">
                {/* Filters */}
                <Card className="mb-6">
                    <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                    placeholder="Search by patient name, phone, or doctor..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                            <Select value={statusFilter} onValueChange={setStatusFilter}>
                                <SelectTrigger className="w-full md:w-40">
                                    <Filter className="w-4 h-4 mr-2" />
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {statusOptions.map(opt => (
                                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full md:w-auto">
                                        <CalendarIcon className="w-4 h-4 mr-2" />
                                        {dateFilter ? format(dateFilter, 'MMM d, yyyy') : 'Filter by Date'}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={dateFilter}
                                        onSelect={setDateFilter}
                                    />
                                    {dateFilter && (
                                        <div className="p-2 border-t">
                                            <Button variant="ghost" size="sm" onClick={() => setDateFilter(null)} className="w-full">
                                                Clear Filter
                                            </Button>
                                        </div>
                                    )}
                                </PopoverContent>
                            </Popover>
                        </div>
                    </CardContent>
                </Card>

                {/* Appointments List */}
                <Card>
                    <CardHeader>
                        <CardTitle>{filteredAppointments.length} Appointments</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-3 px-4 font-medium text-gray-600">Patient</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-600">Doctor</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-600">Date & Time</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredAppointments.map((apt) => (
                                        <tr key={apt.id} className="border-b hover:bg-gray-50">
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                        <User className="w-5 h-5 text-blue-600" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">{apt.patient_name}</p>
                                                        <p className="text-sm text-gray-500">{apt.patient_phone}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div>
                                                    <p className="font-medium">{apt.doctor_name || '-'}</p>
                                                    <p className="text-sm text-gray-500 capitalize">{apt.department?.replace('-', ' ')}</p>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-2">
                                                    <CalendarIcon className="w-4 h-4 text-gray-400" />
                                                    <div>
                                                        <p className="font-medium">{apt.appointment_date}</p>
                                                        <p className="text-sm text-gray-500">{apt.appointment_time}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <Badge className={`${statusColors[apt.status]} border`}>
                                                    {apt.status}
                                                </Badge>
                                            </td>
                                            <td className="py-4 px-4">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon">
                                                            <MoreVertical className="w-4 h-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent>
                                                        <DropdownMenuItem onClick={() => setSelectedAppointment(apt)}>
                                                            View Details
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem onClick={() => handleStatusChange(apt.id, 'confirmed')}>
                                                            <CheckCircle2 className="w-4 h-4 mr-2 text-blue-600" />
                                                            Confirm
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem onClick={() => handleStatusChange(apt.id, 'completed')}>
                                                            <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />
                                                            Mark Complete
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem onClick={() => handleStatusChange(apt.id, 'cancelled')}>
                                                            <XCircle className="w-4 h-4 mr-2 text-red-600" />
                                                            Cancel
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {filteredAppointments.length === 0 && (
                                <div className="text-center py-12">
                                    <CalendarIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-600">No appointments found</p>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Appointment Details Dialog */}
            <Dialog open={!!selectedAppointment} onOpenChange={() => setSelectedAppointment(null)}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>Appointment Details</DialogTitle>
                    </DialogHeader>
                    {selectedAppointment && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                                    <User className="w-7 h-7 text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">{selectedAppointment.patient_name}</p>
                                    <Badge className={statusColors[selectedAppointment.status]}>
                                        {selectedAppointment.status}
                                    </Badge>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-gray-400" />
                                    <span>{selectedAppointment.patient_phone}</span>
                                </div>
                                {selectedAppointment.patient_email && (
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-4 h-4 text-gray-400" />
                                        <span>{selectedAppointment.patient_email}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-3">
                                    <Stethoscope className="w-4 h-4 text-gray-400" />
                                    <span>{selectedAppointment.doctor_name || selectedAppointment.department}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CalendarIcon className="w-4 h-4 text-gray-400" />
                                    <span>{selectedAppointment.appointment_date} at {selectedAppointment.appointment_time}</span>
                                </div>
                            </div>

                            {selectedAppointment.reason && (
                                <div>
                                    <p className="text-sm font-medium text-gray-600 mb-1">Reason for Visit</p>
                                    <p className="p-3 bg-gray-50 rounded-lg text-sm">{selectedAppointment.reason}</p>
                                </div>
                            )}

                            <div className="flex gap-2">
                                <Button
                                    className="flex-1 bg-green-600 hover:bg-green-700"
                                    onClick={() => handleStatusChange(selectedAppointment.id, 'completed')}
                                >
                                    Mark Complete
                                </Button>
                                <Button
                                    variant="outline"
                                    className="flex-1"
                                    onClick={() => handleStatusChange(selectedAppointment.id, 'cancelled')}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}