import { FaUserCircle } from "react-icons/fa";

import CommonBtn from "../layout/CommonBtn";
import styles from "./ReviewCard.module.css";

export function ReviewCard({ id, name, comment, rating, handleDelete }) {
  return (
    <div className={styles.review_container}>
      <div className={styles.user_info}>
        <div className={styles.user_name}>
          <FaUserCircle className={styles.user_logo} />
          <span>
            <strong>Name: </strong>
            {name}
          </span>{" "}
        </div>
        <div className={styles.info_section}>
          <p>
            <span>Rating:</span> {rating === 1 ? "star" : `${rating} stars`}
          </p>
          <p>
            <span>Comment:</span> {comment}
          </p>
        </div>
      </div>
      <div>
        <CommonBtn handleEvent={() => handleDelete(id)} text="X" />
      </div>
    </div>
  );
}
