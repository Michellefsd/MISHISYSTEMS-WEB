import React from 'react';
import Hero from '../components/Hero';
import Description from '../components/DescriptionService';
import CaseStudies from '../components/CaseStudies';
import Benefits from '../components/Benefits';
import Button from '../components/Button';
import servicesData from './ServiceData';

const Service = ({ serviceKey }) => {
  const service = servicesData.find((s) => s.serviceKey === serviceKey);

  if (!service) {
      return <p>Servicio no encontrado</p>;
    }

  return (
    <div className="service-page">
      <Hero titulo={service.Hero.titulo} height={service.Hero.height} image={service.Hero.backgroundImage} parrafo={service.Hero.parrafo} backgroundPosition={service.Hero.backgroundPosition} />
      <Description text={service.description} />
      <CaseStudies cases={service.cases} />
      <Benefits title="Beneficios" benefits={service.benefits} />
      <Button />
    </div>
  );
};

export default Service;