import React from "react";
const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <>
      <li>
        {note.content}
        <button onClick={toggleImportance}>{label}</button>
        <pre>{JSON.stringify(note, null, 2)}</pre>
      </li>
    </>
  );
};

export default Note;
