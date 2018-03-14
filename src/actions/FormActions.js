import * as types from './actionTypes';
import axios from 'axios'

const api = 'http://localhost:3000/api/v1/notes/'

export function createNote(newNote) {
  return dispatch => {
    axios.post(api, newNote).then((res) => {
      dispatch(pushNoteToList(res.data))
    })
  }
}

// loc

function pushNoteToList(note) {
  return {
    type: types.PUSH_NOTE,
    payload: note
  }
}
