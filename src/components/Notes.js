import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import marked from "marked"
// import * as notesActions from '../actions/NotesActions'
import { getNotes, deleteNote } from "../actions/NotesActions";

const mapStateToProps = (state) => {
  return { notes: state.notes }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getNotes, deleteNote }, dispatch);
}


class NotesList extends Component {
  componentDidMount() {
    this.props.getNotes()
  }

  render() {
    return (
      <ul className="notes_list">
        {this.props.notes.map((note) => (
          <li className="note_body" key={note.id}>
            <a className="is-pulled-right" onClick={ () => this.props.deleteNote(note.id) }>x</a>
            <div dangerouslySetInnerHTML={{ __html: marked(note.body) }}></div>
          </li>
        ))}
      </ul>
    )
  }
}

const Notes = connect(mapStateToProps, mapDispatchToProps)(NotesList);
export default Notes;
