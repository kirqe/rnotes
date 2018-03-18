import React, { Component } from "react"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
// import * as formActions from '../actions/FormActions'

import { createNote } from "../actions/NotesActions"

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createNote }, dispatch);
}

class NewNoteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      note: {
        body: ""
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.isValidNote = this.isValidNote.bind(this);
  }

  handleChange(event) {
    this.setState({ note: { [event.target.name]: event.target.value } })
  }

  isValidNote(note) {
    const { body } = note
    if (body === null || body === "" ||
        body === "\n" || typeof body === "undefined") {
      this.setState({ note: { body: "" }})
      return false;
    }
    return true;
  }

  handleSubmit(event) {
    event.preventDefault()
    const note = this.state.note

    if (this.isValidNote(note)) {
      this.props.createNote(note)
      this.setState({note: { body: "" }})
    }
  }

  handleKeyUp(event) {
    if (event.keyCode === 13 && event.shiftKey) {
      this.handleSubmit(event)
    }
  }

  render() {
    const { body } = this.state.note
    return (
      <form className="notes_form" onSubmit={ this.handleSubmit }>
        <div className="field">
          <label className="label">New note: </label>
          <div className="control">
            <textarea type="text" name="body" className="textarea" placeholder="Markdown is allowed" cols="100" rows="7"
              value={body}
              onChange={this.handleChange}
              onKeyUp={this.handleKeyUp}/>
          </div>
        </div>

        <div className="control">
          <button type="submit" className="button is-success">Save or (Shift + Enter)</button>
        </div>
      </form>
    )
  }
}

// NewNoteForm.propTypes = {
//   createNote: PropTypes.func.createNote.isRequired
// }

const NoteForm = connect(null, mapDispatchToProps)(NewNoteForm)
export default NoteForm;
