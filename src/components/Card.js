import React from 'react';
import './Card.css';
import '../styles.css'

const Card = ({ title, description, buttonLabel, onButtonClick, backgroundColor, imageSrc }) => {
  const cardStyle = {
    backgroundColor: backgroundColor || '#FBF7EF' /*'#D8D9E5'*/,
  };

  return (
    <div className="card" style={cardStyle}>
      {imageSrc && <img src={imageSrc} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <br></br>
        <button className="card-button" onClick={onButtonClick}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Card;