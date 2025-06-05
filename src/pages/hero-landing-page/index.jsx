import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from 'components/ui/NavigationBar';
import ScrollProgressIndicator from 'components/ui/ScrollProgressIndicator';
import ContactCTA from 'components/ui/ContactCTA';
import LanguageToggle from 'components/ui/LanguageToggle';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import AnimatedStats from './components/AnimatedStats';
import TrustSignals from './components/TrustSignals';
import QuickActions from './components/QuickActions';

const HeroLandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate={isLoaded ? "animate" : "initial"}
      className="min-h-screen bg-background"
    >
      {/* Navigation */}
      <NavigationBar />
      
      {/* Language Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-navigation">
        <LanguageToggle />
      </div>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section 
          id="hero-landing-page"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <HeroSection />
        </section>

        {/* Value Proposition Section */}
        <section className="relative py-16 lg:py-24 bg-surface">
          <ValueProposition />
        </section>

        {/* Animated Statistics */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <AnimatedStats />
        </section>

        {/* Trust Signals */}
        <section className="relative py-16 lg:py-24 bg-surface">
          <TrustSignals />
        </section>

        {/* Quick Actions */}
        <section className="relative py-16 lg:py-24 bg-background">
          <QuickActions />
        </section>
      </main>

      {/* UI Components */}
      <ScrollProgressIndicator />
      <ContactCTA />
    </motion.div>
  );
};

export default HeroLandingPage;