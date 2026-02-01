import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher({ variant = 'default' }) {
    const { language, changeLanguage, languages } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const currentLanguage = languages.find(lang => lang.code === language);

    const handleLanguageChange = (langCode) => {
        changeLanguage(langCode);
        setIsOpen(false);
    };

    if (variant === 'mobile') {
        return (
            <div className="w-full">
                <div className="text-sm font-medium text-gray-700 mb-2">Language / భాష / भाषा</div>
                <div className="grid grid-cols-3 gap-2">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`p-3 rounded-xl border-2 transition-all ${language === lang.code
                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                                }`}
                        >
                            <div className="text-2xl mb-1">{lang.flag}</div>
                            <div className="text-xs font-medium">{lang.nativeName}</div>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            <Button
                variant="outline"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 h-10 px-3"
            >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline text-sm">{currentLanguage?.nativeName}</span>
                <span className="sm:hidden text-lg">{currentLanguage?.flag}</span>
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Dropdown */}
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                        >
                            <div className="p-2">
                                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Select Language
                                </div>
                                {languages.map((lang) => (
                                    <motion.button
                                        key={lang.code}
                                        onClick={() => handleLanguageChange(lang.code)}
                                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${language === lang.code
                                                ? 'bg-blue-50 text-blue-700'
                                                : 'hover:bg-gray-50 text-gray-700'
                                            }`}
                                        whileHover={{ x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="text-2xl">{lang.flag}</span>
                                        <div className="flex-1 text-left">
                                            <div className="font-medium text-sm">{lang.nativeName}</div>
                                            <div className="text-xs text-gray-500">{lang.name}</div>
                                        </div>
                                        {language === lang.code && (
                                            <Check className="w-4 h-4 text-blue-600" />
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
