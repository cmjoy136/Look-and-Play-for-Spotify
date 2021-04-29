import React from "react";

const AlbumList = ({ albums }) => {
  return (
    <div>
      {Object.keys(albums).length > 0 && (
          <div className="albums">
              {albums.items.map((album, index) =>{
                 return( 
                 <div key={index}>
                     <span>{album.name}</span>
                 </div>
                    )
              }
              )
              }
          </div>
      )
      }
    </div>
  );
};

export default AlbumList;
