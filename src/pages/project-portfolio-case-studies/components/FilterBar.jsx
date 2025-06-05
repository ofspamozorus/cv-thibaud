import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const FilterBar = ({ options, activeFilter, onFilterChange }) => {
  return (
    <section className="py-8 bg-surface border-b border-border sticky top-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-text-primary">
            Filtrer les projets
          </h2>
          <div className="text-sm text-text-secondary">
            {options.find(opt => opt.value === activeFilter)?.count || 0} projet(s)
          </div>
        </div>
        
        {/* Desktop Filter Buttons */}
        <div className="hidden md:flex flex-wrap gap-3">
          {options.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => onFilterChange(option.value)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-interactive font-medium transition-all duration-micro ease-micro focus-visible ${
                activeFilter === option.value
                  ? 'bg-accent text-surface shadow-card'
                  : 'bg-background text-text-primary hover:bg-border hover:text-text-primary'
              }`}
            >
              <span>{option.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeFilter === option.value
                  ? 'bg-surface/20 text-surface' :'bg-text-secondary/20 text-text-secondary'
              }`}>
                {option.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Filter Dropdown */}
        <div className="md:hidden">
          <select
            value={activeFilter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="w-full px-4 py-3 bg-background border border-border rounded-interactive text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label} ({option.count})
              </option>
            ))}
          </select>
        </div>

        {/* Active Filter Indicator */}
        {activeFilter !== 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center space-x-2"
          >
            <span className="text-sm text-text-secondary">Filtre actif:</span>
            <div className="flex items-center space-x-2 bg-accent/10 text-accent px-3 py-1 rounded-interactive">
              <span className="text-sm font-medium">
                {options.find(opt => opt.value === activeFilter)?.label}
              </span>
              <button
                onClick={() => onFilterChange('all')}
                className="hover:bg-accent/20 rounded-full p-1 transition-colors duration-micro ease-micro"
                aria-label="Supprimer le filtre"
              >
                <Icon name="X" size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FilterBar;