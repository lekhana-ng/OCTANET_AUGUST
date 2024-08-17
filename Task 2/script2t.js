// Login Logic
document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple login validation (replace with real authentication in production)
    if (username === 'user' && password === 'password') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('todo-container').style.display = 'block';
    } else {
        alert('Invalid username or password!');
    }
});

// Add Task Logic
document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const reminderInput = document.getElementById('reminder-input');
    const taskText = taskInput.value.trim();
    const reminderTime = reminderInput.value;

    if (taskText !== '') {
        addTask(taskText, reminderTime);
        taskInput.value = ''; // Clear the input field
        reminderInput.value = ''; // Clear the reminder input field
    }
});

function addTask(taskText, reminderTime) {
    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        taskItem.classList.toggle('completed');
        if (checkbox.checked) {
            // Wait a moment before deleting the task (for visual feedback)
            setTimeout(() => {
                taskList.removeChild(taskItem);
            }, 500);
        }
    });

    const taskTextNode = document.createElement('span');
    taskTextNode.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskContent.appendChild(checkbox);
    taskContent.appendChild(taskTextNode);

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    // Set up a reminder if a time was provided
    if (reminderTime) {
        const reminderDate = new Date(reminderTime);
        const now = new Date();
        const timeUntilReminder = reminderDate - now;

        if (timeUntilReminder > 0) {
            setTimeout(() => {
                alert(`Reminder: ${taskText}`);
            }, timeUntilReminder);
        }
    }
}
