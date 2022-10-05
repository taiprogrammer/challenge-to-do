import { useState } from "react";

import { PlusCircle } from "phosphor-react";

import styles from "./AddNewTask.module.css";
import { TaskProps } from "./Tasks";

interface AddNewTaskProps {
  addNewTask: (task: TaskProps) => void;
}

export function AddNewTask({ addNewTask }: AddNewTaskProps) {
  const [taskText, setTaskText] = useState("");

  function buildTask() {
    const task = {
      id: Math.random() * 100,
      title: taskText,
      taskCompleted: false,
    };

    addNewTask(task);
  }

  return (
    <div className={styles.container}>
      <input
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={buildTask}>
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </div>
  );
}
