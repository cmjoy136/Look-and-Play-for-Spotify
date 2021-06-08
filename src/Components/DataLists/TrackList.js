import React from "react";
import { timeParser } from "../../Utility/functions";
import Card from "./Card";

const TrackList = (props) => {
  const { tracks } = props;
  return (
    <>
      <h2>Songs</h2>
      {Object.keys(tracks).length > 0 && (
        <div className="tracks">
          {tracks.items.map((track, index) => {
            return (
              <Card
                isSong={true}
                key={index}
                imgSrc={
                  track.album.images.length > 0
                    ? track.album.images[1].url
                    : null
                }
                name={track.name}
                artist={track.artists[0].name}
                time={timeParser(track.duration_ms)}
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
