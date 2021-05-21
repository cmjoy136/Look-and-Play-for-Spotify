import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { getAccessToken } from "./Utility/functions";
import ErrorPage from "./Components/Pages/ErrorPage";
import Homepage from "./Components/Pages/Homepage";
import LoginPage from "./Components/Pages/LoginPage";
import RedirectPage from "./Components/Pages/RedirectPage";

class App extends Component {
  state = {
    expireTime: "0",
    isPlaying: null,
    token: undefined,
    deviceID: undefined,
  };
  scopes =
    "streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing";

  playerCheckInterval = null;

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
    this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
    return validSession;
  };

  //check for SDK player
  checkForPlayer = () => {
    this.player = new window.Spotify.Player({
      name: "Look and Play for Spotify Player",
      getOAuthToken: (cb) => {
        cb(getAccessToken());
      },
      volume: 1.0,
    });
    this.createEventHandlers();

    if (window.Spotify !== null) {
      clearInterval(this.playerCheckInterval);
    }

    this.player.connect();
  };

  createEventHandlers() {
    //Error handling
    this.player.addListener("initialization_error", ({ message }) => {
      console.error(message);
    });
    this.player.addListener("authentication_error", ({ message }) => {
      console.error(message);
    });
    this.player.addListener("account_error", ({ message }) => {
      console.error(message);
    });
    this.player.addListener("playback_error", ({ message }) => {
      console.error(message);
    });

    //Playback status updates
    this.player.addListener("player_state_changed", (state) => {
      console.log(state);
    });

    //Ready
    this.player.addListener("ready", ({ device_id }) => {
      this.setState({ deviceID: device_id });
      console.log("Ready with Device ID", device_id);
    });

    //Not Ready
    this.player.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID is offline", device_id);
    });
  }

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

  playTrack = (spotify_URI) => {
    const playerEndpoint = "https://api.spotify.com/v1/me/player";
    const playEndpoint = playerEndpoint + "/play?";
    fetch(playEndpoint + "device_id=" + this.state.deviceID, {
      method: "PUT",
      body: JSON.stringify({ uris: [spotify_URI] }),
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        "Content-Type": "application/json",
      },
    })
      .then((e) => {
        if (e.status === 403) {
          console.log("no premium");
        } else {
          console.log("now playing");
          this.setState({
            isPlaying: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

export default App;
