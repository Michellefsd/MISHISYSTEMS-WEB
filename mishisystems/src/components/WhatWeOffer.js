const WhatWeOffer = ({ offers }) => (
    <div className="what-we-offer">
      <h2>¿Qué ofrecemos?</h2>
      <ul>
        {offers.map((offer, index) => (
          <li key={index}>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default WhatWeOffer;
  