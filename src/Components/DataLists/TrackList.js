import React, { useState } from "react";
import {msToDuration} from "../../Utility/functions";
import Card from "./Card";

const TrackList = (props) => {
  const { tracks} = props
  const [isSong, setIsSong] = useState(true);
  return (
    <>
      <h2>Songs</h2>
      {Object.keys(tracks).length > 0 && (
        <div className="tracks">
          {tracks.items.map((track, index) => {
            return (
              <Card
                isSong={isSong}
                key={index}
                imgSrc={track.album.images[2].url}
                name={track.name}
                artist={track.artists[0].name}
                time={msToDuration(track.duration_ms)}
                spotifyURI={track.uri}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default TrackList;
