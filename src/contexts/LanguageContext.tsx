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
    'nav.schedule': 'Bröllopsdagen',
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
    'details.title': 'Bröllopsdagen',
    'details.welcomedrink': 'Välkomstdrink',
    'details.ceremony': 'Ceremoni',
    'details.aperitivo': 'Aperitivo',
    'details.lunch': 'Bankett',
    'details.party': 'Fest',
    'details.lastDance': 'Vickning',
    'details.PartyOver': 'Stängning',
    'details.welcomedrinkTime': '13:00',
    'details.ceremonyTime': '13:30',
    'details.aperitivoTime': '14:30',
    'details.lunchTime': '16:00',
    'details.partyTime': '18:00',
    'details.lastDanceTime': '21:00',
    'details.PartyOverTime': '23:00',
    'details.location': 'S\'Olivaret, Mallorca',
    
    // Accommodation
    'accommodation.title': 'Boende på Hotel Rural S\'Olivaret & Spa',
    'accommodation.description': 'Det finns möjlighet att bo på Hotel Rural S\'Olivaret & Spa som ligger i anslutning till bröllopslokalen.',
    'accommodation.discountCode': 'Rabattkoder',
    'accommodation.singleNight': 'WEDDINGSUSANAPONTUS10 för 10% rabatt vid 1 natt. WEDDINGSUSANAPONTUS20 för 20% rabatt vid 2+ nätter.',
    'accommodation.visitWebsite': 'Boka på hemsidan',
    
    // Transportation
    'transportation.title': 'Transport',
    'transportation.bus': 'Buss till Palma',
    'transportation.busDescription': 'För gästerna som inte bor på hotellet avgår en abonnerad buss mot Palma efter bröllopsfesten. Ange i OSA-formuläret om ni vill åka med bussen så vi vet hur stor buss som ska abonneras.',
    'transportation.busTime': 'Avgång ca 23:30',
    
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
    'details.welcomedrink': 'VÄLKOMSTDRINK SPANSKA',
    'details.ceremony': 'Ceremonia',
    'details.aperitivo': 'Aperitivo',
    'details.lunch': 'Almuerzo',
    'details.party': 'Fiesta',
    'details.lastDance': 'VICKNING SPANSKA',
    'details.PartyOver': 'STÄNGNING SPANSKA',
    'details.welcomedrinkTime': '13:00',
    'details.ceremonyTime': '13:30',
    'details.aperitivoTime': '14:30',
    'details.lunchTime': '16:00',
    'details.partyTime': '18:00',
    'details.lastDanceTime': '21:00',
    'details.PartyOverTime': '23:00',
    'details.location': 'S\'Olivaret, Mallorca',
    
    // Accommodation
    'accommodation.title': 'Alojamiento en Hotel Rural S\'Olivaret & Spa',
    'accommodation.description': 'Existe la posibilidad de alojarse en el Hotel Rural S\'Olivaret & Spa, que se encuentra junto al lugar de la boda.',
    'accommodation.discountCode': 'Códigos de descuento',
    'accommodation.singleNight': 'WEDDINGSUSANAPONTUS10 para 10% de descuento en 1 noche. WEDDINGSUSANAPONTUS20 para 20% de descuento en 2+ noches.',
    'accommodation.visitWebsite': 'Reservar en la web',
    
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
    'nav.schedule': 'The Wedding Day', 
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
    'details.title': 'Wedding Day',
    'details.welcomedrink': 'Welcome drinkw',
    'details.ceremony': 'Ceremony',
    'details.aperitivo': 'Aperitivo',
    'details.lunch': 'Banquet',
    'details.party': 'Party',
    'details.lastDance': 'Night snack',
    'details.PartyOver': 'Closing time',
    'details.welcomedrinkTime': '13:00',
    'details.ceremonyTime': '13:30',
    'details.aperitivoTime': '14:30',
    'details.lunchTime': '16:00',
    'details.partyTime': '18:00',
    'details.lastDanceTime': '21:00',
    'details.PartyOverTime': '23:00',
    'details.location': 'S\'Olivaret, Mallorca',
    
    // Accommodation
    'accommodation.title': 'Accommodation at Hotel Rural S\'Olivaret & Spa',
    'accommodation.description': 'There is an option to stay at Hotel Rural S\'Olivaret & Spa, which is located next to the wedding venue.',
    'accommodation.discountCode': 'Discount codes',
    'accommodation.singleNight': 'WEDDINGSUSANAPONTUS10 for 10% discount on 1 night. WEDDINGSUSANAPONTUS20 for 20% discount on 2+ nights.',
    'accommodation.visitWebsite': 'Book on website',
    
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
