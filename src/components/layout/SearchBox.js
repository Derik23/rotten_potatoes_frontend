import SearchForm from "../form/SearchForm.js";
import styles from "./SearchBox.module.css";

export default function SearchBox({ handleSearch }) {
  return (
    <div className={styles.searchbox_container}>
      <div className={styles.section_search}>
        <h3
          className={`${styles.common_style} ${styles.title}`}
          onClick={() => window.location.reload()}
        >
          <span>Rotten</span> Potatoes
        </h3>
        <SearchForm onSearch={handleSearch} />
        <ul className={`${styles.list} ${styles.common_style}`}>
          <li className={`${styles.list_item} ${styles.common_style}`}>
            Movies
          </li>
          <li className={`${styles.list_item} ${styles.common_style}`}>
            {" "}
            TV Series
          </li>
          <li className={`${styles.list_item} ${styles.common_style}`}>
            Documentaries
          </li>
        </ul>
      </div>
    </div>
  );
}
