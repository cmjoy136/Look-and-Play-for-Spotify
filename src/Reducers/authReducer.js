import {
  GET_DEVICEID,
  GET_TOKEN,
  GET_EXPIRE_TIME,
  LOGIN,
} from "../Actions/ActionTypes";

const initialState = {
  token: null,
  deviceID: null,
  expireTime: "0",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVICEID:
      return {
        ...state,
        deviceID: action.deviceID,
      };
    case GET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case GET_EXPIRE_TIME:
      return {
        ...state,
        expireTime: action.expireTime,
      };
    case LOGIN:
      return state;
    default:
      return state;
  }
};

export default authReducer;
