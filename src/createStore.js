import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import albumReducer from './Reducers/albumReducer'
import artistReducer from './Reducers/artistReducer'
import playerReducer from './Reducers/playerReducer'
import playlistReducer from './Reducers/playlistReducer'
import trackReducer from './Reducers/trackReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    combineReducers({
        albums: albumReducer,
        artists: artistReducer,
        playlists: playlistReducer,
        tracks: trackReducer,
        player: playerReducer,

    }),
    composeEnhancers(applyMiddleware(thunk))
)

export default store