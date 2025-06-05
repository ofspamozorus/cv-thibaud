import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const TrustSignals = () => {
  const certifications = [
    {
      name: "Google Ads Certified",
      icon: "Award",
      description: "Certification officielle Google Ads",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Meta Blueprint",
      icon: "Shield",
      description: "Expert certifié Meta Business",
      color: "from-blue-600 to-purple-600"
    },
    {
      name: "TikTok Marketing",
      icon: "Star",
      description: "Spécialiste TikTok for Business",
      color: "from-pink-500 to-red-500"
    },
    {
      name: "Analytics Expert",
      icon: "BarChart3",
      description: "Google Analytics & Tag Manager",
      color: "from-green-500 to-blue-500"
    }
  ];

  const clientLogos = [
    {
      name: "TechCorp",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
      sector: "SaaS"
    },
    {
      name: "EcoShop",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
      sector: "E-commerce"
    },
    {
      name: "FinanceFlow",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=60&fit=crop",
      sector: "Fintech"
    },
    {
      name: "HealthPlus",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=120&h=60&fit=crop",
      sector: "Santé"
    },
    {
      name: "EduTech",
      logo: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=120&h=60&fit=crop",
      sector: "EdTech"
    },
    {
      name: "FoodDelivery",
      logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=120&h=60&fit=crop",
      sector: "Food & Beverage"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Directrice Marketing",
      company: "TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      content: `Thibaud a transformé nos campagnes Google Ads. Notre ROI a augmenté de 250% en 6 mois. Son expertise et sa réactivité sont exceptionnelles.`,
      rating: 5
    },
    {
      name: "Pierre Martin",
      role: "CEO",
      company: "EcoShop",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: `Grâce à Thibaud, nous avons réduit notre coût d'acquisition de 40% tout en doublant nos conversions. Un vrai expert en performance marketing.`,
      rating: 5
    },
    {
      name: "Sophie Laurent",
      role: "Growth Manager",
      company: "FinanceFlow",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      content: `L'approche data-driven de Thibaud nous a permis d'optimiser nos budgets publicitaires et d'atteindre nos objectifs de croissance.`,
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium">
            <Icon name="CheckCircle" size={16} className="mr-2" />
            Références & Certifications
          </span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
          La confiance de mes{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
            clients et partenaires
          </span>
        </motion.h2>

        <motion.p variants={itemVariants} className="text-xl text-text-secondary max-w-3xl mx-auto">
          Certifications officielles, témoignages clients et résultats prouvés qui attestent de mon expertise.
        </motion.p>
      </motion.div>

      {/* Certifications */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-20"
      >
        <motion.h3 variants={itemVariants} className="text-2xl font-bold text-primary text-center mb-12">
          Certifications Professionnelles
        </motion.h3>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-surface p-6 rounded-2xl shadow-card hover:shadow-interactive transition-all duration-micro ease-micro hover-scale border border-border"
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-micro ease-micro`}>
                  <Icon name={cert.icon} size={28} color="white" />
                </div>
                <h4 className="font-semibold text-primary mb-2">{cert.name}</h4>
                <p className="text-sm text-text-secondary">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Client Logos */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-20"
      >
        <motion.h3 variants={itemVariants} className="text-2xl font-bold text-primary text-center mb-12">
          Ils m'ont fait confiance
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group text-center"
            >
              <div className="bg-surface p-4 rounded-xl shadow-card hover:shadow-interactive transition-all duration-micro ease-micro hover-scale border border-border mb-2">
                <Image
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className="w-full h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-micro ease-micro"
                />
              </div>
              <div className="text-xs text-text-secondary">{client.sector}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h3 variants={itemVariants} className="text-2xl font-bold text-primary text-center mb-12">
          Ce qu'ils disent de mon travail
        </motion.h3>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-surface p-8 rounded-2xl shadow-card hover:shadow-interactive transition-all duration-micro ease-micro hover-scale border border-border"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-accent mr-1" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-text-secondary mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TrustSignals;