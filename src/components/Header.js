import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../styles.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Cierra el menú después de hacer clic
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
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Servicios</Link></li>
          <li><Link to="/about" onClick={closeMenu}>Nosotros</Link></li>
          {/*<li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>*/}
          <li><Link to="/contact" onClick={closeMenu}>Contacto</Link></li>
        </ul>
      </nav>

      {/* Contenedor del logo */}
      <Link to="/">
      <div className="logo-container">
        <div className="div-de-img"></div>
        <img src="logo_192.png" alt="MishiSystems logo" className="logo" />
      </div>
      </Link>
    </header>
  );
};

export default Header;

