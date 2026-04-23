import styles from "./CommonBtn.module.css";

import { TiDelete } from "react-icons/ti";

export default function CommonBtn({ handleEvent }) {
  return (
    <div>
      <TiDelete className={styles.btn} onClick={handleEvent} />
    </div>
  );
}
