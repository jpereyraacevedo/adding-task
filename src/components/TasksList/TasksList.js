import React, { useState } from "react";
import Tasks from "../Tasks/Tasks";
import TasksForm from "../TasksForm/TasksForm";
import "./TasksList.css"

function TasksList() {

  const [tareas, setTareas] = useState([])

  const agregarTarea = tarea => {
    if(tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map( tarea => {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return (
    <>
      <TasksForm onSubmit={agregarTarea} />
      <div 
        className="tasks-list-container"
        >
        {
          tareas.map((tarea) => 
            <Tasks 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada} 
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          )
        }
      </div>
    </>
  )
}

export default TasksList