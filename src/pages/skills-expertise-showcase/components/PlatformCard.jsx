import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import SkillMeter from './SkillMeter';
import CertificationBadge from './CertificationBadge';

const PlatformCard = ({ 
  skill, 
  isVisible = false, 
  onCertificationClick,
  className = ""
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleExpanded();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        bg-surface rounded-2xl p-6 shadow-card hover:shadow-interactive 
        transition-all duration-micro ease-micro border border-border
        ${className}
      `}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center`}>
            <Icon name={skill.icon} size={24} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary">{skill.name}</h3>
            <p className="text-sm text-text-secondary">{skill.experience}</p>
          </div>
        </div>
        
        <SkillMeter 
          skill={skill.name}
          proficiency={skill.proficiency}
          isVisible={isVisible}
          size="md"
          showLabel={false}
        />
      </div>

      {/* Description */}
      <p className="text-text-secondary mb-4 leading-relaxed">
        {skill.description}
      </p>

      {/* Results */}
      <div className="bg-background rounded-xl p-4 mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="TrendingUp" size={16} className="text-success" />
          <span className="text-sm font-medium text-primary">Résultats</span>
        </div>
        <p className="text-success font-semibold">{skill.results}</p>
      </div>

      {/* Certifications */}
      {skill.certifications && skill.certifications.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="Award" size={16} className="text-accent" />
            <span className="text-sm font-medium text-primary">Certifications</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skill.certifications.map((cert, index) => (
              <CertificationBadge
                key={index}
                certification={cert}
                onClick={() => onCertificationClick && onCertificationClick(cert, skill)}
                size="sm"
              />
            ))}
          </div>
        </div>
      )}

      {/* Expandable Features */}
      <div className="border-t border-border pt-4">
        <button
          onClick={toggleExpanded}
          onKeyDown={handleKeyDown}
          className="flex items-center justify-between w-full text-left focus-visible"
          aria-expanded={isExpanded}
          aria-label={`${isExpanded ? 'Masquer' : 'Afficher'} les fonctionnalités de ${skill.name}`}
        >
          <span className="text-sm font-medium text-primary">
            Fonctionnalités maîtrisées
          </span>
          <Icon 
            name={isExpanded ? "ChevronUp" : "ChevronDown"} 
            size={16} 
            className="text-text-secondary transition-transform duration-micro ease-micro"
          />
        </button>

        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pt-3">
            <div className="grid grid-cols-1 gap-2">
              {skill.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: isExpanded ? 1 : 0, 
                    x: isExpanded ? 0 : -10 
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: isExpanded ? index * 0.1 : 0 
                  }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-sm text-text-secondary">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PlatformCard;