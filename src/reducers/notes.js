import * as types from '../actions/actionTypes'

const initialState = []

function notes(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_NOTES:
      return state
    case types.RECEIVE_NOTES:
        return [...state, ...action.payload]
    case types.PUSH_NOTE:
        return [...[action.payload], ...state]
    case types.REMOVE_NOTE:
        return state.filter(function(note) {
          return note.id !== action.note_id
        })
    default:
      return state
  }
}

export default notes
