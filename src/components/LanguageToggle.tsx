import React from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex gap-2 bg-card/80 backdrop-blur-sm rounded-full p-2 shadow-warm">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={language === lang.code ? "default" : "ghost"}
            size="sm"
            onClick={() => setLanguage(lang.code)}
            className={`rounded-full px-3 py-1 text-xs transition-all ${
              language === lang.code 
                ? 'bg-primary text-primary-foreground shadow-md' 
                : 'hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            <span className="mr-1">{lang.flag}</span>
            {lang.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageToggle;