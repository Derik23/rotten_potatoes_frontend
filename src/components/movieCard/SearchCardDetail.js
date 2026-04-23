import { useNavigate } from "react-router-dom";

import styles from "./SearchCardDetail.module.css";

export default function SearchCardDetail({
  title,
  poster,
  year,
  plot,
  actors,
  rating,
  handleFavorite,
}) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div>
        <img src={poster} alt={title} className={styles.poster} />
      </div>
      <div className={styles.details_container}>
        <h3>
          {title} <span>({year})</span>
        </h3>

        <p className={styles.plot}>{plot}</p>
        <p className={styles.actors}>
          <span>Starring:</span> {actors}
        </p>

        <ul className={`${styles.rating_list}`}>
          {rating?.map((rating, index) => (
            <li key={index}>
              <span>{rating.Source}:</span> {rating.Value}
            </li>
          ))}
        </ul>

        <div className={styles.btn_container}>
          <button onClick={() => navigate(`/SearchPage`)}>Back</button>
          <button type="submit" onClick={(e) => handleFavorite(e)}>
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
}
