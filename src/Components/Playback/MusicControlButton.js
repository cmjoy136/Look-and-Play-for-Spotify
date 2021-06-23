import React, { Component } from "react";
import { connect } from "react-redux";
import {
  playTrack,
  resumeTrack,
  pauseTrack,
  nextTrack,
  prevTrack,
  getCurrentPlaybackInfo,
} from "../../Actions/PlayerActions";

class MusicControlButton extends Component {
  handleClick = (action, uri) => {
    if (action === "play") {
      this.props.playTrack(uri, this.props.deviceID);
      window.statusInterval = setInterval(
        () => this.props.getCurrentPlaybackInfo(),
        1000
      );
    } else if (action === "pause") {
      this.props.pauseTrack();
      clearInterval(window.statusInterval);
    } else if (action === "resume") {
      this.props.resumeTrack(this.props.deviceID);
      window.statusInterval = setInterval(
        () => this.props.getCurrentPlaybackInfo(),
        1000
      );
    } else if (action === "next") {
        this.props.nextTrack(this.props.deviceID)
    } else if (action === "previous") {
      this.props.prevTrack(this.props.deviceID)
    }
  };

  render() {
    return (
      <button
        disabled={this.props.disabled}
        className={this.props.class}
        onClick={() => this.handleClick(this.props.action, this.props.uri)}
      >
        {this.props.innerContent}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    deviceID: state.auth.deviceID,
  };
};
const mapDispatchToProps = {
  playTrack,
  resumeTrack,
  pauseTrack,
  nextTrack,
  prevTrack,
  getCurrentPlaybackInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicControlButton);
