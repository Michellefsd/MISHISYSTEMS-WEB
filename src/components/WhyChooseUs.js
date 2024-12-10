import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = ({ reasons }) => (
    <div className="why-choose-us">
      <h2>Por qué elegirnos</h2>
      <ul>
        {reasons.map((reason, index) => (
          <li key={index} className="reason-item">{reason}</li>
        ))}
      </ul>
    </div>
  );
  
  export default WhyChooseUs;
  