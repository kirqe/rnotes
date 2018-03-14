import * as types from './actionTypes';
import axios from 'axios'

const api = 'http://localhost:3000/api/v1/notes/'

export function getNotes() {
  console.log("get notes11");
  return dispatch => {
    dispatch(requestNotes())
    axios.get(api).then((res) => dispatch(receiveNotes(res.data)))
  }
}

export function deleteNote(note) {
  return dispatch => {
    axios.delete(api + note)
    .then((res) => dispatch(removeNote(note))
  )}
}

// loc

function requestNotes() {
  return {
    type: types.REQUEST_NOTES
  }
}

function receiveNotes(notes) {
  return {
    type: types.RECEIVE_NOTES,
    payload: notes
  }
}

function removeNote(note_id) {
  return {
    type: types.REMOVE_NOTE,
    note_id: note_id
  }
}
