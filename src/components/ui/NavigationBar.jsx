import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero-landing-page');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { 
      id: 'hero-landing-page', 
      label: 'Accueil', 
      href: '#hero-landing-page',
      description: 'Page d\'accueil et présentation'
    },
    { 
      id: 'interactive-experience-timeline', 
      label: 'Expérience', 
      href: '#interactive-experience-timeline',
      description: 'Parcours professionnel et timeline'
    },
    { 
      id: 'skills-expertise-showcase', 
      label: 'Compétences', 
      href: '#skills-expertise-showcase',
      description: 'Expertise et compétences techniques'
    },
    { 
      id: 'project-portfolio-case-studies', 
      label: 'Projets', 
      href: '#project-portfolio-case-studies',
      description: 'Portfolio et études de cas'
    },
    { 
      id: 'contact-conversion-hub', 
      label: 'Contact', 
      href: '#contact-conversion-hub',
      description: 'Prise de contact et informations'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setIsScrolled(scrollTop > 20);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const currentSection = sections.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href, id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    
    // Utiliser la navigation par URL plutôt que le défilement
    window.location.href = href;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (event, href, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleNavClick(href, id);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-navigation transition-all duration-micro ease-micro ${
          isScrolled ? 'nav-blur bg-surface/90 shadow-card' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Navigation principale"
      >
        {/* Progress indicator */}
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-micro ease-micro"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavClick('#hero-landing-page', 'hero-landing-page')}
                className="flex items-center space-x-2 text-primary font-heading font-semibold text-xl hover-scale focus-visible"
                aria-label="Retour à l'accueil"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-interactive flex items-center justify-center">
                  <span className="text-surface font-bold text-sm">T</span>
                </div>
                <span className="hidden sm:block">Thibaud</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href, item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.href, item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-micro ease-micro hover-scale focus-visible ${
                      activeSection === item.id
                        ? 'text-accent border-b-2 border-accent' :'text-text-primary hover:text-secondary'
                    }`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                    title={item.description}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact CTA - Desktop */}
            <div className="hidden md:block">
              <button
                onClick={() => handleNavClick('#contact-conversion-hub', 'contact-conversion-hub')}
                className="bg-accent text-surface px-4 py-2 rounded-interactive text-sm font-medium hover-scale focus-visible transition-all duration-micro ease-micro hover:bg-warning"
              >
                Me contacter
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-interactive text-text-primary hover:text-secondary hover:bg-background focus-visible"
                aria-expanded={isMenuOpen}
                aria-label="Ouvrir le menu de navigation"
              >
                <Icon 
                  name={isMenuOpen ? "X" : "Menu"} 
                  size={24}
                  className="transition-transform duration-micro ease-micro"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden transition-all duration-layout ease-layout ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-surface/95 nav-blur border-t border-border`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.href, item.id)}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-micro ease-micro hover-scale focus-visible ${
                  activeSection === item.id
                    ? 'text-accent bg-accent/10 border-l-4 border-accent' :'text-text-primary hover:text-secondary hover:bg-background'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                <div>
                  <div className="font-medium">{item.label}</div>
                  <div className="text-sm text-text-secondary mt-1">{item.description}</div>
                </div>
              </button>
            ))}
            
            {/* Mobile Contact CTA */}
            <div className="pt-4 border-t border-border">
              <button
                onClick={() => handleNavClick('#contact-conversion-hub', 'contact-conversion-hub')}
                className="w-full bg-accent text-surface px-4 py-3 rounded-interactive text-base font-medium hover-scale focus-visible transition-all duration-micro ease-micro hover:bg-warning"
              >
                Me contacter
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-menu-overlay bg-primary/20 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default NavigationBar;
