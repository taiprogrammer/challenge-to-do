import { PlusCircle } from "phosphor-react";

import styles from "./AddNewTask.module.css";

export function AddNewTask() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </div>
  );
}
