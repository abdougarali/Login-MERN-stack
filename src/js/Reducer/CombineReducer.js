import {combineReducers} from 'redux'
import authReducer from './authReducer'

const rootReducer=(combineReducers({authReducer}))
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default rootReducer;