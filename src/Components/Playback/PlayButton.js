import React from 'react'


const PlayButton = (props) => {
    const {handlePlay, trackURI} = props
    return(
        <div className="play-button">
            <button onClick={() => handlePlay(trackURI)}>Play</button>
        </div>
    )
}

export default PlayButton