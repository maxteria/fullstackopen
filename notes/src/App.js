import React, { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note ...");
  const [showAll, setShowAll] = useState(true);

  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
        content: newNote,
        date: new Date().toISOString(),
        importan: Math.random() < 0.5,
        id: notes.length + 1
    }
    setNotes(notes.concat(noteObject))
    setNewNote('thanks! enter a new note');
  };

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={()=>setShowAll(!showAll)}>
            show: <strong>{showAll ? 'important' : 'all'}</strong>
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;