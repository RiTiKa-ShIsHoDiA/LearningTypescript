import React, { FC } from "react";
import { ITask } from "../Interfaces/ITask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
  task: ITask;
  deleteTodo(taskId: string): void;
}

export const Todo = ({ task, deleteTodo }: Props) => {
  return (
    <div
      className="bg-blue-950 bg-opacity-20 hover:ring-2 my-4 p-4 rounded-md text-2xl"
      key={task.id}
    >
      <div className="flex justify-between text-center align-middle">
        <p className="my-auto">{task.taskDescription}</p>
        <button
          type="button"
          className="hover:shadow hover:shadow-slate-300 p-4 border rounded-md"
          onClick={() => deleteTodo(task.id)}
        >
          <FontAwesomeIcon icon={faTrash} color="white" />
        </button>
      </div>
    </div>
  );
};
