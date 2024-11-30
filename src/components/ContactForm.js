import React, { useState } from 'react';
import Notification from './Notification';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [notification, setNotification] = useState(null); // Manejo de notificaciones

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!validateName(formData.fullName)) {
      setNotification({ type: 'error', message: 'Por favor, introduce un nombre válido.' });
      return;
    }
    if (!validateEmail(formData.email)) {
      setNotification({ type: 'error', message: 'Por favor, introduce un correo electrónico válido.' });
      return;
    }
    if (!validatePhone(formData.phone)) {
      setNotification({ type: 'error', message: 'Por favor, introduce un número de teléfono válido.' });
      return;
    }

    setNotification({ type: 'success', message: '¡Formulario enviado correctamente!' });
    console.log('Formulario enviado:', formData);

    setFormData({ fullName: '', email: '', phone: '', message: '' });
  };

  const validateName = (name) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/.test(name);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) => /^(\+?[0-9]{1,4})?[\s-]?[0-9]{3}[\s-]?[0-9]{6}$/.test(phone);

  return (
    <form className="contact-form" id="contactForm" noValidate action="/send-email" method="POST" onSubmit={handleSubmit}>
      <h2>Contáctanos</h2>

      <div className="form-group">
        <label htmlFor="fullName">Nombre completo</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="Escribe tu nombre completo"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Escribe tu correo electrónico"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Teléfono</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Escribe tu número de teléfono"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Escribe tu mensaje"
        ></textarea>
      </div>
      
      {/* Mostrar notificación si existe */}
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      <button type="submit" className="submit-button">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
