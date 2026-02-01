import React, { createContext, useContext, useState, useEffect } from 'react';

// Import translations
import enTranslations from '@/locales/en/translation.json';
import teTranslations from '@/locales/te/translation.json';
import hiTranslations from '@/locales/hi/translation.json';

const translations = {
    en: enTranslations,
    te: teTranslations,
    hi: hiTranslations
};

const LanguageContext = createContext();

export const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' }
];

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        // Get from localStorage or default to English
        return localStorage.getItem('language') || 'en';
    });

    useEffect(() => {
        // Save to localStorage whenever language changes
        localStorage.setItem('language', language);
        // Update HTML lang attribute
        document.documentElement.lang = language;
    }, [language]);

    const t = (key, params = {}) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            value = value?.[k];
        }

        // If translation not found, try English as fallback
        if (!value && language !== 'en') {
            let fallback = translations.en;
            for (const k of keys) {
                fallback = fallback?.[k];
            }
            value = fallback;
        }

        // Replace parameters in translation
        if (typeof value === 'string' && Object.keys(params).length > 0) {
            Object.keys(params).forEach(param => {
                value = value.replace(`{{${param}}}`, params[param]);
            });
        }

        return value || key;
    };

    const changeLanguage = (newLanguage) => {
        if (translations[newLanguage]) {
            setLanguage(newLanguage);
        }
    };

    const value = {
        language,
        changeLanguage,
        t,
        languages
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

// Helper hook for translations
export function useTranslation() {
    const { t } = useLanguage();
    return { t };
}
