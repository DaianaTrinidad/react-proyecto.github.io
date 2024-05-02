import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
import React from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  //nuestro contexto ahora tiene el estado de las tareas,
  //creacion de tareas y eliminacion de tareas

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
