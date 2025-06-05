import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const SkillFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  className = ""
}) => {
  const handleCategoryClick = (categoryId) => {
    onCategoryChange(categoryId);
  };

  const handleKeyDown = (event, categoryId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCategoryClick(categoryId);
    }
  };

  return (
    <div className={`${className}`}>
      {/* Desktop Filter */}
      <div className="hidden md:flex items-center justify-center space-x-2">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            onKeyDown={(e) => handleKeyDown(e, category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-interactive 
              font-medium text-sm transition-all duration-micro ease-micro 
              focus-visible
              ${selectedCategory === category.id
                ? 'bg-accent text-surface shadow-card'
                : 'bg-background text-text-primary hover:bg-surface hover:text-secondary'
              }
            `}
            aria-pressed={selectedCategory === category.id}
            aria-label={`Filtrer par ${category.label}`}
          >
            <Icon 
              name={category.icon} 
              size={16} 
              className={selectedCategory === category.id ? 'text-surface' : 'text-text-secondary'}
            />
            <span>{category.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Mobile Filter */}
      <div className="md:hidden">
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryClick(e.target.value)}
            className="w-full bg-surface border border-border rounded-interactive px-4 py-3 text-primary font-medium focus-visible appearance-none"
            aria-label="Sélectionner une catégorie de compétences"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Icon name="ChevronDown" size={20} className="text-text-secondary" />
          </div>
        </div>
      </div>

      {/* Active Filter Indicator */}
      <div className="mt-4 text-center">
        <div className="inline-flex items-center space-x-2 text-sm text-text-secondary">
          <Icon name="Filter" size={16} />
          <span>
            {selectedCategory === 'all' ?'Toutes les compétences' 
              : categories.find(cat => cat.id === selectedCategory)?.label
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillFilter;