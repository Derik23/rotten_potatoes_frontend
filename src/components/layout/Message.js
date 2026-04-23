import styles from "./Message.module.css";

export default function Message({ message }) {
  return (
    <div>
      <p className={`${styles.message}`}>{message}</p>
    </div>
  );
}
