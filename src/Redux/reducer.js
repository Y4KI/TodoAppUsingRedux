import {
  ADD_TODOS,
  DELETEACTIVE,
  DELETEALL,
  DELETECOMPLETED,
  DELETE_TASK,
  EDIT_TASK,
  EDIT_VALUE,
  TOGGLE_COMPLETE,
  TOGGLE_EDITING,
  TYPING,
} from "./types";

const initialState = {
  value: "",
  editingValue: "",
  tasks: [
    { title: "Building-Todo-Form", completed: false, editing: false },
    { title: "Building-Todo-List", completed: false, editing: false },
    { title: "Building-Actions", completed: false, editing: false },
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
    case EDIT_VALUE:
      return {
        ...state,
        editingValue: action.payload,
      };
    case EDIT_TASK:
      let submitNewtask = [...state.tasks];
      submitNewtask[action.payload].title = state.editingValue;
      return {
        ...state,
        tasks: [...submitNewtask],
        editingValue: "",
      };

    case TOGGLE_EDITING:
      let editing = [...state.tasks];
      editing[action.payload].editing = !editing[action.payload].editing;
      return {
        ...state,
        tasks: [...editing],
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
      let activeDeleted = active.filter((i) => i.completed === true);
      return {
        ...state,
        tasks: [...activeDeleted],
      };
    case DELETECOMPLETED:
      let completed = [...state.tasks];
      let completedDeleted = completed.filter((i) => i.completed === false);
      return {
        ...state,
        tasks: [...completedDeleted],
      };

    default:
      return state;
  }
};

export default reducer;
