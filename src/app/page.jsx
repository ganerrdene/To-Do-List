import styles from "./page.module.css";
import ToDoList from "./components/ToDoList";

export default function Home() {
  return (
    <div className={styles.home}>
      <ToDoList />
    </div>
  );
}
