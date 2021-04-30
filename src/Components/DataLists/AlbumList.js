import React from "react";
import Card from "./Card";

const AlbumList = ({ albums }) => {
  return (
    <div>
      {Object.keys(albums).length > 0 && (
        <div className="albums-list">
          <h2>Albums</h2>
          <div className="albums">
          {albums.items.map((album, index) => {
              return (
                  <Card
                  key={index}
                  imgSrc={album.images[1].url}
                  name={album.name}
                  releaseDate={album.release_date.slice(0, 4)}
                  />
                  );
                })}
            </div>
        </div>
      )}
    </div>
  );
};

export default AlbumList;
