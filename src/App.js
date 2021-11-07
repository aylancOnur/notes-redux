import { useState } from "react";
import AddNote from "./components/addNote/AddNote";
import Note from "./components/notes/Notes";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  const [filterText, setFilterText] = useState("");

  return (
    <div className="app-container">
      <h1>Notes App</h1>
      <SearchBar filterText={filterText} setFilterText={setFilterText}/>
      <AddNote />
      <Note filterText={filterText} />
    </div>
  );
}

export default App;
