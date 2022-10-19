import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TasksForm.css"

function TasksForm(props) {

  const [input, setInput] = useState("")

  const manejarCambio = e => {
    setInput(e.target.value)
  }

  const manejarEnvio = e => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva)
  }

  return (
    <form 
    className="tasks-form"
    onSubmit={manejarEnvio}
    >
      <input 
        className="tasks-input"
        type="text"
        placeholder="Escriba una tarea"
        name="texto" 
        onChange= {manejarCambio}
        />
        <button className="tasks-button">
          Añadir tarea
        </button>
    </form>
  )
}

export default TasksForm