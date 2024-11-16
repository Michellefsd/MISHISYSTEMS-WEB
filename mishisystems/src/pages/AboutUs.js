import React from 'react';
import Hero from '../components/Hero';
import MVision from '../components/MVision';
 
const AboutUs = () => {
  return (
    <div>
       <Hero 
        titulo="Acerca de Nosotros" 
        parrafo="Conoce más sobre nuestro equipo y visión."
        backgroundImage="/images/aboutus.jpg"
        height="50vh"
        backgroundPosition='center'
      />
      <MVision
      />
    </div>
  );
};

export default AboutUs;
