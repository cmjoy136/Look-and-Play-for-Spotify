import { FETCH_ARTISTS } from '../Actions/ActionTypes'

const initialState = {
    artists: {}
}

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTISTS:
            return {...state, artists: action.payload}
        default:
            return state
    }
}

export default artistReducer