import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/919966177014?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all group"
            >
                <MessageCircle className="w-7 h-7 text-white" />
                <span className="absolute right-full mr-3 px-3 py-1.5 bg-white rounded-lg shadow-lg text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Chat on WhatsApp
                </span>
            </a>

            {/* Emergency Call Button */}
            <a
                href="tel:08632352354"
                className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 hover:bg-red-600 hover:scale-110 transition-all animate-pulse group"
            >
                <Phone className="w-7 h-7 text-white" />
                <span className="absolute right-full mr-3 px-3 py-1.5 bg-white rounded-lg shadow-lg text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Emergency: 0863-2352354
                </span>
            </a>
        </div>
    );
}