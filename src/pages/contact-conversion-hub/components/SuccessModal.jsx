// src/pages/contact-conversion-hub/components/SuccessModal.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';

const SuccessModal = ({ isOpen, onClose, submissionData }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getExpectedResponseTime = () => {
    const now = new Date();
    const isWorkingHours = now.getHours() >= 9 && now.getHours() <= 18;
    const isWeekday = now.getDay() >= 1 && now.getDay() <= 5;

    if (isWorkingHours && isWeekday) {
      return 'within 4 hours';
    } else if (isWeekday) {
      return 'by tomorrow morning';
    } else {
      return 'by Monday morning';
    }
  };

  const getInquiryTypeMessage = () => {
    switch (submissionData?.inquiryType) {
      case 'consultation':
        return {
          title: 'Free Consultation Booked!',
          message: 'I\'ll prepare a customized consultation based on your requirements.'
        };
      case 'collaboration':
        return {
          title: 'Collaboration Inquiry Received!',
          message: 'I\'ll review your project details and prepare a comprehensive response.'
        };
      case 'employment':
        return {
          title: 'Employment Inquiry Received!',
          message: 'I\'ll review the opportunity and get back to you with my availability.'
        };
      default:
        return {
          title: 'Message Sent Successfully!',
          message: 'I\'ll review your inquiry and respond accordingly.'
        };
    }
  };

  const nextSteps = [
    {
      icon: 'Clock',
      title: 'Quick Response',
      description: `Expect a personalized response ${getExpectedResponseTime()}`
    },
    {
      icon: 'Calendar',
      title: 'Schedule Meeting',
      description: 'We\'ll set up a call to discuss your project in detail'
    },
    {
      icon: 'FileText',
      title: 'Receive Proposal',
      description: 'Get a detailed project proposal with timeline and pricing'
    }
  ];

  const suggestedPages = [
    {
      title: 'View My Portfolio',
      description: 'Explore recent projects and case studies',
      icon: 'Briefcase',
      link: '/project-portfolio-case-studies'
    },
    {
      title: 'Skills & Expertise',
      description: 'Learn about my technical capabilities',
      icon: 'Code',
      link: '/skills-expertise-showcase'
    },
    {
      title: 'Experience Timeline',
      description: 'See my professional journey',
      icon: 'Clock',
      link: '/interactive-experience-timeline'
    }
  ];

  const { title, message } = getInquiryTypeMessage();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-modal bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-surface rounded-lg shadow-card w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-success to-secondary text-white p-6 rounded-t-lg">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Close modal"
              >
                <Icon name="X" size={16} className="text-white" />
              </button>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-white/90">{message}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Submission Summary */}
              <div className="bg-background rounded-lg p-4">
                <h3 className="font-semibold text-primary mb-3">Your Submission</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Name:</span>
                    <span className="text-text-primary font-medium">
                      {submissionData?.firstName} {submissionData?.lastName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Email:</span>
                    <span className="text-text-primary font-medium">{submissionData?.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Inquiry Type:</span>
                    <span className="text-text-primary font-medium capitalize">
                      {submissionData?.inquiryType?.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Submitted:</span>
                    <span className="text-text-primary font-medium">
                      {new Date(submissionData?.timestamp).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Expected Response */}
              <div className="text-center bg-gradient-to-r from-secondary/5 to-primary/5 rounded-lg p-6 border border-secondary/20">
                <Icon name="Clock" size={32} className="text-secondary mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Expected Response Time
                </h3>
                <p className="text-text-secondary mb-4">
                  You'll hear from me <strong className="text-secondary">{getExpectedResponseTime()}</strong>
                </p>
                <p className="text-sm text-text-secondary">
                  Reference ID: <code className="bg-background px-2 py-1 rounded text-xs">
                    {submissionData?.timestamp ? new Date(submissionData.timestamp).getTime().toString().slice(-6) : 'N/A'}
                  </code>
                </p>
              </div>

              {/* Next Steps */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  {nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={step.icon} size={20} className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary">{step.title}</h4>
                        <p className="text-text-secondary text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Content */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  While You Wait, Explore More
                </h3>
                <div className="grid gap-4">
                  {suggestedPages.map((page, index) => (
                    <motion.a
                      key={index}
                      href={page.link}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center p-4 bg-background rounded-lg border border-border hover:border-secondary/30 hover:bg-secondary/5 transition-all group"
                      onClick={onClose}
                    >
                      <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center mr-4 border border-border group-hover:border-secondary/30">
                        <Icon name={page.icon} size={20} className="text-text-secondary group-hover:text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-primary group-hover:text-secondary">
                          {page.title}
                        </h4>
                        <p className="text-text-secondary text-sm">{page.description}</p>
                      </div>
                      <Icon 
                        name="ExternalLink" 
                        size={16} 
                        className="text-text-secondary group-hover:text-secondary" 
                      />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={() => {
                    window.open('https://calendly.com/thibaud-portfolio', '_blank');
                    onClose();
                  }}
                  iconName="Calendar"
                >
                  Schedule Call Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  fullWidth
                  onClick={onClose}
                  iconName="ArrowLeft"
                >
                  Continue Browsing
                </Button>
              </div>

              {/* Social Links */}
              <div className="text-center pt-4 border-t border-border">
                <p className="text-text-secondary text-sm mb-4">
                  Connect with me on social media for updates and insights
                </p>
                <div className="flex justify-center space-x-4">
                  {[
                    { name: 'LinkedIn', icon: 'Linkedin', link: 'https://linkedin.com/in/thibaud-portfolio' },
                    { name: 'GitHub', icon: 'Github', link: 'https://github.com/thibaud-portfolio' },
                    { name: 'Twitter', icon: 'Twitter', link: 'https://twitter.com/thibaud_portfolio' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-background rounded-full flex items-center justify-center border border-border hover:border-secondary/50 hover:bg-secondary/5 transition-all"
                      aria-label={`Follow on ${social.name}`}
                    >
                      <Icon name={social.icon} size={18} className="text-text-secondary hover:text-secondary" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;