const FloralDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <div className="flex items-center space-x-4 animate-float">
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-olive-light"></div>
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-terracotta rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-olive rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
        <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-olive-light"></div>
      </div>
    </div>
  );
};

export default FloralDivider;