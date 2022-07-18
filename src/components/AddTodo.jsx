import { useState } from "react"

export function AddTodo({ addTodo }) {
  const [inputValue, setInputValue] = useState("")  

  const handleChange = (event) => {
    // event.target.value siempre tiene el valor del input DESPUES del evento
    setInputValue(event.target.value)
  }

  const handleSaveTodo = () => {
    console.log("Deberiamos guardar esta todo:", inputValue)
    addTodo(inputValue)
  } 
  
  return (
    <div className="form">
      <input
        name="title"
        placeholder="Task title..."
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={(handleSaveTodo)}>SAVE</button>
    </div>
  )
}