import { useEffect, useState } from "react";

import FavoriteCard from "../movieCard/FavoriteCard";

import styles from "./Favorites.module.css";

import { TbMoodCry } from "react-icons/tb";

import { getFavorites, toggleFavorite } from "../../services/localDb";
import Message from "../layout/Message";

export function Favorites() {
  const [message, setMessage] = useState("");

  const [movies, setMovies] = useState([]);

  function loadFavorites() {
    const data = getFavorites();
    setMovies(data);
  }

  useEffect(() => {
    loadFavorites();
  }, []);

  function handleDeleteFavorite(movie) {
    toggleFavorite(movie);
    setMessage("Deletado com sucesso!");

    setTimeout(() => {
      setMessage("");
    }, 2000);

    loadFavorites();
  }

  return (
    <div>
      <div className={styles.favorites_container}>
        {message && <Message message={message} />}
        <div className={styles.card_container}>
          {movies && movies.length > 0 ? (
            movies.map((mov) => {
              return (
                <FavoriteCard
                  key={mov.imdbID}
                  title={mov.Title}
                  poster={mov.Poster}
                  id={mov.imdbID}
                  handleDeleteFavorite={() => handleDeleteFavorite(mov)}
                />
              );
            })
          ) : (
            <p>
              You've got no favorite movie yet!
              {<TbMoodCry />}
            </p>
          )}{" "}
        </div>
      </div>
    </div>
  );
}
