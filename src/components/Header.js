import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../styles.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Botón de menú hamburguesa */}
      <button className="hamburger-menu" onClick={toggleMenu}>
        &#9776; {/* Ícono de hamburguesa */}
      </button>

      {/* Menú principal */}
      <nav className={`main-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/services">Servicios</Link></li>
          <li><Link to="/about">Nosotros</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>

      {/* Contenedor del logo */}
      <div className="logo-container">
        <div className="div-de-img"></div>
        <img src="logo_192.png" alt="MishiSystems logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
