import {legacy_createStore as createStore,applyMiddleware,compose} from 'redux'
import rootReducer from '../Reducer/CombineReducer'
import {thunk} from 'redux-thunk'
const middelware=[thunk]
const store=createStore(rootReducer,
    compose(applyMiddleware(...middelware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
    )
    )

export default store;