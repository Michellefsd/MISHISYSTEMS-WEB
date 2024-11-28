import React from 'react';
import './Card.css';
import '../styles.css';

const Benefit = ({ icon, description }) => {
    return (
        <div className="benefit-item">
            <span className="benefit-icon">{icon}</span>
            <p>{description}</p>
        </div>
    );
};

export default Benefit;
