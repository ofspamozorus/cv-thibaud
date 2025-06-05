import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const CertificationBadge = ({ 
  certification, 
  onClick,
  size = 'md',
  className = ""
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  return (
    <motion.button
      onClick={() => onClick && onClick(certification)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${sizeClasses[size]} 
        bg-gradient-to-br from-accent to-warning 
        rounded-full 
        flex items-center justify-center 
        shadow-card hover:shadow-interactive 
        transition-all duration-micro ease-micro 
        focus-visible
        ${className}
      `}
      title={`Certification: ${certification}`}
      aria-label={`Voir les détails de la certification ${certification}`}
    >
      <Icon 
        name="Award" 
        size={iconSizes[size]} 
        color="white" 
      />
    </motion.button>
  );
};

export default CertificationBadge;