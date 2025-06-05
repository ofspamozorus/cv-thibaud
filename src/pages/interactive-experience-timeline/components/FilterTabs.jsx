import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const FilterTabs = ({ options, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {options.map((option) => (
        <motion.button
          key={option.id}
          onClick={() => onFilterChange(option.id)}
          className={`inline-flex items-center px-4 py-2 rounded-interactive text-sm font-medium transition-all duration-micro ease-micro hover-scale focus-visible ${
            activeFilter === option.id
              ? 'bg-accent text-surface shadow-card'
              : 'bg-surface text-text-secondary hover:text-primary hover:bg-background border border-border'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-pressed={activeFilter === option.id}
          aria-label={`Filtrer par ${option.label}`}
        >
          <Icon 
            name={option.icon} 
            size={16} 
            className="mr-2" 
            color={activeFilter === option.id ? 'white' : 'currentColor'}
          />
          {option.label}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterTabs;