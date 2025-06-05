import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const ContactCTA = ({ className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const contactSection = document.getElementById('contact-conversion-hub');
      
      if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect();
        // Hide CTA when contact section is visible
        setIsVisible(scrollTop > 200 && contactRect.top > window.innerHeight * 0.2);
      } else {
        setIsVisible(scrollTop > 200);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact-conversion-hub');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleContactClick();
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop CTA */}
      <div className={`hidden lg:block fixed bottom-8 right-8 z-navigation ${className}`}>
        <button
          onClick={handleContactClick}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          className="group bg-accent hover:bg-warning text-surface shadow-interactive hover:shadow-lg transition-all duration-micro ease-micro hover-scale focus-visible rounded-interactive overflow-hidden"
          aria-label="Prendre contact"
        >
          <div className="flex items-center px-4 py-3">
            <Icon name="MessageCircle" size={20} className="flex-shrink-0" />
            <span 
              className={`ml-2 font-medium text-sm transition-all duration-layout ease-layout ${
                isExpanded ? 'max-w-32 opacity-100' : 'max-w-0 opacity-0'
              } overflow-hidden whitespace-nowrap`}
            >
              Discutons ensemble
            </span>
          </div>
        </button>
      </div>

      {/* Mobile CTA */}
      <div className={`lg:hidden fixed bottom-4 right-4 z-navigation ${className}`}>
        <button
          onClick={handleContactClick}
          onKeyDown={handleKeyDown}
          className="bg-accent hover:bg-warning text-surface w-14 h-14 rounded-full shadow-interactive hover:shadow-lg transition-all duration-micro ease-micro hover-scale focus-visible flex items-center justify-center"
          aria-label="Prendre contact"
        >
          <Icon name="MessageCircle" size={24} />
        </button>
      </div>
    </>
  );
};

export default ContactCTA;