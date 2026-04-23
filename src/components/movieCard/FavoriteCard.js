import CommonBtn from "../layout/CommonBtn";
import { useNavigate } from "react-router-dom";

import styles from "./FavoriteCard.module.css";

export default function FavoriteCard({
  title,
  id,
  poster,
  plot,
  year,
  handleDeleteFavorite,
}) {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.delete_btn}>
        <CommonBtn handleEvent={() => handleDeleteFavorite(id)} />
      </div>
      <div
        className={styles.favorite_card_container}
        onClick={() => navigate(`/MovieDetail/${id}`)}
      >
        <img src={poster} alt={title} className={styles.poster} />
        <div>
          <h4>{title}</h4>
          <p>{year}</p>
          <p>{plot}</p>
        </div>
      </div>
    </div>
  );
}
