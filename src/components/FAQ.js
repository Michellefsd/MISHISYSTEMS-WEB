import React from 'react';
import './FAQ.css';

const FAQ = ({ questions }) => {
  return (
    <div className="faq-section">
      <h2>Preguntas Frecuentes</h2>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <h3>{q.question}</h3>
            <p>{q.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
