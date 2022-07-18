import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { TodoItem } from "./TodoItem";

const INITIAL_TODOS = [
  {
    title: "Tarea #1",
    completed: false,
  },
  {
    title: "Tarea #2",
    completed: false,
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

export function TodoList() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const changeTodoState = (todoToModify) => {
    /* Esta es la mejor forma de hacerlo */
    // setTodos((prevState) =>
    //   prevState.map((todo) => {
    //     if (todo.title === todoToModify.title) {
    //       return { ...todo, completed: !todo.completed };
    //     }
    //     return todo;
    //   })
    // );

    const updatedTodosList = todos.map((todo) => {
      if (todo.title === todoToModify.title) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodosList);

    /* La peor manera, iterás como mil veces. */
    // const newTodosList = [...todos];
    // const foundElement = newTodosList.find((todo) => todo.title === todoToModify.title);
    // const indexFound = newTodosList.indexOf(foundElement);
    // newTodosList[indexFound].completed = !newTodosList[indexFound].completed;

    // setTodos(newTodosList);
  };

  const deleteTodo = (todoToDelete) => {
    const updatedTodosList = todos.filter((todo) => todo.title !== todoToDelete.title);

    setTodos(updatedTodosList);
  };

  // TODO: Define function to add a new todo
  const addTodo = (todoTitle) => {
    console.log("TodoList::addTodo::todoTitle:", todoTitle)
    const updatedTodoList = [...todos];
    updatedTodoList.unshift({
      title: todoTitle,
      completed: false,
    });

    setTodos(updatedTodoList);
  };

  return (
    <main>
      {/* Componente aun no definido. Se va a encargar de manejar el nombre de la tarea y ejecutar addTodo cuando corresponda. */}
      <AddTodo addTodo={addTodo}/>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.title} todo={todo} changeTodoState={changeTodoState} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </main>
  );
}
