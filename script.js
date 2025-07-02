let todoele = document.getElementById("taskinfo");
let tasklist = document.getElementById("tasklist");

// Load tasks from localStorage on page load
window.onload = function () {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => addTaskToDOM(task));
};

// Function to add a task to the DOM
function addTaskToDOM(taskText) {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    let taskSpan = document.createElement("span");
    taskSpan.id = "work";
    taskSpan.textContent = taskText;

    let delBtn = document.createElement("button");
    delBtn.classList.add("del");
    delBtn.innerHTML = `<i class="fa fa-trash"></i>`;

    delBtn.onclick = function () {
        taskDiv.remove();
        removeTaskFromStorage(taskText);
    };

    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(delBtn);
    tasklist.appendChild(taskDiv);
}

// Function to remove a task from localStorage
function removeTaskFromStorage(taskText) {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks = savedTasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
}

// Add task event
document.getElementById("add").onclick = function () {
    if (todoele.value.trim().length == 0) {
        alert("Enter a task detail");
    } else {
        let taskText = todoele.value.trim();
        addTaskToDOM(taskText);

        // Save to localStorage
        let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));

        todoele.value = "";
    }
};
