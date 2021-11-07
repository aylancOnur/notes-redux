import "./notes.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const Note = ({ filterText }) => {
  const { notes } = useSelector((state) => state.notes);

  const filteredNotes = notes.filter(({id,note,body}) => {
    return Object.keys({id,note,body}).some((key) => {
      return {id,note,body}[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });
  return (
    <div className="notes-container">
      {filteredNotes.map((note) => (
        <div
          className="note"
          key={note.id}
          style={{ backgroundColor: note.color }}
        >
          <h3 className="note-heading">Note {note.note}</h3>
          <p className="note-body">{note.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Note;
