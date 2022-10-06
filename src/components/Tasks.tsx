import { useState } from "react";
import { Task } from "./Task";
import styles from "./Tasks.module.css";

export interface TaskProps {
  id: number;
  taskCompleted: boolean;
  title: string;
}
interface TasksProps {
  tasks: Array<TaskProps>;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export function Tasks({ tasks, completeTask, deleteTask }: TasksProps) {
  const completedTasks = tasks.filter(
    (task) => task.taskCompleted === true
  ).length;
  const tasksLength = tasks.length;
  return (
    <section className={styles.container}>
      <header>
        <div className={styles["range-tasks"]}>
          <p className={styles["created-tasks"]}>Tarefas criadas</p>
          <span>{tasksLength}</span>
        </div>
        <div className={styles["range-tasks"]}>
          <p className={styles["finished-tasks"]}>Concluídas</p>
          <span>
            {completedTasks} de {tasksLength}
          </span>
        </div>
      </header>
      {tasks.map(({ id, taskCompleted, title }) => {
        return (
          <Task
            key={id}
            id={id}
            taskCompleted={taskCompleted}
            title={title}
            completeTask={() => completeTask(id)}
            deleteTask={() => deleteTask(id)}
          />
        );
      })}
    </section>
  );
}
