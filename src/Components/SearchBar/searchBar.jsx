import s from "./searchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const val = e.target.elements.query.value.trim();
    onSubmit(val);
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input name="query" type="text" placeholder="Search images..." className={s.input} />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
export default SearchBar;