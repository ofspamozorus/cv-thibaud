import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavigationBar from 'components/ui/NavigationBar';
import ContactCTA from 'components/ui/ContactCTA';
import ScrollProgressIndicator from 'components/ui/ScrollProgressIndicator';
import Icon from 'components/AppIcon';

import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import FilterBar from './components/FilterBar';
import MetricsOverview from './components/MetricsOverview';

const ProjectPortfolioCaseStudies = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "E-commerce Fashion Brand Scale-Up",
      client: "ModaStyle",
      industry: "Fashion & Retail",
      platform: "Google Ads",
      campaignType: "Shopping & Search",
      budget: "€50,000/mois",
      duration: "12 mois",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      metrics: {
        roas: 4.2,
        conversionIncrease: 185,
        costReduction: 32,
        revenue: "€2.1M"
      },
      challenge: `ModaStyle, une marque de mode émergente, faisait face à une stagnation de ses ventes en ligne malgré un catalogue produit attractif. Leurs campagnes publicitaires généraient du trafic mais avec un taux de conversion faible et un coût d'acquisition client élevé.`,strategy: `Mise en place d'une stratégie omnicanale combinant Google Shopping, campagnes Search ciblées et remarketing dynamique. Optimisation des flux produits, segmentation audience avancée et tests A/B continus sur les créatives.`,
      implementation: `• Restructuration complète des campagnes Shopping avec segmentation par marge
• Mise en place du remarketing dynamique avec audiences personnalisées
• Optimisation des landing pages pour améliorer le Quality Score
• Tests A/B sur les extensions d'annonces et les call-to-actions`,
      results: `• ROAS passé de 2.1 à 4.2 en 6 mois
• Augmentation du chiffre d'affaires de 185%
• Réduction du CPA de 32%
• Expansion sur 3 nouveaux marchés européens`,
      testimonial: {
        text: "Thibaud a transformé notre approche du marketing digital. Ses stratégies data-driven ont propulsé notre croissance au-delà de nos espérances.",
        author: "Marie Dubois",
        position: "Directrice Marketing, ModaStyle"
      },
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "SaaS B2B Lead Generation Optimization",
      client: "TechFlow Solutions",
      industry: "Technology",
      platform: "LinkedIn Ads",
      campaignType: "Lead Generation",
      budget: "€25,000/mois",
      duration: "8 mois",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      metrics: {
        roas: 6.8,
        conversionIncrease: 240,
        costReduction: 45,
        revenue: "€1.7M"
      },
      challenge: `TechFlow Solutions, éditeur de logiciels B2B, peinait à générer des leads qualifiés malgré un produit innovant. Leur approche marketing traditionnelle ne permettait pas d'atteindre efficacement les décideurs dans leur secteur.`,strategy: `Développement d'une stratégie de lead generation multi-touch sur LinkedIn Ads, combinée à du retargeting intelligent et des campagnes de nurturing automatisées. Focus sur la qualification des prospects en amont.`,
      implementation: `• Création d'audiences lookalike basées sur les meilleurs clients
• Mise en place de campagnes de contenu pour éduquer le marché
• Développement de landing pages spécialisées par persona
• Intégration CRM pour un suivi précis du ROI`,
      results: `• Génération de 1,200+ leads qualifiés
• Taux de conversion lead-to-customer de 18%
• Réduction du coût par lead de 45%
• Pipeline commercial multiplié par 3`,
      testimonial: {
        text: "L\'expertise de Thibaud en B2B nous a permis de structurer notre acquisition client de manière scalable et rentable.",
        author: "Jean-Pierre Martin",
        position: "CEO, TechFlow Solutions"
      },
      gallery: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Restaurant Chain Local Marketing",
      client: "Bistro & Co",
      industry: "Food & Beverage",
      platform: "Meta Ads",
      campaignType: "Local Awareness",
      budget: "€15,000/mois",
      duration: "6 mois",
      thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      metrics: {
        roas: 5.1,
        conversionIncrease: 160,
        costReduction: 28,
        revenue: "€765K"
      },
      challenge: `Bistro & Co, chaîne de restaurants, cherchait à augmenter la fréquentation de ses 12 établissements tout en optimisant ses coûts marketing. La concurrence locale intense nécessitait une approche ciblée et créative.`,
      strategy: `Stratégie de marketing local hyper-ciblé utilisant la géolocalisation, les événements saisonniers et les habitudes de consommation. Création de contenu viral et campagnes de fidélisation client.`,
      implementation: `• Campagnes géolocalisées par restaurant avec rayons d'action optimisés
• Création de contenu vidéo engageant pour chaque établissement
• Mise en place de programmes de fidélité digitaux
• Tests créatifs continus avec optimisation automatique`,
      results: `• Augmentation de 160% du trafic en restaurant
• Croissance de 35% du panier moyen
• Taux d'engagement social multiplié par 4
• Expansion prévue de 5 nouveaux restaurants`,
      testimonial: {
        text: "Grâce à Thibaud, nous avons redécouvert le potentiel du marketing digital local. Nos restaurants n\'ont jamais été aussi fréquentés.",
        author: "Sophie Leroy",
        position: "Directrice Générale, Bistro & Co"
      },
      gallery: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Fitness App User Acquisition",
      client: "FitLife Pro",
      industry: "Health & Fitness",
      platform: "TikTok Ads",
      campaignType: "App Install",
      budget: "€30,000/mois",
      duration: "10 mois",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      metrics: {
        roas: 3.8,
        conversionIncrease: 320,
        costReduction: 38,
        revenue: "€1.14M"
      },
      challenge: `FitLife Pro, application de fitness, avait besoin d'acquérir massivement de nouveaux utilisateurs dans un marché saturé. Le défi était de se démarquer tout en maintenant un coût d'acquisition acceptable.`,strategy: `Exploitation de TikTok Ads pour toucher la génération Z et les millennials avec du contenu authentique et viral. Focus sur les micro-influenceurs et le user-generated content pour maximiser l'engagement.`,
      implementation: `• Collaboration avec 50+ micro-influenceurs fitness
• Création de challenges viraux liés à l'application• Optimisation des campagnes par cohortes d'âge et centres d'intérêt
• Tests créatifs rapides avec budget allocation dynamique`,
      results: `• 500K+ nouveaux utilisateurs acquis
• Taux de rétention J30 de 45%
• Coût d'acquisition réduit de 38%
• Classement Top 10 App Store catégorie Fitness`,
      testimonial: {
        text: "Thibaud a su capter l\'essence de notre marque et la traduire en campagnes TikTok percutantes qui ont boosté notre croissance.",
        author: "Alexandre Petit",
        position: "CMO, FitLife Pro"
      },
      gallery: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Luxury Travel Agency Premium Campaigns",
      client: "Prestige Voyages",
      industry: "Travel & Tourism",
      platform: "Google Ads",
      campaignType: "Search & Display",
      budget: "€40,000/mois",
      duration: "14 mois",
      thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      metrics: {
        roas: 7.2,
        conversionIncrease: 195,
        costReduction: 25,
        revenue: "€2.88M"
      },
      challenge: `Prestige Voyages, agence de voyages de luxe, souhaitait développer sa clientèle haut de gamme tout en maintenant son positionnement premium. Le défi était d'atteindre une audience exigeante avec des attentes élevées.`,
      strategy: `Stratégie premium multi-canal combinant Search haute intention, Display sur sites de luxe et remarketing sophistiqué. Emphasis sur la qualité plutôt que le volume, avec un focus sur la lifetime value client.`,
      implementation: `• Campagnes Search sur mots-clés premium haute valeur
• Partenariats Display avec médias lifestyle haut de gamme
• Remarketing segmenté par budget et destinations
• Landing pages ultra-personnalisées par type de voyage`,
      results: `• ROAS exceptionnel de 7.2
• Panier moyen augmenté de 65%
• Taux de conversion premium de 8.5%
• Expansion sur le marché américain`,
      testimonial: {
        text: "L\'approche raffinée de Thibaud correspond parfaitement à notre clientèle exigeante. Nos résultats parlent d\'eux-mêmes.",
        author: "Catherine Moreau",
        position: "Directrice, Prestige Voyages"
      },
      gallery: [
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      title: "EdTech Platform Student Acquisition",
      client: "LearnSmart Academy",
      industry: "Education",
      platform: "Meta Ads",
      campaignType: "Conversion",
      budget: "€20,000/mois",
      duration: "9 mois",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      metrics: {
        roas: 4.9,
        conversionIncrease: 275,
        costReduction: 42,
        revenue: "€980K"
      },
      challenge: `LearnSmart Academy, plateforme d'apprentissage en ligne, devait acquérir des étudiants dans un marché EdTech compétitif tout en prouvant la valeur de ses formations. Le défi était de convertir l'intérêt en inscriptions payantes.`,strategy: `Funnel d'acquisition progressif avec contenu éducatif gratuit, webinaires de démonstration et offres d'essai. Segmentation fine des audiences par niveau d'études et objectifs professionnels.`,
      implementation: `• Campagnes de contenu éducatif pour générer de l'intérêt• Webinaires automatisés avec remarketing post-participation• Tests A/B sur les offres d'essai et garanties
• Optimisation mobile pour les étudiants nomades`,
      results: `• 15,000+ nouveaux étudiants inscrits
• Taux de completion des cours de 78%
• Réduction du coût d'acquisition de 42%
• Expansion sur 5 nouvelles spécialisations`,
      testimonial: {
        text: "Thibaud a démocratisé l\'accès à nos formations grâce à des campagnes intelligentes qui touchent vraiment notre cible.",
        author: "Dr. Philippe Rousseau",
        position: "Fondateur, LearnSmart Academy"
      },
      gallery: [
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
      ]
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'Tous les projets', count: projects.length },
    { value: 'Google Ads', label: 'Google Ads', count: projects.filter(p => p.platform === 'Google Ads').length },
    { value: 'Meta Ads', label: 'Meta Ads', count: projects.filter(p => p.platform === 'Meta Ads').length },
    { value: 'LinkedIn Ads', label: 'LinkedIn Ads', count: projects.filter(p => p.platform === 'LinkedIn Ads').length },
    { value: 'TikTok Ads', label: 'TikTok Ads', count: projects.filter(p => p.platform === 'TikTok Ads').length },
    { value: 'E-commerce', label: 'E-commerce', count: projects.filter(p => p.industry.includes('Retail') || p.industry.includes('Fashion')).length },
    { value: 'B2B', label: 'B2B', count: projects.filter(p => p.industry.includes('Technology')).length },
    { value: 'Local', label: 'Local Business', count: projects.filter(p => p.industry.includes('Food')).length }
  ];

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (activeFilter === 'all') {
        setFilteredProjects(projects);
      } else if (activeFilter === 'E-commerce') {
        setFilteredProjects(projects.filter(p => p.industry.includes('Retail') || p.industry.includes('Fashion')));
      } else if (activeFilter === 'B2B') {
        setFilteredProjects(projects.filter(p => p.industry.includes('Technology')));
      } else if (activeFilter === 'Local') {
        setFilteredProjects(projects.filter(p => p.industry.includes('Food')));
      } else {
        setFilteredProjects(projects.filter(p => p.platform === activeFilter));
      }
      setIsLoading(false);
    }, 300);
  }, [activeFilter]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <ScrollProgressIndicator />
      <ContactCTA />

      {/* Hero Section */}
      <section id="project-portfolio-case-studies" className="pt-20 pb-16 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-surface"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Portfolio & Études de Cas
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              Découvrez comment j'ai aidé mes clients à transformer leurs investissements publicitaires en croissance mesurable et durable.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={20} />
                <span>+€8M de revenus générés</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Target" size={20} />
                <span>ROAS moyen de 5.2x</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={20} />
                <span>50+ clients satisfaits</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Overview */}
      <MetricsOverview projects={projects} />

      {/* Filter Bar */}
      <FilterBar 
        options={filterOptions}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="bg-surface rounded-interactive overflow-hidden shadow-card">
                    <div className="h-48 bg-gray-200 skeleton" />
                    <div className="p-6">
                      <div className="h-4 bg-gray-200 skeleton rounded mb-3" />
                      <div className="h-6 bg-gray-200 skeleton rounded mb-4" />
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-8 bg-gray-200 skeleton rounded" />
                        <div className="h-8 bg-gray-200 skeleton rounded" />
                        <div className="h-8 bg-gray-200 skeleton rounded" />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {filteredProjects.length === 0 && !isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Icon name="Search" size={48} className="mx-auto text-text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Aucun projet trouvé
              </h3>
              <p className="text-text-secondary">
                Essayez de modifier vos filtres pour voir plus de projets.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-accent to-warning">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface mb-6">
              Prêt à obtenir des résultats similaires ?
            </h2>
            <p className="text-xl text-surface/90 mb-8">
              Discutons de votre projet et voyons comment je peux vous aider à atteindre vos objectifs de croissance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact-conversion-hub');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-surface text-accent px-8 py-4 rounded-interactive font-semibold hover-scale focus-visible transition-all duration-micro ease-micro hover:shadow-lg"
              >
                Démarrer un projet
              </button>
              <button
                onClick={() => window.open('/assets/cv-thibaud-herbert.pdf', '_blank')}
                className="border-2 border-surface text-surface px-8 py-4 rounded-interactive font-semibold hover-scale focus-visible transition-all duration-micro ease-micro hover:bg-surface hover:text-accent"
              >
                Télécharger mon CV
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectPortfolioCaseStudies;