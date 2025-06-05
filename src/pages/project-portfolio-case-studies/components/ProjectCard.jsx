import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ProjectCard = ({ project, index, onClick }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-surface rounded-interactive overflow-hidden shadow-card hover:shadow-interactive transition-all duration-micro ease-micro hover-scale cursor-pointer group"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Voir les détails du projet ${project.title}`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-micro ease-micro group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-micro ease-micro" />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-surface px-3 py-1 rounded-full text-sm font-medium">
            {project.platform}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-surface/90 text-text-primary px-3 py-1 rounded-full text-sm font-medium">
            {project.industry}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-micro ease-micro">
          <div className="bg-surface/90 rounded-full p-2">
            <Icon name="ArrowUpRight" size={20} className="text-primary" />
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Client & Title */}
        <div className="mb-4">
          <p className="text-sm text-text-secondary font-medium mb-1">{project.client}</p>
          <h3 className="text-lg font-semibold text-text-primary line-clamp-2 group-hover:text-secondary transition-colors duration-micro ease-micro">
            {project.title}
          </h3>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-3 bg-background rounded-interactive">
            <div className="text-lg font-bold text-accent">{project.metrics.roas}x</div>
            <div className="text-xs text-text-secondary">ROAS</div>
          </div>
          <div className="text-center p-3 bg-background rounded-interactive">
            <div className="text-lg font-bold text-success">+{project.metrics.conversionIncrease}%</div>
            <div className="text-xs text-text-secondary">Conversions</div>
          </div>
          <div className="text-center p-3 bg-background rounded-interactive">
            <div className="text-lg font-bold text-secondary">-{project.metrics.costReduction}%</div>
            <div className="text-xs text-text-secondary">Coûts</div>
          </div>
        </div>

        {/* Campaign Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Type de campagne:</span>
            <span className="text-text-primary font-medium">{project.campaignType}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Budget mensuel:</span>
            <span className="text-text-primary font-medium">{project.budget}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Durée:</span>
            <span className="text-text-primary font-medium">{project.duration}</span>
          </div>
        </div>

        {/* Revenue Highlight */}
        <div className="bg-gradient-to-r from-accent/10 to-warning/10 rounded-interactive p-3 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-text-primary">Revenus générés</span>
            <span className="text-lg font-bold text-accent">{project.metrics.revenue}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="w-full bg-primary text-surface py-3 rounded-interactive font-medium hover:bg-secondary transition-all duration-micro ease-micro hover-scale focus-visible flex items-center justify-center space-x-2"
        >
          <span>Voir l'étude de cas</span>
          <Icon name="ArrowRight" size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;