import React from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'ca', label: 'Català', flag: '🏴' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex gap-1 bg-card/80 backdrop-blur-sm rounded-full p-1 shadow-warm">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={language === lang.code ? "default" : "ghost"}
            size="sm"
            onClick={() => setLanguage(lang.code)}
            className={`rounded-full w-8 h-8 p-0 text-sm transition-all ${
              language === lang.code 
                ? 'bg-primary text-primary-foreground shadow-md' 
                : 'hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            {lang.flag}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageToggle;