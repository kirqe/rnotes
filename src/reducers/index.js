import { combineReducers } from 'redux'
import notes from './notes'
import noteForm from './noteForm'

const rootReducer = combineReducers({
  notes,
  noteForm
})

export default rootReducer
