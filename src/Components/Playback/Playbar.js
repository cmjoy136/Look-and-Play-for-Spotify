import React from 'react'


const Playbar = () => {
    return(
        <div className="playbar">
            <div className="song-info">
                <img/>
                <div className="song-title-artist">
                    <h4>Title</h4>
                    <h4>Artist</h4>
                </div>
            </div>
            <div className="playbar-controls"></div>
                <div className="shuffle"></div>
                <div className="previous"></div>
                <div className="play"></div>
                <div className="next"></div>
                <div className="repeat"></div>
            <div className="volume"></div>
        </div>
    )
}

export default Playbar