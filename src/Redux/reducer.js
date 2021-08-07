import {
  ADD_TODOS,
  DELETE_ACTIVE,
  DELETE_ALL,
  DELETE_COMPLETED,
  DELETE_TASK,
  EDIT_TASK,
  EDIT_VALUE,
  SHOW_ME,
  TOGGLE_COMPLETE,
  TOGGLE_EDITING,
  TYPING,
} from "./types";

const initialState = {
  value: "",
  editingValue: "",
  tasks: [
    {
      title: "Building-Todo-Form",
      completed: false,
      editing: false,
    },
    {
      title: "Building-Todo-List",
      completed: false,
      editing: false,
    },
    {
      title: "Building-Actions",
      completed: false,
      editing: false,
    },
  ],
  view: [
    { title: "ALL", isChosen: true },
    { title: "ACTIVE", isChosen: false },
    { title: "COMPLETED", isChosen: false },
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
        editingValue: action.newValue,
        tasks: [...editing],
      };
    case TOGGLE_COMPLETE:
      let complete = [...state.tasks];
      complete[action.payload].completed = !complete[action.payload].completed;
      return {
        ...state,
        tasks: [...complete],
      };
    case DELETE_ALL:
      return {
        ...state,
        tasks: [],
      };
    case DELETE_ACTIVE:
      let active = [...state.tasks];
      let activeDeleted = active.filter((i) => i.completed === true);
      return {
        ...state,
        tasks: [...activeDeleted],
      };
    case DELETE_COMPLETED:
      let completed = [...state.tasks];
      let completedDeleted = completed.filter((i) => i.completed === false);
      return {
        ...state,
        tasks: [...completedDeleted],
      };

    case SHOW_ME:
      let showTask = [...state.view];
      showTask.forEach((e, i) => {
        if (i === action.payload) {
          e.isChosen = true;
        } else {
          e.isChosen = false;
        }
      });
      return {
        ...state,
        view: [...showTask],
      };
    default:
      return state;
  }
};

export default reducer;
