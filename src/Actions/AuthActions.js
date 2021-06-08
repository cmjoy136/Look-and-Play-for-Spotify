import { GET_DEVICEID } from "./ActionTypes";
import { scopes } from "../Utility/constants";
// Store access token with actions

const tokenEndpoint = "https://accounts.spotify.com/api/token"

export const handleLogin = () => {
  window.location = `${process.env.REACT_APP_SPOTIFY_AUTHORIZE_URL}?client_id=${
    process.env.REACT_APP_SPOTIFY_CLIENT_ID
  }&redirect_uri=${
    process.env.REACT_APP_SPOTIFY_REDIRECT_URL
  }&response_type=token&show_dialog=true&scope=${encodeURIComponent(scopes)}`;
  console.log(window.location);
};

export const getDeviceID = (deviceID) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_DEVICEID,
        deviceID,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// export const getAccessToken = () => {
//   return async (dispatch) => {
//     try {
//       fetch(tokenEndpoint, {
//         method: "POST",
//         headers: {
//           'Authorization': 'Basic '
//         }
//       })
//     }
//   }
// }

// export const nextTrack = (deviceID) => {
//   return async (dispatch) => {
//     fetch(playerEndpoint + "/next?device_id=" + deviceID, {
//       method: "POST",
//       body:"",
//       headers: authHeader,
//     }).then((e) => {
//       if (e.status === 403) {
//         console.log("no premium")
//       } else {
//         console.log("playing next track")
//         dispatch({ type: PLAYBACK_ON, isPlaying: true, paused: false})
//       }
//     });
//   };
// };