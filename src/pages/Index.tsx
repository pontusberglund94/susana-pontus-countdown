import WeddingCountdown from '@/components/WeddingCountdown';
import FloralDivider from '@/components/FloralDivider';
import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/wedding-hero.jpg';

const Index = () => {
  const { t } = useLanguage();
  // Wedding date: April 18, 2026
  const weddingDate = new Date('2026-04-18T17:00:00');

  return (
    <div className="min-h-screen bg-background">
      <LanguageToggle />
      {/* Hero Section */}
      <section 
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
            <p className="text-xl md:text-2xl text-cream mb-2 font-light tracking-wide">
              {t('hero.weAreGettingMarried')}
            </p>
            <p className="text-lg md:text-xl text-cream/90 mb-12 font-light">
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

      {/* Love Story Section */}
      <section className="py-20 px-4 bg-cream/30">
        <div className="max-w-4xl mx-auto text-center">
          <FloralDivider />
          
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-8 animate-bounce-in">
            {t('story.title')}
          </h2>
          
          <div className="prose prose-lg max-w-3xl mx-auto text-foreground/80 leading-relaxed">
            <p className="text-lg md:text-xl mb-6 font-light animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              {t('story.subtitle')}
            </p>
            <p className="text-base md:text-lg animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              {t('story.description')}
            </p>
          </div>
          
          <FloralDivider />
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-4 bg-gradient-earth">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 animate-bounce-in">
            {t('details.title')}
          </h2>
          
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground mb-2">{t('details.date')}</p>
            <p className="text-md text-muted-foreground">{t('details.location')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ceremony */}
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-primary">{t('details.ceremony')}</h3>
            </div>

            {/* Aperitivo */}
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-primary">{t('details.aperitivo')}</h3>
            </div>

            {/* Lunch */}
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-olive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-primary">{t('details.lunch')}</h3>
            </div>

            {/* Party */}
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in md:col-span-2 lg:col-span-1" style={{ animationDelay: '0.5s' }}>
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-primary">{t('details.party')}</h3>
            </div>

            {/* Send-off */}
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in md:col-start-2 lg:col-start-auto" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-primary">{t('details.sendoff')}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-20 px-4 bg-cream/30">
        <div className="max-w-4xl mx-auto text-center">
          <FloralDivider />
          
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-8 animate-bounce-in">
            {t('accommodation.title')}
          </h2>
          
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-warm animate-bounce-in max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              {t('accommodation.description')}
            </p>
            <p className="text-md text-muted-foreground mb-6">
              {t('accommodation.oneNight')}
            </p>
            <p className="text-sm text-primary font-medium">
              {t('accommodation.contact')}
            </p>
          </div>
          
          <FloralDivider />
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-20 px-4 bg-gradient-earth">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-8 animate-bounce-in">
            {t('transport.title')}
          </h2>
          
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-warm animate-bounce-in max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-primary mb-4">{t('transport.bus')}</h3>
            <p className="text-lg text-muted-foreground">
              {t('transport.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-cream/30">
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

      {/* RSVP Section */}
      <section className="py-20 px-4 bg-gradient-earth">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-8 animate-bounce-in">
            {t('rsvp.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-bounce-in" style={{ animationDelay: '0.2s' }}>
            {t('rsvp.description')}
          </p>
          
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-warm animate-bounce-in max-w-2xl mx-auto" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                {t('rsvp.contactDirectly')}
              </p>
              <p className="text-md text-muted-foreground">
                {t('rsvp.workingOnForm')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mallorca Info Section */}
      <section className="py-20 px-4 bg-cream/30">
        <div className="max-w-6xl mx-auto">
          <FloralDivider />
          
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 animate-bounce-in">
            {t('mallorca.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beaches */}
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3 text-center">{t('mallorca.beaches.title')}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {t('mallorca.beaches.description')}
              </p>
            </div>

            {/* Culture */}
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3 text-center">{t('mallorca.culture.title')}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {t('mallorca.culture.description')}
              </p>
            </div>

            {/* Gastronomy */}
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-olive/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3 text-center">{t('mallorca.gastronomy.title')}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {t('mallorca.gastronomy.description')}
              </p>
            </div>

            {/* Nature */}
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in" style={{ animationDelay: '0.8s' }}>
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3 text-center">{t('mallorca.nature.title')}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {t('mallorca.nature.description')}
              </p>
            </div>

            {/* Activities */}
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in" style={{ animationDelay: '1.0s' }}>
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3 text-center">{t('mallorca.activities.title')}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {t('mallorca.activities.description')}
              </p>
            </div>

            {/* Relaxation */}
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-warm animate-bounce-in" style={{ animationDelay: '1.2s' }}>
              <div className="w-16 h-16 bg-terracotta-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-terracotta-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3 text-center">{t('mallorca.relaxation.title')}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {t('mallorca.relaxation.description')}
              </p>
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
          
          <p className="text-sm opacity-70 mt-4">
            {new Date().getFullYear()} • {t('footer.madeWithLove')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
