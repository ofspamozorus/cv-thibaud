import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavigationBar from 'components/ui/NavigationBar';
import ContactCTA from 'components/ui/ContactCTA';
import ScrollProgressIndicator from 'components/ui/ScrollProgressIndicator';
import TimelineCard from './components/TimelineCard';
import FilterTabs from './components/FilterTabs';
import SkillProgressChart from './components/SkillProgressChart';
import StatisticsDisplay from './components/StatisticsDisplay';
import Icon from 'components/AppIcon';


const InteractiveExperienceTimeline = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const experienceData = [
    {
      id: 1,
      company: "Digital Growth Agency",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      position: "Senior Traffic Manager",
      duration: "Jan 2022 - Présent",
      period: "2+ ans",
      location: "Paris, France",
      type: "CDI",
      platforms: ["Google Ads", "Meta Ads", "TikTok Ads"],
      industries: ["E-commerce", "SaaS", "Lead Generation"],
      achievements: [
        "Augmentation du ROAS moyen de 340% sur un portefeuille de 15 comptes",
        "Gestion d'un budget publicitaire mensuel de 250K€",
        "Réduction du CPA de 45% grâce à l'optimisation des audiences",
        "Formation et encadrement de 3 traffic managers juniors"
      ],
      metrics: {
        budget: "250K€/mois",
        roas: "+340%",
        cpa: "-45%",
        accounts: "15 comptes"
      },
      skills: ["Google Ads", "Meta Ads", "TikTok Ads", "Analytics", "Conversion Tracking"],
      description: `En tant que Senior Traffic Manager, je pilote les stratégies d'acquisition payante pour un portefeuille diversifié de clients. Mon expertise couvre l'ensemble de l'écosystème publicitaire digital, de la stratégie à l'exécution, en passant par l'analyse des performances.

Mon approche data-driven me permet d'identifier les opportunités d'optimisation et de maximiser le retour sur investissement publicitaire. Je travaille en étroite collaboration avec les équipes créatives et les clients pour développer des campagnes performantes et scalables.`,
      technologies: ["Google Ads Editor", "Meta Business Manager", "TikTok Ads Manager", "Google Analytics 4", "Looker Studio"],
      isActive: true
    },
    {
      id: 2,
      company: "Performance Marketing Studio",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop&crop=center",
      position: "Traffic Manager",
      duration: "Mar 2020 - Déc 2021",
      period: "1 an 10 mois",
      location: "Lyon, France",
      type: "CDI",
      platforms: ["Google Ads", "Meta Ads"],
      industries: ["E-commerce", "Retail"],
      achievements: [
        "Développement de 8 comptes e-commerce avec un ROAS moyen de 4.2",
        "Mise en place de stratégies d'automatisation réduisant le temps de gestion de 30%","Certification Google Ads et Meta Blueprint obtenues","Collaboration sur 25+ projets de lancement produit"
      ],
      metrics: {
        budget: "120K€/mois",roas: "4.2x",automation: "+30%",projects: "25+ projets"
      },
      skills: ["Google Ads", "Meta Ads", "Shopping Campaigns", "Remarketing", "Audience Building"],
      description: `Dans ce poste, j'ai développé mon expertise en gestion de campagnes publicitaires pour des clients e-commerce. J'ai appris à maîtriser les subtilités des différentes plateformes publicitaires et à adapter les stratégies selon les objectifs business.

Cette expérience m'a permis de comprendre l'importance de l'automatisation et de l'optimisation continue pour maintenir des performances élevées sur le long terme.`,
      technologies: ["Google Ads", "Meta Business Manager", "Google Analytics", "Hotjar", "Klaviyo"],
      isActive: false
    },
    {
      id: 3,
      company: "StartUp Growth Lab",logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=center",position: "Digital Marketing Specialist",duration: "Sep 2019 - Fév 2020",period: "6 mois",location: "Remote",type: "Freelance",
      platforms: ["Google Ads", "Meta Ads"],
      industries: ["SaaS", "Tech Startups"],
      achievements: [
        "Lancement de 12 campagnes d'acquisition pour des startups tech",
        "Génération de 500+ leads qualifiés avec un coût moyen de 25€",
        "Mise en place du tracking et des entonnoirs de conversion",
        "Collaboration avec des équipes produit pour optimiser les landing pages"
      ],
      metrics: {
        campaigns: "12 campagnes",
        leads: "500+ leads",
        cpl: "25€ CPL",
        conversion: "+65%"
      },
      skills: ["Lead Generation", "Conversion Optimization", "A/B Testing", "Landing Pages", "CRO"],
      description: `Cette mission freelance m'a permis de travailler avec des startups en phase de croissance, où chaque euro investi doit être optimisé. J'ai développé une approche très analytique et une capacité d'adaptation rapide aux besoins changeants.

L'environnement startup m'a appris l'importance de la vélocité et de l'expérimentation continue pour identifier les leviers de croissance les plus efficaces.`,
      technologies: ["Google Ads", "Facebook Ads", "Unbounce", "Mixpanel", "Segment"],
      isActive: false
    },
    {
      id: 4,
      company: "Media Agency Pro",
      logo: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=100&h=100&fit=crop&crop=center",
      position: "Junior Traffic Manager",
      duration: "Jan 2019 - Août 2019",
      period: "8 mois",
      location: "Marseille, France",
      type: "Stage puis CDI",
      platforms: ["Google Ads"],
      industries: ["Local Business", "Services"],
      achievements: [
        "Gestion de 20+ comptes Google Ads pour des PME locales",
        "Amélioration moyenne du CTR de 25% sur l'ensemble du portefeuille",
        "Formation intensive sur les fondamentaux du marketing digital",
        "Développement d'une expertise en campagnes locales et géociblage"
      ],
      metrics: {
        accounts: "20+ comptes",
        ctr: "+25%",
        budget: "50K€/mois",
        local: "100% local"
      },
      skills: ["Google Ads", "Local Campaigns", "Keyword Research", "Ad Copywriting", "Bid Management"],
      description: `Mon premier poste dans le marketing digital m'a permis de découvrir l'univers de la publicité en ligne. J'ai appris les fondamentaux de Google Ads et développé une compréhension approfondie des mécaniques d'enchères et d'optimisation.Cette expérience fondatrice m'a donné les bases solides sur lesquelles j'ai construit toute mon expertise actuelle en marketing digital.`,
      technologies: ["Google Ads", "Google Analytics", "Google My Business", "Search Console", "Keyword Planner"],
      isActive: false
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'Toutes les expériences', icon: 'Briefcase' },
    { id: 'Google Ads', label: 'Google Ads', icon: 'Search' },
    { id: 'Meta Ads', label: 'Meta Ads', icon: 'Users' },
    { id: 'TikTok Ads', label: 'TikTok Ads', icon: 'Video' },
    { id: 'E-commerce', label: 'E-commerce', icon: 'ShoppingCart' },
    { id: 'SaaS', label: 'SaaS', icon: 'Cloud' }
  ];

  const overallStats = {
    totalExperience: "5+ années",
    budgetManaged: "2M€+",
    averageROAS: "4.8x",
    clientsServed: "50+",
    campaignsLaunched: "200+",
    certifications: "8 certifications"
  };

  const skillEvolution = [
    { year: '2019', googleAds: 30, metaAds: 20, tiktokAds: 0, analytics: 25, strategy: 20 },
    { year: '2020', googleAds: 60, metaAds: 55, tiktokAds: 0, analytics: 50, strategy: 45 },
    { year: '2021', googleAds: 80, metaAds: 75, tiktokAds: 30, analytics: 70, strategy: 65 },
    { year: '2022', googleAds: 90, metaAds: 85, tiktokAds: 60, analytics: 85, strategy: 80 },
    { year: '2023', googleAds: 95, metaAds: 90, tiktokAds: 80, analytics: 90, strategy: 90 }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredExperiences = experienceData.filter(exp => {
    if (activeFilter === 'all') return true;
    return exp.platforms.includes(activeFilter) || exp.industries.includes(activeFilter);
  });

  const handleCardExpand = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <ContactCTA />
      <ScrollProgressIndicator />

      {/* Hero Section */}
      <section id="interactive-experience-timeline" className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                <Icon name="Clock" size={16} className="mr-2" />
                5+ années d'expertise
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Mon Parcours
              <span className="block text-secondary">Professionnel</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Découvrez mon évolution dans l'univers du marketing digital, des premiers pas aux responsabilités actuelles. 
              Chaque étape a contribué à forger mon expertise en acquisition payante.
            </motion.p>

            <motion.div variants={itemVariants}>
              <StatisticsDisplay stats={overallStats} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FilterTabs
            options={filterOptions}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Timeline */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-primary hidden md:block" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFilter}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {filteredExperiences.map((experience, index) => (
                      <TimelineCard
                        key={experience.id}
                        experience={experience}
                        index={index}
                        isExpanded={expandedCard === experience.id}
                        onExpand={() => handleCardExpand(experience.id)}
                        isLast={index === filteredExperiences.length - 1}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Skills Evolution Chart */}
                <div className="bg-surface rounded-interactive p-6 shadow-card border border-border">
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <Icon name="TrendingUp" size={20} className="mr-2 text-secondary" />
                    Évolution des Compétences
                  </h3>
                  <SkillProgressChart data={skillEvolution} />
                </div>

                {/* Key Achievements */}
                <div className="bg-surface rounded-interactive p-6 shadow-card border border-border">
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <Icon name="Award" size={20} className="mr-2 text-accent" />
                    Réalisations Clés
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-text-secondary">
                        <span className="font-medium text-primary">2M€+</span> de budget publicitaire géré
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-text-secondary">
                        <span className="font-medium text-primary">ROAS moyen de 4.8x</span> sur l'ensemble des comptes
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-text-secondary">
                        <span className="font-medium text-primary">50+ clients</span> accompagnés vers le succès
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-text-secondary">
                        <span className="font-medium text-primary">8 certifications</span> professionnelles obtenues
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-interactive p-6 border border-accent/20">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Intéressé par mon profil ?
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Discutons de vos besoins en acquisition payante et de la façon dont mon expertise peut contribuer à votre croissance.
                  </p>
                  <button
                    onClick={() => {
                      const contactSection = document.getElementById('contact-conversion-hub');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full bg-accent hover:bg-warning text-surface px-4 py-2 rounded-interactive font-medium transition-all duration-micro ease-micro hover-scale focus-visible"
                  >
                    Prendre contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Section CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Découvrez mes Compétences Techniques
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Explorez en détail mon expertise sur les différentes plateformes publicitaires et outils marketing.
          </p>
          <button
            onClick={() => {
              const skillsSection = document.getElementById('skills-expertise-showcase');
              if (skillsSection) {
                skillsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-surface px-6 py-3 rounded-interactive font-medium transition-all duration-micro ease-micro hover-scale focus-visible"
          >
            Voir mes compétences
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default InteractiveExperienceTimeline;