import React from 'react'
import { connect } from 'react-redux'
import SearchForm from '../Search/SearchForm'
import SearchResults from '../Search/SearchResults'
import { getSearchResult } from '../../Actions/SearchActions'
import Navigation from '../Navigation/Navigation'


const Homepage = (props) => {
  const { isValidSession, history, albums, artists, playlists, tracks} = props
  const results = {albums, artists, playlists, tracks}
  
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
 
  const handleClick = (page) => {
    history.push(page);
  };

  return(
    <div className="homepage">
      <Navigation handleClick={handleClick}/>
      <div className="results-container">
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