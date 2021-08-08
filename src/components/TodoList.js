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

  return (
    <div className="todo-list flex justify-center font-sans">
      <div>
        {tasks?.map((i, index) => (
          <div
            key={index}
            className={
              i.isHidden
                ? "todo-list__items w-64 my-2 bg-green-500 px-3 py-1 items-center hidden"
                : "todo-list__items w-64 my-2 bg-green-500 px-3 py-1 items-center block"
            }
          >
            <div
              className={
                i.editing
                  ? "hidden flex justify-between"
                  : "flex justify-between"
              }
            >
              <div className="relative items-center">
                <h1
                  onClick={() => toggleComplete(index)}
                  onDoubleClick={() => toggleEditing(index, i.title)}
                  className={
                    i.completed
                      ? "text-yellow-400 opacity-50 cursor-pointer"
                      : "text-yellow-400 cursor-pointer"
                  }
                >
                  {i.title}
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
                  className="mr-1 cursor-pointer text-blue-600 hover:text-blue-700"
                />
                <BsTrash
                  className="cursor-pointer text-red-600 hover:text-red-700"
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
                  className="outline-none rounded px-2 text-sm"
                />
                <button>
                  <AiFillCheckCircle className="cursor-pointer text-indigo-500" />
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
