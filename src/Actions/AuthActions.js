import { GET_DEVICEID, GET_PARAMS, GET_TOKEN, LOGIN } from "./ActionTypes";

const scopes =
  "streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing";

export const handleLogin = () => {
  return async (dispatch) => {
    try {
      window.location = `${
        process.env.REACT_APP_SPOTIFY_AUTHORIZE_URL
      }?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${
        process.env.REACT_APP_SPOTIFY_REDIRECT_URL
      }&response_type=token&show_dialog=true&scope=${encodeURIComponent(
        scopes
      )}`;
      dispatch({
        type: LOGIN,
      });
    } catch (err) {
      console.log(err);
    }
  };
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

export const getParams = (params) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_PARAMS,
        params,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAccessToken = (token) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_TOKEN,
        token,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
