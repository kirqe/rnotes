import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { ping } from './enhancers/ping'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, ping),
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

  return store
}
