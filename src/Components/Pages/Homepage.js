import React from 'react'
import { connect } from 'react-redux'
import SearchForm from '../Search/SearchForm'
import SearchResults from '../Search/SearchResults'
import { getSearchResult } from '../../Actions/SearchActions'


const Homepage = (props) => {
  const { isValidSession, history} = props
  
  const handleSearch = (searchTerm) => {
    if(isValidSession()) {
      props.dispatch(getSearchResult(searchTerm))
    } else{
      history.push({
        pathname: "/",
        session_expired: true
      })
    }
  }

  const {albums, artists, playlists, tracks} = props
  const results = {albums, artists, playlists, tracks}


  return(
    <div>
      <div className="homepage">
        <SearchForm handleSearch={handleSearch}/>
        <SearchResults
          results={results}
          isValidSession={isValidSession}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    artists: state.artists,
    playlists: state.playlists,
    tracks: state.tracks
  }
}

export default connect(mapStateToProps)(Homepage)