import React from "react";

import "./Card.css";
function Card({ title, description, borderTopColor, imgSrc }) {
  return (
    <div style={(borderTopColor = { borderTopColor })} className="card">
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <img src={imgSrc} />
    </div>
  );
}

export default Card;
