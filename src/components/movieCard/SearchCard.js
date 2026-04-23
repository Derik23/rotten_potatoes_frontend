import { useNavigate } from "react-router-dom";
import styles from "./SearchCard.module.css";

export default function SearchCard({ title, id, poster, rating, year }) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.searchcard_container}
      onClick={() => navigate(`/MovieDetail/${id}`)}
    >
      <img src={poster} alt={title} className={styles.searchcard_poster} />
      <h4>{title}</h4>
      <p>{year}</p>
      <ul className={`${styles.rating_list}`}>
        {rating?.map((rating, index) => (
          <li key={index}>
            <span>{rating.Source}:</span> {rating.Value}
          </li>
        ))}
      </ul>
    </div>
  );
}
