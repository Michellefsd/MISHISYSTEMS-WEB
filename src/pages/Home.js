import React from 'react';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import "./Home.css";


const Home = () => {
  return (
    <div className="Home"> 
      <Hero 
        titulo="Soluciones Digitales para Empresas en Crecimiento" 
        parrafo="En MishiSystems, transformamos negocios mediante soluciones digitales personalizadas."
        backgroundImage="/images/hero_banner.png"
      />
      <div class="testimonials-container">
        <Testimonial 
         imgSrc='./images/claudio_siebel.png' 
         altText="Claudio Siebel" 
         testimonial="Estamos muy satisfechos con los resultados de mishi systems y su impacto en nuestra empresa fue puramente positivo" 
         name="Claudio Siebel" 
         company="T2Company"
         rol="Director" />

        <Testimonial 
         imgSrc='./images/santiago-dominguez.png' 
         altText="Santiago Dominguez" 
         testimonial="Tuve el placer de trabajar con Mishi Systems quienes demostraron ser profesionales totalmente organizados y comprometidos. Su dedicación al proyecto fue total, cumpliendo con todas las entregas y solicitudes en cada etapa. Siempre mostraron una actitud proactiva, dispuesta a colaborar y a encontrar formas de mejorar los resultados. Sin dudas recomiendo sus servicios." 
         name="Santiago Dominguez" 
         company="T2Company"
         rol="Gerente de Marketing" />

        <Testimonial 
         imgSrc='./images/raul-piaggio.png' 
         altText="Raul Piaggio" 
         testimonial="Estamos muy satisfechos con los resultados de mishi systems y su impacto en nuestra empresa fue puramente positivo" 
         name="Raul Piaggio" 
         company="RPiaggio" 
         rol="Director"  />
      </div>
    </div>
  );
}

export default Home;
