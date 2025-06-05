import React, { useState, useEffect } from 'react';

const ScrollProgressIndicator = ({ className = "" }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
      
      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-navigation ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-1 h-32 bg-border rounded-full overflow-hidden">
        <div 
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-accent to-secondary transition-all duration-micro ease-micro rounded-full"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Progress percentage */}
      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-surface shadow-card px-2 py-1 rounded text-xs font-data text-text-secondary">
        {Math.round(scrollProgress)}%
      </div>
    </div>
  );
};

export default ScrollProgressIndicator;