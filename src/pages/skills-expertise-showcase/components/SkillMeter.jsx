import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const SkillMeter = ({ 
  skill, 
  proficiency, 
  isVisible = false, 
  size = 'md',
  showLabel = true,
  className = ""
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-20 h-20',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  const strokeWidths = {
    sm: 4,
    md: 6,
    lg: 8,
    xl: 10
  };

  const radius = {
    sm: 28,
    md: 34,
    lg: 40,
    xl: 54
  };

  const circumference = 2 * Math.PI * radius[size];
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedValue / 100) * circumference;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedValue(proficiency);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, proficiency]);

  const getColorClass = (value) => {
    if (value >= 90) return 'text-success';
    if (value >= 80) return 'text-accent';
    if (value >= 70) return 'text-warning';
    return 'text-secondary';
  };

  const getStrokeColor = (value) => {
    if (value >= 90) return '#10B981';
    if (value >= 80) return '#F59E0B';
    if (value >= 70) return '#F59E0B';
    return '#3B82F6';
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        <svg
          className="transform -rotate-90 w-full h-full"
          viewBox={`0 0 ${radius[size] * 2 + strokeWidths[size]} ${radius[size] * 2 + strokeWidths[size]}`}
        >
          {/* Background circle */}
          <circle
            cx={radius[size] + strokeWidths[size] / 2}
            cy={radius[size] + strokeWidths[size] / 2}
            r={radius[size]}
            stroke="currentColor"
            strokeWidth={strokeWidths[size]}
            fill="transparent"
            className="text-border"
          />
          
          {/* Progress circle */}
          <motion.circle
            cx={radius[size] + strokeWidths[size] / 2}
            cy={radius[size] + strokeWidths[size] / 2}
            r={radius[size]}
            stroke={getStrokeColor(proficiency)}
            strokeWidth={strokeWidths[size]}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ 
              strokeDashoffset: isVisible ? strokeDashoffset : circumference 
            }}
            transition={{ 
              duration: 1.5, 
              ease: "easeOut",
              delay: 0.2
            }}
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: isVisible ? 1 : 0, 
              scale: isVisible ? 1 : 0.5 
            }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className={`text-lg md:text-xl font-bold ${getColorClass(proficiency)}`}>
              {animatedValue}%
            </div>
          </motion.div>
        </div>
      </div>
      
      {showLabel && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            y: isVisible ? 0 : 10 
          }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-3 text-center"
        >
          <h3 className="font-semibold text-primary text-sm md:text-base">
            {skill}
          </h3>
        </motion.div>
      )}
    </div>
  );
};

export default SkillMeter;