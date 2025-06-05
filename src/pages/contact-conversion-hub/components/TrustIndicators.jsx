// src/pages/contact-conversion-hub/components/TrustIndicators.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const TrustIndicators = () => {
  const certifications = [
    {
      name: 'Google Cloud Certified',
      icon: 'Award',
      year: '2024'
    },
    {
      name: 'AWS Solutions Architect',
      icon: 'Shield',
      year: '2023'
    },
    {
      name: 'React Advanced Certification',
      icon: 'Star',
      year: '2024'
    }
  ];

  const guarantees = [
    {
      icon: 'Clock',
      title: '24h Response',
      description: 'Quick response to all inquiries'
    },
    {
      icon: 'Shield',
      title: '100% Confidential',
      description: 'Your data is completely secure'
    },
    {
      icon: 'CheckCircle',
      title: 'Quality Guaranteed',
      description: 'Satisfaction or money back'
    },
    {
      icon: 'Users',
      title: '50+ Happy Clients',
      description: 'Trusted by businesses worldwide'
    }
  ];

  const clientLogos = [
    'TechCorp', 'InnovateX', 'DigitalFlow', 'StartupLab', 'CloudWorks'
  ];

  return (
    <div className="space-y-8">
      {/* Response Time Commitment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-success/10 to-secondary/10 rounded-lg p-6 border border-success/20"
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mr-4">
            <Icon name="Clock" size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Quick Response Guaranteed</h3>
            <p className="text-text-secondary">We respond to all inquiries within 24 hours</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-secondary">Average response time:</span>
          <span className="font-semibold text-success">4 hours</span>
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-surface rounded-lg p-6 shadow-card"
      >
        <h3 className="text-lg font-semibold text-primary mb-4">Certifications & Credentials</h3>
        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg">
              <div className="flex items-center">
                <Icon name={cert.icon} size={20} className="text-secondary mr-3" />
                <span className="font-medium text-text-primary">{cert.name}</span>
              </div>
              <span className="text-sm text-text-secondary">{cert.year}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Trust Guarantees */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-surface rounded-lg p-6 shadow-card"
      >
        <h3 className="text-lg font-semibold text-primary mb-4">Why Choose Us?</h3>
        <div className="grid grid-cols-2 gap-4">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Icon name={guarantee.icon} size={20} className="text-secondary" />
              </div>
              <h4 className="font-semibold text-text-primary text-sm mb-1">{guarantee.title}</h4>
              <p className="text-xs text-text-secondary">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Client Logos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-surface rounded-lg p-6 shadow-card"
      >
        <h3 className="text-lg font-semibold text-primary mb-4 text-center">Trusted By</h3>
        <div className="grid grid-cols-2 gap-3">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-3 text-center border border-border hover:border-secondary/30 transition-colors"
            >
              <span className="text-sm font-medium text-text-secondary">{logo}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Performance Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/10"
      >
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">98%</div>
            <div className="text-xs text-text-secondary">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-secondary">50+</div>
            <div className="text-xs text-text-secondary">Projects Delivered</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-success">5★</div>
            <div className="text-xs text-text-secondary">Average Rating</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TrustIndicators;