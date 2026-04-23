import styles from "./ReviewForm.module.css";

export default function ReviewForm({ handleReview, handleChange, formData }) {
  const { name, comment, rating } = formData;

  return (
    <form onSubmit={handleReview} className={styles.form_container}>
      <h3>Write a brief comment about it!</h3>
      <div className={styles.input_section}>
        <label htmlFor="name">Your name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_section}>
        <label htmlFor="comment">What did you think of it? </label>
        <textarea
          type="text"
          id="comment"
          name="comment"
          placeholder="Leave a comment"
          value={comment}
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_section}>
        <label htmlFor="rating">Rate:</label>
        <select
          id="rating"
          name="rating"
          onChange={handleChange}
          value={rating}
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>
      </div>
      <div>
        <button>Post</button>
      </div>
    </form>
  );
}
