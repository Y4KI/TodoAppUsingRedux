import React from "react";
import TodoDetails from "./TodoDetails";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  return (
    <div className="todo container mx-auto p-4 font-sans flex justify-center">
      <div className="todo-box bg-gray-100 px-5 pt-10 pb-20 border-8">
        <h1 className="text-2xl font-bold text-center">Todo APP</h1>
        <TodoForm />
        <TodoList />
        <TodoDetails />
      </div>
    </div>
  );
}

export default Todo;
