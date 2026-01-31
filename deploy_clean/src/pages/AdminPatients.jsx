import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import {
    Search,
    Plus,
    ArrowLeft,
    User,
    Phone,
    Mail,
    MapPin,
    Calendar,
    Download,
    MoreVertical,
    Edit,
    Eye,
    Loader2
} from 'lucide-react';
import { format } from 'date-fns';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AdminPatients() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [isAddingPatient, setIsAddingPatient] = useState(false);
    const [newPatient, setNewPatient] = useState({
        full_name: '',
        email: '',
        phone: '',
        date_of_birth: '',
        gender: '',
        blood_group: '',
        address: '',
        city: '',
        emergency_contact_name: '',
        emergency_contact_phone: '',
    });
    const queryClient = useQueryClient();

    const { data: patients = [], isLoading } = useQuery({
        queryKey: ['adminPatients'],
        queryFn: () => base44.entities.Patient.list('-created_date'),
    });

    const createPatient = useMutation({
        mutationFn: (data) => base44.entities.Patient.create({
            ...data,
            patient_id: `PAT${Date.now().toString().slice(-6)}`,
            status: 'active'
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['adminPatients'] });
            setIsAddingPatient(false);
            setNewPatient({
                full_name: '', email: '', phone: '', date_of_birth: '', gender: '',
                blood_group: '', address: '', city: '', emergency_contact_name: '', emergency_contact_phone: '',
            });
        },
    });

    const filteredPatients = patients.filter(patient =>
        patient.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient.phone?.includes(searchQuery) ||
        patient.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient.patient_id?.includes(searchQuery)
    );

    const handleAddPatient = (e) => {
        e.preventDefault();
        createPatient.mutate(newPatient);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white border-b px-6 py-4 sticky top-0 z-40">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link to={createPageUrl('AdminDashboard')}>
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">Patients</h1>
                            <p className="text-sm text-gray-500">Manage patient records</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Export
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setIsAddingPatient(true)}>
                            <Plus className="w-4 h-4 mr-2" />
                            Add Patient
                        </Button>
                    </div>
                </div>
            </header>

            <div className="p-6">
                {/* Search */}
                <Card className="mb-6">
                    <CardContent className="pt-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                                placeholder="Search by name, phone, email, or patient ID..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Patients Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isLoading ? (
                        <div className="col-span-full text-center py-12">
                            <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-600" />
                        </div>
                    ) : filteredPatients.length === 0 ? (
                        <div className="col-span-full text-center py-12">
                            <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600">No patients found</p>
                        </div>
                    ) : (
                        filteredPatients.map((patient) => (
                            <Card key={patient.id} className="hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                                <User className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="font-bold">{patient.full_name}</p>
                                                <p className="text-xs text-gray-500">{patient.patient_id || 'N/A'}</p>
                                            </div>
                                        </div>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoreVertical className="w-4 h-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem onClick={() => setSelectedPatient(patient)}>
                                                    <Eye className="w-4 h-4 mr-2" />
                                                    View Details
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Edit className="w-4 h-4 mr-2" />
                                                    Edit
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Phone className="w-4 h-4" />
                                            <span>{patient.phone || '-'}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Mail className="w-4 h-4" />
                                            <span className="truncate">{patient.email || '-'}</span>
                                        </div>
                                        {patient.city && (
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <MapPin className="w-4 h-4" />
                                                <span>{patient.city}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between mt-4 pt-4 border-t">
                                        {patient.blood_group && (
                                            <Badge variant="outline" className="border-red-200 text-red-600">
                                                {patient.blood_group}
                                            </Badge>
                                        )}
                                        <Badge className={patient.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                                            {patient.status || 'active'}
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            </div>

            {/* Add Patient Dialog */}
            <Dialog open={isAddingPatient} onOpenChange={setIsAddingPatient}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Add New Patient</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleAddPatient} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <Label>Full Name *</Label>
                                <Input
                                    value={newPatient.full_name}
                                    onChange={(e) => setNewPatient({ ...newPatient, full_name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <Label>Phone Number *</Label>
                                <Input
                                    value={newPatient.phone}
                                    onChange={(e) => setNewPatient({ ...newPatient, phone: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    value={newPatient.email}
                                    onChange={(e) => setNewPatient({ ...newPatient, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label>Date of Birth</Label>
                                <Input
                                    type="date"
                                    value={newPatient.date_of_birth}
                                    onChange={(e) => setNewPatient({ ...newPatient, date_of_birth: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label>Gender</Label>
                                <Select
                                    value={newPatient.gender}
                                    onValueChange={(value) => setNewPatient({ ...newPatient, gender: value })}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label>Blood Group</Label>
                                <Select
                                    value={newPatient.blood_group}
                                    onValueChange={(value) => setNewPatient({ ...newPatient, blood_group: value })}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select blood group" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
                                            <SelectItem key={bg} value={bg}>{bg}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="md:col-span-2">
                                <Label>Address</Label>
                                <Textarea
                                    value={newPatient.address}
                                    onChange={(e) => setNewPatient({ ...newPatient, address: e.target.value })}
                                    rows={2}
                                />
                            </div>
                            <div>
                                <Label>City</Label>
                                <Input
                                    value={newPatient.city}
                                    onChange={(e) => setNewPatient({ ...newPatient, city: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label>Emergency Contact Name</Label>
                                <Input
                                    value={newPatient.emergency_contact_name}
                                    onChange={(e) => setNewPatient({ ...newPatient, emergency_contact_name: e.target.value })}
                                />
                            </div>
                            <div className="md:col-span-2">
                                <Label>Emergency Contact Phone</Label>
                                <Input
                                    value={newPatient.emergency_contact_phone}
                                    onChange={(e) => setNewPatient({ ...newPatient, emergency_contact_phone: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-3">
                            <Button type="button" variant="outline" onClick={() => setIsAddingPatient(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={createPatient.isPending}>
                                {createPatient.isPending ? (
                                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Saving...</>
                                ) : (
                                    'Add Patient'
                                )}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Patient Details Dialog */}
            <Dialog open={!!selectedPatient} onOpenChange={() => setSelectedPatient(null)}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>Patient Details</DialogTitle>
                    </DialogHeader>
                    {selectedPatient && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                    <User className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">{selectedPatient.full_name}</p>
                                    <p className="text-sm text-gray-500">{selectedPatient.patient_id}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-gray-500">Phone</p>
                                    <p className="font-medium">{selectedPatient.phone || '-'}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Email</p>
                                    <p className="font-medium truncate">{selectedPatient.email || '-'}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Gender</p>
                                    <p className="font-medium capitalize">{selectedPatient.gender || '-'}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Blood Group</p>
                                    <p className="font-medium">{selectedPatient.blood_group || '-'}</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-gray-500">Address</p>
                                    <p className="font-medium">{selectedPatient.address ? `${selectedPatient.address}, ${selectedPatient.city}` : '-'}</p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Link to={createPageUrl(`BookAppointment?patient=${selectedPatient.id}`)} className="flex-1">
                                    <Button className="w-full">Book Appointment</Button>
                                </Link>
                                <Button variant="outline" className="flex-1">View History</Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}