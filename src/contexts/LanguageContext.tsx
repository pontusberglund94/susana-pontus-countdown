import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'sv' | 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  sv: {
    // Navigation
    'nav.home': 'Hem', 
    'nav.story': 'Vår Historia',
    'nav.schedule': 'Schema',
    'nav.location': 'Plats',
    'nav.accommodation': 'Boende',
    'nav.rsvp': 'OSA',
    'nav.photos': 'Foton',
    
    // Hero Section
    'hero.weAreGettingMarried': 'Vi Gifter Oss',
    'hero.date': '18 April, 2026',
    'hero.discoverMore': 'Upptäck mer',
    
    // Love Story
    'story.title': 'Vår Historia',
    'story.subtitle': 'Två hjärtan som fann varandra och bestämde sig för att slå tillsammans för evigt.',
    'story.description': 'Sann kärlek har inget slut, och vår kärlek är beviset på att sagor verkligen finns. Vi inbjuder dig att fira med oss detta nya kapitel i våra liv.',
    
    // Details/Schedule
    'details.title': 'Schema för Dagen',
    'details.ceremony': 'Ceremoni',
    'details.aperitivo': 'Aperitivo',
    'details.lunch': 'Lunch',
    'details.party': 'Fest',
    'details.lastDance': 'Sista dansen',
    'details.ceremonyTime': '13:00',
    'details.aperitivoTime': '14:00',
    'details.lunchTime': '15:00-18:00',
    'details.partyTime': '18:00-23:00',
    'details.lastDanceTime': '22:00',
    'details.location': 'S\'Olivaret, Mallorca',
    
    // Accommodation
    'accommodation.title': 'Boende',
    'accommodation.description': 'Vi har arrangerat boende på ett underbart hotell nära bröllopslokalen.',
    'accommodation.discountCode': 'Rabattkod tillgänglig',
    'accommodation.singleNight': 'För boende endast en natt, kontakta brudparet så pratar vi med hotellet.',
    'accommodation.visitWebsite': 'Besök hemsidan',
    
    // Transportation
    'transportation.title': 'Transport',
    'transportation.bus': 'Buss till Palma',
    'transportation.busDescription': 'En buss kommer att köra från festlokalen till Palma vid festens slut.',
    'transportation.busTime': 'Avgång vid 23:30',
    
    // Map
    'map.title': 'Bröllopets Plats',
    'map.clickToView': 'Klicka för att se i Google Maps',
    
    // RSVP
    'rsvp.title': 'Bekräfta din Närvaro',
    'rsvp.description': 'Din närvaro är den mest värdefulla gåvan. Vänligen bekräfta din närvaro genom att fylla i följande formulär.',
    
    // Mallorca Info
    'mallorca.title': 'Upptäck Mallorca',
    'mallorca.beaches.title': 'Paradisiska Stränder',
    'mallorca.beaches.description': 'Cala Mondragó, Es Trenc, Cala Figuera - kristallklart vatten och vit sand väntar på dig.',
    'mallorca.culture.title': 'Kulturellt Arv',
    'mallorca.culture.description': 'Palma de Mallorca, Valldemossa, Deià - charmiga byar med tusenårig historia.',
    'mallorca.gastronomy.title': 'Lokal Gastronomi',
    'mallorca.gastronomy.description': 'Sobrasada, ensaimada, tumbet - autentiska smaker från mallorquinskt kök.',
    'mallorca.nature.title': 'Vild Natur',
    'mallorca.nature.description': 'Serra de Tramuntana, Drakgrottorna - unika landskap som är världsarv.',
    'mallorca.activities.title': 'Äventyr',
    'mallorca.activities.description': 'Vandring, cykling, vattensporter - aktiviteter för alla smaker.',
    'mallorca.relaxation.title': 'Avkoppling och Välbefinnande',
    'mallorca.relaxation.description': 'Spa, wellness, hemliga vikar - den perfekta platsen att koppla av och slappna av.',
    'mallorca.footer': 'Ta chansen att utforska denna magiska ö! 🏝️',
    
    // Countdown
    'countdown.days': 'Dagar',
    'countdown.hours': 'Timmar', 
    'countdown.minutes': 'Minuter',
    'countdown.seconds': 'Sekunder',
    
    // Footer
    'footer.seeYouSoon': 'Vi ses snart!',
    'footer.withLove': 'Med mycket kärlek,',
    'footer.madeWithLove': 'Gjord med ❤️ för att fira vår kärlek',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.story': 'Nuestra Historia', 
    'nav.schedule': 'Programa',
    'nav.location': 'Ubicación',
    'nav.accommodation': 'Alojamiento',
    'nav.rsvp': 'Confirmar',
    'nav.photos': 'Fotos',
    
    // Hero Section
    'hero.weAreGettingMarried': 'Nos Casamos',
    'hero.date': '18 de Abril, 2026',
    'hero.discoverMore': 'Descubre más',
    
    // Love Story
    'story.title': 'Nuestra Historia',
    'story.subtitle': 'Dos corazones que se encontraron y decidieron latir juntos para siempre.',
    'story.description': 'El amor verdadero no tiene fin, y el nuestro es la prueba de que los cuentos de hadas sí existen. Te invitamos a celebrar con nosotros este nuevo capítulo de nuestras vidas.',
    
    // Details/Schedule
    'details.title': 'Programa del Día',
    'details.ceremony': 'Ceremonia',
    'details.aperitivo': 'Aperitivo',
    'details.lunch': 'Almuerzo',
    'details.party': 'Fiesta',
    'details.lastDance': 'Último baile',
    'details.ceremonyTime': '13:00',
    'details.aperitivoTime': '14:00',
    'details.lunchTime': '15:00-18:00',
    'details.partyTime': '18:00-23:00',
    'details.lastDanceTime': '22:00',
    'details.location': 'S\'Olivaret, Mallorca',
    
    // Accommodation
    'accommodation.title': 'Alojamiento',
    'accommodation.description': 'Hemos organizado alojamiento en un hotel maravilloso cerca del lugar de la boda.',
    'accommodation.discountCode': 'Código de descuento disponible',
    'accommodation.singleNight': 'Para alojamiento de una sola noche, contacta con los novios y hablaremos con el hotel.',
    'accommodation.visitWebsite': 'Visitar web',
    
    // Transportation
    'transportation.title': 'Transporte',
    'transportation.bus': 'Autobús a Palma',
    'transportation.busDescription': 'Un autobús saldrá desde el lugar de la fiesta hacia Palma al final de la celebración.',
    'transportation.busTime': 'Salida a las 23:30',
    
    // Map
    'map.title': 'Ubicación de la Boda',
    'map.clickToView': 'Haz clic para ver en Google Maps',
    
    // RSVP
    'rsvp.title': 'Confirma tu Asistencia',
    'rsvp.description': 'Tu presencia es el regalo más valioso. Por favor, confirma tu asistencia completando el siguiente formulario.',
    
    // Mallorca Info
    'mallorca.title': 'Descubre Mallorca',
    'mallorca.beaches.title': 'Playas Paradisíacas',
    'mallorca.beaches.description': 'Cala Mondragó, Es Trenc, Cala Figuera - aguas cristalinas y arena blanca te esperan.',
    'mallorca.culture.title': 'Patrimonio Cultural',
    'mallorca.culture.description': 'Palma de Mallorca, Valldemossa, Deià - pueblos con encanto e historia milenaria.',
    'mallorca.gastronomy.title': 'Gastronomía Local',
    'mallorca.gastronomy.description': 'Sobrasada, ensaimada, tumbet - sabores auténticos de la cocina mallorquina.',
    'mallorca.nature.title': 'Naturaleza Salvaje',
    'mallorca.nature.description': 'Serra de Tramuntana, Cuevas del Drach - paisajes únicos declarados Patrimonio Mundial.',
    'mallorca.activities.title': 'Aventuras',
    'mallorca.activities.description': 'Senderismo, ciclismo, deportes acuáticos - actividades para todos los gustos.',
    'mallorca.relaxation.title': 'Relax y Bienestar',
    'mallorca.relaxation.description': 'Spas, wellness, calas secretas - el lugar perfecto para desconectar y relajarse.',
    'mallorca.footer': '¡Aprovecha tu estancia para explorar esta isla mágica! 🏝️',
    
    // Countdown
    'countdown.days': 'Días',
    'countdown.hours': 'Horas', 
    'countdown.minutes': 'Minutos',
    'countdown.seconds': 'Segundos',
    
    // Footer
    'footer.seeYouSoon': '¡Nos vemos pronto!',
    'footer.withLove': 'Con mucho amor,',
    'footer.madeWithLove': 'Hecho con ❤️ para celebrar nuestro amor',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.story': 'Our Story',
    'nav.schedule': 'Schedule', 
    'nav.location': 'Location',
    'nav.accommodation': 'Stay',
    'nav.rsvp': 'RSVP',
    'nav.photos': 'Photos',
    
    // Hero Section
    'hero.weAreGettingMarried': 'We Are Getting Married',
    'hero.date': 'April 18th, 2026',
    'hero.discoverMore': 'Discover more',
    
    // Love Story
    'story.title': 'Our Story',
    'story.subtitle': 'Two hearts that found each other and decided to beat together forever.',
    'story.description': 'True love has no end, and ours is proof that fairy tales do exist. We invite you to celebrate with us this new chapter in our lives.',
    
    // Details/Schedule
    'details.title': 'Day Schedule',
    'details.ceremony': 'Ceremony',
    'details.aperitivo': 'Aperitivo',
    'details.lunch': 'Lunch',
    'details.party': 'Party',
    'details.lastDance': 'Last Dance',
    'details.ceremonyTime': '1:00 PM',
    'details.aperitivoTime': '2:00 PM',
    'details.lunchTime': '3:00-6:00 PM',
    'details.partyTime': '6:00-11:00 PM',
    'details.lastDanceTime': '10:00 PM',
    'details.location': 'S\'Olivaret, Mallorca',
    
    // Accommodation
    'accommodation.title': 'Accommodation',
    'accommodation.description': 'We have arranged accommodation at a wonderful hotel near the wedding venue.',
    'accommodation.discountCode': 'Discount code available',
    'accommodation.singleNight': 'For single night stays, contact the couple and we will speak with the hotel.',
    'accommodation.visitWebsite': 'Visit website',
    
    // Transportation
    'transportation.title': 'Transportation',
    'transportation.bus': 'Bus to Palma',
    'transportation.busDescription': 'A bus will depart from the party venue to Palma at the end of the celebration.',
    'transportation.busTime': 'Departure at 11:30 PM',
    
    // Map
    'map.title': 'Wedding Location',
    'map.clickToView': 'Click to view in Google Maps',
    
    // RSVP
    'rsvp.title': 'Confirm Your Attendance',
    'rsvp.description': 'Your presence is the most valuable gift. Please confirm your attendance by completing the following form.',
    
    // Mallorca Info
    'mallorca.title': 'Discover Mallorca',
    'mallorca.beaches.title': 'Paradise Beaches',
    'mallorca.beaches.description': 'Cala Mondragó, Es Trenc, Cala Figuera - crystal clear waters and white sand await you.',
    'mallorca.culture.title': 'Cultural Heritage',
    'mallorca.culture.description': 'Palma de Mallorca, Valldemossa, Deià - charming villages with millenary history.',
    'mallorca.gastronomy.title': 'Local Gastronomy',
    'mallorca.gastronomy.description': 'Sobrasada, ensaimada, tumbet - authentic flavors of Mallorcan cuisine.',
    'mallorca.nature.title': 'Wild Nature',
    'mallorca.nature.description': 'Serra de Tramuntana, Dragon Caves - unique landscapes declared World Heritage.',
    'mallorca.activities.title': 'Adventures',
    'mallorca.activities.description': 'Hiking, cycling, water sports - activities for all tastes.',
    'mallorca.relaxation.title': 'Relaxation & Wellness',
    'mallorca.relaxation.description': 'Spas, wellness, secret coves - the perfect place to disconnect and relax.',
    'mallorca.footer': 'Take advantage of your stay to explore this magical island! 🏝️',
    
    // Countdown
    'countdown.days': 'Days',
    'countdown.hours': 'Hours', 
    'countdown.minutes': 'Minutes',
    'countdown.seconds': 'Seconds',
    
    // Footer
    'footer.seeYouSoon': 'See you soon!',
    'footer.withLove': 'With lots of love,',
    'footer.madeWithLove': 'Made with ❤️ to celebrate our love',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sv');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};