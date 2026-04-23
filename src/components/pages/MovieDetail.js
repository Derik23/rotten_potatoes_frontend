import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API_URL from "../../services/api.js";

import SearchCardDetail from "../movieCard/SearchCardDetail";
import ReviewForm from "../form/ReviewForm";
import { ReviewCard } from "../movieCard/ReviewCard";
import Message from "../layout/Message.js";

import styles from "./MovieDetail.module.css";

import {
  getReviews,
  addReview,
  deleteReview,
  toggleFavorite,
} from "../../services/localDb";

export default function MovieDetail() {
  const [message, setMessage] = useState("");

  const [movie, setMovie] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    rating: "",
  });

  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/movieDetail/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        console.log(data);
      })
      .catch((error) => console.log("Error", error));
  }, [id]);

  function loadReviews() {
    const data = getReviews(id);
    setReviews(data);
  }

  useEffect(() => {
    if (id) {
      loadReviews();
    }
  }, [id]);

  function handleFavorite(e) {
    e.preventDefault();

    if (!movie) return;

    setMessage("Favoritado com sucesso!");

    setTimeout(() => {
      setMessage("");
    }, 2000);

    toggleFavorite({
      imdbID: movie.imdbID,
      Title: movie.Title,
      Poster: movie.Poster,
    });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleReview(e) {
    e.preventDefault();

    if (!movie) return;

    const newReview = {
      id: Date.now(),
      name: formData.name,
      comment: formData.comment,
      rating: Number(formData.rating),
    };

    addReview(id, newReview);

    setFormData({
      name: "",
      comment: "",
      rating: "",
    });

    loadReviews();
  }

  function handleDelete(reviewId) {
    deleteReview(id, reviewId);
    loadReviews();
  }

  return (
    <div className={styles.container}>
      <>
        {message && <Message message={message} />}
        {movie && (
          <SearchCardDetail
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            year={movie.Year}
            plot={movie.Plot}
            actors={movie.Actors}
            rating={movie.Ratings}
            handleFavorite={handleFavorite}
          />
        )}
      </>

      <div className={styles.ratings_section}>
        {movie && (
          <div>
            <p className={styles.title}>{movie.Title}</p>
            <p className={styles.subtitle}>Ratings & Reviews</p>
          </div>
        )}

        <div className={styles.review_card_section}>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <ReviewCard
                key={review.id}
                id={review.id}
                name={review.name}
                comment={review.comment}
                rating={review.rating}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <p>No reviews yet</p>
          )}
        </div>

        <ReviewForm
          formData={formData}
          handleReview={handleReview}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}
