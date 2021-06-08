import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAccessToken, getParams } from "../Actions/AuthActions";
import { getParamValues } from "../Utility/functions";

const RedirectPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { setExpireTime } = props;
  useEffect(() => {
    try {
      const params = getParamValues(window.location.hash);
      dispatch(getParams(params));
      const expireTime = new Date().getTime() + params.expires_in * 1000;
      dispatch(getAccessToken(params.access_token));
      localStorage.setItem("params", JSON.stringify(params));
      localStorage.setItem("expireTime", expireTime);
      setExpireTime(expireTime);
      history.push("/home");
    } catch (err) {
      history.push("/");
      console.log(err);
    }
  });
  return null;
};

export default RedirectPage;
