import { useState, useEffect } from "react";

import API_URL from "../../services/api.js";

import SearchCard from "../movieCard/SearchCard";
import styles from "./SearchPage.module.css";
import SearchBox from "../layout/SearchBox.js";
import { Loading } from "../layout/Loading.js";

export default function SeachPage() {
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const STORAGE_KEY = "last_search_movies";

  useEffect(() => {
    async function loadMovies() {
      try {
        setLoading(true);

        const responses = await fetch(`${API_URL}/loadMovies`);

        const data = await responses.json();

        if (!data || data.length === 0) {
          setMovie([]);

          return;
        }

        setMovies(data);
      } catch (err) {
        console.error("Erro ao carregar filmes", err);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  const fetchMovie = async (title) => {
    if (!title || !title.trim()) return;

    setLoading(true);

    const URL = `${API_URL}/movies?search=${encodeURIComponent(title)}`;

    const response = await fetch(URL);
    const data = await response.json();

    if (!data || data.length === 0) {
      setMovie([]);
      setLoading(false);
      return;
    }

    setMovie(data);

    setLoading(false);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  return (
    <div className={styles.container}>
      <SearchBox handleSearch={fetchMovie} />

      <div className={styles.card_container}>
        {loading === true ? (
          <Loading />
        ) : (
          <>
            {movie.length === 0
              ? movies.map((mov) => (
                  <SearchCard
                    key={mov.imdbID}
                    id={mov.imdbID}
                    title={mov.Title}
                    year={mov.Year}
                    poster={mov.Poster}
                    rating={mov.Ratings}
                  />
                ))
              : movie.map((mov) => (
                  <SearchCard
                    key={mov.imdbID}
                    id={mov.imdbID}
                    title={mov.Title}
                    year={mov.Year}
                    poster={mov.Poster}
                    rating={mov.Ratings}
                  />
                ))}
          </>
        )}
      </div>
    </div>
  );
}
