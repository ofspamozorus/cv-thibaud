import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: 'BarChart3' },
    { id: 'strategy', label: 'Stratégie', icon: 'Target' },
    { id: 'results', label: 'Résultats', icon: 'TrendingUp' },
    { id: 'gallery', label: 'Galerie', icon: 'Images' }
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleImageNavigation = (direction) => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => 
        prev === project.gallery.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.gallery.length - 1 : prev - 1
      );
    }
  };

  const handleDownloadBrief = () => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = '/assets/case-study-brief.pdf';
    link.download = `case-study-${project.client.toLowerCase().replace(/\s+/g, '-')}.pdf`;
    link.click();
  };

  const handleContactForSimilar = () => {
    onClose();
    const contactSection = document.getElementById('contact-conversion-hub');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-modal bg-primary/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-surface rounded-interactive max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-interactive"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary text-surface p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-accent text-surface px-3 py-1 rounded-full text-sm font-medium">
                  {project.platform}
                </span>
                <span className="bg-surface/20 text-surface px-3 py-1 rounded-full text-sm">
                  {project.industry}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                {project.title}
              </h2>
              <p className="text-lg opacity-90">{project.client}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-surface/20 rounded-interactive transition-colors duration-micro ease-micro focus-visible"
              aria-label="Fermer la modal"
            >
              <Icon name="X" size={24} />
            </button>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{project.metrics.roas}x</div>
              <div className="text-sm opacity-80">ROAS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">+{project.metrics.conversionIncrease}%</div>
              <div className="text-sm opacity-80">Conversions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">-{project.metrics.costReduction}%</div>
              <div className="text-sm opacity-80">Coûts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{project.metrics.revenue}</div>
              <div className="text-sm opacity-80">Revenus</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-border">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-micro ease-micro whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-accent border-b-2 border-accent bg-accent/5' :'text-text-secondary hover:text-text-primary hover:bg-background'
                }`}
              >
                <Icon name={tab.icon} size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Défi initial</h3>
                <p className="text-text-secondary leading-relaxed">{project.challenge}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Détails de la campagne</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Type:</span>
                      <span className="text-text-primary font-medium">{project.campaignType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Budget:</span>
                      <span className="text-text-primary font-medium">{project.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Durée:</span>
                      <span className="text-text-primary font-medium">{project.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background rounded-interactive p-4">
                  <h4 className="font-semibold text-text-primary mb-3">Témoignage client</h4>
                  <blockquote className="text-text-secondary italic mb-3">
                    "{project.testimonial.text}"
                  </blockquote>
                  <cite className="text-sm text-text-primary font-medium">
                    {project.testimonial.author}, {project.testimonial.position}
                  </cite>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'strategy' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Approche stratégique</h3>
                <p className="text-text-secondary leading-relaxed mb-6">{project.strategy}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-text-primary mb-3">Mise en œuvre</h4>
                <div className="bg-background rounded-interactive p-4">
                  <div className="whitespace-pre-line text-text-secondary leading-relaxed">
                    {project.implementation}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Résultats obtenus</h3>
                <div className="bg-gradient-to-r from-success/10 to-accent/10 rounded-interactive p-4 mb-6">
                  <div className="whitespace-pre-line text-text-primary leading-relaxed">
                    {project.results}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background rounded-interactive p-4">
                  <h4 className="font-semibold text-text-primary mb-3">Métriques clés</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">ROAS final</span>
                      <span className="text-xl font-bold text-accent">{project.metrics.roas}x</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Amélioration conversions</span>
                      <span className="text-xl font-bold text-success">+{project.metrics.conversionIncrease}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Réduction coûts</span>
                      <span className="text-xl font-bold text-secondary">-{project.metrics.costReduction}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Revenus totaux</span>
                      <span className="text-xl font-bold text-primary">{project.metrics.revenue}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-interactive p-4">
                  <h4 className="font-semibold text-text-primary mb-3">Impact business</h4>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <div className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-success" />
                      <span>Objectifs dépassés de 40%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-success" />
                      <span>ROI positif dès le 2ème mois</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-success" />
                      <span>Stratégie scalable validée</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-success" />
                      <span>Processus optimisés</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Aperçu des campagnes</h3>
              
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-4">
                  {/* Main Image */}
                  <div className="relative h-64 md:h-96 rounded-interactive overflow-hidden">
                    <Image
                      src={project.gallery[currentImageIndex]}
                      alt={`Campagne ${project.client} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Navigation Arrows */}
                    {project.gallery.length > 1 && (
                      <>
                        <button
                          onClick={() => handleImageNavigation('prev')}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-surface/90 hover:bg-surface p-2 rounded-full transition-all duration-micro ease-micro hover-scale focus-visible"
                          aria-label="Image précédente"
                        >
                          <Icon name="ChevronLeft" size={20} />
                        </button>
                        <button
                          onClick={() => handleImageNavigation('next')}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-surface/90 hover:bg-surface p-2 rounded-full transition-all duration-micro ease-micro hover-scale focus-visible"
                          aria-label="Image suivante"
                        >
                          <Icon name="ChevronRight" size={20} />
                        </button>
                      </>
                    )}
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 bg-surface/90 px-3 py-1 rounded-full text-sm font-medium">
                      {currentImageIndex + 1} / {project.gallery.length}
                    </div>
                  </div>
                  
                  {/* Thumbnail Navigation */}
                  {project.gallery.length > 1 && (
                    <div className="flex space-x-2 overflow-x-auto pb-2">
                      {project.gallery.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-interactive overflow-hidden transition-all duration-micro ease-micro ${
                            index === currentImageIndex
                              ? 'ring-2 ring-accent' :'opacity-70 hover:opacity-100'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Miniature ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="border-t border-border p-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDownloadBrief}
                className="flex items-center justify-center space-x-2 px-6 py-3 border border-border text-text-primary rounded-interactive hover:bg-background transition-all duration-micro ease-micro hover-scale focus-visible"
              >
                <Icon name="Download" size={18} />
                <span>Télécharger le brief</span>
              </button>
              <button
                onClick={() => window.open(`https://linkedin.com/in/thibaud-herbert`, '_blank')}
                className="flex items-center justify-center space-x-2 px-6 py-3 border border-border text-text-primary rounded-interactive hover:bg-background transition-all duration-micro ease-micro hover-scale focus-visible"
              >
                <Icon name="Share2" size={18} />
                <span>Partager</span>
              </button>
            </div>
            
            <button
              onClick={handleContactForSimilar}
              className="bg-accent text-surface px-6 py-3 rounded-interactive font-semibold hover:bg-warning transition-all duration-micro ease-micro hover-scale focus-visible flex items-center justify-center space-x-2"
            >
              <Icon name="MessageCircle" size={18} />
              <span>Projet similaire ?</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;