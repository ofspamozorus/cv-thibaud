import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const TimelineCard = ({ experience, index, isExpanded, onExpand, isLast }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    }
  };

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      {/* Timeline Node */}
      <div className="absolute left-0 top-6 w-16 h-16 hidden md:flex items-center justify-center">
        <div className={`w-4 h-4 rounded-full border-4 ${
          experience.isActive 
            ? 'bg-accent border-accent shadow-lg' 
            : 'bg-surface border-secondary'
        }`} />
      </div>

      {/* Card */}
      <div className="md:ml-24 bg-surface rounded-interactive shadow-card border border-border hover:shadow-interactive transition-all duration-micro ease-micro">
        {/* Header */}
        <div 
          className="p-6 cursor-pointer"
          onClick={onExpand}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onExpand();
            }
          }}
          aria-expanded={isExpanded}
          aria-label={`${isExpanded ? 'Réduire' : 'Développer'} les détails de ${experience.position} chez ${experience.company}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4 flex-1">
              {/* Company Logo */}
              <div className="w-12 h-12 rounded-interactive overflow-hidden flex-shrink-0 bg-background">
                <Image
                  src={experience.logo}
                  alt={`Logo ${experience.company}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-primary truncate">
                    {experience.position}
                  </h3>
                  {experience.isActive && (
                    <span className="inline-flex items-center px-2 py-1 bg-success/10 text-success rounded text-xs font-medium mt-1 sm:mt-0">
                      <div className="w-1.5 h-1.5 bg-success rounded-full mr-1" />
                      Poste actuel
                    </span>
                  )}
                </div>
                
                <p className="text-secondary font-medium mb-1">{experience.company}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-3">
                  <span className="flex items-center">
                    <Icon name="Calendar" size={14} className="mr-1" />
                    {experience.duration}
                  </span>
                  <span className="flex items-center">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {experience.period}
                  </span>
                  <span className="flex items-center">
                    <Icon name="MapPin" size={14} className="mr-1" />
                    {experience.location}
                  </span>
                  <span className="flex items-center">
                    <Icon name="Briefcase" size={14} className="mr-1" />
                    {experience.type}
                  </span>
                </div>

                {/* Platforms & Industries */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="inline-flex items-center px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium"
                    >
                      {platform}
                    </span>
                  ))}
                  {experience.industries.map((industry) => (
                    <span
                      key={industry}
                      className="inline-flex items-center px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {Object.entries(experience.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-background rounded">
                      <div className="text-sm font-semibold text-primary">{value}</div>
                      <div className="text-xs text-text-secondary capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Expand Button */}
            <button
              className="ml-4 p-2 text-text-secondary hover:text-secondary transition-colors duration-micro ease-micro focus-visible rounded"
              aria-label={isExpanded ? 'Réduire' : 'Développer'}
            >
              <Icon 
                name={isExpanded ? "ChevronUp" : "ChevronDown"} 
                size={20}
                className="transition-transform duration-micro ease-micro"
              />
            </button>
          </div>
        </div>

        {/* Expanded Content */}
        <motion.div
          variants={expandVariants}
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 border-t border-border">
            <div className="pt-6 space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Description du poste
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {experience.description}
                </p>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-sm font-semibold text-primary mb-3 flex items-center">
                  <Icon name="Trophy" size={16} className="mr-2" />
                  Réalisations principales
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills & Technologies */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3 flex items-center">
                    <Icon name="Target" size={16} className="mr-2" />
                    Compétences développées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3 flex items-center">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Technologies utilisées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2 py-1 bg-text-secondary/10 text-text-secondary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                <button
                  onClick={() => {
                    const projectsSection = document.getElementById('project-portfolio-case-studies');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary hover:bg-secondary/20 rounded-interactive text-sm font-medium transition-all duration-micro ease-micro hover-scale focus-visible"
                >
                  <Icon name="ExternalLink" size={14} className="mr-2" />
                  Voir les projets
                </button>
                
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact-conversion-hub');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent hover:bg-accent/20 rounded-interactive text-sm font-medium transition-all duration-micro ease-micro hover-scale focus-visible"
                >
                  <Icon name="MessageCircle" size={14} className="mr-2" />
                  Discuter de cette expérience
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Connection Line to Next Card */}
      {!isLast && (
        <div className="absolute left-8 top-20 w-0.5 h-8 bg-gradient-to-b from-secondary/50 to-transparent hidden md:block" />
      )}
    </motion.div>
  );
};

export default TimelineCard;