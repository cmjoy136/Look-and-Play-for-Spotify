import React from "react";
import { connect } from "react-redux";
import spotifyLogo from "../Assets/Spotify_Logo_RGB_Green.png"

const LoginPage = (props) => {

  return (
    <div>
      <div className="login-page">
        <div className="project-title">
          <h1>Look and Play for</h1>
        </div>
        <div className="project-logo">
          <img src={spotifyLogo} alt="Spotify Official Logo"/>
        </div>
          <button type='submit' onClick={props.handleLogin}>Login</button>
          {/* DIV EXPLAINING APP AND FUNCTIONALITY */}
      </div>
    </div>
  );
};

export default connect()(LoginPage);
