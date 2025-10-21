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
    'nav.transportation': 'Transport',
    'nav.mallorca': 'Upptäck Mallorca',
    'nav.info': 'Övrig Information',
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
    
    // Additional Information
    'info.title': 'Övrig Information',
    'info.dresscode.title': 'Klädkod',
    'info.dresscode.description': 'Klädkod kavaj',
    'info.dresscode.details': 'Klädkoden kavaj innebär att du ska bära en hel kostym, inte bara en udda kavaj. Den är den minst strikta av de traditionella klädkoderna och tillåter mer variation i färg och material än "mörk kostym". För män innebär detta en kostym i valfri färg, slips eller fluga, och finare skor (bruna eller svarta). För kvinnor är det en elegant klänning, kjol med blus eller en fin byxdress som gäller, med längd som täcker knäna.',
    'info.dresscode.men.title': 'För herrar',
    'info.dresscode.men.suit': 'Kostym: Välj en kostym i valfri färg, ljusare färger uppmuntras men även mörk kostym och diskreta mönster som ränder går bra.',
    'info.dresscode.men.shirt': 'Skjorta: En vit eller ljusfärgad skjorta passar bra. Du kan också ta ut svängarna med en diskret mönstrad variant.',
    'info.dresscode.men.tie': 'Slips/Fluga: Bär en slips eller fluga.',
    'info.dresscode.men.shoes': 'Skor: Kostymskor i svart eller brunt är lämpligt. Loafers eller oxfords fungerar båda.',
    'info.dresscode.men.other': 'Övrigt: En bröstnäsduk kan användas.',
    'info.dresscode.women.title': 'För damer',
    'info.dresscode.women.dress': 'Klänning: En elegant klänning som är minst knälång.',
    'info.dresscode.women.skirt': 'Kjol/Blus: En kjol som är minst knälång, kombinerad med en fin blus eller topp.',
    'info.dresscode.women.suit': 'Byxdress: En elegant byxdress är ett bra alternativ.',
    'info.dresscode.women.shoes': 'Skor: Välj finare skor än dina vardagsskor, som klackskor eller ballerinaskor.',
    'info.dresscode.women.other': 'Övrigt: Accessoarer som smycken kan komplettera din look.',
    'info.kids.title': 'Barn',
    'info.kids.description': 'Vi tror att som förälder kommer man njuta mer av bröllopet om man inte behöver passa sina barn. Vi förstår dock att detta inte är möjligt för alla och barn är naturligtvis välkomna.',
    'info.gifts.title': 'Bröllopsgåvor',
    'info.gifts.description': 'Fysiska presenter undanbedes - vi har inte plats i våra resväskor! Er närvaro är den viktigaste presenten.',
    
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
    'nav.transportation': 'Transporte',
    'nav.mallorca': 'Descubre Mallorca',
    'nav.info': 'Información Adicional',
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
    'details.welcomedrink': 'Bebida de Bienvenida',
    'details.ceremony': 'Ceremonia',
    'details.aperitivo': 'Aperitivo',
    'details.lunch': 'Almuerzo',
    'details.party': 'Fiesta',
    'details.lastDance': 'Refrigerio Nocturno',
    'details.PartyOver': 'Cierre',
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
    'transportation.busDescription': 'Para los invitados que no se alojen en el hotel, habrá un autobús reservado hacia Palma después de la fiesta de boda. Indica en el formulario de confirmación si quieres viajar en el autobús para que sepamos el tamaño del autobús que debemos reservar.',
    'transportation.busTime': 'Salida a las 23:30',
    
    // Map
    'map.title': 'Ubicación de la Boda',
    'map.clickToView': 'Haz clic para ver en Google Maps',
    
    // RSVP
    'rsvp.title': 'Confirma tu Asistencia',
    'rsvp.description': 'Tu presencia es el regalo más valioso. Por favor, confirma tu asistencia completando el siguiente formulario.',
    
    // Additional Information
    'info.title': 'Información Adicional',
    'info.dresscode.title': 'Código de Vestimenta',
    'info.dresscode.description': 'Traje de vestir',
    'info.dresscode.details': 'El código de vestimenta "traje de vestir" significa que debes llevar un traje completo, no solo una chaqueta suelta. Es el menos estricto de los códigos de vestimenta tradicionales y permite más variación en color y material que el "traje oscuro". Para los hombres, esto significa un traje de cualquier color, corbata o pajarita, y zapatos más elegantes (marrones o negros). Para las mujeres, se trata de un vestido elegante, falda con blusa o un traje pantalón fino, con una longitud que cubra las rodillas.',
    'info.dresscode.men.title': 'Para hombres',
    'info.dresscode.men.suit': 'Traje: Elige un traje de cualquier color, se fomentan colores más claros, pero también funcionan trajes oscuros y patrones discretos como rayas.',
    'info.dresscode.men.shirt': 'Camisa: Una camisa blanca o de color claro funciona bien. También puedes atreverte con una variante con patrón discreto.',
    'info.dresscode.men.tie': 'Corbata/Pajarita: Usa una corbata o pajarita.',
    'info.dresscode.men.shoes': 'Zapatos: Zapatos de vestir en negro o marrón son apropiados. Tanto mocasines como oxfords funcionan.',
    'info.dresscode.men.other': 'Otros: Se puede usar un pañuelo de bolsillo.',
    'info.dresscode.women.title': 'Para mujeres',
    'info.dresscode.women.dress': 'Vestido: Un vestido elegante que sea al menos hasta la rodilla.',
    'info.dresscode.women.skirt': 'Falda/Blusa: Una falda que sea al menos hasta la rodilla, combinada con una blusa o top elegante.',
    'info.dresscode.women.suit': 'Traje pantalón: Un traje pantalón elegante es una buena alternativa.',
    'info.dresscode.women.shoes': 'Zapatos: Elige zapatos más elegantes que tus zapatos diarios, como tacones o bailarinas.',
    'info.dresscode.women.other': 'Otros: Accesorios como joyas pueden complementar tu look.',
    'info.kids.title': 'Niños',
    'info.kids.description': 'Creemos que los invitados disfrutarán más de la boda si es libre de niños. Sin embargo, entendemos que esto simplemente no es posible para algunos y los niños son, por supuesto, bienvenidos.',
    'info.gifts.title': 'Regalos de Boda',
    'info.gifts.description': 'Por favor, no regalos físicos - no tenemos espacio en nuestras maletas para llevarlos a Suecia.',
    
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
    'nav.transportation': 'Transportation',
    'nav.mallorca': 'Discover Mallorca',
    'nav.info': 'Additional Info',
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
    'details.welcomedrink': 'Welcome drink',
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
    'transportation.busDescription': 'For guests not staying at the hotel, a chartered bus will depart towards Palma after the wedding party. Please indicate in the RSVP form if you would like to take the bus so we know what size bus to charter.',
    'transportation.busTime': 'Departure at 11:30 PM',
    
    // Map
    'map.title': 'Wedding Location',
    'map.clickToView': 'Click to view in Google Maps',
    
    // RSVP
    'rsvp.title': 'Confirm Your Attendance',
    'rsvp.description': 'Your presence is the most valuable gift. Please confirm your attendance by completing the following form.',
    
    // Additional Information
    'info.title': 'Additional Information',
    'info.dresscode.title': 'Dress Code',
    'info.dresscode.description': 'Lounge suit',
    'info.dresscode.details': 'The lounge suit dress code means you should wear a full suit, not just an odd jacket. It is the least strict of the traditional dress codes and allows more variation in color and material than "dark suit". For men, this means a suit in any color, tie or bow tie, and smarter shoes (brown or black). For women, it is an elegant dress, skirt with blouse, or a fine pantsuit, with a length that covers the knees.',
    'info.dresscode.men.title': 'For men',
    'info.dresscode.men.suit': 'Suit: Choose a suit in any color, lighter colors are encouraged but dark suits and discreet patterns like stripes also work.',
    'info.dresscode.men.shirt': 'Shirt: A white or light-colored shirt works well. You can also venture out with a discreetly patterned variant.',
    'info.dresscode.men.tie': 'Tie/Bow tie: Wear a tie or bow tie.',
    'info.dresscode.men.shoes': 'Shoes: Dress shoes in black or brown are appropriate. Both loafers and oxfords work.',
    'info.dresscode.men.other': 'Other: A pocket square can be used.',
    'info.dresscode.women.title': 'For women',
    'info.dresscode.women.dress': 'Dress: An elegant dress that is at least knee-length.',
    'info.dresscode.women.skirt': 'Skirt/Blouse: A skirt that is at least knee-length, combined with a fine blouse or top.',
    'info.dresscode.women.suit': 'Pantsuit: An elegant pantsuit is a good alternative.',
    'info.dresscode.women.shoes': 'Shoes: Choose smarter shoes than your everyday shoes, such as heels or ballet flats.',
    'info.dresscode.women.other': 'Other: Accessories like jewelry can complement your look.',
    'info.kids.title': 'Children',
    'info.kids.description': 'We believe guests will enjoy the wedding more if they are able to attend childfree. However, we realize this is simply not possible for some and children are of course welcome.',
    'info.gifts.title': 'Wedding Gifts',
    'info.gifts.description': 'Please no physical presents - we don\'t have room in our bags to bring them home to Sweden.',
    
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
