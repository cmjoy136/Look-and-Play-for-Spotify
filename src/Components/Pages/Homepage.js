import React from 'react'
import { connect } from 'react-redux'
import SearchForm from '../Search/SearchForm'
import SearchResults from '../Search/SearchResults'
import { playTrack } from "../../Actions/PlayerActions"
import { getSearchResult } from '../../Actions/SearchActions'
import Navigation from '../Navigation/Navigation'
import Playbar from '../Playback/Playbar'


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

  const handlePlay = (trackURI) => {
    if(isValidSession()) {
      try{
      props.dispatch(playTrack(trackURI))
      } catch(err){
        console.log(err)
      }
    } 
  }
  console.log(handleClick)
  return(
    <div className="homepage">
      <Navigation handleClick={handleClick}/>
      <div className="results-container">
        <SearchForm handleSearch={handleSearch}/>
        <SearchResults
          results={results}
          isValidSession={isValidSession}
          handlePlay={handlePlay}
        />
      </div>
      <Playbar/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    artists: state.artists,
    playlists: state.playlists,
    tracks: state.tracks,
    player: state.player
  }
}

export default connect(mapStateToProps)(Homepage)