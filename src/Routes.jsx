import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import HeroLandingPage from "pages/hero-landing-page";
import InteractiveExperienceTimeline from "pages/interactive-experience-timeline";
import SkillsExpertiseShowcase from "pages/skills-expertise-showcase";
import ProjectPortfolioCaseStudies from "pages/project-portfolio-case-studies";
import ContactConversionHub from "pages/contact-conversion-hub";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<HeroLandingPage />} />
          <Route path="/hero-landing-page" element={<HeroLandingPage />} />
          <Route path="/interactive-experience-timeline" element={<InteractiveExperienceTimeline />} />
          <Route path="/skills-expertise-showcase" element={<SkillsExpertiseShowcase />} />
          <Route path="/project-portfolio-case-studies" element={<ProjectPortfolioCaseStudies />} />
          <Route path="/contact-conversion-hub" element={<ContactConversionHub />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;