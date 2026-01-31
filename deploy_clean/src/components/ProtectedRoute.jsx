import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';

export default function ProtectedRoute({ children, allowedRoles = [] }) {
    const { user, userRole, isAuthenticated, isLoadingAuth } = useAuth();
    const location = useLocation();

    if (isLoadingAuth) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        // Redirect to login but save the attempted location
        // Base44 SDK handles the redirect, but for client-side routing we can also redirect to home or login page
        // Since base44.auth.redirectToLogin() is usually used, we might rely on the context to trigger it
        // But here we'll just redirect to home for now if not authenticated, or show a link
        return <Navigate to="/login" state={{ from: location }} replace />;
        // Alternatively using the SDK's login redirection:
        // window.location.href = base44.auth.getLoginUrl(window.location.href);
        // return null;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
        // User not authorized for this role
        return <Navigate to="/" replace />;
    }

    return children;
}
