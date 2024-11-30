import React from 'react';
import './Card.css';
import '../styles.css';
import './CaseStudies.css'

const CaseStudies = ({ cases }) => {
    return (
        <div className="case-studies">
            {cases.map((item, index) => (
                <div key={index} className="case-card">
                    <img src={item.image} alt={item.title} />
                    {item.result && <p>{item.result}</p>}
                </div>
            ))}
        </div>
    );
};

export default CaseStudies;
