import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button'; // Ajusta la ruta si es necesario
import './Banner.css'; // Archivo CSS para estilos del banner

const Banner = ({ logoSrc, altText }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact'); // Ajusta la ruta si es diferente
  };

  return (
    <div className="banner-wrapper">
      <div className="banner">
        <img src={logoSrc} alt={altText} className="banner-logo" />
        <Button text="Contáctanos" onClick={handleContactClick} />
      </div>
    </div>
  );
};

export default Banner;
