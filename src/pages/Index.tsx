import WeddingCountdown from '@/components/WeddingCountdown';
import FloralDivider from '@/components/FloralDivider';
import heroImage from '@/assets/wedding-hero.jpg';

const Index = () => {
  // Wedding date: April 18, 2026
  const weddingDate = new Date('2026-04-18T17:00:00');

  return (
    <div className="min-h-screen bg-background">
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
              Nos Casamos
            </p>
            <p className="text-lg md:text-xl text-cream/90 mb-12 font-light">
              18 de Abril, 2026
            </p>
          </div>
          
          <div className="animate-bounce-in" style={{ animationDelay: '0.3s' }}>
            <WeddingCountdown targetDate={weddingDate} />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-cream/70">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 font-light tracking-wider">Descubre más</span>
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
            Nuestra Historia
          </h2>
          
          <div className="prose prose-lg max-w-3xl mx-auto text-foreground/80 leading-relaxed">
            <p className="text-lg md:text-xl mb-6 font-light animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              Dos corazones que se encontraron y decidieron latir juntos para siempre.
            </p>
            <p className="text-base md:text-lg animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              El amor verdadero no tiene fin, y el nuestro es la prueba de que los cuentos de hadas sí existen.
              Te invitamos a celebrar con nosotros este nuevo capítulo de nuestras vidas.
            </p>
          </div>
          
          <FloralDivider />
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-4 bg-gradient-earth">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 animate-bounce-in">
            Detalles de la Celebración
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Ceremony */}
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-warm animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Ceremonia</h3>
              <p className="text-muted-foreground mb-2">18 de Abril, 2026</p>
              <p className="text-muted-foreground mb-2">17:00 hrs</p>
              <p className="text-sm text-muted-foreground">Lugar por confirmar</p>
            </div>

            {/* Reception */}
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-warm animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Celebración</h3>
              <p className="text-muted-foreground mb-2">Después de la ceremonia</p>
              <p className="text-muted-foreground mb-2">¡Fiesta hasta el amanecer!</p>
              <p className="text-sm text-muted-foreground">Música, baile y mucho amor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-serif text-3xl font-semibold mb-4 animate-bounce-in">
            ¡Nos vemos pronto!
          </h3>
          <p className="text-lg mb-6 opacity-90 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
            Con mucho amor,
          </p>
          <p className="font-serif text-2xl font-semibold animate-bounce-in" style={{ animationDelay: '0.4s' }}>
            Pontus & Susana
          </p>
          
          <FloralDivider className="mt-8" />
          
          <p className="text-sm opacity-70 mt-4">
            {new Date().getFullYear()} • Hecho con ❤️ para celebrar nuestro amor
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
