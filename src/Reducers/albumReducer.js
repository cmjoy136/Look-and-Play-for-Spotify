import { FETCH_ALBUMS } from '../Actions/ActionTypes'


const albumReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_ALBUMS:
            console.log(action)
            return action.albums
        default:
            return state
    }
}

export default  albumReducer