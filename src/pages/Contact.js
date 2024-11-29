import React from 'react';
import Hero from '../components/Hero';

const Contact = () => {
  return (
    <div>
       <Hero 
        titulo="Contáctanos" 
        parrafo="Soluciones que transforman negocios"
        backgroundImage="/images/contact.png"
        height="50vh"
        backgroundPosition='top'
      />
    </div>
  );
};

export default Contact;
