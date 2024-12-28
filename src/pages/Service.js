import React, { useEffect } from 'react';
import Heroku from '../components/Heroku';
import Description from '../components/DescriptionService';
import WhatWeOffer from '../components/WhatWeOffer';
import Benefits from '../components/Benefits';
import CaseStudies from '../components/CaseStudies';
import WhyChooseUs from '../components/WhyChooseUs';
import Approach from '../components/Approach';
import Button from '../components/Button';
import servicesData from '../pages/ServiceData';
import './Service.css';
import BackArrow from '../components/Arrow';

const Service = ({ serviceKey }) => {
  const service = servicesData.find((s) => s.serviceKey === serviceKey);

  // Asegura el scroll al inicio cuando el componente se monta
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll al top
  }, []);

  if (!service) {
    return <p>Servicio no encontrado</p>;
  }

  return (
    <div className="service-page">
      <Heroku
        titulo={service.Hero.titulo}
        parrafo={service.Hero.parrafo}
      />
      <BackArrow />

      <div className="service-content">
        <Description text={service.descripcion} />

        {/* Benefits Section */}
        <div className="benefits-section">
          <Benefits title="Nuestros Beneficios" benefits={service.benefits} />
        </div>

        {/* What We Offer Section */}
        <div className="service-group">
          <WhatWeOffer offers={service.whatWeOffer} />
        </div>

        {/* Approach and Case Studies */}
        <div className="service-group">
          <Approach text={service.approach} />
          <CaseStudies cases={service.caseStudies} />
        </div>

        {/* Why Choose Us */}
        <div className="service-group">
          <WhyChooseUs reasons={service.whyChooseUs} />
        </div>

       {/* Call to Action */}
        <div className="service-cta">
          <Button text={service.callToAction.text}   onClick={() => window.location.href = `/contacto?service_id=${service.id}`
          }/>
        </div>
      </div>
    </div>
  );
};

export default Service;
