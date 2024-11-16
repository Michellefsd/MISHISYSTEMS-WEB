import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card'; 
import './Services.css';

const servicesData = [
  {
    title: 'Transformación Digital',
    description: 'Llevamos tu empresa al siguiente nivel mediante la implementación de soluciones digitales integrales. Optimizamos procesos, automatizamos tareas y mejoramos la eficiencia para que tu negocio crezca sin necesidad de aumentar personal.',
    buttonLabel: 'Más información',
    // backgroundColor: '#f8f9fa', 
    imageSrc: "/images/transformacion_digital.jpg",
  },
  {
    title: 'Creación de Páginas Web',
    description: 'Diseñamos páginas web personalizadas y orientadas a resultados, adaptadas a las necesidades específicas de tu negocio. Garantizamos una experiencia de usuario intuitiva y atractiva, con la flexibilidad de múltiples idiomas.',
    buttonLabel: 'Más información',
    // backgroundColor: '#e0f7fa',
    imageSrc: "/images/web-page.jpg",
  },
  {
    title: 'Integración de HubSpot',
    description: 'Aprovecha todo el potencial de HubSpot con nuestras integraciones a medida. Centraliza marketing, ventas y servicio al cliente, optimizando la conversión de leads.',
    buttonLabel: 'Más información',
    // backgroundColor: '#fff3e0',
    imageSrc: "/images/hubspot.png",
  },
  {
    title: 'Desarrollo de Contenido Tutorial',
    description: 'Creamos tutoriales en video para YouTube, proporcionando una guía clara y fácil de seguir para tus productos y servicios. Mejoramos la experiencia de tus clientes.',
    buttonLabel: 'Ver tutoriales',
    // backgroundColor: '#ffe0b2',
    imageSrc: "/images/tutorial.jpg",
  },
  {
    title: 'Contenido Multilingüe',
    description: 'Adaptamos tu contenido a múltiples idiomas, asegurando que tu mensaje llegue de manera clara y efectiva a una audiencia global.',
    buttonLabel: 'Ver más',
    imageSrc: "/images/services.jpg",
    // backgroundColor: '#c8e6c9', 
  }
];

const Services = () => {
  return (
    <div>
      <Hero 
        className="margin-title"
        titulo="Servicios que impulsan tu empresa"
        parrafo="Conoce nuestros Servicios y sus distintos casos de uso."
        backgroundImage="/images/services.jpg"
        height="50vh"
        backgroundPosition='center'
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
              backgroundColor={service.backgroundColor}
              imageSrc={service.imageSrc} 
              onButtonClick={() => alert(`${service.title} seleccionado`)} // Aquí puedes personalizar la acción del botón
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
