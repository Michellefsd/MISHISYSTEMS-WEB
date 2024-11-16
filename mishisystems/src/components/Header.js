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
      
      <nav className={`main-menu ${isMenuOpen ? 'active' : ''}`}>
        <button className="hamburger-menu" onClick={toggleMenu}>
          &#9776;  {/* Ícono de hamburguesa */}
        </button>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/services">Servicios</Link></li>
          <li><Link to="/about">Nosotros</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
      <div class="logo-container">
        <div class="div-de-img"></div>
        <img src='logo 192.png' alt="Logo de MishiSystems" className="logo" />
      </div>  
    </header>
  );
}

export default Header;
