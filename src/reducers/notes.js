import * as types from '../actions/actionTypes'

// const initialState = []
const initialState = {
  notes: [],
  note: {}
}

function notes(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_NOTES:
      return state
    case types.RECEIVE_NOTES:
      return {
        ...state,
        notes: action.payload
      }
    case types.PUSH_NOTE:
      return {
        ...state,
        notes: [...[action.payload], ...state.notes]
      }
    case types.REMOVE_NOTE:
      const after_delete = state.notes.filter(function(note) {
        return note.id !== action.note_id
      })
      return {
        ...state,
        notes: after_delete
      }
    default:
      return state
  }
}

export default notes
