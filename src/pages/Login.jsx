import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from '@/lib/AuthContext';
import { useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import {
    Shield,
    User,
    Stethoscope,
    ArrowRight,
    Heart,
    Sparkles,
    Activity,
    Building2
} from 'lucide-react';

// Real hospital gallery images
const galleryImages = [
    {
        id: 1,
        url: "https://sravanihospital.org/img/gallery/0.jpg",
        title: "State-of-the-Art Facilities",
        subtitle: "Modern Healthcare Infrastructure",
        color: "from-blue-600 to-cyan-500"
    },
    {
        id: 2,
        url: "https://sravanihospital.org/img/gallery/1.jpg",
        title: "Expert Medical Team",
        subtitle: "Dedicated Healthcare Professionals",
        color: "from-purple-600 to-pink-500"
    },
    {
        id: 3,
        url: "https://sravanihospital.org/img/gallery/2.jpg",
        title: "Advanced Equipment",
        subtitle: "Latest Medical Technology",
        color: "from-green-600 to-emerald-500"
    },
    {
        id: 4,
        url: "https://sravanihospital.org/img/gallery/3.jpg",
        title: "Patient Care Excellence",
        subtitle: "Compassionate Healthcare",
        color: "from-orange-600 to-amber-500"
    },
    {
        id: 5,
        url: "https://sravanihospital.org/img/gallery/4.jpg",
        title: "24/7 Emergency Services",
        subtitle: "Always Here for You",
        color: "from-red-600 to-rose-500"
    },
    {
        id: 6,
        url: "https://sravanihospital.org/img/gallery/5.jpg",
        title: "Surgical Excellence",
        subtitle: "Advanced Operating Theaters",
        color: "from-indigo-600 to-blue-500"
    }
];

const FloatingParticle = ({ delay = 0, duration = 20 }) => (
    <motion.div
        className="absolute w-2 h-2 bg-white rounded-full opacity-20"
        initial={{ x: 0, y: 0 }}
        animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * -100, 0],
            opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
    />
);

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentImage, setCurrentImage] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { login } = useAuth();
    const navigate = useNavigate();

    // Auto-rotate gallery images
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % galleryImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Parallax mouse tracking
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 30,
                y: (e.clientY / window.innerHeight - 0.5) * 30
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        base44.auth.redirectToLogin(window.location.origin + '/admin-dashboard');
    };

    const currentGallery = galleryImages[currentImage];

    return (
        <div className="min-h-screen w-full flex overflow-hidden bg-slate-950 relative">
            {/* Left Side: Full-Size Gallery Showcase */}
            <div className="hidden lg:block lg:w-3/5 h-screen relative overflow-hidden">
                {/* Image Carousel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${currentGallery.url})`,
                                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(1.1)`
                            }}
                        />

                        {/* Gradient Overlays */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${currentGallery.color} opacity-40 mix-blend-multiply`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <FloatingParticle key={i} delay={i * 0.5} duration={15 + Math.random() * 10} />
                    ))}
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-between p-12">
                    {/* Top: Logo & Hospital Name */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-4"
                    >
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center">
                            <img
                                src="https://sravanihospital.org/img/sravani.png"
                                alt="Sravani Hospital"
                                className="w-12 h-12 object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>';
                                }}
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-white">Sravani Hospital</h1>
                            <p className="text-white/70 text-sm">Multi-Specialty Healthcare</p>
                        </div>
                    </motion.div>

                    {/* Center: Main Content */}
                    <div className="flex-1 flex items-center">
                        <motion.div
                            key={`content-${currentImage}`}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-2xl"
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-6"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Sparkles className="w-4 h-4 text-yellow-400" />
                                <span className="text-white text-sm font-medium">Excellence in Healthcare</span>
                            </motion.div>

                            <h2 className="text-6xl font-bold text-white mb-4 leading-tight">
                                {currentGallery.title}
                            </h2>
                            <p className="text-2xl text-white/80 mb-8">
                                {currentGallery.subtitle}
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6">
                                <motion.div
                                    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4"
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                                >
                                    <div className="text-3xl font-bold text-white mb-1">18+</div>
                                    <div className="text-white/70 text-sm">Years Experience</div>
                                </motion.div>
                                <motion.div
                                    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4"
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                                >
                                    <div className="text-3xl font-bold text-white mb-1">50K+</div>
                                    <div className="text-white/70 text-sm">Patients Treated</div>
                                </motion.div>
                                <motion.div
                                    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4"
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                                >
                                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                    <div className="text-white/70 text-sm">Emergency Care</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom: Navigation Dots */}
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            {galleryImages.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`h-1 rounded-full transition-all ${index === currentImage
                                            ? 'w-12 bg-white'
                                            : 'w-8 bg-white/30 hover:bg-white/50'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>

                        {/* Location Badge */}
                        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-4 py-2 flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-white" />
                            <span className="text-white text-sm">Guntur, Andhra Pradesh</span>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                    className="absolute top-1/4 right-20 w-20 h-20 bg-blue-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-40 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                />
            </div>

            {/* Right Side: Login Form */}
            <div className="w-full lg:w-2/5 h-screen flex items-center justify-center p-6 lg:p-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

                {/* Gradient Orbs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-md relative z-10"
                >
                    {/* Login Card */}
                    <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
                        {/* Header */}
                        <div className="relative h-28 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 border-b border-white/10 overflow-hidden">
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    <Heart className="w-7 h-7 text-white" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="p-8">
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                                <p className="text-white/60">Sign in to your healthcare portal</p>
                            </div>

                            <form onSubmit={handleLogin} className="space-y-5">
                                <div className="space-y-2">
                                    <Label className="text-white text-sm font-medium">Email Address</Label>
                                    <Input
                                        type="email"
                                        placeholder="name@example.com"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-white text-sm font-medium">Password</Label>
                                    <Input
                                        type="password"
                                        placeholder="••••••••"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center gap-2 text-white/60 cursor-pointer hover:text-white/80 transition-colors">
                                        <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5 text-blue-500 focus:ring-blue-500/20" />
                                        <span>Remember me</span>
                                    </label>
                                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Forgot password?</a>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-12 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 border-0 text-base font-semibold shadow-lg shadow-blue-500/25 rounded-xl group transition-all"
                                >
                                    Sign In
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>

                            {/* Quick Access */}
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-white/40 text-xs text-center mb-4 uppercase tracking-wider font-medium">Quick Access</p>
                                <div className="space-y-3">
                                    <motion.button
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => base44.auth.redirectToLogin()}
                                        className="w-full flex items-center p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all border border-white/5 hover:border-blue-500/30 group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                                            <Shield className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="ml-3 flex-1 text-left">
                                            <p className="text-white text-sm font-semibold">Admin Portal</p>
                                            <p className="text-white/40 text-xs">System management</p>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                    </motion.button>

                                    <motion.button
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => base44.auth.redirectToLogin()}
                                        className="w-full flex items-center p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 transition-all border border-white/5 hover:border-green-500/30 group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                                            <Stethoscope className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="ml-3 flex-1 text-left">
                                            <p className="text-white text-sm font-semibold">Doctor Portal</p>
                                            <p className="text-white/40 text-xs">Patient records</p>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                    </motion.button>

                                    <motion.button
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => base44.auth.redirectToLogin()}
                                        className="w-full flex items-center p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all border border-white/5 hover:border-purple-500/30 group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                                            <User className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="ml-3 flex-1 text-left">
                                            <p className="text-white text-sm font-semibold">Patient Portal</p>
                                            <p className="text-white/40 text-xs">Appointments</p>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                    </motion.button>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <p className="text-white/40 text-xs">
                                    Need help? <a href="tel:08632233644" className="text-blue-400 hover:text-blue-300 transition-colors">Call 0863-2233644</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 flex items-center justify-center gap-4 text-white/40 text-xs"
                    >
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            <span>Secure Login</span>
                        </div>
                        <div className="w-px h-4 bg-white/20" />
                        <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4" />
                            <span>24/7 Available</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Mobile: Gallery Preview */}
            <div className="lg:hidden absolute top-0 left-0 right-0 h-64 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                    >
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${currentGallery.url})` }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-b ${currentGallery.color} opacity-60`} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
