import { FETCH_PLAYLISTS } from '../Actions/ActionTypes'

const playlistReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PLAYLISTS:
        return action.playlists
    default:
      return state;
  }
};

export default playlistReducer;