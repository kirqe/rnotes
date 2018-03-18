import * as types from './actionTypes';
import axios from 'axios'

const api = 'http://localhost:3000/api/v1/notes/'

// export const getNotes = () => dispatch => {}
export function getNotes() {
  return dispatch => {
    dispatch(requestNotes())
    axios.get(api)
    .then((res) => dispatch(receiveNotes(res.data)))
  }
}

export function createNote(newNote) {
  return dispatch => {
    axios.post(api, newNote).then((res) => {
      dispatch(pushNoteToList(res.data))
    })
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
  console.log("dispatch REQUEST_NOTES");
  return {
    type: types.REQUEST_NOTES
  }
}

function receiveNotes(notes) {
  console.log("dispatch RECEIVE_NOTES");
  return {
    type: types.RECEIVE_NOTES,
    payload: notes
  }
}

function pushNoteToList(note) {
  console.log("dispatch PUSH_NOTE");
  return {
    type: types.PUSH_NOTE,
    payload: note
  }
}

function removeNote(note_id) {
  console.log("dispatch REMOVE_NOTE");
  return {
    type: types.REMOVE_NOTE,
    note_id: note_id
  }
}
