import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const AnimatedStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    budget: 0,
    roi: 0,
    campaigns: 0
  });
  
  const sectionRef = useRef(null);

  const stats = [
    {
      key: 'experience',
      icon: 'Calendar',
      value: 5,
      suffix: '+',
      label: 'Années d\'expérience',
      description: 'En marketing digital et gestion de campagnes',
      color: 'from-blue-500 to-blue-600'
    },
    {
      key: 'budget',
      icon: 'Euro',
      value: 2,
      suffix: 'M€+',
      label: 'Budget publicitaire géré',
      description: 'Optimisation de millions d\'euros d\'investissements',
      color: 'from-green-500 to-green-600'
    },
    {
      key: 'roi',
      icon: 'TrendingUp',
      value: 300,
      suffix: '%+',
      label: 'ROI moyen obtenu',
      description: 'Retour sur investissement pour mes clients',
      color: 'from-purple-500 to-purple-600'
    },
    {
      key: 'campaigns',
      icon: 'Target',
      value: 150,
      suffix: '+',
      label: 'Campagnes optimisées',
      description: 'Projets menés avec succès',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    stats.forEach((stat) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        
        setCounters(prev => ({
          ...prev,
          [stat.key]: Math.floor(start)
        }));
      }, 16);
    });
  };

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="text-center mb-16"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            <Icon name="BarChart3" size={16} className="mr-2" />
            Résultats prouvés
          </span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
          Des chiffres qui parlent d'eux-mêmes
        </motion.h2>

        <motion.p variants={itemVariants} className="text-xl text-text-secondary max-w-3xl mx-auto">
          Mon expertise se mesure en résultats concrets pour mes clients et partenaires.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.key}
            variants={itemVariants}
            className="group relative bg-surface p-8 rounded-2xl shadow-card hover:shadow-interactive transition-all duration-micro ease-micro hover-scale border border-border overflow-hidden"
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-micro ease-micro`}></div>
            
            {/* Icon */}
            <div className="relative mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-micro ease-micro`}>
                <Icon name={stat.icon} size={28} color="white" />
              </div>
            </div>
            
            {/* Counter */}
            <div className="relative mb-4">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {isVisible ? counters[stat.key] : 0}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary group-hover:text-secondary transition-colors duration-micro ease-micro">
                {stat.label}
              </h3>
            </div>
            
            {/* Description */}
            <p className="relative text-text-secondary text-sm leading-relaxed">
              {stat.description}
            </p>

            {/* Hover Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-micro ease-micro origin-left"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Context */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-primary mb-2">Certifications</h3>
              <p className="text-text-secondary">Google Ads, Meta Blueprint, TikTok Marketing</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Secteurs d'expertise</h3>
              <p className="text-text-secondary">E-commerce, SaaS, Lead Generation, B2B</p>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="text-xl font-semibold text-primary mb-2">Spécialisations</h3>
              <p className="text-text-secondary">Performance Marketing, Growth Hacking</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedStats;