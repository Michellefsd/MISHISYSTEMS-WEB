import React from 'react';
import './WhatWeOffer.css';

const WhatWeOffer = ({ offers }) => {
  return (
    <div className="what-we-offer">
      <h2>¿Qué ofrecemos?</h2>
      <div className="offers-container">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`offer-item ${index % 2 === 0 ? 'row-normal' : 'row-reverse'}`}
          >
            <div className="offer-description">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
            {offer.imageURL && (
              <div className="offer-image-container">
                <img src={offer.imageURL} alt={offer.title} className="offer-image" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
