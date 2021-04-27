import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import { Button } from 'antd'

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
          <Navigation/>
          <Button type='submit' onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
};

export default connect()(LoginPage);
