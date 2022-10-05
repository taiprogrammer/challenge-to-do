import { useState } from "react";
import styles from "./App.module.css";

import logo from "./assets/logo.svg";

import { AddNewTask } from "./components/AddNewTask";
import { TaskProps, Tasks } from "./components/Tasks";

export function App() {
  const [tasks, setTasks] = useState<Array<TaskProps>>([
    { id: 1, title: "Task", taskCompleted: false },
  ]);

  function handleCreateNewTask(task: TaskProps) {
    setTasks([...tasks, task]);
  }

  return (
    <main>
      <header className={styles.header}>
        <img src={logo} alt="Logo" />
      </header>
      <AddNewTask addNewTask={handleCreateNewTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} /> : null}
    </main>
  );
}
