import React, { Component } from "react";
import { connect } from "react-redux";
import { FiPlay, FiPause } from "react-icons/fi";
import {
  playTrack,
  resumeTrack,
  pauseTrack,
  getCurrentPlaybackInfo,
} from "../../Actions/PlayerActions";
import albumArt from "../../Assets/album-art.png";
import { getDeviceID } from "../../Actions/AuthActions";
import { getAccessToken} from "../../Utility/functions";
import MusicControlButton from "./MusicControlButton";
import ProgressBar from "./ProgressBar";

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

  checkPlayback = () => {
    if (!this.props.playback) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <div className="playbar">
        <div className="song-info">
          <img
            className="album-art"
            alt="nothing here yet"
            src={
              this.checkPlayback()
                ? this.props.playback.item.album.images[1].url
                : albumArt
            }
          />
          <div className="song-title-artist">
            <h4>
              {this.checkPlayback() ? this.props.playback.item.name : "Title"}
            </h4>
            <h4>
              {this.checkPlayback()
                ? this.props.playback.item.artists[0].name
                : "Name"}
            </h4>
          </div>
        </div>
        <div className="playbar-controls">
          <div className="playbar-buttons">
            <div className="shuffle"> Shuffle</div>
            <div className="previous">Last</div>
            {!this.props.isPlaying ? (
              <MusicControlButton action="resume" innerContent={<FiPlay />} />
            ) : (
              <MusicControlButton action="pause" innerContent={<FiPause />} />
            )}

            <MusicControlButton action="next" innerContent="Next"/>
            <div className="repeat">Repeat</div>
          </div>
          <ProgressBar progress={this.props.playback !== null ? this.props.playback.progress_ms : null}
           duration={this.props.playback !== null ? this.props.playback.item.duration_ms : null}/>
        </div>
        <div className="volume">{this.props.playback !== null ? `Volume: ${this.props.playback.device.volume_percent}` : "Volume : 0"}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    deviceID: state.auth.deviceID,
    isPlaying: state.player.isPlaying,
    paused: state.player.paused,
    playback: state.player.playback,
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
