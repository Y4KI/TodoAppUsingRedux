export const initialState = {
  value: "",
  editingValue: "",
  tasks: [
    {
      title: "Task 1",
      completed: false,
      editing: false,
      isHidden: false,
    },
    {
      title: "Task 2",
      completed: false,
      editing: false,
      isHidden: false,
    },
    {
      title: "Task 3",
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
