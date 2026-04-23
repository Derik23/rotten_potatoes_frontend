import { useState } from "react";

import { CiSearch } from "react-icons/ci";

import styles from "./SearchForm.module.css";

export default function SearchForm({ imdb, onSearch }) {
  const [title, setTitle] = useState("");

  function submit(e) {
    e.preventDefault();
    onSearch(title);
  }

  function handleSearch(e) {
    const value = e.target.value;
    setTitle(value);
    onSearch(value);
  }

  return (
    <div>
      <form onSubmit={submit} className={styles.search_form}>
        <input
          name={title}
          id={imdb}
          type="text"
          value={title}
          placeholder="Search"
          onChange={handleSearch}
        />
        <CiSearch className={styles.search_icon} onClick={submit} />
      </form>
    </div>
  );
}
