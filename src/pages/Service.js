import React from 'react';
import Hero from '../components/Hero';
import Description from '../components/DescriptionService';
import WhatWeOffer from '../components/WhatWeOffer';
import Benefits from '../components/Benefits';
import CaseStudies from '../components/CaseStudies';
import FAQ from '../components/FAQ';
import WhyChooseUs from '../components/WhyChooseUs';
import Approach from '../components/Approach';
import Button from '../components/Button';
import servicesData from '../pages/ServiceData';
import './Service.css';

const Service = ({ serviceKey }) => {
  const service = servicesData.find((s) => s.serviceKey === serviceKey);

  if (!service) {
    return <p>Servicio no encontrado</p>;
  }

  return (
    <div className="service-page">
      <Hero
        titulo={service.Hero.titulo}
        parrafo={service.Hero.parrafo}
        image={service.Hero.backgroundImage}
        height={service.Hero.height}
        backgroundPosition={service.Hero.backgroundPosition}
      />
      <div className="service-content">
        <Description text={service.description} />
        <WhatWeOffer offers={service.whatWeOffer} />
        <Benefits benefits={service.benefits} />
        <Approach text={service.approach} />
        <CaseStudies cases={service.caseStudies} />
        <WhyChooseUs reasons={service.whyChooseUs} />
        
      </div>
      <div className="service-cta">
        <Button label="Contáctanos" text="Contáctanos" />
      </div>
    </div>
  );
};

export default Service;
