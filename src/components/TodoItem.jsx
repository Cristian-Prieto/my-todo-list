export function TodoItem(props) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={props.todo.completed} />
        {props.todo.title}
      </label>
    </li>
  );
}
