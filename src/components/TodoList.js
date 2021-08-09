import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import {
  DELETE_TASK,
  EDIT_TASK,
  EDIT_VALUE,
  END_EDITING,
  HIDE_AND_SHOW,
  TOGGLE_COMPLETE,
  TOGGLE_EDITING,
} from "../Redux/types";

function TodoList() {
  const tasks = useSelector((state) => state.tasks);
  const value2 = useSelector((state) => state.editingValue);
  const dispatch = useDispatch();

  const editingValue = (e) => {
    const action = { type: EDIT_VALUE, payload: e.target.value };
    dispatch(action);
  };
  const editTask = (index) => {
    const action = { type: EDIT_TASK, payload: index };
    dispatch(action);
  };
  const deleteTask = (index) => {
    const action = { type: DELETE_TASK, payload: index };
    dispatch(action);
  };
  const toggleEditing = (index, newValue) => {
    const action = { type: TOGGLE_EDITING, payload: index, newValue };
    dispatch(action);
  };
  const endEditing = (index, newValue) => {
    const action = { type: END_EDITING, payload: index, newValue };
    dispatch(action);
  };
  const toggleComplete = (index) => {
    const action = { type: TOGGLE_COMPLETE, payload: index };
    dispatch(action);
  };
  const hideNshow = (index) => {
    const action = { type: HIDE_AND_SHOW, payload: index };
    dispatch(action);
  };

  return (
    <div className="todo-list flex justify-center font-sans">
      <div>
        {tasks?.map((i, index) => (
          <div
            key={index}
            className={
              i.isHidden
                ? "todo-list__items w-48 sm:w-56 md:w-64 shadow-lg lg:w-72 my-2 px-3 py-1 items-center hidden"
                : "todo-list__items w-48 sm:w-56 md:w-64 shadow-lg lg:w-72 my-2 px-3 py-1 items-center block"
            }
          >
            <div
              onDoubleClick={() => toggleEditing(index, i.title)}
              className={
                i.editing
                  ? "hidden flex justify-between"
                  : "flex justify-between"
              }
            >
              <div className="relative items-center">
                <h1
                  onClick={() => {
                    toggleComplete(index);
                    hideNshow(index);
                  }}
                  className={
                    i.completed
                      ? "text-yellow-400 opacity-50 cursor-pointer"
                      : "text-yellow-400 cursor-pointer"
                  }
                >
                  {index + 1}:{i.title}
                </h1>
                <div
                  className={
                    i.completed ? "line absolute top-3" : "line absolute hidden"
                  }
                ></div>
              </div>

              <div className="todo-list__btn flex items-center">
                <FaEdit
                  onClick={() => toggleEditing(index, i.title)}
                  className="mr-1 cursor-pointer text-green-400 hover:text-green-500"
                />
                <BsTrash
                  className="cursor-pointer text-red-400 hover:text-red-500"
                  onClick={() => deleteTask(index)}
                />
              </div>
            </div>

            <div className={i.editing ? "" : "hidden"}>
              <form
                className="items-center flex justify-between"
                onSubmit={(e) => {
                  e.preventDefault();
                  endEditing(index, value2);
                  return editTask(index);
                }}
              >
                <input
                  type="text"
                  onChange={editingValue}
                  value={value2}
                  className="outline-none rounded px-2 w-44 md:w-52 lg:w-56"
                />
                <button>
                  <AiFillCheckCircle className="cursor-pointer text-green-500 hover:text-green-400" />
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
