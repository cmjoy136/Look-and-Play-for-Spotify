import  React  from 'react'
import Card  from "./Card"

const ArtistList =(props) => {
    const {artists} = props
    return(
        <>
        <h2>Artists</h2>
        {Object.keys(artists).length > 0 && (
            <div className="artists">
                {artists.items.map((artist, index) => {
                    return(
                        <Card
                        key={index}
                        imgSrc={artist.images[1].url}
                        name={artist.name}
                        spotifyURI={artist.uri}

                        />
                    )
                })}
            </div>
        )}
        </>
    )
}

export default ArtistList