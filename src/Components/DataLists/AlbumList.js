import React from "react";
import Card from "./Card";

const AlbumList = (props) => {
  const { albums} = props
  return (
    <>
      <h2>Albums</h2>
      {Object.keys(albums).length > 0 && (
          <div className="albums">
          {albums.items.map((album, index) => {
              return (
                  <Card
                  key={index}
                  imgSrc={album.images[1].url}
                  name={album.name}
                  spotifyURI={album.uri}
                  releaseDate={album.release_date.slice(0, 4)}
                  />
                  );
                })}
            </div>
      )}
    </>
  );
};

export default AlbumList;
