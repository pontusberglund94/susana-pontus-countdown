import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WeddingCountdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Calculate initial time
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center animate-pulse">
            <div className="bg-card/50 rounded-2xl p-6 lg:p-8 shadow-warm">
              <div className="h-12 lg:h-16 bg-muted rounded mb-2"></div>
              <div className="h-4 bg-muted rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Días', labelEn: 'Days' },
    { value: timeLeft.hours, label: 'Horas', labelEn: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutos', labelEn: 'Minutes' },
    { value: timeLeft.seconds, label: 'Segundos', labelEn: 'Seconds' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
      {timeUnits.map((unit, index) => (
        <div 
          key={unit.labelEn}
          className="text-center animate-bounce-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-warm border border-border/20 hover:shadow-soft transition-all duration-300 hover:scale-105">
            <div className="text-4xl lg:text-6xl font-serif font-bold text-primary mb-2 animate-pulse-glow">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm lg:text-base font-medium text-muted-foreground uppercase tracking-wider">
              {unit.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeddingCountdown;