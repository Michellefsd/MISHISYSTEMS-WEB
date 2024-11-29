import React from 'react';
import { useParams } from 'react-router-dom';
import Service from './Service';

const ServiceWrapper = () => {
  const { serviceKey } = useParams(); // Extraer el parámetro de la URL

  return <Service serviceKey={serviceKey} />;
};

export default ServiceWrapper;
