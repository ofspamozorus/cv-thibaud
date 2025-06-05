// src/pages/contact-conversion-hub/components/GDPRNotice.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const GDPRNotice = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showFullPolicy, setShowFullPolicy] = useState(false);

  const dataCategories = [
    {
      category: 'Contact Information',
      items: ['Name', 'Email address', 'Phone number', 'Company name'],
      purpose: 'To respond to your inquiry and maintain professional communication'
    },
    {
      category: 'Project Information',
      items: ['Project description', 'Budget range', 'Timeline', 'Technical requirements'],
      purpose: 'To prepare accurate proposals and understand your needs'
    },
    {
      category: 'Communication Preferences',
      items: ['Newsletter subscription', 'Preferred contact method'],
      purpose: 'To respect your communication preferences and provide relevant updates'
    },
    {
      category: 'Technical Data',
      items: ['IP address', 'Browser information', 'Visit timestamps'],
      purpose: 'For security, analytics, and improving user experience'
    }
  ];

  const rights = [
    {
      right: 'Right to Access',
      description: 'Request a copy of all personal data we hold about you'
    },
    {
      right: 'Right to Rectification',
      description: 'Request correction of inaccurate or incomplete data'
    },
    {
      right: 'Right to Erasure',
      description: 'Request deletion of your personal data ("right to be forgotten")'
    },
    {
      right: 'Right to Portability',
      description: 'Request transfer of your data to another service provider'
    },
    {
      right: 'Right to Object',
      description: 'Object to processing of your data for marketing purposes'
    },
    {
      right: 'Right to Withdraw Consent',
      description: 'Withdraw consent at any time where processing is based on consent'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-16 bg-gradient-to-br from-primary/5 to-secondary/5 border-t border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact GDPR Notice */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-surface rounded-lg shadow-card p-6 lg:p-8 border border-primary/10"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-primary">
                    Privacy & Data Protection
                  </h3>
                  <div className="flex items-center text-sm text-success">
                    <Icon name="Shield" size={16} className="mr-1" />
                    <span>GDPR Compliant</span>
                  </div>
                </div>
                
                <p className="text-text-secondary leading-relaxed mb-4">
                  Your privacy is our priority. We process your personal data in accordance with the 
                  General Data Protection Regulation (GDPR) and French data protection laws. 
                  By contacting us, you consent to the processing of your data for the purpose of 
                  responding to your inquiry and potential business collaboration.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsExpanded(!isExpanded)}
                    iconName={isExpanded ? 'ChevronUp' : 'ChevronDown'}
                  >
                    {isExpanded ? 'Hide Details' : 'View Details'}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFullPolicy(true)}
                    iconName="FileText"
                  >
                    Full Privacy Policy
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open('mailto:privacy@thibaud-portfolio.com', '_blank')}
                    iconName="Mail"
                  >
                    Data Requests
                  </Button>
                </div>
              </div>
            </div>

            {/* Expanded Details */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-border overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Data We Collect */}
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                        <Icon name="Database" size={20} className="mr-2" />
                        Data We Collect
                      </h4>
                      <div className="space-y-4">
                        {dataCategories.map((category, index) => (
                          <div key={index} className="bg-background rounded-lg p-4">
                            <h5 className="font-medium text-text-primary mb-2">{category.category}</h5>
                            <ul className="text-sm text-text-secondary mb-2 space-y-1">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-center">
                                  <Icon name="Dot" size={12} className="mr-1 text-secondary" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <p className="text-xs text-text-secondary italic">
                              Purpose: {category.purpose}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Your Rights */}
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                        <Icon name="Users" size={20} className="mr-2" />
                        Your Rights
                      </h4>
                      <div className="space-y-3">
                        {rights.map((right, index) => (
                          <div key={index} className="bg-background rounded-lg p-4">
                            <h5 className="font-medium text-text-primary mb-1">{right.right}</h5>
                            <p className="text-sm text-text-secondary">{right.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Data Retention & Security */}
                  <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <div className="bg-background rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-primary mb-3 flex items-center">
                        <Icon name="Clock" size={20} className="mr-2" />
                        Data Retention
                      </h4>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="mr-2 text-success mt-0.5 flex-shrink-0" />
                          <span>Contact inquiries: Kept for 3 years for business purposes</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="mr-2 text-success mt-0.5 flex-shrink-0" />
                          <span>Newsletter subscribers: Until unsubscription</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="mr-2 text-success mt-0.5 flex-shrink-0" />
                          <span>Analytics data: Anonymized after 26 months</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-primary mb-3 flex items-center">
                        <Icon name="Lock" size={20} className="mr-2" />
                        Security Measures
                      </h4>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="mr-2 text-success mt-0.5 flex-shrink-0" />
                          <span>SSL encryption for data transmission</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="mr-2 text-success mt-0.5 flex-shrink-0" />
                          <span>Secure hosting with regular backups</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="mr-2 text-success mt-0.5 flex-shrink-0" />
                          <span>Regular security audits and updates</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Contact for Privacy */}
                  <div className="mt-6 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg p-6 border border-secondary/20">
                    <h4 className="text-lg font-semibold text-primary mb-3">Questions About Your Data?</h4>
                    <p className="text-text-secondary mb-4">
                      For any privacy-related questions, data requests, or to exercise your rights, contact our 
                      Data Protection Officer:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => window.open('mailto:privacy@thibaud-portfolio.com', '_blank')}
                        iconName="Mail"
                      >
                        privacy@thibaud-portfolio.com
                      </Button>
                      <span className="text-sm text-text-secondary self-center">
                        Response within 72 hours
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Full Privacy Policy Modal */}
      <AnimatePresence>
        {showFullPolicy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-modal bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowFullPolicy(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-surface rounded-lg shadow-card w-full max-w-4xl max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h3 className="text-xl font-semibold text-primary">Privacy Policy</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFullPolicy(false)}
                  iconName="X"
                />
              </div>
              <div className="p-6 overflow-y-auto max-h-[60vh] text-sm text-text-secondary leading-relaxed">
                <div className="space-y-6">
                  <section>
                    <h4 className="text-lg font-semibold text-primary mb-3">1. Data Controller</h4>
                    <p>
                      Thibaud Portfolio ("we", "our", "us") is the data controller responsible for your personal data. 
                      You can contact us at privacy@thibaud-portfolio.com for any privacy-related inquiries.
                    </p>
                  </section>
                  
                  <section>
                    <h4 className="text-lg font-semibold text-primary mb-3">2. Legal Basis for Processing</h4>
                    <p>
                      We process your personal data based on:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Your consent for marketing communications</li>
                      <li>Legitimate interests for business inquiries and website analytics</li>
                      <li>Contract performance for project delivery</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h4 className="text-lg font-semibold text-primary mb-3">3. Data Sharing</h4>
                    <p>
                      We do not sell, trade, or rent your personal data. We may share information with:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Service providers (hosting, analytics) under strict data processing agreements</li>
                      <li>Legal authorities when required by law</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h4 className="text-lg font-semibold text-primary mb-3">4. International Transfers</h4>
                    <p>
                      Your data is primarily processed within the EU. Any transfers outside the EU are protected 
                      by appropriate safeguards such as Standard Contractual Clauses.
                    </p>
                  </section>
                  
                  <section>
                    <h4 className="text-lg font-semibold text-primary mb-3">5. Updates to This Policy</h4>
                    <p>
                      We may update this privacy policy from time to time. We will notify you of any 
                      significant changes by email or through our website.
                    </p>
                  </section>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default GDPRNotice;