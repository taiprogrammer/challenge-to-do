import styles from "./Task.module.css";

import { Trash } from "phosphor-react";

interface TaskProps {
  id: number;
  taskCompleted: boolean;
  title: string;
}

export function Task({ id, taskCompleted, title }: TaskProps) {
  return (
    <div className={styles.container}>
      <label className={styles["container-check"]}>
        <input type="checkbox" checked={taskCompleted} />
        <span className={styles.checkmark}></span>
      </label>
      <p>{title}</p>
      <button>
        <Trash size={20} />
      </button>
    </div>
  );
}
