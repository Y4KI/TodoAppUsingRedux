import React from "react";
import TodoDetails from "./TodoDetails";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./Todo.css";

function Todo() {
  return (
    <div className="todo container flex justify-center mx-auto">
      <div className="todo-box lg:pt-10 px-5 pt-5 lg:w-96 md:w-80 sm:w-72 w-60 shadow-2xl">
        <h1 className="lg:text-4xl md:text-2xl font-bold text-center">
          ToDo APP
        </h1>
        <TodoForm />
        <TodoList />
        <TodoDetails />
      </div>
    </div>
  );
}

export default Todo;
