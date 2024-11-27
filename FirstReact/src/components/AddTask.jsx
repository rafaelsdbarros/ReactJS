import { useState } from "react";

function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("default title");
  const [description, setDescription] = useState("default description");

  console.log(title);
  console.log(description);

  return (
    <div className="space-y-4 p-6 bg-slate-300 rounded-md shadow flex flex-col">
      <input
        className="inputStyle"
        type="text"
        placeholder="Digite o titulo da tarefa"
      ></input>
      <input
        className="inputStyle"
        type="text"
        placeholder="Digite a descrição da tarefa"
      ></input>
      <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
