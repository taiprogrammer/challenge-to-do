import { Task } from "./Task";
import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <section className={styles.container}>
      <header>
        <div className={styles["range-tasks"]}>
          <p className={styles["created-tasks"]}>Tarefas criadas</p>
          <span>5</span>
        </div>
        <div className={styles["range-tasks"]}>
          <p className={styles["finished-tasks"]}>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </header>
      <Task />
    </section>
  );
}
