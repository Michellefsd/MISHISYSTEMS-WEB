import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom'; // Para leer "?selected_service=..."
import { isValidPhoneNumber } from 'libphonenumber-js';
import Notification from './Notification';
import './ContactForm.css';

const ContactForm = () => {
  // Lee el parámetro "?selected_service=..." de la URL.
  const { search } = useLocation();
  const serviceIdFromUrl = new URLSearchParams(search).get('selected_service'); // p.e. 'transformacion_digital'

  // Estos son los datos de tu servicio de EmailJS (visita dashboard.emailjs.com/admin).
  const ServiceID = 'service_4vf1c79'; 
  const templateID = 'template_76w1jg6';
  const publicKey = '_oCo-39wvLdKkhQmw';

  const form = useRef();

  // Estado local del formulario
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
    selectedService: serviceIdFromUrl || 'contact',
  });

  // Estados para validaciones sencillas
  const [validStates, setValidStates] = useState({
    user_name: null,
    user_email: null,
    user_phone: null,
  });

  const [notification, setNotification] = useState(null);

  // Manejadores de cambio
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value || '' }));
  };

  // Validaciones de cada campo
  const validateName = () => {
    setValidStates((prev) => ({
      ...prev,
      user_name: formData.user_name && formData.user_name.trim() !== '',
    }));
  };

  const validateEmail = () => {
    const validator = require('email-validator');
    setValidStates((prev) => ({
      ...prev,
      user_email: formData.user_email && validator.validate(formData.user_email.trim()),
    }));
  };

  const validatePhone = () => {
    const uruguayPhoneRegex = /^(09|2)\d{7}$|^0\d{7}$/;
    setValidStates((prev) => ({
      ...prev,
      user_phone:
        formData.user_phone &&
        (uruguayPhoneRegex.test(formData.user_phone) || isValidPhoneNumber(formData.user_phone)),
    }));
  };

  const validateForm = () => {
    validateName();
    validateEmail();
    validatePhone();
  };

  // Envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();

    const { user_name, user_email, user_phone } = validStates;

    // Verifica que todo sea válido
    if (user_name && user_email && user_phone && formData.message.trim() !== '') {
      // Envía con EmailJS
      emailjs
        .sendForm(ServiceID, templateID, form.current, publicKey)
        .then(() => {
          setNotification({
            type: 'success',
            message: '¡Mensaje enviado exitosamente!',
          });

          // Resetea el formulario
          setFormData({
            user_name: '',
            user_email: '',
            user_phone: '',
            message: '',
            selectedService: '',
          });
          form.current.reset();
        })
        .catch((error) => {
          console.error('Error al enviar:', error.text);
          setNotification({
            type: 'error',
            message: 'Error al enviar. Inténtalo más tarde.',
          });
        });
    } else {
      setNotification({
        type: 'error',
        message: 'Por favor, completa todos los campos.',
      });
    }

    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="contact-form">
      <h2>Contáctanos</h2>
      <form ref={form} onSubmit={handleSubmit}>
        {/* Nombre */}
        <div className="form-group">
          <label htmlFor="user_name">Nombre Completo</label>
          <input
            id="user_name"
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            onBlur={validateName}
            placeholder="Ingresa tu nombre completo"
            required
          />
          {validStates.user_name === false && <Notification message="Nombre no válido" />}
        </div>

        {/* Campo oculto con el servicio de interés */}
        <input
          type="hidden"
          name="selected_service"
          value={formData.selectedService || 'contact'} 
        />
        

        {/* Correo */}
        <div className="form-group">
          <label htmlFor="user_email">Correo Electrónico</label>
          <input
            id="user_email"
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            onBlur={validateEmail}
            placeholder="Ingresa tu correo electrónico"
            required
          />
          {validStates.user_email === false && <Notification message="Correo no válido" />}
        </div>

        {/* Teléfono */}
        <div className="form-group">
          <label htmlFor="user_phone">Teléfono</label>
          <input
            id="user_phone"
            type="tel"
            name="user_phone"
            value={formData.user_phone}
            onChange={handleChange}
            onBlur={validatePhone}
            placeholder="Ingresa tu número de teléfono"
            required
          />
          {validStates.user_phone === false && <Notification message="Teléfono no válido" />}
        </div>

        {/* Mensaje */}
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

        {/* Botón de enviar */}
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>

      {/* Notificación global */}
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
