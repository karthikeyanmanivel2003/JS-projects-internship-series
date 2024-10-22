
function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText !== '') {
        let taskList = document.getElementById('taskList');

        
        let li = document.createElement('li');
        li.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;
        
        
        li.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

       
        taskList.appendChild(li);

     
        taskInput.value = '';
    } else {
        alert("Please enter a task!");
    }
}


function deleteTask(taskButton) {
    let task = taskButton.parentElement;
    task.remove();
}
