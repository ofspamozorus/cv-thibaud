// src/pages/contact-conversion-hub/components/ConsultationProcess.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const ConsultationProcess = () => {
  const processSteps = [
    {
      step: 1,
      icon: 'MessageCircle',
      title: 'Initial Contact',
      description: 'Reach out via form, email, or schedule a call',
      duration: '5 minutes',
      details: [
        'Quick response within 24 hours',
        'Basic project discussion',
        'Initial compatibility check'
      ]
    },
    {
      step: 2,
      icon: 'Calendar',
      title: 'Discovery Call',
      description: 'Free 30-minute consultation to understand your needs',
      duration: '30 minutes',
      details: [
        'Deep dive into your requirements',
        'Technical feasibility assessment',
        'Timeline and budget discussion'
      ]
    },
    {
      step: 3,
      icon: 'FileText',
      title: 'Proposal & Planning',
      description: 'Detailed project proposal with timeline and pricing',
      duration: '2-3 days',
      details: [
        'Comprehensive project breakdown',
        'Technology stack recommendations',
        'Milestone-based timeline'
      ]
    },
    {
      step: 4,
      icon: 'Handshake',
      title: 'Agreement',
      description: 'Finalize terms and begin the development process',
      duration: '1 day',
      details: [
        'Contract signing',
        'Payment schedule setup',
        'Project kickoff meeting'
      ]
    },
    {
      step: 5,
      icon: 'Rocket',
      title: 'Development',
      description: 'Agile development with regular updates and reviews',
      duration: 'Project length',
      details: [
        'Weekly progress updates',
        'Regular milestone reviews',
        'Continuous client feedback'
      ]
    },
    {
      step: 6,
      icon: 'CheckCircle',
      title: 'Launch & Support',
      description: 'Project delivery with ongoing support and maintenance',
      duration: 'Ongoing',
      details: [
        'Smooth project deployment',
        'Training and documentation',
        'Post-launch support available'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How long does the initial consultation take?',
      answer: 'The initial consultation is a free 30-minute call where we discuss your project requirements, goals, and how we can help you achieve them.'
    },
    {
      question: 'What happens after I submit the contact form?',
      answer: 'You\'ll receive a confirmation email immediately, and I\'ll personally respond within 24 hours to schedule our initial consultation call.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes! I work with clients worldwide. I\'m based in France but available for calls across different time zones to accommodate your schedule.'
    },
    {
      question: 'What if my project requirements change during development?',
      answer: 'I use an agile development approach that allows for flexibility. We can adapt to changing requirements through our regular review cycles.'
    }
  ];

  const [openFaq, setOpenFaq] = React.useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
          How We Work Together
        </h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Our proven consultation process ensures your project success from start to finish.
        </p>
      </motion.div>

      {/* Process Steps */}
      <div className="relative max-w-6xl mx-auto mb-16">
        {/* Process Line */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-primary to-success"></div>

        <div className="space-y-8 lg:space-y-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <div className="bg-surface rounded-lg shadow-card p-6 lg:p-8 hover:shadow-interactive transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Icon name={step.icon} size={24} className="text-secondary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                        <span className="text-sm text-text-secondary bg-background px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-text-secondary mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-text-secondary">
                            <Icon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Number Circle */}
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-surface border-4 border-secondary rounded-full items-center justify-center shadow-card">
                <span className="text-secondary font-bold text-lg">{step.step}</span>
              </div>

              {/* Mobile Step Number */}
              <div className="lg:hidden absolute -left-2 top-6 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{step.step}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-text-secondary">
            Have questions about our process? Here are some common answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="bg-surface rounded-lg shadow-card overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-inset"
              >
                <h4 className="text-lg font-semibold text-primary pr-4">{faq.question}</h4>
                <Icon
                  name={openFaq === index ? 'ChevronUp' : 'ChevronDown'}
                  size={20}
                  className="text-text-secondary flex-shrink-0"
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openFaq === index ? 'auto' : 0,
                  opacity: openFaq === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 lg:p-12"
      >
        <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
          Ready to Get Started?
        </h3>
        <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
          Let's schedule your free consultation and begin transforming your digital vision into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactForm = document.querySelector('#contact-hero');
              contactForm?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors inline-flex items-center justify-center"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Start Your Project
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://calendly.com/thibaud-portfolio', '_blank')}
            className="bg-surface border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors inline-flex items-center justify-center"
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Schedule Call
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ConsultationProcess;