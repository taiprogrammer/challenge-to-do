import styles from "./Empty.module.css";
import clipboard from "../assets/clipboard.svg";

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="Clipboard Icon" />
      <p className={styles["bold-text"]}>
        Você ainda não tem tarefas cadastradas
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
