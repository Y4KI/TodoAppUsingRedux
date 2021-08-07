import {
  ADD_TODOS,
  DELETEACTIVE,
  DELETEALL,
  DELETECOMPLETED,
  DELETE_TASK,
  TOGGLE_COMPLETE,
  TYPING,
} from "./types";

const initialState = {
  value: "",
  tasks: [
    { title: "task 1", completed: false },
    { title: "task 2", completed: false },
    { title: "task 3", completed: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPING:
      return { ...state, value: action.payload };
    case ADD_TODOS:
      return {
        ...state,
        tasks: [...state.tasks, { title: action.payload, completed: false }],
        value: "",
      };
    case DELETE_TASK:
      let tasks = [...state.tasks];
      tasks.splice(action.payload, 1);
      return {
        ...state,
        tasks,
      };
    case TOGGLE_COMPLETE:
      let complete = [...state.tasks];
      complete[action.payload].completed = !complete[action.payload].completed;
      return {
        ...state,
        tasks: [...complete],
      };
    case DELETEALL:
      return {
        ...state,
        tasks: [],
      };
    case DELETEACTIVE:
      let active = [...state.tasks];
      let activeDeleted = active.filter((i) => i.completed === false);
      return {
        ...state,
        tasks: [...activeDeleted],
      };
    case DELETECOMPLETED:
      let completed = [...state.tasks];
      let completedDeleted = completed.filter((i) => i.completed === true);
      return {
        ...state,
        tasks: [...completedDeleted],
      };

    default:
      return state;
  }
};

export default reducer;
