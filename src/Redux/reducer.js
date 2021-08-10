import { initialState } from "./initialValue";
import {
  ADD_TODOS,
  DELETE_ACTIVE,
  DELETE_ALL,
  DELETE_COMPLETED,
  DELETE_TASK,
  EDIT_TASK,
  EDIT_VALUE,
  END_EDITING,
  HIDE_AND_SHOW,
  SHOW_ME,
  TOGGLE_COMPLETE,
  TOGGLE_EDITING,
  TYPING,
  VIEW_ACTIVE,
  VIEW_ALL,
  VIEW_COMPLETED,
} from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPING:
      return { ...state, value: action.payload };
    case ADD_TODOS:
      // let addTodos = [...state.tasks];
      // addTodos.forEach((i) => {
      //   if (i.title === state.value) {
      //     return {
      //       ...state,
      //       value: "",
      //     };
      //   } else {
      //     return {
      //       ...state,
      //       tasks: [
      //         ...state.tasks,
      //         { title: action.payload, completed: false },
      //       ],
      //       value: "",
      //     };
      //   }
      // });
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
      editing.forEach((i) => (i.editing = false));
      editing[action.payload].editing = !editing[action.payload].editing;
      return {
        ...state,
        editingValue: action.newValue,
        tasks: [...editing],
      };
    case END_EDITING:
      let endEditing = [...state.tasks];
      endEditing[action.payload].title = action.newValue;
      endEditing[action.payload].completed = false;
      endEditing.forEach((i) => {
        i.editing = false;
      });
      return {
        ...state,
        tasks: [...endEditing],
      };
    case TOGGLE_COMPLETE:
      let complete = [...state.tasks];
      complete[action.payload].completed = !complete[action.payload].completed;
      return {
        ...state,
        tasks: [...complete],
      };
    case HIDE_AND_SHOW:
      if (state.view[0].isChosen) {
        let view = [...state.tasks];
        view.forEach((e) => (e.isHidden = false));
        return {
          ...state,
          tasks: [...view],
        };
      }
      if (state.view[1].isChosen) {
        let view = [...state.tasks];
        view.forEach((e) => {
          if (e.completed) {
            e.isHidden = true;
          } else {
            e.isHidden = false;
          }
        });
        return {
          ...state,
          tasks: [...view],
        };
      } else {
        let view = [...state.tasks];
        view.forEach((e) => {
          if (!e.completed) {
            e.isHidden = true;
          } else {
            e.isHidden = false;
          }
        });
        return {
          ...state,
          tasks: [...view],
        };
      }
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
    case VIEW_ALL:
      let viewAll = [...state.tasks];
      viewAll.forEach((e) => {
        e.isHidden = false;
        console.log(e);
      });
      return {
        ...state,
        tasks: [...viewAll],
      };

    case VIEW_ACTIVE:
      let viewActive = [...state.tasks];
      viewActive.forEach((e) => {
        if (e.completed) {
          return (e.isHidden = true);
        } else {
          return (e.isHidden = false);
        }
      });
      return {
        ...state,
        tasks: [...viewActive],
      };

    case VIEW_COMPLETED:
      let viewcompleted = [...state.tasks];
      viewcompleted.forEach((e) => {
        if (e.completed === false) {
          return (e.isHidden = true);
        } else {
          return (e.isHidden = false);
        }
      });
      return {
        ...state,
        tasks: [...viewcompleted],
      };

    default:
      return state;
  }
};

export default reducer;
