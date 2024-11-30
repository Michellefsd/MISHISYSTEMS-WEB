import React from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

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
      <ContactForm />
    </div>
  );
};

export default Contact;
