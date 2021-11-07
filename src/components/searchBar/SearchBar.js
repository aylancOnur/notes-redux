import "./searchBar.css";

const handleSubmit = (e) => {
  e.preventDefault();
};

const SearchBar = ({ filterText, setFilterText }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={filterText}
        type="search"
        placeholder="Search.."
        onChange={(e) => setFilterText(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
