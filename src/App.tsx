import styles from "./App.module.css";

import logo from "./assets/logo.svg";

import { AddNewTask } from "./components/AddNewTask";
import { Tasks } from "./components/Tasks";

export function App() {
  return (
    <main>
      <header className={styles.header}>
        <img src={logo} alt="Logo" />
      </header>
      <AddNewTask />
      <Tasks />
    </main>
  );
}
