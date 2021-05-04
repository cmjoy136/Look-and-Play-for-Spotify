import React, { useEffect } from "react";
import _ from "lodash";
import { Redirect } from "react-router-dom";
import AlbumList from "../DataLists/AlbumList";
import TrackList from "../DataLists/TrackList";

const SearchResults = (props) => {
  const { isValidSession, results } = props;
  const { albums, artists, playlists, tracks } = results;

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
        {!_.isEmpty(tracks) && <TrackList tracks={tracks} />}
      </section>
      <section className="albums-results">
        {!_.isEmpty(albums) && <AlbumList albums={albums} />}
      </section>
      <section className="artists-results"></section>
      <section className="playlists-results"></section>
    </div>
  );
};

export default SearchResults;
