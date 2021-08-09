export const initialState = {
  value: "",
  editingValue: "",
  tasks: [
    {
      title: "Building-Todo-Form",
      completed: false,
      editing: false,
      isHidden: false,
    },
    {
      title: "Building-Todo-List",
      completed: false,
      editing: false,
      isHidden: false,
    },
    {
      title: "Building-Actions",
      completed: false,
      editing: false,
      isHidden: false,
    },
  ],
  view: [
    { title: "ALL", isChosen: true },
    { title: "ACTIVE", isChosen: false },
    { title: "COMPLETED", isChosen: false },
  ],
};
