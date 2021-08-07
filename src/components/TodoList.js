import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { DELETE_TASK, TOGGLE_COMPLETE } from "../Redux/types";

function TodoList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const deleteTask = (index) => {
    const action = { type: DELETE_TASK, payload: index };
    dispatch(action);
  };
  const toggleComplete = (index) => {
    const action = { type: TOGGLE_COMPLETE, payload: index };
    dispatch(action);
    console.log(tasks);
  };

  return (
    <div className="todo-list flex justify-center font-sans">
      <div>
        {tasks?.map((i, index) => (
          <div
            key={index}
            className="todo-list__items w-64 flex justify-between my-2 bg-green-500 px-3 py-1 items-center"
          >
            <h1
              onClick={() => toggleComplete(index)}
              className={
                i.completed
                  ? "text-yellow-400 line-through opacity-60"
                  : "text-yellow-400"
              }
            >
              {i.title}
            </h1>
            <div className="todo-list__btn flex">
              <FaEdit className="mr-1" /> {/* not working yet */}
              <BsTrash onClick={() => deleteTask(index)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
