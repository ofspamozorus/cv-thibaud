import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const ValueProposition = () => {
  const valueProps = [
    {
      icon: "Target",
      title: "Stratégie Data-Driven",
      description: "Optimisation continue basée sur l\'analyse des données et des KPIs pour maximiser votre ROI publicitaire."
    },
    {
      icon: "TrendingUp",
      title: "Performance Mesurable",
      description: "Suivi précis des conversions et attribution multi-touch pour une visibilité complète sur vos investissements."
    },
    {
      icon: "Zap",
      title: "Expertise Multi-Plateformes",
      description: "Maîtrise approfondie de Google Ads, Meta Ads, TikTok Ads et autres canaux d\'acquisition payants."
    },
    {
      icon: "Shield",
      title: "Gestion de Budget Optimisée",
      description: "Allocation intelligente des budgets publicitaires pour maximiser l\'impact de chaque euro investi."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
            <Icon name="Star" size={16} className="mr-2" />
            Pourquoi me choisir
          </span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
          Transformez vos investissements publicitaires en{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
            résultats concrets
          </span>
        </motion.h2>

        <motion.p variants={itemVariants} className="text-xl text-text-secondary max-w-3xl mx-auto">
          Avec une approche scientifique et créative, je vous aide à atteindre vos objectifs de croissance 
          grâce à des campagnes publicitaires performantes et rentables.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {valueProps.map((prop, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group bg-surface p-8 rounded-2xl shadow-card hover:shadow-interactive transition-all duration-micro ease-micro hover-scale border border-border hover:border-secondary/20"
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-micro ease-micro">
                <Icon name={prop.icon} size={28} color="white" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors duration-micro ease-micro">
              {prop.title}
            </h3>
            
            <p className="text-text-secondary leading-relaxed">
              {prop.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
            Prêt à booster vos performances publicitaires ?
          </h3>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Discutons de vos objectifs et découvrez comment je peux vous aider à les atteindre 
            avec des stratégies publicitaires sur mesure.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact-conversion-hub');
              if (contactSection) {
                const offsetTop = contactSection.offsetTop - 80;
                window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
                });
              }
            }}
            className="bg-accent hover:bg-warning text-surface px-8 py-4 rounded-interactive font-semibold text-lg transition-all duration-micro ease-micro hover-scale focus-visible shadow-interactive hover:shadow-lg"
          >
            <Icon name="Calendar" size={20} className="inline mr-2" />
            Planifier un entretien
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ValueProposition;