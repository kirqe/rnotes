import React from 'react';
import Notes from '../components/Notes'
import NoteForm from '../components/NoteForm'
import '../App.css';

const NotesContainer = () => (
  <div>
    <NoteForm />
    <Notes />
  </div>
)

export default NotesContainer
