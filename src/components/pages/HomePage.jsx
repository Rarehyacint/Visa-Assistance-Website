import React from 'react';
import HeroSection from '../home/HeroSection';
import ServicesBar from '../home/ServicesBar';
import Destinations from '../home/Destinations';
import BeyondVisa from '../home/BeyondVisa';
import ProcessSteps from '../home/ProcessSteps';
import Pricing from '../home/Pricing';
import Testimonials from '../home/Testimonials';

export default function HomePage({
  onStartApplication,
  onViewDestinations,
  onSelectVisa,
  onSelectDestination,
  onSelectService,
  onSelectPlan
}) {
  return (
    <>
      <HeroSection
        onStartApplication={onStartApplication}
        onViewDestinations={onViewDestinations}
      />
      <ServicesBar onSelectVisa={onSelectVisa} />
      <Destinations onSelectDestination={onSelectDestination} />
      <BeyondVisa onSelectService={onSelectService} />
      <ProcessSteps onStartStep={onStartApplication} />
      <Pricing onSelectPlan={onSelectPlan} />
      <Testimonials />
    </>
  );
}