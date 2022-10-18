import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  console.log('app');
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  // runs inmediatly after rendering the component
  // As always, a call to a state update
  // function (setNotes in this case) triggers the re-rendering of the component.
  const hook = () => {
    console.log("effect");
    axios
      .get("http://localhost:3001/notes")
      .then((response) => {
        console.log("promise fulfilled");
        setNotes(response.data);
    });
  };

  // an empty array as second parameter make that the effect run on ly one time.
  useEffect(hook, [])
  
  console.log("render", notes.length, "notes");

  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      importan: Math.random() < 0.5,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObject));
    setNewNote("thanks! enter a new note");
  };

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show: <strong>{showAll ? "important" : "all"}</strong>
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
