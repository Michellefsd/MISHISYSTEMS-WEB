import React from 'react';
import Benefit from './Benefit'; // Importa correctamente el componente
import './Card.css';
import '../styles.css';

const Benefits = ({ title, benefits }) => {
    return (
        <div className="benefits">
            <h3>{title}</h3>
            <div className="benefits-list">
                {benefits.map((benefit, index) => (
                    <Benefit key={index} icon={benefit.icon} description={benefit.description} />
                ))}
            </div>
        </div>
    );
};

export default Benefits;
