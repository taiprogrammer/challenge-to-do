import styles from "./Task.module.css";

import { Trash } from "phosphor-react";

export function Task() {
  return (
    <div className={styles.container}>
      <label className={styles["container-check"]}>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button>
        <Trash size={20} />
      </button>
    </div>
  );
}
