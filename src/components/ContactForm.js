import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { isValidPhoneNumber } from 'libphonenumber-js';
import Notification from './Notification';
import './ContactForm.css';

const ContactForm = () => {
  // Configuración de EmailJS
  const serviceID = 'service_4vf1c79';
  const templateID = 'template_76w1jg6';
  const publicKey = 'gL5AxWcOi_KU_ZcnB';

  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [validStates, setValidStates] = useState({
    name: null,
    email: null,
    phone: null,
  });

  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateName = () => setValidStates((prev) => ({ ...prev, user_name: formData.name.trim() !== '' }));
  const validateEmail = () => {
    const validator = require('email-validator');
    setValidStates((prev) => ({ ...prev, user_email: validator.validate(formData.email.trim()) }));
  };
  const validatePhone = () => {
    const uruguayPhoneRegex = /^(09|2)\d{7}$|^0\d{7}$/;
    setValidStates((prev) => ({
      ...prev,
      user_phone: uruguayPhoneRegex.test(formData.phone) || isValidPhoneNumber(formData.phone),
    }));
  };

  const validateForm = () => {
    validateName();
    validateEmail();
    validatePhone();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();

    const { name, email, phone } = validStates;

    if (name && email && phone && formData.message.trim() !== '') {
      emailjs
        .sendForm(serviceID, templateID, form.current, publicKey)
        .then(() => {
          setNotification({ type: 'success', message: '¡Mensaje enviado exitosamente!' });
          setFormData({ name: '', email: '', phone: '', message: '' });
          form.current.reset(); // Limpia el formulario tras el envío
        })
        .catch((error) => {
          console.error('Error al enviar:', error.text);
          setNotification({ type: 'error', message: 'Error al enviar. Inténtalo más tarde.' });
        });
    } else {
      setNotification({ type: 'error', message: 'Por favor, completa todos los campos.' });
    }

    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="contact-form">
      <h2>Contáctanos</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={validateName}
            placeholder="Ingresa tu nombre completo"
            required
          />
          {validStates.name === false && <Notification message="Nombre no válido" />}
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={validateEmail}
            placeholder="Ingresa tu correo electrónico"
            required
          />
          {validStates.email === false && <Notification message="Correo no válido" />}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={validatePhone}
            placeholder="Ingresa tu número de teléfono"
            required
          />
          {validStates.phone === false && <Notification message="Teléfono no válido" />}
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            maxLength="250"
            placeholder="Escribe tu mensaje aquí"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>

      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default ContactForm;
