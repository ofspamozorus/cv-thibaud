// src/pages/contact-conversion-hub/components/ContactOptions.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';

const ContactOptions = () => {
  const contactMethods = [
    {
      type: 'primary',
      icon: 'Calendar',
      title: 'Schedule a Call',
      description: 'Book a free 30-min consultation',
      action: 'Schedule Now',
      link: 'https://calendly.com/thibaud-portfolio',
      highlight: true
    },
    {
      type: 'secondary',
      icon: 'Linkedin',
      title: 'LinkedIn',
      description: 'Connect professionally',
      action: 'Connect',
      link: 'https://linkedin.com/in/thibaud-portfolio'
    },
    {
      type: 'secondary',
      icon: 'Mail',
      title: 'Direct Email',
      description: 'thibaud@portfolio.com',
      action: 'Send Email',
      link: 'mailto:thibaud@portfolio.com'
    },
    {
      type: 'secondary',
      icon: 'Phone',
      title: 'Phone',
      description: '+33 1 23 45 67 89',
      action: 'Call Now',
      link: 'tel:+33123456789'
    }
  ];

  const additionalActions = [
    {
      icon: 'Download',
      title: 'Download CV',
      description: 'Get my complete resume (PDF)',
      action: () => {
        // Track CV download
        if (typeof gtag !== 'undefined') {
          gtag('event', 'cv_download', {
            event_category: 'Contact',
            event_label: 'CV Download'
          });
        }
        // Simulate CV download
        const link = document.createElement('a');
        link.href = '/assets/cv/thibaud-portfolio-cv.pdf';
        link.download = 'Thibaud-Portfolio-CV.pdf';
        link.click();
      }
    },
    {
      icon: 'Github',
      title: 'View GitHub',
      description: 'Check out my code repositories',
      link: 'https://github.com/thibaud-portfolio'
    }
  ];

  const handleContactClick = (method) => {
    // Track contact method usage
    if (typeof gtag !== 'undefined') {
      gtag('event', 'contact_method_click', {
        event_category: 'Contact',
        event_label: method.title
      });
    }

    if (method.link) {
      window.open(method.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="space-y-6">
      {/* Primary Contact Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-surface rounded-lg p-6 shadow-card"
      >
        <h3 className="text-lg font-semibold text-primary mb-4">Get In Touch</h3>
        <div className="space-y-3">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleContactClick(method)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                method.highlight
                  ? 'border-secondary bg-secondary/5 hover:bg-secondary/10' :'border-border hover:border-secondary/30 hover:bg-background'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    method.highlight ? 'bg-secondary text-white' : 'bg-background'
                  }`}>
                    <Icon 
                      name={method.icon} 
                      size={20} 
                      className={method.highlight ? 'text-white' : 'text-secondary'} 
                    />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      method.highlight ? 'text-secondary' : 'text-text-primary'
                    }`}>
                      {method.title}
                    </h4>
                    <p className="text-sm text-text-secondary">{method.description}</p>
                  </div>
                </div>
                <Icon 
                  name="ExternalLink" 
                  size={16} 
                  className="text-text-secondary" 
                />
              </div>
              {method.highlight && (
                <div className="mt-3 flex items-center text-xs text-secondary">
                  <Icon name="Star" size={14} className="mr-1" />
                  <span>Most popular option</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-surface rounded-lg p-6 shadow-card"
      >
        <h3 className="text-lg font-semibold text-primary mb-4">Resources</h3>
        <div className="space-y-3">
          {additionalActions.map((action, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 rounded-lg border border-border hover:border-secondary/30 hover:bg-background cursor-pointer transition-all"
              onClick={() => {
                if (action.action) {
                  action.action();
                } else if (action.link) {
                  window.open(action.link, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center mr-3">
                    <Icon name={action.icon} size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{action.title}</h4>
                    <p className="text-sm text-text-secondary">{action.description}</p>
                  </div>
                </div>
                <Icon name="Download" size={16} className="text-text-secondary" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-r from-primary to-secondary rounded-lg p-6 text-white"
      >
        <div className="text-center">
          <Icon name="MessageCircle" size={32} className="mx-auto mb-3 text-white/90" />
          <h3 className="text-lg font-semibold mb-2">Ready to Start?</h3>
          <p className="text-white/90 text-sm mb-4">
            Let's discuss your project and see how we can work together.
          </p>
          <Button
            variant="outline"
            className="bg-white text-primary border-white hover:bg-white/90"
            onClick={() => {
              const contactForm = document.querySelector('#contact-hero');
              contactForm?.scrollIntoView({ behavior: 'smooth' });
            }}
            iconName="ArrowUp"
          >
            Back to Form
          </Button>
        </div>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-surface rounded-lg p-6 shadow-card"
      >
        <h3 className="text-lg font-semibold text-primary mb-4 text-center">Follow Me</h3>
        <div className="flex justify-center space-x-4">
          {[
            { name: 'Github', icon: 'Github', link: 'https://github.com/thibaud-portfolio' },
            { name: 'Linkedin', icon: 'Linkedin', link: 'https://linkedin.com/in/thibaud-portfolio' },
            { name: 'Twitter', icon: 'Twitter', link: 'https://twitter.com/thibaud_portfolio' }
          ].map((social, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-background rounded-full flex items-center justify-center border border-border hover:border-secondary/50 hover:bg-secondary/5 transition-all"
            >
              <Icon name={social.icon} size={20} className="text-text-secondary hover:text-secondary" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactOptions;