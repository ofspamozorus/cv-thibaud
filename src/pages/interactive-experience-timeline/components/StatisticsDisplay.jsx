import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const StatisticsDisplay = ({ stats }) => {
  const statisticsData = [
    {
      key: 'totalExperience',
      label: 'Expérience',
      value: stats.totalExperience,
      icon: 'Clock',
      color: 'text-secondary'
    },
    {
      key: 'budgetManaged',
      label: 'Budget géré',
      value: stats.budgetManaged,
      icon: 'DollarSign',
      color: 'text-success'
    },
    {
      key: 'averageROAS',
      label: 'ROAS moyen',
      value: stats.averageROAS,
      icon: 'TrendingUp',
      color: 'text-accent'
    },
    {
      key: 'clientsServed',
      label: 'Clients accompagnés',
      value: stats.clientsServed,
      icon: 'Users',
      color: 'text-primary'
    },
    {
      key: 'campaignsLaunched',
      label: 'Campagnes lancées',
      value: stats.campaignsLaunched,
      icon: 'Zap',
      color: 'text-warning'
    },
    {
      key: 'certifications',
      label: 'Certifications',
      value: stats.certifications,
      icon: 'Award',
      color: 'text-error'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
    >
      {statisticsData.map((stat) => (
        <motion.div
          key={stat.key}
          variants={itemVariants}
          className="bg-surface rounded-interactive p-4 text-center shadow-card border border-border hover:shadow-interactive transition-all duration-micro ease-micro hover-scale"
        >
          <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-background mb-3 ${stat.color}`}>
            <Icon name={stat.icon} size={20} />
          </div>
          <div className="text-lg font-bold text-primary mb-1">
            {stat.value}
          </div>
          <div className="text-xs text-text-secondary font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatisticsDisplay;