import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const MetricsOverview = ({ projects }) => {
  // Calculate aggregate metrics
  const totalRevenue = projects.reduce((sum, project) => {
    const revenue = parseFloat(project.metrics.revenue.replace(/[€KM]/g, '').replace(',', '.'));
    const multiplier = project.metrics.revenue.includes('M') ? 1000000 : 1000;
    return sum + (revenue * multiplier);
  }, 0);

  const averageROAS = projects.reduce((sum, project) => sum + project.metrics.roas, 0) / projects.length;
  
  const averageConversionIncrease = projects.reduce((sum, project) => sum + project.metrics.conversionIncrease, 0) / projects.length;
  
  const averageCostReduction = projects.reduce((sum, project) => sum + project.metrics.costReduction, 0) / projects.length;

  const formatRevenue = (amount) => {
    if (amount >= 1000000) {
      return `€${(amount / 1000000).toFixed(1)}M`;
    }
    return `€${(amount / 1000).toFixed(0)}K`;
  };

  const metrics = [
    {
      icon: 'TrendingUp',
      label: 'Revenus totaux générés',
      value: formatRevenue(totalRevenue),
      description: 'Across all campaigns',
      color: 'text-accent'
    },
    {
      icon: 'Target',
      label: 'ROAS moyen',
      value: `${averageROAS.toFixed(1)}x`,
      description: 'Return on Ad Spend',
      color: 'text-success'
    },
    {
      icon: 'ArrowUp',
      label: 'Amélioration conversions',
      value: `+${Math.round(averageConversionIncrease)}%`,
      description: 'Moyenne sur tous projets',
      color: 'text-secondary'
    },
    {
      icon: 'ArrowDown',
      label: 'Réduction des coûts',
      value: `-${Math.round(averageCostReduction)}%`,
      description: 'Optimisation budgétaire',
      color: 'text-warning'
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Performance globale
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Un aperçu des résultats obtenus à travers l'ensemble de mes projets clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-interactive p-6 text-center hover:shadow-card transition-all duration-micro ease-micro hover-scale"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-interactive bg-gradient-to-br from-accent/20 to-secondary/20 mb-4`}>
                <Icon name={metric.icon} size={24} className={metric.color} />
              </div>
              
              <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                {metric.label}
              </h3>
              
              <p className="text-sm text-text-secondary">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-interactive p-8 text-surface text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Pourquoi ces résultats ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Icon name="Brain" size={32} className="mb-3 text-accent" />
              <h4 className="font-semibold mb-2">Approche Data-Driven</h4>
              <p className="text-sm opacity-90">Chaque décision basée sur l'analyse des données et les insights comportementaux</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Zap" size={32} className="mb-3 text-warning" />
              <h4 className="font-semibold mb-2">Optimisation Continue</h4>
              <p className="text-sm opacity-90">Tests A/B permanents et ajustements en temps réel pour maximiser les performances</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Users" size={32} className="mb-3 text-success" />
              <h4 className="font-semibold mb-2">Focus Client</h4>
              <p className="text-sm opacity-90">Compréhension approfondie des audiences et personnalisation des messages</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsOverview;