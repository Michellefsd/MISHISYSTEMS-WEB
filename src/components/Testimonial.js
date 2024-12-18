import React from 'react';
import './Testimonial.css';

const Testimonial = ({ imgSrc, altText, testimonial, name, company, rol }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-img-container">
        <img src={imgSrc} alt={altText} className="testimonial-img" />
        <div className="testimonial-info">
          <span className="testimonial-name">{name}</span>
          <span className="testimonial-name">{rol}</span>
          <span className="testimonial-company">{company}</span>
        </div>
      </div>
      <p className="testimonial-text">{testimonial}</p>
    </div>
  );
};

export default Testimonial;
