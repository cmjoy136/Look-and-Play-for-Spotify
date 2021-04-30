import React from "react";

const Card = (props) => {
    const {index, imgSrc, name, releaseDate} = props
  return (
    <div key={index} className="card">
      <img src={imgSrc} />
      <div className="card-body">
        <h5>{name}</h5>
        <span>{releaseDate}</span>
      </div>
    </div>
  );
};

export default Card