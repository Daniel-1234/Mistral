document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (taskInput.value.trim() !== '') {
            addTask(taskInput.value);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'task-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleComplete);

        const span = document.createElement('span');
        span.textContent = taskText;

        li.appendChild(checkbox);
        li.appendChild(span);
        taskList.appendChild(li);
    }

    function toggleComplete(e) {
        const taskItem = e.target.parentElement;
        taskItem.classList.toggle('completed');
    }
});