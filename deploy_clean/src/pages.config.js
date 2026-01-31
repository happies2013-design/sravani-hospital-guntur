import { lazy } from 'react';
import Layout from './Layout';

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const AdminAppointments = lazy(() => import('./pages/AdminAppointments'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const AdminPatients = lazy(() => import('./pages/AdminPatients'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const BookAppointment = lazy(() => import('./pages/BookAppointment'));
const Contact = lazy(() => import('./pages/Contact'));
const Department = lazy(() => import('./pages/Department'));
const Departments = lazy(() => import('./pages/Departments'));
const DoctorProfile = lazy(() => import('./pages/DoctorProfile'));
const Doctors = lazy(() => import('./pages/Doctors'));
const Emergency = lazy(() => import('./pages/Emergency'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Facilities = lazy(() => import('./pages/Facilities'));
const HealthPackages = lazy(() => import('./pages/HealthPackages'));
const Insurance = lazy(() => import('./pages/Insurance'));
const PatientPortal = lazy(() => import('./pages/PatientPortal'));
const Login = lazy(() => import('./pages/Login'));

export const pagesConfig = {
    Layout: Layout,
    mainPage: 'home',
    Pages: {
        'login': Login,
        'home': Home,
        'about': About,
        'admin-appointments': AdminAppointments,
        'admin-dashboard': AdminDashboard,
        'admin-patients': AdminPatients,
        'blog': Blog,
        'blog-post': BlogPost,
        'book-appointment': BookAppointment,
        'contact': Contact,
        'department': Department,
        'departments': Departments,
        'doctor-profile': DoctorProfile,
        'doctors': Doctors,
        'emergency': Emergency,
        'faq': FAQ,
        'facilities': Facilities,
        'health-packages': HealthPackages,
        'insurance': Insurance,
        'patient-portal': PatientPortal
    }
};
