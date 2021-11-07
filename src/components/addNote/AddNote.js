import { useState } from "react";
import "./addNote.css";
import RadioButton from "../radioButton/RadioButton";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../features/notesSlice";

const AddNote = () => {
  const dispatch = useDispatch();
  const [body, setBody] = useState("");
  const [note, setNote] = useState("");
  const [color, setColor] = useState("#f06292");

  const { notes } = useSelector((state) => state.notes);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ note, body, color }));
    setBody("");
  };

  const handleChange = (e) => {
    setNote(notes[notes.length - 1].note + 1);
    setBody(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="add-note-form">
      <textarea
        name="addNote"
        rows="4"
        cols="50"
        placeholder="Enter your note here..."
        value={body}
        onChange={handleChange}
      />
      <div className="buttons">
        <RadioButton setColor={setColor} />
        <Button />
      </div>
    </form>
  );
};

export default AddNote;
