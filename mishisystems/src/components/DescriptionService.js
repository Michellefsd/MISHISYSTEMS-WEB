import React from 'react';
import './Card.css';
import '../styles.css';

const Description = ({ text }) => {
    return (
        <div className="description">
            <p>{text}</p>
        </div>
    );
};

export default Description;
