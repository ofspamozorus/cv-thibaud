import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from 'components/ui/NavigationBar';
import ScrollProgressIndicator from 'components/ui/ScrollProgressIndicator';
import ContactCTA from 'components/ui/ContactCTA';



import PlatformCard from './components/PlatformCard';
import SkillFilter from './components/SkillFilter';
import AchievementBadges from './components/AchievementBadges';
import Icon from 'components/AppIcon';

const SkillsExpertiseShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertification, setSelectedCertification] = useState(null);

  const skillCategories = [
    { id: 'all', label: 'Toutes les compétences', icon: 'Grid3X3' },
    { id: 'paid-media', label: 'Paid Media', icon: 'Target' },
    { id: 'analytics', label: 'Analytics', icon: 'BarChart3' },
    { id: 'tools', label: 'Outils', icon: 'Settings' },
    { id: 'strategy', label: 'Stratégie', icon: 'Lightbulb' }
  ];

  const coreSkills = [
    {
      id: 'google-ads',
      name: 'Google Ads',
      category: 'paid-media',
      proficiency: 95,
      experience: '5+ ans',
      description: 'Gestion complète des campagnes Search, Display, Shopping et YouTube',
      features: ['Optimisation des enchères', 'Ciblage d\'audience', 'Tests créatifs', 'Analyse des performances'],
      certifications: ['Google Ads Search', 'Google Ads Display', 'Google Shopping'],
      results: '€2.5M+ de revenus générés',
      color: 'from-blue-500 to-blue-600',
      icon: 'Search'
    },
    {
      id: 'meta-ads',
      name: 'Meta Ads',
      category: 'paid-media',
      proficiency: 92,
      experience: '4+ ans',
      description: 'Expertise Facebook & Instagram Ads avec focus sur l\'e-commerce',
      features: ['Pixel tracking', 'Lookalike audiences', 'Dynamic ads', 'Conversion optimization'],
      certifications: ['Meta Certified Media Buying Professional'],
      results: '150%+ d\'amélioration ROAS',
      color: 'from-blue-600 to-purple-600',
      icon: 'Users'
    },
    {
      id: 'tiktok-ads',
      name: 'TikTok Ads',
      category: 'paid-media',
      proficiency: 88,
      experience: '2+ ans',
      description: 'Spécialiste des campagnes créatives pour la génération Z',
      features: ['Spark Ads', 'Creative optimization', 'Audience insights', 'Performance tracking'],
      certifications: ['TikTok Marketing Science Certification'],
      results: '300%+ d\'engagement généré',
      color: 'from-pink-500 to-red-500',
      icon: 'Video'
    },
    {
      id: 'google-analytics',
      name: 'Google Analytics 4',
      category: 'analytics',
      proficiency: 90,
      experience: '5+ ans',
      description: 'Configuration avancée et analyse des données comportementales',
      features: ['Event tracking', 'Custom dimensions', 'Attribution modeling', 'Audience building'],
      certifications: ['Google Analytics Individual Qualification'],
      results: '40%+ d\'amélioration du tracking',
      color: 'from-orange-500 to-red-500',
      icon: 'TrendingUp'
    },
    {
      id: 'google-tag-manager',
      name: 'Google Tag Manager',
      category: 'analytics',
      proficiency: 85,
      experience: '3+ ans',
      description: 'Implémentation et gestion des tags sans développement',
      features: ['Tag configuration', 'Trigger setup', 'Variable management', 'Debug mode'],
      certifications: ['Google Tag Manager Fundamentals'],
      results: '60%+ de réduction du temps d\'implémentation',
      color: 'from-green-500 to-blue-500',
      icon: 'Code'
    },
    {
      id: 'data-studio',
      name: 'Looker Studio',
      category: 'analytics',
      proficiency: 87,
      experience: '4+ ans',
      description: 'Création de dashboards interactifs et rapports automatisés',
      features: ['Data visualization', 'Custom metrics', 'Automated reporting', 'Data blending'],
      certifications: ['Google Data Studio Certification'],
      results: '50+ dashboards créés',
      color: 'from-purple-500 to-pink-500',
      icon: 'PieChart'
    },
    {
      id: 'excel-sheets',
      name: 'Excel / Google Sheets',
      category: 'tools',
      proficiency: 93,
      experience: '6+ ans',
      description: 'Analyse de données avancée et modélisation financière',
      features: ['Pivot tables', 'VLOOKUP/INDEX', 'Macros', 'Data validation'],
      certifications: ['Microsoft Excel Expert'],
      results: '100+ modèles d\'analyse créés',
      color: 'from-green-600 to-green-700',
      icon: 'FileSpreadsheet'
    },
    {
      id: 'conversion-optimization',
      name: 'Optimisation des Conversions',
      category: 'strategy',
      proficiency: 89,
      experience: '4+ ans',
      description: 'A/B testing et optimisation du funnel de conversion',
      features: ['Landing page optimization', 'A/B testing', 'User journey mapping', 'CRO audits'],
      certifications: ['Google Optimize Certification'],
      results: '25%+ d\'amélioration du taux de conversion',
      color: 'from-yellow-500 to-orange-500',
      icon: 'Target'
    }
  ];

  const achievements = [
    {
      id: 'revenue-master',
      title: 'Revenue Master',
      description: '€2M+ de revenus générés',
      icon: 'TrendingUp',
      color: 'from-green-500 to-emerald-600',
      unlocked: true
    },
    {
      id: 'certification-expert',
      title: 'Certification Expert',
      description: '10+ certifications obtenues',
      icon: 'Award',
      color: 'from-blue-500 to-blue-600',
      unlocked: true
    },
    {
      id: 'platform-master',
      title: 'Platform Master',
      description: 'Expert sur 5+ plateformes',
      icon: 'Star',
      color: 'from-purple-500 to-purple-600',
      unlocked: true
    },
    {
      id: 'roas-optimizer',
      title: 'ROAS Optimizer',
      description: '150%+ d\'amélioration ROAS',
      icon: 'Zap',
      color: 'from-yellow-500 to-orange-500',
      unlocked: true
    }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? coreSkills 
    : coreSkills.filter(skill => skill.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = document.querySelectorAll('[data-skill-id]');
    skillElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredSkills]);

  const handleCertificationClick = (certification, skill) => {
    setSelectedCertification({ ...certification, skillName: skill.name });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertification(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <ScrollProgressIndicator />
      <ContactCTA />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Icon name="Zap" size={16} />
                  <span>Expertise Technique Avancée</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-surface mb-6">
                  Compétences &
                  <span className="block text-accent">Expertise</span>
                </h1>
                <p className="text-xl text-surface/80 max-w-3xl mx-auto leading-relaxed">
                  Découvrez mes compétences techniques en paid media, analytics et optimisation des performances. 
                  Plus de 5 ans d'expérience avec des résultats mesurables et des certifications reconnues.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 text-surface/60"
              >
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={20} />
                  <span>10+ Certifications</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={20} />
                  <span>€2M+ Revenus Générés</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Target" size={20} />
                  <span>5+ Plateformes Maîtrisées</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Filter */}
        <section className="py-8 bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SkillFilter 
              categories={skillCategories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </section>

        {/* Achievement Badges */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Réalisations & Badges
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Mes accomplissements et certifications qui témoignent de mon expertise
              </p>
            </motion.div>

            <AchievementBadges achievements={achievements} />
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Compétences Techniques
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Expertise approfondie dans les plateformes de paid media et les outils d'analyse
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-skill-id={skill.id}
                  id={skill.id}
                >
                  <PlatformCard 
                    skill={skill}
                    isVisible={visibleSkills.has(skill.id)}
                    onCertificationClick={handleCertificationClick}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Summary */}
        <section className="py-16 bg-gradient-to-br from-background to-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Une expertise qui fait la différence
                </h2>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  Mon approche combine expertise technique approfondie et vision stratégique pour maximiser 
                  les performances de vos campagnes paid media. Chaque compétence acquise contribue à 
                  l'optimisation globale de vos investissements publicitaires.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" size={14} color="white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Approche Data-Driven</h3>
                      <p className="text-text-secondary">Décisions basées sur l'analyse approfondie des données</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" size={14} color="white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Optimisation Continue</h3>
                      <p className="text-text-secondary">Tests A/B permanents et amélioration des performances</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" size={14} color="white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">ROI Maximisé</h3>
                      <p className="text-text-secondary">Focus sur la rentabilité et l'efficacité des investissements</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-surface rounded-2xl p-8 shadow-card"
              >
                <h3 className="text-xl font-bold text-primary mb-6">Résultats Clés</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Revenus générés</span>
                    <span className="text-2xl font-bold text-accent">€2.5M+</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Amélioration ROAS</span>
                    <span className="text-2xl font-bold text-success">+150%</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Taux de conversion</span>
                    <span className="text-2xl font-bold text-secondary">+25%</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Campagnes gérées</span>
                    <span className="text-2xl font-bold text-primary">500+</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <button
                    onClick={() => {
                      const contactSection = document.getElementById('contact-conversion-hub');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full bg-accent hover:bg-warning text-surface px-6 py-3 rounded-interactive font-medium transition-all duration-micro ease-micro hover-scale focus-visible"
                  >
                    Discutons de vos objectifs
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Certification Modal */}
      {isModalOpen && selectedCertification && (
        <div className="fixed inset-0 z-modal bg-primary/50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-surface rounded-2xl p-6 max-w-md w-full shadow-interactive"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-primary">Certification</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-background rounded-interactive transition-colors focus-visible"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-warning rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} color="white" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">
                {selectedCertification.skillName}
              </h4>
              <p className="text-text-secondary">
                Certification officielle validant l'expertise sur cette plateforme
              </p>
            </div>
            
            <button
              onClick={closeModal}
              className="w-full bg-accent hover:bg-warning text-surface px-4 py-2 rounded-interactive font-medium transition-all duration-micro ease-micro"
            >
              Fermer
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SkillsExpertiseShowcase;