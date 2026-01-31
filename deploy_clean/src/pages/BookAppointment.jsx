import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Calendar as CalendarIcon,
    Clock,
    User,
    Phone,
    Mail,
    FileText,
    CheckCircle2,
    Building2,
    Stethoscope,
    ArrowRight,
    ArrowLeft,
    Loader2
} from 'lucide-react';
import { format, addDays, isBefore, startOfToday } from 'date-fns';

const departments = [
    { value: 'gastroenterology', label: 'Gastroenterology', icon: '🫄' },
    { value: 'gynaecology', label: 'Gynaecology', icon: '👩‍⚕️' },
    { value: 'orthopaedics', label: 'Orthopaedics', icon: '🦴' },
    { value: 'general-medicine', label: 'General Medicine', icon: '🩺' },
    { value: 'cardiology', label: 'Cardiology', icon: '❤️' },
    { value: 'paediatrics', label: 'Paediatrics', icon: '👶' },
    { value: 'critical-care', label: 'Critical Care & Anaesthesia', icon: '🏥' },
];

const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
    '07:00 PM', '07:30 PM'
];

const sampleDoctors = [
    { id: '1', name: 'Dr. Rajesh Kumar', department: 'gastroenterology', consultation_fee: 500 },
    { id: '2', name: 'Dr. Priya Sharma', department: 'gynaecology', consultation_fee: 400 },
    { id: '3', name: 'Dr. Venkat Rao', department: 'orthopaedics', consultation_fee: 500 },
    { id: '4', name: 'Dr. Lakshmi Devi', department: 'cardiology', consultation_fee: 600 },
    { id: '5', name: 'Dr. Suresh Reddy', department: 'general-medicine', consultation_fee: 300 },
    { id: '6', name: 'Dr. Kavitha Rani', department: 'paediatrics', consultation_fee: 400 },
];

export default function BookAppointment() {
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedDoctor = urlParams.get('doctor');

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        department: '',
        doctor_id: preselectedDoctor || '',
        appointment_date: null,
        appointment_time: '',
        patient_name: '',
        patient_phone: '',
        patient_email: '',
        age: '',
        gender: '',
        reason: '',
        symptoms: '',
    });
    const [bookingComplete, setBookingComplete] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);

    const { data: doctors = [] } = useQuery({
        queryKey: ['doctors'],
        queryFn: () => base44.entities.Doctor.list(),
    });

    const displayDoctors = doctors.length > 0 ? doctors : sampleDoctors;

    const filteredDoctors = formData.department
        ? displayDoctors.filter(d => d.department === formData.department)
        : displayDoctors;

    const selectedDoctor = displayDoctors.find(d => d.id === formData.doctor_id);

    const createAppointment = useMutation({
        mutationFn: (data) => base44.entities.Appointment.create(data),
        onSuccess: (data) => {
            setBookingDetails(data);
            setBookingComplete(true);
        },
    });

    const handleNext = () => {
        if (step < 5) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = () => {
        createAppointment.mutate({
            ...formData,
            doctor_name: selectedDoctor?.name,
            appointment_date: formData.appointment_date ? format(formData.appointment_date, 'yyyy-MM-dd') : '',
            consultation_fee: selectedDoctor?.consultation_fee,
            status: 'scheduled',
        }, {
            onSuccess: (data) => {
                // Trigger the workflow (Google Sheets Sync)
                fetch('/api/sync-appointment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: formData.patient_name,
                        phone: formData.patient_phone,
                        date: formData.appointment_date,
                        department: formData.department
                    })
                }).catch(err => console.error("Sync failed", err));

                setBookingDetails(data);
                setBookingComplete(true);
            }
        });
    };

    const canProceed = () => {
        switch (step) {
            case 1: return formData.department;
            case 2: return formData.doctor_id;
            case 3: return formData.appointment_date && formData.appointment_time;
            case 4: return formData.patient_name && formData.patient_phone && formData.gender;
            case 5: return true;
            default: return false;
        }
    };

    if (bookingComplete) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-lg w-full text-center"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Appointment Booked!</h1>
                    <p className="text-gray-600 mb-8">
                        Your appointment has been successfully scheduled. You will receive a confirmation SMS shortly.
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 text-left mb-8">
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Doctor</span>
                                <span className="font-semibold">{selectedDoctor?.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Date</span>
                                <span className="font-semibold">
                                    {formData.appointment_date && format(formData.appointment_date, 'dd MMM yyyy')}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Time</span>
                                <span className="font-semibold">{formData.appointment_time}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Patient</span>
                                <span className="font-semibold">{formData.patient_name}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Button
                            className="w-full bg-blue-600 hover:bg-blue-700"
                            onClick={() => window.location.href = '/'}
                        >
                            Back to Home
                        </Button>
                        <p className="text-sm text-gray-500">
                            For any queries, call us at <a href="tel:08632233644" className="text-blue-600">0863-2233644</a>
                        </p>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Book an Appointment</h1>
                    <p className="text-gray-600">Schedule your visit with our expert doctors</p>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center justify-center mb-8">
                    {[1, 2, 3, 4, 5].map((s, i) => (
                        <React.Fragment key={s}>
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${step >= s
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 text-gray-500'
                                    }`}
                            >
                                {s}
                            </div>
                            {i < 4 && (
                                <div className={`w-16 md:w-24 h-1 ${step > s ? 'bg-blue-600' : 'bg-gray-200'}`} />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Form Content */}
                <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
                    <AnimatePresence mode="wait">
                        {/* Step 1: Select Department */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Building2 className="w-6 h-6 text-blue-600" />
                                    Select Department
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {departments.map((dept) => (
                                        <button
                                            key={dept.value}
                                            onClick={() => setFormData({ ...formData, department: dept.value, doctor_id: '' })}
                                            className={`p-4 rounded-xl border-2 transition-all text-left flex items-center gap-3 ${formData.department === dept.value
                                                ? 'border-blue-600 bg-blue-50'
                                                : 'border-gray-200 hover:border-blue-300'
                                                }`}
                                        >
                                            <span className="text-2xl">{dept.icon}</span>
                                            <span className="font-medium text-gray-900">{dept.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Select Doctor */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Stethoscope className="w-6 h-6 text-blue-600" />
                                    Select Doctor
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {filteredDoctors.map((doctor) => (
                                        <button
                                            key={doctor.id}
                                            onClick={() => setFormData({ ...formData, doctor_id: doctor.id })}
                                            className={`p-4 rounded-xl border-2 transition-all text-left ${formData.doctor_id === doctor.id
                                                ? 'border-blue-600 bg-blue-50'
                                                : 'border-gray-200 hover:border-blue-300'
                                                }`}
                                        >
                                            <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                                            <p className="text-sm text-gray-600 capitalize">{doctor.department?.replace('-', ' ')}</p>
                                            <p className="text-blue-600 font-medium mt-2">₹{doctor.consultation_fee}</p>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Select Date & Time */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <CalendarIcon className="w-6 h-6 text-blue-600" />
                                    Select Date & Time
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <Label className="mb-2 block">Select Date</Label>
                                        <Calendar
                                            mode="single"
                                            selected={formData.appointment_date}
                                            onSelect={(date) => setFormData({ ...formData, appointment_date: date })}
                                            disabled={(date) => isBefore(date, startOfToday())}
                                            className="rounded-xl border"
                                        />
                                    </div>
                                    <div>
                                        <Label className="mb-2 block">Select Time Slot</Label>
                                        <div className="grid grid-cols-3 gap-2 max-h-80 overflow-y-auto pr-2">
                                            {timeSlots.map((slot) => (
                                                <button
                                                    key={slot}
                                                    onClick={() => setFormData({ ...formData, appointment_time: slot })}
                                                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${formData.appointment_time === slot
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                                        }`}
                                                >
                                                    {slot}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 4: Patient Details */}
                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <User className="w-6 h-6 text-blue-600" />
                                    Patient Details
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="name">Full Name *</Label>
                                        <Input
                                            id="name"
                                            value={formData.patient_name}
                                            onChange={(e) => setFormData({ ...formData, patient_name: e.target.value })}
                                            placeholder="Enter patient name"
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="phone">Phone Number *</Label>
                                        <Input
                                            id="phone"
                                            value={formData.patient_phone}
                                            onChange={(e) => setFormData({ ...formData, patient_phone: e.target.value })}
                                            placeholder="Enter phone number"
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.patient_email}
                                            onChange={(e) => setFormData({ ...formData, patient_email: e.target.value })}
                                            placeholder="Enter email"
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="age">Age</Label>
                                        <Input
                                            id="age"
                                            type="number"
                                            value={formData.age}
                                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                            placeholder="Enter age"
                                            className="mt-1"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <Label>Gender *</Label>
                                        <div className="flex gap-4 mt-2">
                                            {['male', 'female', 'other'].map((g) => (
                                                <button
                                                    key={g}
                                                    onClick={() => setFormData({ ...formData, gender: g })}
                                                    className={`px-6 py-2 rounded-lg capitalize transition-colors ${formData.gender === g
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                                        }`}
                                                >
                                                    {g}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 5: Reason & Review */}
                        {step === 5 && (
                            <motion.div
                                key="step5"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <FileText className="w-6 h-6 text-blue-600" />
                                    Reason for Visit
                                </h2>
                                <div className="space-y-4 mb-8">
                                    <div>
                                        <Label htmlFor="reason">Reason for Visit</Label>
                                        <Textarea
                                            id="reason"
                                            value={formData.reason}
                                            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                            placeholder="Briefly describe the reason for your visit"
                                            className="mt-1"
                                            rows={3}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="symptoms">Symptoms (if any)</Label>
                                        <Textarea
                                            id="symptoms"
                                            value={formData.symptoms}
                                            onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                                            placeholder="List any symptoms you're experiencing"
                                            className="mt-1"
                                            rows={3}
                                        />
                                    </div>
                                </div>

                                {/* Summary */}
                                <div className="bg-blue-50 rounded-2xl p-6">
                                    <h3 className="font-semibold text-gray-900 mb-4">Appointment Summary</h3>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="text-gray-600">Doctor:</span>
                                            <span className="ml-2 font-medium">{selectedDoctor?.name}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">Department:</span>
                                            <span className="ml-2 font-medium capitalize">{formData.department?.replace('-', ' ')}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">Date:</span>
                                            <span className="ml-2 font-medium">
                                                {formData.appointment_date && format(formData.appointment_date, 'dd MMM yyyy')}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">Time:</span>
                                            <span className="ml-2 font-medium">{formData.appointment_time}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">Patient:</span>
                                            <span className="ml-2 font-medium">{formData.patient_name}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">Consultation Fee:</span>
                                            <span className="ml-2 font-medium text-green-600">₹{selectedDoctor?.consultation_fee}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                        <Button
                            variant="outline"
                            onClick={handleBack}
                            disabled={step === 1}
                            className="gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </Button>
                        {step < 5 ? (
                            <Button
                                onClick={handleNext}
                                disabled={!canProceed()}
                                className="gap-2 bg-blue-600 hover:bg-blue-700"
                            >
                                Next
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        ) : (
                            <Button
                                onClick={handleSubmit}
                                disabled={createAppointment.isPending}
                                className="gap-2 bg-green-600 hover:bg-green-700"
                            >
                                {createAppointment.isPending ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Booking...
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle2 className="w-4 h-4" />
                                        Confirm Booking
                                    </>
                                )}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}