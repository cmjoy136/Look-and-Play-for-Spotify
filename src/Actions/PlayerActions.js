import {
  PLAY_TRACK,
  PAUSE_TRACK,
  NEXT_TRACK,
  PREVIOUS_TRACK,
  SHUFFLE_TRACKS,
  REPEAT_CYCLE,
} from "./ActionTypes";
import { post, put } from "../Utility/functions";

const playerEndpoint = "https://api.spotify.com/v1/me/player";
const playEndpoint = playerEndpoint + "/play";

export const playTrack = (trackURI) => {
  return async (dispatch) => {
    try {
      console.log(trackURI);
      console.log(playEndpoint);
      const trackPlay = await put(playEndpoint, {
        context_uri: trackURI,
        offset: {
          position: 5,
        },
        position_ms: 0,
      });
      console.log(trackPlay);
      dispatch(trackPlay);
    } catch (err) {
      console.log(err);
    }
  };
};
