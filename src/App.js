import React from 'react';
import Notes from './components/Notes'
import NoteForm from './components/NoteForm'
import './App.css';

const App = () => (
  <div className="App">
    <NoteForm />
    <Notes />
  </div>
)

export default App
