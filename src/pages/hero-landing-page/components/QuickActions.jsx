import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const QuickActions = () => {
  const [hoveredAction, setHoveredAction] = useState(null);

  const quickActions = [
    {
      id: 'contact',
      icon: 'MessageCircle',
      title: 'Prendre contact',
      description: 'Discutons de votre projet et de vos objectifs',
      action: 'Envoyer un message',
      color: 'from-accent to-warning',
      targetSection: 'contact-conversion-hub'
    },
    {
      id: 'experience',
      icon: 'Clock',
      title: 'Mon parcours',
      description: 'Découvrez mon expérience et mes réalisations',
      action: 'Voir la timeline',
      color: 'from-secondary to-blue-600',
      targetSection: 'interactive-experience-timeline'
    },
    {
      id: 'skills',
      icon: 'Zap',
      title: 'Mes compétences',
      description: 'Expertise technique et certifications',
      action: 'Explorer mes skills',
      color: 'from-purple-500 to-purple-600',
      targetSection: 'skills-expertise-showcase'
    },
    {
      id: 'projects',
      icon: 'Briefcase',
      title: 'Mes projets',
      description: 'Portfolio et études de cas détaillées',
      action: 'Voir mes réalisations',
      color: 'from-green-500 to-green-600',
      targetSection: 'project-portfolio-case-studies'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/thibaud-herbert',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/thibaud-herbert',
      color: 'hover:text-gray-800'
    },
    {
      name: 'Email',
      icon: 'Mail',
      url: 'mailto:thibaud.herbert@example.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'Téléphone',
      icon: 'Phone',
      url: 'tel:+33123456789',
      color: 'hover:text-green-500'
    }
  ];

  const handleActionClick = (targetSection) => {
    const section = document.getElementById(targetSection);
    if (section) {
      const offsetTop = section.offsetTop - 80;
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
          <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Icon name="Navigation" size={16} className="mr-2" />
            Navigation rapide
          </span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
          Explorez mon{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
            univers professionnel
          </span>
        </motion.h2>

        <motion.p variants={itemVariants} className="text-xl text-text-secondary max-w-3xl mx-auto">
          Découvrez rapidement les sections qui vous intéressent le plus pour en savoir plus sur mon profil.
        </motion.p>
      </motion.div>

      {/* Quick Actions Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {quickActions.map((action, index) => (
          <motion.div
            key={action.id}
            variants={itemVariants}
            onMouseEnter={() => setHoveredAction(action.id)}
            onMouseLeave={() => setHoveredAction(null)}
            className="group relative bg-surface p-8 rounded-2xl shadow-card hover:shadow-interactive transition-all duration-micro ease-micro hover-scale border border-border overflow-hidden cursor-pointer"
            onClick={() => handleActionClick(action.targetSection)}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-5 transition-opacity duration-micro ease-micro`}></div>
            
            {/* Icon */}
            <div className="relative mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-micro ease-micro`}>
                <Icon name={action.icon} size={28} color="white" />
              </div>
            </div>
            
            {/* Content */}
            <div className="relative">
              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors duration-micro ease-micro">
                {action.title}
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {action.description}
              </p>
              
              {/* Action Button */}
              <div className="flex items-center text-secondary font-medium group-hover:text-accent transition-colors duration-micro ease-micro">
                <span className="mr-2">{action.action}</span>
                <Icon 
                  name="ArrowRight" 
                  size={16} 
                  className={`transition-transform duration-micro ease-micro ${
                    hoveredAction === action.id ? 'translate-x-1' : ''
                  }`}
                />
              </div>
            </div>

            {/* Hover Effect */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${action.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-micro ease-micro origin-left`}></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact & Social Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - CTA */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Prêt à collaborer ?
            </h3>
            <p className="text-lg text-text-secondary mb-8">
              Téléchargez mon CV complet ou contactez-moi directement pour discuter de vos projets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => handleActionClick('contact-conversion-hub')}
                className="bg-accent hover:bg-warning text-surface px-8 py-4 rounded-interactive font-semibold transition-all duration-micro ease-micro hover-scale focus-visible shadow-interactive hover:shadow-lg"
              >
                <Icon name="MessageCircle" size={20} className="inline mr-2" />
                Me contacter
              </button>
              
              <button
                onClick={handleCVDownload}
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-surface px-8 py-4 rounded-interactive font-semibold transition-all duration-micro ease-micro hover-scale focus-visible"
              >
                <Icon name="Download" size={20} className="inline mr-2" />
                Télécharger CV
              </button>
            </div>
          </motion.div>

          {/* Right Column - Social Links */}
          <motion.div variants={itemVariants} className="text-center lg:text-right">
            <h4 className="text-xl font-semibold text-primary mb-6">
              Retrouvez-moi sur
            </h4>
            
            <div className="flex justify-center lg:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-surface rounded-full flex items-center justify-center text-text-secondary ${social.color} transition-all duration-micro ease-micro hover-scale focus-visible shadow-card hover:shadow-interactive border border-border`}
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
            
            <div className="mt-6 text-sm text-text-secondary">
              <p>Réponse garantie sous 24h</p>
              <p className="mt-1">Disponible pour missions freelance</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuickActions;