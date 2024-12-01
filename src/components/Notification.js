import React, { useEffect } from 'react';
import './Notification.css';

const Notification = ({ type, message, onClose }) => {
  useEffect(() => {
    if (onClose) {
      const timer = setTimeout(() => {
        onClose(); // Llamar a la función para cerrar la notificación
      }, 6000);

      return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
    }
  }, [onClose]);

  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
      <button onClick={onClose} className="close-button">
        X
      </button>
    </div>
  );
};

export default Notification;
