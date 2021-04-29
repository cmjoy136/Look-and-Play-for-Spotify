import { FETCH_TRACKS } from '../Actions/ActionTypes'

const initialState = {
    tracks: {}
}

const trackReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRACKS:
            return {...state, tracks: action.payload}
        default:
            return state
    }
}

export default trackReducer