import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [
      { id: 1, note: 1, body: "note1", color: "#f06292" },
      { id: 2, note: 2, body: "note2", color: "#ba68c8" },
      { id: 3, note: 3, body: "note3", color: "#ffd54f" },
      { id: 4, note: 4, body: "note4", color: "#4fc3f7" },
      { id: 5, note: 5, body: "note5", color: "#aed581" },
    ],
  },
  reducers: {
    addNote: (state, action) => {
      const { note, body, color } = action.payload;
      state.notes.push({
        id: nanoid(),
        note,
        body,
        color,
      });
    },
  },
});
export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
