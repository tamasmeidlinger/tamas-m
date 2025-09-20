// BUTTONS

const addBtn = document.querySelector("#add-new-task");
const addTaskContainer = document.querySelector(".add-task-container");
const addTaskBtn = document.querySelector('button[type="submit"]');
const taskName = document.querySelector("#name");
const toDoContainer = document.querySelector(".to-do-container");
const removeBtn = document.querySelector("#remove-btn");

// Create stuff
const createDiv = (text) => {
  const div = document.createElement("div");
  const para = document.createElement("p");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  div.classList.add("task");
  para.innerText = text;
  div.prepend(checkbox);
  div.appendChild(para);
  return div;
};

// EVENT-LISTENERS

addBtn.addEventListener("click", () => {
  addTaskContainer.classList.remove("hidden");
});

addTaskBtn.addEventListener("click", () => {
  let text = taskName.value;
  let task = createDiv(text);
  toDoContainer.appendChild(task);
  addTaskContainer.classList.add("hidden");
  taskName.value = "";
});

removeBtn.addEventListener("click", () => {
  const allTasks = toDoContainer.querySelectorAll(".task");

  allTasks.forEach((task) => {
    const checkbox = task.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      task.remove();
    }
  });
});
