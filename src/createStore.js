import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import authReducer from './Reducers/authReducer'
import musicReducer from './Reducers/musicReducer'
import playerReducer from './Reducers/playerReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    combineReducers({
        auth: authReducer,
        music: musicReducer,
        player: playerReducer,

    }),
    composeEnhancers(applyMiddleware(thunk))
)

export default store