import React from 'react';
import { useNavigate } from 'react-router-dom';
import servicesData from './ServiceData';
import Hero from '../components/Hero';
import Card from '../components/Card';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Hero
        className="margin-title"
        titulo="Servicios que impulsan tu empresa"
        parrafo="Conoce nuestros Servicios y sus distintos casos de uso."
        backgroundImage="/images/services.jpg"
        height="50vh"
        backgroundPosition="center"
      />

      <div className="services-container">
        <h1 className="services-title">Nuestros Servicios</h1>
        <div className="card-grid">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              buttonLabel={service.buttonLabel}
              imageSrc={service.imageSrc}
              onButtonClick={() => navigate(`/services/${service.serviceKey}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
