import { GET_TRACK_INFO, PAUSE_TRACK, PLAYBACK_ON } from "../Actions/ActionTypes";

const initialState = {
    isPlaying: false,
    paused: true,
    currentPlaying: null,
}

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYBACK_ON:
      return {
        ...state,
        isPlaying: true,
        paused: false,
      };
    case PAUSE_TRACK:
      return {
        ...state,
        isPlaying: false,
        paused: true,
      };
    case GET_TRACK_INFO:
        return{
            ...state,
            currentPlaying: action.payload
        }

    default:
      return state;
  }
};

export default playerReducer;