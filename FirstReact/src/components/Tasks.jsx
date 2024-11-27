import { ChevronRightIcon, DeleteIcon, Trash } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteClick }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-300 rounded-md shadow">
      {tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(tasks.id)}
            className={` bg-slate-400 w-full text-white p-2 rounded-md text-left ${
              tasks.isCompleted && "line-through"
            }`}
          >
            {tasks.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteClick(tasks.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
