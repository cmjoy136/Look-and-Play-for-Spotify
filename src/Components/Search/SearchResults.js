import React, {useEffect} from 'react'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'
import AlbumList from '../DataLists/AlbumList'


const SearchResults = (props) => {
    const {isValidSession, results} = props
    const { albums, artists, playlists, tracks } = results

    if (!isValidSession){
        <Redirect
            to={{
                pathname: "/",
                state:{
                    session_expired: true,
                }
            }}
        />
    }

    return(
        <div className="search-results">
            <div className='album-results'>
                {albums && (<AlbumList albums={albums}/>)}
            </div>
            <div className='artist-results'>

            </div>
        </div>
    )
}

export default SearchResults