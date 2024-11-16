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
         company="T2Company" />

        <Testimonial 
         imgSrc='./images/santiago-dominguez.png' 
         altText="Santiago Dominguez" 
         testimonial="Estamos muy satisfechos con los resultados de mishi systems y su impacto en nuestra empresa fue puramente positivo" 
         name="Santiago Dominguez, Gerente de Marketing" 
         company="T2Company" />

        <Testimonial 
         imgSrc='./images/raul-piaggio.png' 
         altText="Raul Piaggio" 
         testimonial="Estamos muy satisfechos con los resultados de mishi systems y su impacto en nuestra empresa fue puramente positivo" 
         name="Raul Piaggio" 
         company="RPiaggio" />
      </div>
    </div>
  );
}

export default Home;
