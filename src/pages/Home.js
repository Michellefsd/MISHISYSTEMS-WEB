import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import Banner from '../components/Banner';
import Card from '../components/Card';
import ServicesData from './ServiceData';
import "./Home.css";
import "./Services.css";


const Home = () => {
  const navigate = useNavigate();

  // Asegura el scroll al inicio cuando el componente se monta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      <Hero 
        titulo="Soluciones Digitales para Empresas en Crecimiento" 
        parrafo="En MishiSystems, transformamos negocios mediante soluciones digitales personalizadas."
        backgroundImage="/images/hero_banner.png"
      />

      {/* Testimonios */}
      <div className="testimonials-container">
        <Testimonial 
          imgSrc="./images/claudio_siebel.png" 
          altText="Claudio Siebel" 
          testimonial="Contratamos a Mishi Systems para el desarrollo de nuestro canal digital sobre Hubspot. Su compromiso, tanto en los alcances, como en los tiempos, fueron impecables. Altamente recomendable."          
          name="Claudio Siebel" 
          company="T2Company"
          rol="Director" 
        />
        <Testimonial 
          imgSrc="./images/santiago-dominguez.png" 
          altText="Santiago Dominguez" 
          testimonial="Tuve el placer de trabajar con Mishi Systems quienes demostraron ser profesionales totalmente organizados y comprometidos. Su dedicación al proyecto fue total, cumpliendo con todas las entregas y solicitudes en cada etapa. Siempre mostraron una actitud proactiva, dispuesta a colaborar y a encontrar formas de mejorar los resultados. Sin dudas recomiendo sus servicios." 
          name="Santiago Dominguez" 
          company="T2Company"
          rol="Gerente de Marketing" 
        />
        <Testimonial 
          imgSrc="./images/raul-piaggio.png" 
          altText="Raul Piaggio" 
          testimonial="Con Mishi Systems hemos mejorado la implementación de algunos proyectos en la web, se destaco la creatividad a la hora de resolver problemas, incorporaron fácilmente herramientas nuevas. Han mostrado mucha dedicación, seriedad y tenacidad. Ha sido un placer trabajar con esta empresa y tiene mi recomendación." 
          name="Raul Piaggio" 
          company="RPiaggio" 
          rol="Director"  
        />
      </div>
      {/* Servicios */}
      <div className="services-container">
        <h1 className="services-title">Nuestros Servicios</h1>
        <div className="card-grid">
          {ServicesData.map((service, index) => (
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
      <Banner logoSrc={'/images/isologotipio.png'} />
    </div>
  );
};

export default Home;
