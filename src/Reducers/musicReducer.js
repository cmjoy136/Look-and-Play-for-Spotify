import {FETCH_ALBUMS, FETCH_ARTISTS, FETCH_PLAYLISTS, FETCH_TRACKS} from "../Actions/ActionTypes"

const musicReducer = (state= {albums: [], artists: [], playlists: [], tracks:[]}, action) => {
    switch(action.type) {
        case FETCH_ALBUMS:
            console.log(action)
            return {
                ...state,
                albums: action.albums
            }
        case FETCH_ARTISTS:
            return {
                ...state,
                artists: action.artists
            }
        case FETCH_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists
            }
        case FETCH_TRACKS:
            return{
                ...state,
                tracks: action.tracks
            }
        default:
            return state
    }
}

export default musicReducer