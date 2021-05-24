import { GET_DEVICEID } from "./ActionTypes";
import { scopes } from "../Utility/constants";
// Store access token with actions

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
