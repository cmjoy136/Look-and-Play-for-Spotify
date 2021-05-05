import React from "react";
import msToDuration from "../../Utility/functions";

const Card = (props) => {
  const { index, imgSrc, name, releaseDate, artist, time } = props;
  return (
    <div key={index} className={props.isSong ? "song-card" : "card"}>
      <div className="card-image">
        <img src={imgSrc} alt="album or song cover" />
      </div>
      <div className="card-body">
        <div className="card-title">{name}</div>
        {releaseDate && <span>{releaseDate}</span>}
        {artist && <span className="card-artist">{artist}</span>}
      </div>
      {time && (
        <div className="card-footer">
          <span>{time}</span>
        </div>
      )}
    </div>
  );
};

export default Card;
