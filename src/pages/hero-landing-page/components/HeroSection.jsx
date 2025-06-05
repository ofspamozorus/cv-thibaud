import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    "Traffic Manager Expert",
    "Spécialiste Google Ads",
    "Expert Meta Ads",
    "Stratège TikTok Ads",
    "Optimiseur de Performance"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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

  const handleCVDownload = () => {
    // Mock CV download functionality
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Thibaud_Herbert_CV.pdf';
    link.click();
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Content Column */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              <Icon name="Zap" size={16} className="mr-2" />
              Disponible pour nouvelles opportunités
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Bonjour, je suis{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Thibaud Herbert
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-xl sm:text-2xl text-text-secondary mb-4">
              <span className="inline-block min-w-0">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-secondary font-semibold"
                >
                  {roles[currentRole]}
                </motion.span>
              </span>
            </div>
            <p className="text-lg text-text-secondary max-w-2xl">
              Spécialisé dans l'optimisation des campagnes publicitaires digitales avec{' '}
              <strong className="text-accent">+5 ans d'expérience</strong> et{' '}
              <strong className="text-accent">+2M€</strong> de budget publicitaire géré.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <button
              onClick={handleContactClick}
              className="bg-accent hover:bg-warning text-surface px-8 py-4 rounded-interactive font-semibold text-lg transition-all duration-micro ease-micro hover-scale focus-visible shadow-interactive hover:shadow-lg"
            >
              <Icon name="MessageCircle" size={20} className="inline mr-2" />
              Discutons de votre projet
            </button>
            
            <button
              onClick={handleCVDownload}
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-surface px-8 py-4 rounded-interactive font-semibold text-lg transition-all duration-micro ease-micro hover-scale focus-visible"
            >
              <Icon name="Download" size={20} className="inline mr-2" />
              Télécharger mon CV
            </button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 text-center lg:text-left">
            <div>
              <div className="text-2xl font-bold text-accent">+5</div>
              <div className="text-sm text-text-secondary">Années d'expérience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">+2M€</div>
              <div className="text-sm text-text-secondary">Budget géré</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">+300%</div>
              <div className="text-sm text-text-secondary">ROI moyen</div>
            </div>
          </motion.div>
        </div>

        {/* Image Column */}
        <motion.div variants={itemVariants} className="order-1 lg:order-2">
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 to-secondary/20 rounded-3xl transform -rotate-3"></div>
            
            {/* Main Image */}
            <div className="relative bg-surface rounded-3xl p-8 shadow-interactive">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                alt="Thibaud Herbert - Traffic Manager Expert"
                className="w-full h-96 object-cover rounded-2xl"
              />
              
              {/* Floating Achievement Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-surface p-4 rounded-2xl shadow-interactive">
                <Icon name="Award" size={24} />
                <div className="text-xs font-semibold mt-1">Expert</div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-surface p-4 rounded-2xl shadow-interactive border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">Disponible</div>
                    <div className="text-xs text-text-secondary">Réponse sous 24h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-text-secondary">
          <span className="text-sm font-medium">Découvrir mon parcours</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Icon name="ChevronDown" size={24} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;