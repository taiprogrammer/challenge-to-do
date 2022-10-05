import { Task } from "./Task";
import styles from "./Tasks.module.css";

export interface TaskProps {
  id: number;
  taskCompleted: boolean;
  title: string;
}
interface TasksProps {
  tasks: Array<TaskProps>;
}

export function Tasks({ tasks }: TasksProps) {
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
      {tasks.map(({ id, taskCompleted, title }) => {
        return <Task id={id} taskCompleted={taskCompleted} title={title} />;
      })}
    </section>
  );
}
