import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETEACTIVE, DELETEALL, DELETECOMPLETED } from "../Redux/types";

function TodoDetails() {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const DeleteAll = () => {
    const active = { type: DELETEALL };
    dispatch(active);
  };
  const DeleteActive = () => {
    const active = { type: DELETEACTIVE };
    dispatch(active);
  };
  const DeleteCompleted = () => {
    const active = { type: DELETECOMPLETED };
    dispatch(active);
  };

  return (
    <div className="todo-details flex justify-center my-5">
      <div className="w-72 flex justify-between text-xs">
        <h1 className="font-bold">All Tasks : {tasks.length}</h1>
        <div className="flex items-center">
          <h1 className="mr-2">DELETE : </h1>
          <div className="todo-details__buttons">
            <button className="mx-1" onClick={DeleteAll}>
              ALL{" "}
            </button>
            <button className="mx-1" onClick={DeleteActive}>
              ACTIVE
            </button>
            <button onClick={DeleteCompleted}>COMPLETED</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoDetails;
