
//Adds a task to the list
function addTask() {


    let taskContainer = document.querySelector('.task-container');
    let input = document.querySelector('#input');

    if (input.value === '') {
        alert('Please enter some text');
    } else {


        let task = document.createElement('div');
        task.className = 'task';

        let text = document.createElement('p');
        text.innerText = input.value;

        let rmvDiv = document.createElement('div');
        rmvDiv.className = 'remove-button';
        let rmvButton = document.createElement('i');
        rmvButton.setAttribute('onclick', 'removeSingleTask(this)');
        rmvButton.classList.add('fa-solid', 'fa-xmark');
        rmvDiv.appendChild(rmvButton)

        task.append(text);
        task.append(rmvDiv);

        taskContainer.append(task);


        input.value = '';
    }
}


//Removes a single task from list
function removeSingleTask(elem) {
    elem.parentElement.parentElement.remove();
}


//clear all tasks from the list
function clearTasks() {

    let taskContainer = document.querySelector('.task-container');
    taskContainer.innerHTML = '';


}