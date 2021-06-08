import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import SearchForm from "../Components/Search/SearchForm";
import SearchResults from "../Components/Search/SearchResults";
import { getSearchResult } from "../Actions/SearchActions";
import Navigation from "../Components/Navigation/Navigation";
import Playbar from "../Components/Playback/Playbar";
import { getAccessToken } from "../Actions/AuthActions";

const Homepage = (props) => {
  const dispatch = useDispatch();

  const {
    isValidSession,
    history,
    playTrack,
    albums,
    artists,
    playlists,
    tracks,
  } = props;
  const results = { albums, artists, playlists, tracks };

  useEffect(() => {
    dispatch(getAccessToken(localStorage.getItem("params").access_token));
  });

  const handleSearch = (searchTerm) => {
    if (isValidSession()) {
      props.dispatch(getSearchResult(searchTerm));
    } else {
      history.push({
        pathname: "/",
        session_expired: true,
      });
    }
  };

  const handleClick = (page) => {
    history.push(page);
  };

  const handlePlay = (trackURI) => {
    if (isValidSession()) {
      try {
        playTrack(trackURI);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="homepage">
      <Navigation handleClick={handleClick} />
      <div className="results-container">
        <SearchForm handleSearch={handleSearch} />
        <SearchResults
          results={results}
          isValidSession={isValidSession}
          handlePlay={handlePlay}
        />
      </div>
      <Playbar handlePlay={handlePlay} playbackInfo={props.getPlaybackInfo} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.music.albums,
    artists: state.music.artists,
    playlists: state.music.playlists,
    tracks: state.music.tracks,
    player: state.player,
  };
};

export default connect(mapStateToProps)(Homepage);
