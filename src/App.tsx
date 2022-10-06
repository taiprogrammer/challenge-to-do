import { useState } from "react";
import styles from "./App.module.css";

import logo from "./assets/logo.svg";

import { AddNewTask } from "./components/AddNewTask";
import { TaskProps, Tasks } from "./components/Tasks";

export function App() {
  const [tasks, setTasks] = useState<Array<TaskProps>>([]);

  function handleCreateNewTask(task: TaskProps) {
    setTasks([...tasks, task]);
  }

  function handleCompleteTask(id: number) {
    tasks.map((task) => {
      if (task.id === id) {
        setTasks([
          {
            id: task.id,
            taskCompleted: !task.taskCompleted,
            title: task.title,
          },
        ]);
      }
    });
  }

  function handleDeleteTask(id: number) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <main>
      <header className={styles.header}>
        <img src={logo} alt="Logo" />
      </header>
      <AddNewTask addNewTask={handleCreateNewTask} />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          completeTask={handleCompleteTask}
          deleteTask={handleDeleteTask}
        />
      ) : null}
    </main>
  );
}
