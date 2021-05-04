import { FETCH_TRACKS } from '../Actions/ActionTypes'

const trackReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_TRACKS:
            return action.tracks
        default:
            return state
    }
}

export default trackReducer