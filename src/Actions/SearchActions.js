import {
  FETCH_ALBUMS,
  FETCH_ARTISTS,
  FETCH_PLAYLISTS,
  FETCH_TRACKS,
} from "./ActionTypes";
import { get } from "../Utility/functions";

const searchURL = (query) => {
  return `https://api.spotify.com/v1/search?query=${encodeURIComponent(
    query
  )}&type=album,artist,playlist,track&limit=6`;
};

const fetchAlbums = (albums) => {
  return {
    type: FETCH_ALBUMS,
    albums,
  };
};
const fetchArtists = (artists) => {
  return {
    type: FETCH_ARTISTS,
    artists,
  };
};
const fetchTracks = (tracks) => {
  return {
    type: FETCH_TRACKS,
    tracks,
  };
};
const fetchPlaylists = (playlists) => {
  return {
    type: FETCH_PLAYLISTS,
    playlists,
  };
};

export const getSearchResult = (searchTerm) => {
  return async (dispatch) => {
    try {
      const searchResult = await get(searchURL(searchTerm));
      const { albums, artists, playlists, tracks } = searchResult;
      dispatch(fetchAlbums(albums));
      dispatch(fetchArtists(artists));
      dispatch(fetchPlaylists(playlists));
      dispatch(fetchTracks(tracks));
    } catch (err) {
      console.log(err);
    }
  };
};
