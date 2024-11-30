import React from 'react';
import './MVision.css';
import '../styles.css'

const MVision = () => {
  return (
    <div className="about-us-container">

      {/* Módulo 1: Introducción y Misión */}
      <section className="intro-section">
        <h1 className="section-title">Sobre Nosotros</h1>

        {/* Espacio para una imagen representativa */}

        { /* <div className="image-container">
          <img src="/images/aboutus.jpg" alt="Sobre nosotros" className="intro-image" />
        </di class="black"v>  */}
        

        <p className="intro-text">
          <strong>Mishi Systems</strong> es una empresa que ofrece soluciones digitales
          para empresas que buscan optimizar sus procesos, automatizar ventas y expandir
          su alcance sin necesidad de aumentar costos operativos o personal.
          Nos especializamos en acompañar a las empresas en su transformación digital
          para que puedan crecer de manera eficiente y sostenida.
        </p>

        <br></br>
        <br></br>
        <h2 className="section-title">Nuestra Misión</h2>
        <p className="mission-text">
          Facilitar la transformación digital para empresas de todo el mundo,
          ofreciendo soluciones personalizadas que aumenten su eficiencia
          operativa y simplifiquen la interacción con sus clientes.
        </p>
        <br></br>
      </section>

      {/* Módulo 2: Nuestros Valores con Íconos */}
      <section className="values-section">
      <br></br>
      <br></br>
        <h2 className="section-title">Nuestros Valores</h2>
        <br></br>

        {/* Íconos representando valores */}
        <div className="values-icons">
          <div className="icon-container">
            <img src="/images/icons/innovacion.png" alt="Innovación" className="value-icon" />
            <p class="black">Innovación</p>
          </div>
          <div className="icon-container">
            <img src="/images/icons/acuerdo.png" alt="Compromiso" className="value-icon" />
            <p class="black">Compromiso</p>
          </div>
          <div className="icon-container">
            <img src="/images/icons/flexibilidad.png" alt="Flexibilidad" className="value-icon" />
            <p class="black">Flexibilidad</p>
          </div>
          <div className="icon-container">
            <img src="/images/icons/mundial.png" alt="Multilingüismo" className="value-icon" />
            <p class="black">Multilingüismo</p>
          </div>
          <div className="icon-container">
            <img src="/images/icons/calidad.png" alt="Calidad" className="value-icon" />
            <p class="black">Calidad</p>
          </div>
        </div>

        <div className="unique-proposition">
        <br></br>
        <br></br>
          <h3 className="proposition-title">¿Por Qué Elegir Mishi Systems?</h3>
          <p className="proposition-text">
            Mishi Systems facilita la transformación digital de manera fluida y sencilla. Ayudamos a las empresas a automatizar procesos, optimizar la presencia digital y alcanzar audiencias internacionales con contenidos multilingües.
          </p>
        </div>
      </section>

    </div>
  );
};

export default MVision;
