import styles from "./Task.module.css";

import { Trash } from "phosphor-react";

interface TaskProps {
  id: number;
  taskCompleted: boolean;
  title: string;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export function Task({
  id,
  taskCompleted,
  title,
  completeTask,
  deleteTask,
}: TaskProps) {
  return (
    <div className={styles.container}>
      <label className={styles["container-check"]}>
        <input
          type="checkbox"
          onChange={() => completeTask(id)}
          checked={taskCompleted}
        />
        <span className={styles.checkmark}></span>
      </label>
      <p className={taskCompleted ? styles.completed : ""}>{title}</p>
      <button onClick={() => deleteTask(id)}>
        <Trash size={20} />
      </button>
    </div>
  );
}
