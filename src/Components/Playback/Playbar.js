import React, { Component } from "react";
import { connect } from "react-redux";
import { FiPlay } from "react-icons/fi";
import {
  playTrack,
  resumeTrack,
  pauseTrack,
  getCurrentPlaybackInfo,
} from "../../Actions/PlayerActions";
import { getDeviceID } from "../../Actions/AuthActions";
import { getAccessToken } from "../../Utility/functions";

class Playbar extends Component {
  state = {
    pausedMS: "0",
  };

  playerCheckInterval = null;

  componentDidMount() {
    this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
  }

  checkForPlayer = () => {
    this.player = new window.Spotify.Player({
      name: "Look and Play for Spotify Player",
      getOAuthToken: (cb) => {
        cb(getAccessToken());
      },
      volume: 0.5,
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
      this.props.getDeviceID(device_id);
      console.log("Ready with Device ID", device_id);
    });

    //Not Ready
    this.player.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID is offline", device_id);
    });
  }

  handlePlay = (deviceID) => {
    this.props.resumeTrack(deviceID);
    this.statusInterval = setInterval(
      () => this.props.getCurrentPlaybackInfo(),
      1000
    );
  };

  handlePause = () => {
    this.props.pauseTrack();
    clearInterval(this.statusInterval)
  };

  render() {
    return (
      <div className="playbar">
        <div className="song-info">
          <img alt="nothing here yet" />
          <div className="song-title-artist">
            <h4>Title</h4>
            <h4>Artist</h4>
          </div>
        </div>
        <div className="playbar-controls"></div>
        <div className="shuffle"> Shuffle</div>
        <div className="previous">Last</div>
        {!this.props.isPlaying ? (
          <button
            className="play"
            onClick={() => this.handlePlay(this.props.deviceID)}
          >
            <FiPlay />
          </button>
        ) : (
          <button className="pause" onClick={() => this.handlePause()}>
            Pause
          </button>
        )}

        <div className="next">Next</div>
        <div className="repeat">repeat</div>
        <div className="volume">volume Slider</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    deviceID: state.auth.deviceID,
    isPlaying: state.player.isPlaying,
    paused: state.player.paused,
    deviceID: state.auth.deviceID,
    currentPlaying: state.player.currentPlaying,
  };
};

const mapDispatchToProps = {
  getDeviceID,
  playTrack,
  resumeTrack,
  pauseTrack,
  getCurrentPlaybackInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Playbar);
