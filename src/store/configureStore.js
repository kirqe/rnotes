import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import {ping} from './enhancers/ping'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk, ping))

  return store
}
