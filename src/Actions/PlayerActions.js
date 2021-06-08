import { PLAYBACK_ON, PAUSE_TRACK, GET_TRACK_INFO } from "./ActionTypes";
import { uriParser } from "../Utility/functions";
import { authHeader } from "../Utility/constants";
export const playerEndpoint = "https://api.spotify.com/v1/me/player";
export const playEndpoint = playerEndpoint + "/play?";
export const pauseEndpoint = playerEndpoint + "/pause";
export const currentPlayingEndpoint =
  playerEndpoint + "?market=from_token&additional_types=track";

export const getCurrentPlaybackInfo = () => {
  return async (dispatch) => {
    try {
      fetch(currentPlayingEndpoint, {
        method: "GET",
        headers: authHeader,
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
        })
        .then((data) => {
          console.log(data);
          return dispatch({
            type: GET_TRACK_INFO,
            payload: data,
          });
        });
    } catch (err) {
      console.error(err);
    }
  };
};

export const playTrack = (spotify_URI, deviceID) => {
  return async (dispatch) => {
    try {
      fetch(playEndpoint + "device_id=" + deviceID, {
        method: "PUT",
        body: JSON.stringify(uriParser(spotify_URI)),
        headers: authHeader,
      }).then((e) => {
        if (e.status === 403) {
          console.log("no premium");
        } else {
          console.log("now playing");
          dispatch({ type: PLAYBACK_ON, isPlaying: true, paused: false });
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const resumeTrack = (deviceID) => {
  return async (dispatch) => {
    fetch(playEndpoint + "device_id=" + deviceID, {
      method: "PUT",
      body: "",
      headers: authHeader,
    }).then((e) => {
      if (e.status === 403) {
        console.log("no premium");
      } else {
        console.log("resuming song");
        dispatch({ type: PLAYBACK_ON, isPlaying: true, paused: false });
      }
    });
  };
};

export const pauseTrack = () => {
  return async (dispatch) => {
    fetch(playerEndpoint + "/pause", {
      method: "PUT",
      headers: authHeader,
    }).then((e) => {
      if (e.status === 403) {
        console.log("no premium");
      } else {
        console.log("pausing");
        dispatch({ type: PAUSE_TRACK, isPlaying: false, paused: true });
      }
    });
  };
};

export const nextTrack = (deviceID) => {
  return async (dispatch) => {
    fetch(playerEndpoint + "/next?device_id=" + deviceID, {
      method: "POST",
      body:"",
      headers: authHeader,
    }).then((e) => {
      if (e.status === 403) {
        console.log("no premium")
      } else {
        console.log("playing next track")
        dispatch({ type: PLAYBACK_ON, isPlaying: true, paused: false})
      }
    });
  };
};
