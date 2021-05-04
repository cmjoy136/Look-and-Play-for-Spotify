import React from "react";

const Card = (props) => {
  const { index, imgSrc, name, releaseDate, artist } = props;
  return (
    <div key={index} className={props.isSong ? "song-card" : "card"}>
      <div className="img-div">
        <img src={imgSrc} alt="album or song cover" />
      </div>
      <div className="card-body">
        <div>{name}</div>
        <span>{releaseDate}</span>
        {artist && <span>{artist}</span>}
      </div>
    </div>
  );
};

export default Card;
