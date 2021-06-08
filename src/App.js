import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getDeviceID } from "./Actions/AuthActions";
import { getAccessToken } from "./Utility/functions";
import ErrorPage from "./Containers/ErrorPage";
import Homepage from "./Containers/Homepage";
import LoginPage from "./Containers/LoginPage";
import RedirectPage from "./Containers/RedirectPage";

require('dotenv').config()
class App extends Component {
  scopes =
    "streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing";

  componentDidMount() {
    let expireTime;
    let token;
    try {
      expireTime = JSON.parse(localStorage.getItem("expireTime"));
      token = getAccessToken();
    } catch (err) {
      console.log(err);
      expireTime = "0";
    }
    this.setState({ expireTime, token });
  }

  setExpireTime = (expireTime) => {
    this.setState({ expireTime });
  };

  isValidSession = () => {
    const currentTime = new Date().getTime();
    const expireTime = this.state.expireTime;
    const validSession = currentTime < expireTime;
    return validSession;
  };

 

  handleLogin = () => {
    window.location = `${
      process.env.REACT_APP_SPOTIFY_AUTHORIZE_URL
    }?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${
      process.env.REACT_APP_SPOTIFY_REDIRECT_URL
    }&response_type=token&show_dialog=true&scope=${encodeURIComponent(
      this.scopes
    )}`;
    console.log(window.location);
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact={true}
            render={(props) => (
              <LoginPage handleLogin={this.handleLogin} {...props} />
            )}
          />
          <Route
            path="/redirect"
            render={(props) => (
              <RedirectPage
                isValidSession={this.isValidSession}
                setExpireTime={this.setExpireTime}
                {...props}
              />
            )}
          />
          <Route
            path="/home"
            render={(props) => (
              <Homepage
                {...props}
                isValidSession={this.isValidSession}
                playTrack={this.playTrack}
                pauseTrack={this.pauseTrack}
                playbackInfo={this.getCurrentPlaybackInfo}
              />
            )}
          />
          <Route render={() => <ErrorPage />} />
          {/* Route for profile */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { deviceID: state.auth.deviceID };
};
const mapDispatchToProps = {
  getDeviceID,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
