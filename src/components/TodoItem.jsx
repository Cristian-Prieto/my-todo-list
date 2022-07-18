import { Button } from "./Button";
import styles from "./TodoItem.module.css";

export function TodoItem({ todo, changeTodoState, deleteTodo }) {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input type="checkbox" checked={todo.completed} onChange={() => changeTodoState(todo)} />
        <span
          style={{
            color: todo.completed ? "gray" : "white",
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.title}
        </span>
        <Button text="X" onClick={() => deleteTodo(todo)} className={styles.delete} />
      </label>
    </li>
  );
}
