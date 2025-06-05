import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const AchievementBadges = ({ 
  achievements, 
  className = ""
}) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 ${className}`}>
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.id}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          className={`
            relative bg-surface rounded-2xl p-6 text-center shadow-card 
            hover:shadow-interactive transition-all duration-micro ease-micro
            border border-border group cursor-pointer
            ${achievement.unlocked ? '' : 'opacity-60 grayscale'}
          `}
          title={achievement.description}
        >
          {/* Badge Icon */}
          <div className={`
            w-16 h-16 mx-auto mb-4 rounded-full 
            bg-gradient-to-br ${achievement.color} 
            flex items-center justify-center
            shadow-card group-hover:shadow-interactive
            transition-all duration-micro ease-micro
          `}>
            <Icon 
              name={achievement.icon} 
              size={28} 
              color="white" 
            />
          </div>

          {/* Badge Title */}
          <h3 className="font-bold text-primary text-sm md:text-base mb-2">
            {achievement.title}
          </h3>

          {/* Badge Description */}
          <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
            {achievement.description}
          </p>

          {/* Unlock Status */}
          {achievement.unlocked && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center shadow-card"
            >
              <Icon name="Check" size={14} color="white" />
            </motion.div>
          )}

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-micro ease-micro" />
        </motion.div>
      ))}
    </div>
  );
};

export default AchievementBadges;