import React, { useState } from 'react'

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    createNote({
      content: newNote,
      important: false
    })

    setNewNote('')
  }

  return (
    <div>
      <h2>Create a new note</h2>

      <form id='note-form' onSubmit={addNote}>
        <input
          id='note-input'
          value={newNote}
          onChange={handleChange}
        />
        <button id='note-submit' type="submit">save</button>
      </form>
    </div>
  )
}

export default NoteForm