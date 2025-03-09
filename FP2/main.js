const initialState = [];
let currentFilter = 'all';
let nextId = 0;

const renderTasks = (tasks) => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task) => {
        const template = document.getElementById('task-template').content.cloneNode(true);

        const checkbox = template.querySelector('.checkbox');
        const taskText = template.querySelector('.task-text');
        const deleteButton = template.querySelector('.delete-btn');

        checkbox.checked = task.completed;
        taskText.textContent = task.text;

        if (task.completed) {
            template.querySelector('li').classList.add('completed');
        }

        checkbox.addEventListener('change', () => toggleTask(task.id));
        deleteButton.addEventListener('click', () => removeTask(task.id));

        taskList.appendChild(template);
    });
};

const updateState = (newState) => {
    initialState.length = 0;
    initialState.push(...newState);
};

const addTask = (text) => {
    const newTask = { id: nextId++, text, completed: false };
    const newState = [...initialState, newTask];
    updateState(newState);
    applyFilter(currentFilter);
};

const toggleTask = (taskId) => {
    const newState = initialState.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    updateState(newState);
    applyFilter(currentFilter);
};

const removeTask = (taskId) => {
    const newState = initialState.filter(task => task.id !== taskId);
    updateState(newState);
    applyFilter(currentFilter);
};

const filterTasks = (filter) => {
    switch (filter) {
        case 'active':
            return initialState.filter((task) => !task.completed);
        case 'completed':
            return initialState.filter((task) => task.completed);
        default:
            return initialState;
    }
};

const applyFilter = (filter) => {
    currentFilter = filter;
    const filteredTasks = filterTasks(filter);
    renderTasks(filteredTasks);
};

document.getElementById('add-task').addEventListener('click', () => {
    const input = document.getElementById('task-input');
    const text = input.value.trim();
    if (text) {
        addTask(text);
        input.value = '';
    }
});

document.querySelectorAll('input[name="filter"]').forEach((radio) => {
    radio.addEventListener('change', (event) => {
        applyFilter(event.target.value);
    });
});

applyFilter(currentFilter);