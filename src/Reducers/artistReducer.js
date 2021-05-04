import { FETCH_ARTISTS } from '../Actions/ActionTypes'

const artistReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ARTISTS:
            return action.artists
        default:
            return state
    }
}

export default artistReducer