import React from "react";
import _ from "lodash";
import { Redirect } from "react-router-dom";
import AlbumList from "../DataLists/AlbumList";
import ArtistList from "../DataLists/ArtistList"
import TrackList from "../DataLists/TrackList";

const SearchResults = (props) => {
  const { isValidSession, results} = props;
  const { albums, artists, tracks } = results;

  if (!isValidSession) {
    <Redirect
      to={{
        pathname: "/",
        state: {
          session_expired: true,
        },
      }}
    />;
  }


  return (
    <div className="search-results">
      <section className="tracks-results">
        {!_.isEmpty(tracks) && <TrackList tracks={tracks} handlePlay={props.handlePlay} />}
      </section>
      <section className="albums-results">
        {!_.isEmpty(albums) && <AlbumList albums={albums} handlePlay={props.handlePlay} />}
      </section>
      <section className="artists-results">
        {!_.isEmpty(artists)  && <ArtistList artists={artists} handlePlay={props.handlePlay}/>}
      </section>
      <section className="playlists-results"></section>
    </div>
  );
};

export default SearchResults;
