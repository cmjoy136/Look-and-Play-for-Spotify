import { FETCH_PLAYLISTS } from '../Actions/ActionTypes'

const initialState = {
    playlists: {}
}

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYLISTS:
        return {...state, playlists: action.payload}
    default:
      return state;
  }
};

export default playlistReducer;