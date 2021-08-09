import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODOS, TYPING } from "../Redux/types";

function TodoForm() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const typing = (e) => {
    const action = { type: TYPING, payload: e.target.value };
    dispatch(action);
  };
  const addtodos = (e) => {
    if (value.trim() === "") {
      alert("Please write task");
      e.preventDefault();
      return;
    }
    e.preventDefault();
    const action = { type: ADD_TODOS, payload: value };
    dispatch(action);
  };

  return (
    <div className="todo-form my-5">
      <form className="flex justify-center" onSubmit={addtodos}>
        <div className="relative lg:w-80 md:w-72 sm:w-60 w-52 items-center">
          <input
            type="text"
            placeholder="Create new todo..."
            className="bg-blue-300 px-3 text-white py-1 w-full placeholder-white rounded-md"
            onChange={typing}
            value={value}
          />
          <button className="bg-blue-500 py-2 lg:px-5 px-3 rounded-md text-white absolute top-0 right-0 text-purple-900">
            <AiFillPlusCircle className="text-green-500 bg-white rounded-full hover:text-green-600" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
