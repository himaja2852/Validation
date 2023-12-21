function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var listItem = document.createElement("li");
    listItem.textContent = taskText;
    taskList.appendChild(listItem);

    taskInput.value = "";
}

function logintodo(){
    location.href="index.html";
}