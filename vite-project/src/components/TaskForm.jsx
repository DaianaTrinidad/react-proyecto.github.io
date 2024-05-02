import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import React from "react";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    //despues de llenar los campos que se limpie el campo
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Creá tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          //con el value vuelve a su valor inicial
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          //para que cada vez que cargue la aplicación me aparezca el cursor
          //parpadeando
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          //con el value vuelve a su valor inicial
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">
          Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
