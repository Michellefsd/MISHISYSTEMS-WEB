import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { isValidPhoneNumber } from 'libphonenumber-js';
import Notification from './Notification';
import './ContactForm.css';

const ContactForm = () => {
  // Configuración de EmailJS
  const serviceID = 'service_acak51r';
  const templateID = 'template_oz36m38';
  const publicKey = 'gL5AxWcOi_KU_ZcnB'; // Clave pública

  const form = useRef();

  // Estados para datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [counter, setCounter] = useState(250); // Contador de caracteres
  const [validStates, setValidStates] = useState({
    name: null,
    email: null,
    phone: null,
  });
  const [notification, setNotification] = useState(null); // Para mostrar mensajes de éxito o error

  // Manejadores de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMessageChange = (e) => {
    handleChange(e);
    setCounter(250 - e.target.value.length); // Actualiza el contador
  };

  // Validaciones
  const validateName = () => setValidStates((prev) => ({ ...prev, name: formData.name.trim() !== '' }));
  const validateEmail = () => {
    const validator = require('email-validator');
    setValidStates((prev) => ({ ...prev, email: validator.validate(formData.email.trim()) }));
  };
  const validatePhone = () => {
    const uruguayPhoneRegex = /^(09|2)\d{7}$|^0\d{7}$/;
    setValidStates((prev) => ({
      ...prev,
      phone: uruguayPhoneRegex.test(formData.phone) || isValidPhoneNumber(formData.phone),
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

    const { name, email, phone } = validStates;

    if (name && email && phone && formData.message.trim() !== '') {
      emailjs
        .sendForm(serviceID, templateID, form.current, publicKey) // Se pasa la clave pública aquí
        .then(() => {
          setNotification({ type: 'success', message: '¡Mensaje enviado exitosamente!' });
          setFormData({ name: '', email: '', phone: '', message: '' });
          setCounter(250); // Reinicia contador
        })
        .catch(() =>
          setNotification({ type: 'error', message: 'Error al enviar. Inténtalo más tarde.' })
        );
    } else {
      setNotification({ type: 'error', message: 'Por favor, completa todos los campos.' });
    }

    setTimeout(() => setNotification(null), 3000); // Oculta notificación después de 3 segundos
  };

  return (
    <div className="contact-form">
      <h2>Contáctanos</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <label>Nombre Completo</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={validateName}
        />
        {validStates.name === false && <Notification message="Nombre no válido" />}

        <label>Correo Electrónico</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={validateEmail}
        />
        {validStates.email === false && <Notification message="Correo no válido" />}

        <label>Teléfono</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={validatePhone}
        />
        {validStates.phone === false && <Notification message="Teléfono no válido" />}

        <label>Mensaje</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleMessageChange}
          maxLength="250"
        ></textarea>
        <Notification message={`${counter} caracteres restantes`} />

        <button type="submit">Enviar</button>
      </form>

      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
