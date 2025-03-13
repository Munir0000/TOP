// Store projects and tasks
let projects = JSON.parse(localStorage.getItem("projects")) || {
  "Default Project": [],
};

let activeProject = Object.keys(projects)[0]; // Load first project as default

// Select elements
const projectList = document.getElementById("project-list");
const projectInput = document.getElementById("project-name");
const addProjectBtn = document.getElementById("add-project");
const projectTitle = document.getElementById("project-title");
const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-name");
const addTaskBtn = document.getElementById("add-task");

// Function to save projects to localStorage
function saveToLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

// Function to render projects in the sidebar
function renderProjects() {
  projectList.innerHTML = ""; // Clear previous list
  for (let project in projects) {
    let li = document.createElement("li");
    li.textContent = project;
    li.classList.add("project-item");

    if (project === activeProject) {
      li.classList.add("active");
    }

    li.addEventListener("click", () => selectProject(project));
    projectList.appendChild(li);
  }
}

// Function to select a project
function selectProject(project) {
  activeProject = project;
  projectTitle.textContent = project;
  renderProjects();
  renderTasks();
}

// Function to add a project
function addProject() {
  let projectName = projectInput.value.trim();
  if (projectName === "" || projects[projectName]) return; // Ignore empty or duplicate projects

  projects[projectName] = []; // Create empty task list
  projectInput.value = ""; // Clear input
  saveToLocalStorage();
  renderProjects();
}

// Function to render tasks for the active project
function renderTasks() {
  taskList.innerHTML = ""; // Clear previous tasks
  projects[activeProject].forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task;
    li.classList.add("task-item");

    // Add delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => removeTask(index));

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Function to add a task
function addTask() {
  let task = taskInput.value.trim();
  if (task === "") return; // Ignore empty input

  projects[activeProject].push(task);
  taskInput.value = "";
  saveToLocalStorage();
  renderTasks();
}

// Function to remove a task
function removeTask(index) {
  projects[activeProject].splice(index, 1);
  saveToLocalStorage();
  renderTasks();
}

// Event Listeners
addProjectBtn.addEventListener("click", addProject);
addTaskBtn.addEventListener("click", addTask);

// Load existing data from localStorage
renderProjects();
renderTasks();
