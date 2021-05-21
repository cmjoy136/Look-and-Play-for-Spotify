import {
    PLAY_TRACK,
    PAUSE_TRACK,
    NEXT_TRACK,
    PREVIOUS_TRACK,
    SHUFFLE_TRACKS,
    REPEAT_CYCLE,
} from "../Actions/ActionTypes"

const playerReducer = (state = {}, action) => {
    switch(action.type){
        case PLAY_TRACK:
            console.log(action)
            return action
        default:
            return state
    }
}

export default playerReducer