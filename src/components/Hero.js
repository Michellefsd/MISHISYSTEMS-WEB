import React from 'react';
import './Hero.css';
import '../styles.css';
import Button from '../components/Button';  

const Hero = ({ titulo, parrafo, backgroundImage, botonText, height='80vh', backgroundPosition='top', className = '' }) => {
  return (
    <section className="hero"
             style={{ backgroundImage: `url(${backgroundImage})`, height: height, backgroundPosition: backgroundPosition}}
    >
      <div className="hero-text">
        <h1 className={`${className}`}>{titulo}</h1> {/* Título dinámico */}
        <p>{parrafo}</p> {/* Párrafo dinámico */}
        {botonText ? (
          <Button 
            text={botonText} 
            className="hero-button" 
            onClick={() => alert('Contáctanos clickeado!')} 
          />
)         : null}
      </div>
    </section>
  );
}

export default Hero;