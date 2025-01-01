import React, { useState, ChangeEvent } from "react";
import { FC } from "react";
import { ITask } from "../Interfaces/ITask";
import { nanoid } from "nanoid";
import { Todo } from "./Todo";

export const AddTodo: FC = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [todoFlag, setTodoFlag] = useState<boolean>(false);
  const [task, setTask] = useState<string>("");
  const [editedId, setEditedId] = useState<string>("");
  // set Task description
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  //addTodo
  const addTodo = () => {
    const newTask = {
      taskDescription: task,
      id: nanoid(),
      isCompleted: false,
    };
    setTaskList([...taskList, newTask]);
    setTask("");
  };

  //deleteTodo
  const deleteTodo = (taskId: string): void => {
    setTaskList([...taskList.filter((task) => task.id !== taskId)]);
  };

  //edit todo
  const editTodo = (taskId: string): void => {
    const task = taskList.find((task) => task.id === taskId);
    setTask(task ? task.taskDescription : "");
    setTodoFlag(true);
    setEditedId(taskId);
  };

  //update edit to do
  const updateEditTodo = () => {
   const updatedList:(ITask)[] = taskList.map((tempTask) => {
    if(tempTask.id === editedId){

        const updateTask:ITask = {
            taskDescription : task,
            id : tempTask.id,
            isCompleted:tempTask.isCompleted,
            
        }
        return updateTask
    }
    else 
     return tempTask;
})
    setTaskList(updatedList);
    setTask("");
    setTodoFlag(false);
  };



  return (
    <>
      <div className="w-2/4 mx-auto">
        <div className="flex  gap-5 justify-between py-10">
          <input
            type="text"
            name="Task"
            id="Task"
            value={task}
            placeholder="Type your task....."
            onChange={handleChange}
            className="rounded-md text-3xl px-4 w-full focus:outline-none focus:ring-2 bg-blue-950 bg-opacity-50 transition duration-200  "
          />
          <button
            onClick={todoFlag ? updateEditTodo :addTodo}
            disabled={task === ""}
            className="bg-blue-950 hover:ring-2 border-blue-400 hover:opacity-80 text-3xl p-4 rounded-md"
          >
            {todoFlag ? "Edit" : "Add"} Task
          </button>
        </div>
        {/* show all todos */}
      </div>
      <div className=" mx-auto w-1/2">
        {taskList.map((task) => (
          <Todo
            task={task}
            key={task.id}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </>
  );
};
