import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import ContactForm from './pages/Contact'; // Asegúrate de que "Contact" exporta ContactForm
import ServiceWrapper from './pages/ServiceWrapper'; // Importa el componente para servicios individuales

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceKey" element={<ServiceWrapper />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          {/* Ruta de contacto */}
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
