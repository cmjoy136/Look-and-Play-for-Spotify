import React, { useState, useEffect } from "react";
import { timeParser } from "../../Utility/functions";

const ProgressBar = (props) => {
  const {progress, duration } = props;
  const [currProgress, setProgress] = useState(0)
  const [songDuration, setDuration] = useState(0)

  useEffect(() => {
      setProgress(progress)
      setDuration(duration)
  },[progress,duration])

  const progressStyles = {
    height: "100%",
    width: `${currProgress !== 0 ? Math.floor((currProgress/songDuration)*100) : 0}%`,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const timeStyles = {
    minWidth: 40,
    padding: 5,
    color: "white",
  };

  return (
    <div className="progress-wrapper">
      <span style={timeStyles} >{currProgress > 0 ? timeParser(Math.floor(currProgress)) : "0:00"}</span>
      <div className="progress-bar">
        <div style={progressStyles} className="current-progress"></div>
      </div>
      <span style={timeStyles}>{songDuration > 0 ? timeParser(Math.floor(songDuration)): "0:00"}</span>
    </div>
  );
};

export default ProgressBar;
