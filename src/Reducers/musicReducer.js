import {
  FETCH_ALBUMS,
  FETCH_ARTISTS,
  FETCH_PLAYLISTS,
  FETCH_TRACKS,
} from "../Actions/ActionTypes";

const initialState = {
  albums: [],
  artists: [],
  playlists: [],
  tracks: [],
};
const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return {
        ...state,
        albums: action.albums,
      };
    case FETCH_ARTISTS:
      return {
        ...state,
        artists: action.artists,
      };
    case FETCH_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case FETCH_TRACKS:
      return {
        ...state,
        tracks: action.tracks,
      };
    default:
      return state;
  }
};

export default musicReducer;
