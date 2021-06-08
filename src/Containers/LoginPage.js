import React from "react";
import { connect, useDispatch } from "react-redux";
import { handleLogin as login } from "../Actions/AuthActions";
import spotifyLogo from "../Assets/Spotify_Logo_RGB_Green.png";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="login-page">
        <div className="project-title">
          <h1>Look and Play for</h1>
        </div>
        <div className="project-logo">
          <img src={spotifyLogo} alt="Spotify Official Logo" />
        </div>
        <button type="submit" onClick={() => dispatch(login())}>
          Login
        </button>
        <div className="explanation">
          <p>
            This is a proof of concept project utilizing React, Redux, and
            React/Redux hooks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default connect()(LoginPage);
