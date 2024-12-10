import React from 'react';
import Benefit from './Benefit';
import './Benefits.css';

const Benefits = ({ title, benefits }) => {
    return (
        <div className="benefits">
            {title && <h3>{title}</h3>}
            <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-item-wrapper">
                        {benefit.imageURL && (
                            <img
                                src={benefit.imageURL}
                                alt={`Benefit ${index + 1}`}
                                className="benefit-image"
                            />
                        )}
                        <Benefit description={benefit.description} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Benefits;
