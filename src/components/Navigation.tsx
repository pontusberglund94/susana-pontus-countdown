import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Calendar, MapPin, Home, Users, Bus, Palmtree, Info } from 'lucide-react';

const Navigation = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { key: 'home', label: t('nav.home'), icon: Home, href: '#hero' },
    { key: 'schedule', label: t('nav.schedule'), icon: Calendar, href: '#schedule' },
    { key: 'accommodation', label: t('nav.accommodation'), icon: Home, href: '#accommodation' },
    { key: 'transportation', label: t('nav.transportation'), icon: Bus, href: '#transportation' },
    { key: 'location', label: t('nav.location'), icon: MapPin, href: '#location' },
    { key: 'mallorca', label: t('nav.mallorca'), icon: Palmtree, href: '#mallorca' },
    { key: 'info', label: t('nav.info'), icon: Info, href: '#info' },
    { key: 'rsvp', label: t('nav.rsvp'), icon: Users, href: '#rsvp' },
  ];

  const scrollToSection = (href: string) => {
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-4 left-4 z-50 bg-card/80 backdrop-blur-sm rounded-full p-2 shadow-warm">
        <div className="flex items-center space-x-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.key}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className="rounded-full px-3 py-2 text-xs hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Icon className="w-4 h-4 mr-1" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full bg-card/80 backdrop-blur-sm shadow-warm"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>

        {isOpen && (
          <div className="absolute top-12 left-0 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-warm min-w-[200px]">
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.key}
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(item.href)}
                    className="w-full justify-start rounded-lg px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;