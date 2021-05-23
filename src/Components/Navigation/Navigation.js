import React from "react";

const Navigation = (props) => {
  //Add Buttons for navigation
  // invisble background
  // highlight hover

  return (
    <div className="navigation">
      <h1>Spotify Lookup</h1>
      <div className="navbutton-container">
        <button onClick={() => props.handleClick()}>Pause</button>
      </div>
    </div>
  );
};

export default Navigation;
