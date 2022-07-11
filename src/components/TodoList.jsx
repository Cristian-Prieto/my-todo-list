import { TodoItem } from "./TodoItem";
export function TodoList() {
  const todos = [
    {
      title: "Tarea #1",
      completed: false,
    },
    {
      title: "Tarea #2",
      completed: true,
    },
    {
      title: "Tarea #3",
      completed: false,
    },
    {
      title: "Tarea #4",
      completed: false,
    },
  ];

  return (
    <main>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </main>
  );
}
