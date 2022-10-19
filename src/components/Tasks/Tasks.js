import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Tasks.css"

function Tasks ({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={ completada 
      ? "task-list-container completed" 
      : "task-list-container"} >
      <div 
        className="task-text" 
        onClick={()=> completarTarea(id)} >
        {texto}
      </div>
      <div 
        className="task-icon-container"
        onClick={()=> eliminarTarea(id)} >
        <AiOutlineClose className="task-icon" />
      </div>
    </div>
  )
}

export default Tasks