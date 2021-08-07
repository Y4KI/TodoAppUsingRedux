import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_ACTIVE,
  DELETE_ALL,
  DELETE_COMPLETED,
  SHOW_ME,
  VIEW_ACTIVE,
  VIEW_ALL,
  VIEW_COMPLETED,
} from "../Redux/types";

function TodoDetails() {
  const tasks = useSelector((state) => state.tasks);
  const view = useSelector((state) => state.view);

  const dispatch = useDispatch();

  const DeleteAll = () => {
    const active = { type: DELETE_ALL };
    dispatch(active);
  };
  const DeleteActive = () => {
    const active = { type: DELETE_ACTIVE };
    dispatch(active);
  };
  const DeleteCompleted = () => {
    const active = { type: DELETE_COMPLETED };
    dispatch(active);
  };

  const showMe = (index) => {
    const active = { type: SHOW_ME, payload: index };
    dispatch(active);
  };
  const viewChange = (e, index) => {
    if (view[0].title === e) {
      const active = { type: VIEW_ALL, payload: index };
      dispatch(active);
      return;
    }
    if (view[1].title === e) {
      const active = { type: VIEW_ACTIVE, payload: index };
      dispatch(active);
      return;
    } else {
      const active = { type: VIEW_COMPLETED, payload: index };
      dispatch(active);
    }
  };

  return (
    <div className="todo-details flex justify-center my-5">
      <div>
        <div className="w-72 flex justify-between text-xs">
          <h1 className="font-bold">All Tasks : {tasks.length}</h1>
          <div className="flex items-center">
            <h1 className="mr-2">DELETE : </h1>
            <div className="todo-details__buttons">
              <button className="mx-1 hover:text-blue-600" onClick={DeleteAll}>
                ALL
              </button>
              <button
                className="mx-1 hover:text-blue-600"
                onClick={DeleteActive}
              >
                ACTIVE
              </button>
              <button
                className=" hover:text-blue-600 mx-1"
                onClick={DeleteCompleted}
              >
                COMPLETED
              </button>
            </div>
          </div>
        </div>
        <div className="w-72 flex justify-between text-xs">
          <div>
            <h1 className="font-bold">
              Active Tasks : {tasks.filter((i) => i.completed === false).length}
            </h1>
            <h1 className="font-bold">
              Completed Tasks :{" "}
              {tasks.filter((i) => i.completed === true).length}
            </h1>
          </div>
          <div className="flex">
            <h1 className="mr-2">VIEW : </h1>
            <div className="todo-details__buttons">
              {view.map((i, index) => (
                <button
                  key={index}
                  className={
                    i.isChosen
                      ? "mx-1 hover:text-blue-600 text-blue-600"
                      : "mx-1 hover:text-blue-600"
                  }
                  onClick={() => {
                    viewChange(i.title, index);
                    return showMe(index);
                  }}
                >
                  {i.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoDetails;
