import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um desenvolver mobile",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um desenvolver mobile",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um desenvolver mobile",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = task.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTask(newTasks);
  }

  function onDeleteClick(taskId) {
    const deleteTask = task.filter((task) => task.id != taskId);
    setTask(deleteTask);
  }

  function onAddTaskClick(title, description) {
    const newTask = {
      id: task.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTask([...task, newTask]);
  }

  return (
    <div className="screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500ps] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks
          tasks={task}
          onTaskClick={onTaskClick}
          onDeleteClick={onDeleteClick}
        />
      </div>
    </div>
  );
}

export default App;
