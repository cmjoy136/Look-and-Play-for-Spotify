import React from 'react'


const MusicControlButton = (props) => {
    const {handlePlay, trackURI} = props
    return(
        <div className="play-button">
            <button onClick={() => handleClick()}>Play</button>
        </div>
    )
}

export default MusicControlButton