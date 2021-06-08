import React from "react";
import { FiPlay } from "react-icons/fi";
import MusicControlButton from "../Playback/MusicControlButton";
import albumArt from "../../Assets/album-art.png";

const Card = (props) => {
  const { index, imgSrc, name, releaseDate, artist, time, spotifyURI } = props;

  return (
    <div key={index} className={props.isSong ? "song-card" : "card"}>
      <div className="card-image">
        <img
          src={imgSrc === null ? albumArt : imgSrc}
          alt="album or song cover"
        />
        <MusicControlButton
          class="card-button"
          action="play"
          uri={spotifyURI}
          innerContent={<FiPlay />}
        />
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
