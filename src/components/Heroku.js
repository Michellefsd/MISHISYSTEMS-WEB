import React from 'react';
import './Hero.css';
import '../styles.css';
import Button from '../components/Button';  

const Heroku = ({ titulo, parrafo, botonText, height='25vh', className = '' }) => {
  return (
    <section className="heroku">
      <div className="hero-text">
        <h1 className={`${className}`}>{titulo}</h1> {/* Título dinámico */}
        <p style={{textAlign: 'center', paddingLeft: '18px', paddingRight: '18px'}}>{parrafo}</p> {/* Párrafo dinámico */}
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

export default Heroku;