import React from 'react';
import './Testimonial.css';

const Testimonial = ({ imgSrc, altText, testimonial, name, company }) => {
  return (
    <div className="testimonial-card">
      <img src={imgSrc} alt={altText} className="testimonial-img" />
      <p>{testimonial}</p>
      <span>{name}, {company}</span>
    </div>
  );
};

export default Testimonial;
