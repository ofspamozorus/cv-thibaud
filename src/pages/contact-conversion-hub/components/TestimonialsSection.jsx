// src/pages/contact-conversion-hub/components/TestimonialsSection.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';
import AppImage from 'components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      role: 'CTO',
      company: 'TechInnovate Paris',
      image: '/assets/images/client-testimonial-1.jpg',
      rating: 5,
      quote: "Thibaud delivered exceptional results for our e-commerce platform. His attention to detail and technical expertise exceeded our expectations. The project was completed on time and within budget.",
      project: 'E-commerce Platform',
      result: '+150% conversion rate'
    },
    {
      id: 2,
      name: 'Pierre Martin',
      role: 'Founder',
      company: 'StartupLab Lyon',
      image: '/assets/images/client-testimonial-2.jpg',
      rating: 5,
      quote: "Working with Thibaud was a game-changer for our startup. He understood our vision perfectly and created a web application that our users love. Highly recommended for any serious project.",
      project: 'SaaS Web Application',
      result: '10x user engagement'
    },
    {
      id: 3,
      name: 'Sophie Laurent',
      role: 'Marketing Director',
      company: 'DigitalFlow Agency',
      image: '/assets/images/client-testimonial-3.jpg',
      rating: 5,
      quote: "Thibaud\'s expertise in React and modern web technologies helped us launch our client portal ahead of schedule. His communication throughout the project was excellent.",
      project: 'Client Portal Dashboard',
      result: '40% time savings'
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={`${index < rating ? 'text-warning' : 'text-border'} fill-current`}
      />
    ));
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
          What Clients Say
        </h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Main Testimonial Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-surface rounded-lg shadow-card p-8 lg:p-12"
            >
              {/* Quote */}
              <div className="text-center mb-8">
                <Icon name="Quote" size={48} className="text-secondary/20 mx-auto mb-6" />
                <blockquote className="text-lg lg:text-xl text-text-primary leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="relative w-16 h-16 mr-4">
                    <AppImage
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-text-primary text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-text-secondary">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-secondary font-medium">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>

                {/* Project Results */}
                <div className="text-center md:text-right">
                  <div className="bg-gradient-to-r from-success/10 to-secondary/10 rounded-lg p-4 border border-success/20">
                    <p className="text-sm text-text-secondary mb-1">
                      {testimonials[currentTestimonial].project}
                    </p>
                    <p className="font-bold text-success text-lg">
                      {testimonials[currentTestimonial].result}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-10 h-10 bg-surface shadow-card rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-10 h-10 bg-surface shadow-card rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-secondary ${
                index === currentTestimonial
                  ? 'bg-secondary scale-125' :'bg-border hover:bg-secondary/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-text-secondary hover:text-secondary transition-colors flex items-center mx-auto"
          >
            <Icon 
              name={isAutoPlaying ? 'Pause' : 'Play'} 
              size={16} 
              className="mr-2" 
            />
            {isAutoPlaying ? 'Pause' : 'Play'} slideshow
          </button>
        </div>
      </div>

      {/* Additional Trust Elements */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 grid md:grid-cols-3 gap-8"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Users" size={32} className="text-success" />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-2">50+ Happy Clients</h3>
          <p className="text-text-secondary">Businesses trust us with their digital transformation</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Award" size={32} className="text-secondary" />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-2">98% Success Rate</h3>
          <p className="text-text-secondary">Projects delivered on time and within budget</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Star" size={32} className="text-warning" />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-2">5-Star Rating</h3>
          <p className="text-text-secondary">Consistently rated excellent by our clients</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;