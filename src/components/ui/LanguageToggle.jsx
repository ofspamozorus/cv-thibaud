import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const LanguageToggle = ({ className = "" }) => {
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { 
      code: 'fr', 
      label: 'Français', 
      flag: '🇫🇷',
      shortLabel: 'FR'
    },
    { 
      code: 'en', 
      label: 'English', 
      flag: '🇬🇧',
      shortLabel: 'EN'
    }
  ];

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferred-language') || 'fr';
    setCurrentLanguage(savedLanguage);
  }, []);

  const handleLanguageChange = (languageCode) => {
    setCurrentLanguage(languageCode);
    localStorage.setItem('preferred-language', languageCode);
    setIsDropdownOpen(false);
    
    // Here you would typically trigger a language change event
    // For now, we'll just update the state
    window.dispatchEvent(new CustomEvent('languageChange', { 
      detail: { language: languageCode } 
    }));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleKeyDown = (event, languageCode = null) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (languageCode) {
        handleLanguageChange(languageCode);
      } else {
        toggleDropdown();
      }
    } else if (event.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className={`relative ${className}`}>
      {/* Desktop Version */}
      <div className="hidden md:block">
        <button
          onClick={toggleDropdown}
          onKeyDown={(e) => handleKeyDown(e)}
          className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-text-primary hover:text-secondary transition-all duration-micro ease-micro hover-scale focus-visible rounded-interactive"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          aria-label={`Langue actuelle: ${currentLang?.label}. Cliquer pour changer`}
        >
          <span className="text-base" aria-hidden="true">{currentLang?.flag}</span>
          <span className="font-data">{currentLang?.shortLabel}</span>
          <Icon 
            name={isDropdownOpen ? "ChevronUp" : "ChevronDown"} 
            size={16}
            className="transition-transform duration-micro ease-micro"
          />
        </button>

        {/* Desktop Dropdown */}
        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 w-40 bg-surface shadow-interactive rounded-interactive border border-border overflow-hidden z-modal">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                onKeyDown={(e) => handleKeyDown(e, language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-sm transition-all duration-micro ease-micro hover:bg-background focus-visible ${
                  currentLanguage === language.code 
                    ? 'bg-accent/10 text-accent font-medium' :'text-text-primary hover:text-secondary'
                }`}
                aria-current={currentLanguage === language.code ? 'true' : 'false'}
              >
                <span className="text-base" aria-hidden="true">{language.flag}</span>
                <span className="flex-1 text-left">{language.label}</span>
                {currentLanguage === language.code && (
                  <Icon name="Check" size={16} className="text-accent" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Version */}
      <div className="md:hidden">
        <button
          onClick={toggleDropdown}
          onKeyDown={(e) => handleKeyDown(e)}
          className="flex items-center justify-center w-10 h-10 text-text-primary hover:text-secondary transition-all duration-micro ease-micro hover-scale focus-visible rounded-interactive"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          aria-label={`Langue: ${currentLang?.shortLabel}`}
        >
          <span className="text-lg" aria-hidden="true">{currentLang?.flag}</span>
        </button>

        {/* Mobile Dropdown */}
        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 w-32 bg-surface shadow-interactive rounded-interactive border border-border overflow-hidden z-modal">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                onKeyDown={(e) => handleKeyDown(e, language.code)}
                className={`w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm transition-all duration-micro ease-micro hover:bg-background focus-visible ${
                  currentLanguage === language.code 
                    ? 'bg-accent/10 text-accent font-medium' :'text-text-primary hover:text-secondary'
                }`}
                aria-current={currentLanguage === language.code ? 'true' : 'false'}
              >
                <span aria-hidden="true">{language.flag}</span>
                <span className="font-data">{language.shortLabel}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Overlay for mobile */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-menu-overlay md:hidden"
          onClick={() => setIsDropdownOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default LanguageToggle;