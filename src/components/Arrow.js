import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackArrow = () => {
  const navigate = useNavigate();

  const arrowStyle = {
    position: 'fixed',
    top: '20px', // margen superior
    left: '38px', // margen izquierdo
    cursor: 'pointer',
    zIndex: 1000, // asegura que esté sobre otros elementos
    width: '40px', // tamaño de la imagen
    height: '40px',
  };

  const goToServices = () => {
    window.scrollTo(0, 0); // Hace scroll al inicio de la página
    navigate('/services'); // Navega a la página de servicios
  };

  return (
    <img
      src="/images/arrow.png"
      alt="Flecha hacia la izquierda"
      onClick={goToServices}
      style={arrowStyle}
    />
  );
};

export default BackArrow;

