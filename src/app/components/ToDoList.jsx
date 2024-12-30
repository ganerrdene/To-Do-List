"use client";
import { useState } from "react";
import styles from "./ToDoList.module.css";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //   const input = 756

  const addListHandler = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className={styles.taskList}>
      <h1 className={styles.title}>To-Do List</h1>
      <div className={styles.inputSec}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add a new task..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button className={styles.addBtn} onClick={addListHandler}>
          Add
        </button>
      </div>
      <div className={styles.sortBtns}>
        <button className={styles.active}>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div className={styles["list-items"]}>
        No tasks yet. Add one above!
        {todos.map((todo, index) => {
          return <div key={index}>{todo}</div>;
        })}
      </div>
      <div className={styles.footer}>
        Powered by
        <a href="#">Pinecone academy</a>
      </div>
    </div>
  );
}
