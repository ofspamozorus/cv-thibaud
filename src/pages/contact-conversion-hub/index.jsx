// src/pages/contact-conversion-hub/index.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import NavigationBar from 'components/ui/NavigationBar';
import ScrollProgressIndicator from 'components/ui/ScrollProgressIndicator';
import ContactCTA from 'components/ui/ContactCTA';
import LanguageToggle from 'components/ui/LanguageToggle';
import ContactForm from './components/ContactForm';
import TrustIndicators from './components/TrustIndicators';
import ContactOptions from './components/ContactOptions';
import TestimonialsSection from './components/TestimonialsSection';
import ConsultationProcess from './components/ConsultationProcess';
import SuccessModal from './components/SuccessModal';
import GDPRNotice from './components/GDPRNotice';

const ContactConversionHub = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSuccess = (data) => {
    setSubmissionData(data);
    setShowSuccessModal(true);
  };

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
    <>
      <Helmet>
        <title>Contact & Conversion Hub - Thibaud Portfolio</title>
        <meta name="description" content="Get in touch with Thibaud for professional consultations, collaborations, and opportunities. Expert web development and digital solutions." />
        <meta name="keywords" content="contact, consultation, web development, digital solutions, collaboration" />
        <meta property="og:title" content="Contact & Conversion Hub - Thibaud Portfolio" />
        <meta property="og:description" content="Professional contact and consultation services" />
        <link rel="canonical" href="/contact-conversion-hub" />
      </Helmet>

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
        <main className="relative pt-20">
          {/* Hero Section */}
          <section 
            id="contact-hero"
            className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center max-w-4xl mx-auto"
              >
                <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
                  Let's Build Something
                  <span className="text-secondary block">Exceptional Together</span>
                </h1>
                <p className="text-xl lg:text-2xl text-text-secondary mb-8 leading-relaxed">
                  Ready to transform your digital vision into reality? Start the conversation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center text-text-secondary">
                    <span className="w-3 h-3 bg-success rounded-full mr-2 animate-pulse"></span>
                    Response within 24 hours
                  </div>
                  <div className="flex items-center text-text-secondary">
                    <span className="w-3 h-3 bg-secondary rounded-full mr-2"></span>
                    Free consultation call
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Main Contact Section */}
          <section className="relative py-16 lg:py-24 bg-surface">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <ContactForm onSuccess={handleFormSuccess} />
                </motion.div>

                {/* Trust Indicators & Contact Options */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-8"
                >
                  <TrustIndicators />
                  <ContactOptions />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="relative py-16 lg:py-24 bg-background">
            <TestimonialsSection />
          </section>

          {/* Consultation Process */}
          <section className="relative py-16 lg:py-24 bg-surface">
            <ConsultationProcess />
          </section>

          {/* GDPR Notice */}
          <GDPRNotice />
        </main>

        {/* UI Components */}
        <ScrollProgressIndicator />
        <ContactCTA />
        
        {/* Success Modal */}
        {showSuccessModal && (
          <SuccessModal
            isOpen={showSuccessModal}
            onClose={() => setShowSuccessModal(false)}
            submissionData={submissionData}
          />
        )}
      </motion.div>
    </>
  );
};

export default ContactConversionHub;