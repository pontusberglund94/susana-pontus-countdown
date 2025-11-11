import WeddingCountdown from '@/components/WeddingCountdown';
import FloralDivider from '@/components/FloralDivider';
import LanguageToggle from '@/components/LanguageToggle';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/wedding-hero.jpg';
import couplePortrait from '@/assets/couple-portrait-1.jpg';
import coupleDancing from '@/assets/couple-dancing.jpg';
import coupleBeachWalk from '@/assets/couple-beach-walk.jpg';
import { Wine, Cookie, UtensilsCrossed, Sandwich, Moon, Bus, Shirt, Baby, Gift, Copy } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import solivaretPool from '@/assets/solivaret_pool.jpg';
import paradisiskaStrander from '@/assets/paradisiska_strander.jpg';
import kulturelltArv from '@/assets/kulturellt_arv.jpg';
import lokalGastronomi from '@/assets/lokal_gastronomi_new.jpg';
import vildNatur from '@/assets/vild_natur.jpg';

// Import ps images for carousels
import ps1 from '@/assets/ps (1).jpg';
import ps2 from '@/assets/ps (2).jpg';
import ps4 from '@/assets/ps (4).jpg';
import ps5 from '@/assets/ps (5).jpg';
import ps6 from '@/assets/ps (6).jpg';
import ps7 from '@/assets/ps (7).jpg';
import ps8 from '@/assets/ps (8).jpg';
import ps9 from '@/assets/ps (9).jpg';
import ps10 from '@/assets/ps (10).jpg';
import ps11 from '@/assets/ps (11).jpg';
import ps12 from '@/assets/ps (12).jpg';
import ps13 from '@/assets/ps (13).jpg';
import ps15 from '@/assets/ps (15).jpg';
import ps16 from '@/assets/ps (16).jpg';
import ps17 from '@/assets/ps (17).jpg';
import ps18 from '@/assets/ps (18).jpg';
import ps20 from '@/assets/ps (20).jpg';
import ps23 from '@/assets/ps (23).jpg';
import ps24 from '@/assets/ps (24).jpg';
import ps28 from '@/assets/ps (28).jpg';
import ps29 from '@/assets/ps (29).jpg';
import ps30 from '@/assets/ps (30).jpg';
import ps31 from '@/assets/ps (31).jpg';
import ps32 from '@/assets/ps (32).jpg';
import ps34 from '@/assets/ps (34).jpg';
import ps35 from '@/assets/ps (35).jpg';
import ps36 from '@/assets/ps (36).jpg';
import ps37 from '@/assets/ps (37).jpg';
import ps39 from '@/assets/ps (39).jpg';
import ps40 from '@/assets/ps (40).jpg';

const psImages = [ps8, ps1, ps2, ps4, ps5, ps6, ps7, ps9, ps10, ps11, ps12, ps13, ps15, ps16, ps17, ps18, ps20, ps23, ps24, ps28, ps29, ps30, ps31, ps32, ps34, ps35, ps36, ps37, ps39, ps40];

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


const Index = () => {
  const { t } = useLanguage();
  // Wedding date: April 18, 2026
  const weddingDate = new Date('2026-04-18T13:00:00');

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied!",
      description: `${code} copied to clipboard`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <LanguageToggle />
      {/* Hero Section */}
      <section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-bounce-in">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-lg">
              Pontus <span className="text-gold">&</span> Susana
            </h1>
            <p className="text-2xl md:text-3xl text-cream/90 mb-12 font-light">
              {t('hero.date')}
            </p>
          </div>
          
          <div className="animate-bounce-in" style={{ animationDelay: '0.3s' }}>
            <WeddingCountdown targetDate={weddingDate} />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-cream/70">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 font-light tracking-wider">{t('hero.discoverMore')}</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Karusell 2.0 Story Section */}
      <section id="story3" className="py-20 px-4 bg-cream/30">
        <div className="max-w-6xl mx-auto text-center">
          <FloralDivider />
          
          {/* Couple photos carousel */}
          <div className="mt-12">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {psImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-3/4 md:basis-4/5">
                    <div className="p-1">
                      <img 
                        src={image} 
                        alt={`Wedding photo ${index + 1}`}
                        className="w-full h-72 md:h-[26rem] object-cover rounded-3xl shadow-warm transition-all duration-300"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 bg-white/80 hover:bg-white" />
              <CarouselNext className="right-2 md:right-4 bg-white/80 hover:bg-white" />
            </Carousel>
          </div>
          
          <FloralDivider />
        </div>
      </section>
      
      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-gradient-earth">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 animate-bounce-in">
            {t('details.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Välkomstdrink */}
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wine className="w-8 h-8 text-terracotta" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">{t('details.welcomedrink')}</h3>
              <p className="text-2xl font-bold text-terracotta mb-2">{t('details.welcomedrinkTime')}</p>
            </div>
            
            {/* Ceremony */}
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">{t('details.ceremony')}</h3>
              <p className="text-2xl font-bold text-gold mb-2">{t('details.ceremonyTime')}</p>
            </div>

            {/* Aperitivo */}
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cookie className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">{t('details.aperitivo')}</h3>
              <p className="text-2xl font-bold text-accent mb-2">{t('details.aperitivoTime')}</p>
            </div>

            {/* Lunch */}
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-olive/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <UtensilsCrossed className="w-8 h-8 text-olive" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">{t('details.lunch')}</h3>
              <p className="text-2xl font-bold text-olive mb-2">{t('details.lunchTime')}</p>
            </div>

            {/* Party */}
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in" style={{ animationDelay: '0.8s' }}>
              <div className="w-16 h-16 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-1v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-1" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">{t('details.party')}</h3>
              <p className="text-2xl font-bold text-terracotta mb-2">{t('details.partyTime')}</p>
            </div>

            {/* Last Dance */}
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in" style={{ animationDelay: '1.0s' }}>
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sandwich className="w-8 h-8 text-sage" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">{t('details.lastDance')}</h3>
              <p className="text-2xl font-bold text-sage mb-2">{t('details.lastDanceTime')}</p>
            </div>
            
             {/* Party Over */}
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in" style={{ animationDelay: '1.0s' }}>
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Moon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">{t('details.PartyOver')}</h3>
              <p className="text-2xl font-bold text-gold mb-2">{t('details.PartyOverTime')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section 
        id="accommodation" 
        className="py-20 px-4 bg-cover bg-center bg-no-repeat relative"
        style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${solivaretPool})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <FloralDivider />
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-16 animate-bounce-in [text-shadow:_2px_2px_8px_rgb(255_255_255_/_90%)]">
            {t('accommodation.title')}
          </h2>
          
          <div className="rounded-3xl p-8 shadow-warm animate-bounce-in max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-terracotta/30 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <svg className="w-8 h-8 text-terracotta drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <p className="text-lg text-foreground font-semibold mb-6 [text-shadow:_1px_1px_6px_rgb(255_255_255_/_95%)]">
              {t('accommodation.description')}
            </p>
            <div className="space-y-4">
              <div className="bg-primary/20 backdrop-blur-sm rounded-2xl p-4">
                <p className="font-bold text-primary mb-4 [text-shadow:_1px_1px_4px_rgb(255_255_255_/_90%)]">
                  {t('accommodation.discountCode')}
                </p>
                <div className="space-y-2">
                  <button
                    onClick={() => copyToClipboard('WEDDINGSUSANAPONTUS10')}
                    className="w-full flex items-center justify-between gap-2 bg-white/60 hover:bg-white/80 transition-colors rounded-lg p-3 group"
                  >
                    <span className="text-sm font-mono font-semibold text-primary">WEDDINGSUSANAPONTUS10</span>
                    <Copy className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  </button>
                  <button
                    onClick={() => copyToClipboard('WEDDINGSUSANAPONTUS20')}
                    className="w-full flex items-center justify-between gap-2 bg-white/60 hover:bg-white/80 transition-colors rounded-lg p-3 group"
                  >
                    <span className="text-sm font-mono font-semibold text-primary">WEDDINGSUSANAPONTUS20</span>
                    <Copy className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  </button>
                  <p className="text-xs text-foreground/80 [text-shadow:_1px_1px_4px_rgb(255_255_255_/_90%)] text-center pt-2">
                    {t('accommodation.singleNight')}
                  </p>
                </div>
              </div>
              <button 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg"
                onClick={() => window.open('https://www.solivaret.com/en', '_blank')}
              >
                {t('accommodation.visitWebsite')}
              </button>
            </div>
          </div>
          
          <FloralDivider />
        </div>
      </section>

      {/* Transportation Section */}
      <section id="transportation" className="py-20 px-4 bg-gradient-earth">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-16 animate-bounce-in">
            {t('transportation.title')}
          </h2>
          
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-warm animate-bounce-in max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bus className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
              {t('transportation.bus')}
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              {t('transportation.busDescription')}
            </p>
            <div className="bg-accent/10 rounded-2xl p-4">
              <p className="font-semibold text-terracotta">
                {t('transportation.busTime')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="location" className="py-20 px-4 bg-cream/30">
        <div className="max-w-4xl mx-auto text-center">
          <FloralDivider />
          
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-16 animate-bounce-in">
            {t('map.title')}
          </h2>
          
          <div 
            className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-warm animate-bounce-in cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl max-w-2xl mx-auto"
            onClick={() => window.open('https://maps.app.goo.gl/cbNEX493SP2TAGpw9?g_st=ipc', '_blank')}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="w-16 h-16 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-3xl font-semibold text-primary mb-4">S'Olivaret</h3>
            <p className="text-lg text-muted-foreground mb-2">Mallorca, España</p>
            <p className="text-sm text-muted-foreground">{t('map.clickToView')}</p>
          </div>
          
          <FloralDivider />
        </div>
      </section>

      {/* Mallorca Info Section */}
      <section id="mallorca" className="py-20 px-4 bg-sage/10">
        <div className="max-w-6xl mx-auto">
          <FloralDivider />
          
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 animate-bounce-in">
            {t('mallorca.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Beaches */}
            <div className="relative rounded-3xl shadow-warm animate-bounce-in overflow-hidden" style={{ animationDelay: '0.2s' }}>
              <div className="relative h-72 md:h-[26rem]">
                <img src={paradisiskaStrander} alt="Beaches" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-serif text-xl font-semibold text-white mb-3 text-center">{t('mallorca.beaches.title')}</h3>
                  <p className="text-sm text-white/90 text-center">
                    {t('mallorca.beaches.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Culture */}
            <div className="relative rounded-3xl shadow-warm animate-bounce-in overflow-hidden" style={{ animationDelay: '0.4s' }}>
              <div className="relative h-72 md:h-[26rem]">
                <img src={kulturelltArv} alt="Culture" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-serif text-xl font-semibold text-white mb-3 text-center">{t('mallorca.culture.title')}</h3>
                  <p className="text-sm text-white/90 text-center">
                    {t('mallorca.culture.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Gastronomy */}
            <div className="relative rounded-3xl shadow-warm animate-bounce-in overflow-hidden" style={{ animationDelay: '0.6s' }}>
              <div className="relative h-72 md:h-[26rem]">
                <img src={lokalGastronomi} alt="Gastronomy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-serif text-xl font-semibold text-white mb-3 text-center">{t('mallorca.gastronomy.title')}</h3>
                  <p className="text-sm text-white/90 text-center">
                    {t('mallorca.gastronomy.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Nature */}
            <div className="relative rounded-3xl shadow-warm animate-bounce-in overflow-hidden" style={{ animationDelay: '0.8s' }}>
              <div className="relative h-72 md:h-[26rem]">
                <img src={vildNatur} alt="Nature" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-serif text-xl font-semibold text-white mb-3 text-center">{t('mallorca.nature.title')}</h3>
                  <p className="text-sm text-white/90 text-center">
                    {t('mallorca.nature.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground animate-bounce-in" style={{ animationDelay: '1.4s' }}>
              {t('mallorca.footer')}
            </p>
          </div>
          
          <FloralDivider />
        </div>
      </section>

      {/* Additional Information Section */}
      <section id="info" className="py-20 px-4 bg-cream/30">
        <div className="max-w-6xl mx-auto">
          <FloralDivider />
          
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 animate-bounce-in">
            {t('info.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Dress Code */}
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-warm animate-bounce-in md:col-span-3" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shirt className="w-8 h-8 text-terracotta" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4 text-center">
                {t('info.dresscode.title')}
              </h3>
              <p className="text-xl font-semibold text-center mb-6 text-primary">
                {t('info.dresscode.description')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
                {/* For Men */}
                <div className="text-left">
                  <h4 className="font-serif text-xl font-semibold text-primary mb-4">
                    {t('info.dresscode.men.title')}
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• {t('info.dresscode.men.suit')}</li>
                    <li>• {t('info.dresscode.men.shirt')}</li>
                    <li>• {t('info.dresscode.men.tie')}</li>
                    <li>• {t('info.dresscode.men.shoes')}</li>
                    <li>• {t('info.dresscode.men.other')}</li>
                  </ul>
                </div>
                
                {/* For Women */}
                <div className="text-left">
                  <h4 className="font-serif text-xl font-semibold text-primary mb-4">
                    {t('info.dresscode.women.title')}
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• {t('info.dresscode.women.dress')}</li>
                    <li>• {t('info.dresscode.women.skirt')}</li>
                    <li>• {t('info.dresscode.women.suit')}</li>
                    <li>• {t('info.dresscode.women.shoes')}</li>
                    <li>• {t('info.dresscode.women.other')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Kids */}
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-warm animate-bounce-in text-center" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-olive/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Baby className="w-8 h-8 text-olive" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                {t('info.kids.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('info.kids.description')}
              </p>
            </div>

            {/* Wedding Gifts */}
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-warm animate-bounce-in text-center" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                {t('info.gifts.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('info.gifts.description')}
              </p>
            </div>
          </div>
          
          <FloralDivider />
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 px-4 bg-gradient-earth">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-8 animate-bounce-in">
            {t('rsvp.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-bounce-in" style={{ animationDelay: '0.2s' }}>
            {t('rsvp.description')}
          </p>
          
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeMUUMnSxykSv_W1J_VK7Me-d4E7Ydgp27B6Xx_uAuQtLJcnQ/viewform?embedded=true" 
              className="w-full h-[2200px] border-0 rounded-xl"
              loading="lazy"
              title="Formulario de Confirmación RSVP"
            >
              Cargando formulario...
            </iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-serif text-3xl font-semibold mb-4 animate-bounce-in">
            {t('footer.seeYouSoon')}
          </h3>
          <p className="text-lg mb-6 opacity-90 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
            {t('footer.withLove')}
          </p>
          <p className="font-serif text-2xl font-semibold animate-bounce-in" style={{ animationDelay: '0.4s' }}>
            Pontus & Susana
          </p>
          
          <FloralDivider className="mt-8" />
        </div>
      </footer>
    </div>
  );
};

export default Index;
