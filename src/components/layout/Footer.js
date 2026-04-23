import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer_container}>
      <p>
        Copyright &copy;
        <span>Rotten Potatoes</span>
        All rights reserved
      </p>
    </footer>
  );
}
