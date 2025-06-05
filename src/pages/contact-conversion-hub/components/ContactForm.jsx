// src/pages/contact-conversion-hub/components/ContactForm.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import Icon from 'components/AppIcon';

const ContactForm = ({ onSuccess, gtag }) => {
  const [inquiryType, setInquiryType] = useState('consultation');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue
  } = useForm({
    mode: 'onChange'
  });

  const watchedFields = watch();

  const inquiryTypes = [
  { value: 'consultation', label: 'Free Consultation', icon: 'MessageCircle' },
  { value: 'collaboration', label: 'Project Collaboration', icon: 'Users' },
  { value: 'employment', label: 'Employment Opportunity', icon: 'Briefcase' }];


  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }

      // Validate file type
      const allowedTypes = ['.pdf', '.doc', '.docx', '.txt'];
      const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));

      if (!allowedTypes.includes(fileExtension)) {
        alert('Please upload a PDF, DOC, DOCX, or TXT file');
        return;
      }

      setUploadedFile(file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setValue('projectBrief', null);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const submissionData = {
        ...data,
        inquiryType,
        uploadedFile: uploadedFile?.name,
        timestamp: new Date().toISOString()
      };

      // Track form submission for analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'Contact',
          event_label: inquiryType
        });
      }

      onSuccess?.(submissionData);
      reset();
      setUploadedFile(null);
      setInquiryType('consultation');

    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (fieldName) => {
    return errors?.[fieldName]?.message;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-surface rounded-lg shadow-card p-6 lg:p-8">

      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
          Start Your Project Journey
        </h2>
        <p className="text-text-secondary">
          Tell us about your vision and let's discuss how we can bring it to life.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Inquiry Type Selection */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-text-primary">
            What brings you here today? *
          </label>
          <div className="grid gap-3">
            {inquiryTypes.map((type) =>
            <motion.label
              key={type.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
              inquiryType === type.value ?
              'border-secondary bg-secondary/5' : 'border-border hover:border-secondary/50'}`
              }>

                <input
                type="radio"
                value={type.value}
                checked={inquiryType === type.value}
                onChange={(e) => setInquiryType(e.target.value)}
                className="sr-only" />

                <Icon
                name={type.icon}
                size={20}
                className={`mr-3 ${
                inquiryType === type.value ? 'text-secondary' : 'text-text-secondary'}`
                } />

                <span className={`font-medium ${
              inquiryType === type.value ? 'text-secondary' : 'text-text-primary'}`
              }>
                  {type.label}
                </span>
              </motion.label>
            )}
          </div>
        </div>

        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-text-primary">
              First Name *
            </label>
            <Input
              id="firstName"
              type="text"
              {...register('firstName', {
                required: 'First name is required',
                minLength: { value: 2, message: 'First name must be at least 2 characters' }
              })}
              className={`${getFieldError('firstName') ? 'border-error focus:ring-error' : ''}`}
              placeholder="Enter your first name" />

            {getFieldError('firstName') &&
            <p className="text-error text-xs mt-1">{getFieldError('firstName')}</p>
            }
          </div>

          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-text-primary">
              Last Name *
            </label>
            <Input
              id="lastName"
              type="text"
              {...register('lastName', {
                required: 'Last name is required',
                minLength: { value: 2, message: 'Last name must be at least 2 characters' }
              })}
              className={`${getFieldError('lastName') ? 'border-error focus:ring-error' : ''}`}
              placeholder="Enter your last name" />

            {getFieldError('lastName') &&
            <p className="text-error text-xs mt-1">{getFieldError('lastName')}</p>
            }
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-text-primary">
            Email Address *
          </label>
          <Input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address'
              }
            })}
            className={`${getFieldError('email') ? 'border-error focus:ring-error' : ''}`}
            placeholder="your.email@company.com" />

          {getFieldError('email') &&
          <p className="text-error text-xs mt-1">{getFieldError('email')}</p>
          }
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-text-primary">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            {...register('phone', {
              pattern: {
                value: /^[+]?[0-9\s\-\(\)]{10,}$/,
                message: 'Please enter a valid phone number'
              }
            })}
            className={`${getFieldError('phone') ? 'border-error focus:ring-error' : ''}`}
            placeholder="+33 1 23 45 67 89" />

          {getFieldError('phone') &&
          <p className="text-error text-xs mt-1">{getFieldError('phone')}</p>
          }
        </div>

        {/* Conditional Fields Based on Inquiry Type */}
        <AnimatePresence>
          {inquiryType === 'consultation' &&
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4">

              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-text-primary">
                  Company Name
                </label>
                <Input
                id="company"
                type="text"
                {...register('company')}
                placeholder="Your company name" />

              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="block text-sm font-medium text-text-primary">
                  Estimated Budget Range
                </label>
                <select
                {...register('budget')}
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">

                  <option value="">Select budget range</option>
                  <option value="5k-15k">€5,000 - €15,000</option>
                  <option value="15k-30k">€15,000 - €30,000</option>
                  <option value="30k-50k">€30,000 - €50,000</option>
                  <option value="50k+">€50,000+</option>
                  <option value="discuss">Let's discuss</option>
                </select>
              </div>
            </motion.div>
          }

          {inquiryType === 'employment' &&
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4">

              <div className="space-y-2">
                <label htmlFor="position" className="block text-sm font-medium text-text-primary">
                  Position Title
                </label>
                <Input
                id="position"
                type="text"
                {...register('position')}
                placeholder="e.g., Senior Frontend Developer" />

              </div>

              <div className="space-y-2">
                <label htmlFor="workType" className="block text-sm font-medium text-text-primary">
                  Work Arrangement
                </label>
                <select
                {...register('workType')}
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">

                  <option value="">Select work type</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="onsite">On-site</option>
                  <option value="freelance">Freelance/Contract</option>
                </select>
              </div>
            </motion.div>
          }
        </AnimatePresence>

        {/* Project Description */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-text-primary">
            Tell us about your project *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message', {
              required: 'Please tell us about your project',
              minLength: { value: 20, message: 'Please provide more details (minimum 20 characters)' }
            })}
            className={`w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-vertical ${
            getFieldError('message') ? 'border-error focus:ring-error' : ''}`
            }
            placeholder="Describe your project, goals, timeline, and any specific requirements..." />

          {getFieldError('message') &&
          <p className="text-error text-xs mt-1">{getFieldError('message')}</p>
          }
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-text-primary">
            Project Brief or Requirements (Optional)
          </label>
          {!uploadedFile ?
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-secondary/50 transition-colors">
              <Icon name="Upload" size={24} className="mx-auto text-text-secondary mb-2" />
              <p className="text-sm text-text-secondary mb-2">
                Drop your file here or click to browse
              </p>
              <p className="text-xs text-text-secondary mb-4">
                PDF, DOC, DOCX, TXT (Max 10MB)
              </p>
              <input
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleFileUpload}
              className="hidden"
              id="fileUpload" />

              <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => document.getElementById('fileUpload')?.click()}>

                Choose File
              </Button>
            </div> :

          <div className="border border-border rounded-lg p-4 bg-surface">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Icon name="FileText" size={20} className="text-secondary mr-2" />
                  <span className="text-sm font-medium text-text-primary">{uploadedFile.name}</span>
                </div>
                <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={removeFile}>

                  <Icon name="X" size={16} />
                </Button>
              </div>
              <p className="text-xs text-text-secondary mt-1">
                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          }
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <label htmlFor="timeline" className="block text-sm font-medium text-text-primary">
            Preferred Timeline
          </label>
          <select
            {...register('timeline')}
            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">

            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-2weeks">1-2 weeks</option>
            <option value="1month">Within 1 month</option>
            <option value="2-3months">2-3 months</option>
            <option value="6months+">6+ months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        {/* Privacy Consent */}
        <div className="space-y-3">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              {...register('privacy', {
                required: 'You must accept the privacy policy'
              })}
              className="mt-1 h-4 w-4 text-secondary border-border rounded focus:ring-secondary" />

            <span className="text-sm text-text-secondary leading-5">
              I agree to the processing of my personal data in accordance with the{' '}
              <button type="button" className="text-secondary hover:underline">
                Privacy Policy
              </button>{' '}
              and consent to being contacted regarding my inquiry. *
            </span>
          </label>
          {getFieldError('privacy') &&
          <p className="text-error text-xs">{getFieldError('privacy')}</p>
          }

          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              {...register('newsletter')}
              className="mt-1 h-4 w-4 text-secondary border-border rounded focus:ring-secondary" />

            <span className="text-sm text-text-secondary leading-5">
              I'd like to receive updates about new projects and insights (optional)
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={isSubmitting}
            disabled={isSubmitting}
            iconName="Send"
            className="font-semibold">

            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.div>

        <p className="text-xs text-text-secondary text-center">
          Expect a response within 24 hours • Free consultation included
        </p>
      </form>
    </motion.div>);

};

export default ContactForm;