import { Button } from "./Button";

export function TodoItem({ todo, changeTodoState, deleteTodo }) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={() => changeTodoState(todo)} />
        <span
          style={{
            color: todo.completed ? "gray" : "black",
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.title}
        </span>
        <Button text="X" onClick={() => deleteTodo(todo)} />
      </label>
    </li>
  );
}
