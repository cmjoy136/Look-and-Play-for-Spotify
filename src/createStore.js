import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import artistReducer from './Reducers/artistReducer'
import albumReducer from './Reducers/albumReducer'

const store = createStore(
    combineReducers({
        artists: artistReducer,
        albums: albumReducer

    }),
    compose(applyMiddleware(thunk))
)

export default store