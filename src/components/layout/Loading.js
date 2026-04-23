import styles from "./Loading.module.css";

export function Loading() {
  return (
    <div>
      <span className={styles.spinner}></span>
    </div>
  );
}
