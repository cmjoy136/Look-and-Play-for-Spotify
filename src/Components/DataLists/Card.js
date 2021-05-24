import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiPlay } from "react-icons/fi";
import { playTrack, getCurrentPlaybackInfo } from "../../Actions/PlayerActions";

const Card = (props) => {
  const { index, imgSrc, name, releaseDate, artist, time, spotifyURI } = props;
  const deviceID = useSelector((state) => state.auth.deviceID);
  const dispatch = useDispatch();



  const handleClick = async (uri, deviceID) => {
    dispatch(playTrack(uri, deviceID));
  };

  return (
    <div key={index} className={props.isSong ? "song-card" : "card"}>
      <div className="card-image">
        <img src={imgSrc} alt="album or song cover" />
        <button
          className="card-button"
          onClick={() => handleClick(spotifyURI, deviceID)}
        >
          <FiPlay />
        </button>
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
