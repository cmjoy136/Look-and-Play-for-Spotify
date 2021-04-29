import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import albumReducer from './Reducers/albumReducer'
import artistReducer from './Reducers/artistReducer'
import playlistReducer from './Reducers/playlistReducer'
import trackReducer from './Reducers/trackReducer'

const store = createStore(
    combineReducers({
        albums: albumReducer,
        artists: artistReducer,
        playlists: playlistReducer,
        tracks: trackReducer

    }),
    compose(applyMiddleware(thunk))
)

export default store