import React from "react";
import { connect } from "react-redux";
import Navigation from "../Navigation/Navigation";

const LoginPage = () => {

  const {
    REACT_APP_SPOTIFY_CLIENT_ID,
    REACT_APP_SPOTIFY_AUTHORIZE_URL,
    REACT_APP_SPOTIFY_REDIRECT_URL,
  } = process.env;

  const  handleLogin = () => {
        window.location = `${REACT_APP_SPOTIFY_AUTHORIZE_URL}?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${REACT_APP_SPOTIFY_REDIRECT_URL}&response_type=token&show_dialog=true`
  }

  return (
    <div>
      <div className="login-page">
          <h1>Spotify Search and Play</h1>
          <button type='submit' onClick={handleLogin}>Login</button>
          {/* DIV EXPLAINING APP AND FUNCTIONALITY */}
      </div>
    </div>
  );
};

export default connect()(LoginPage);
