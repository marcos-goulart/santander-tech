const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list");

let tasks = [];

function renderTasksOnHtml(taskTitle, done = false) {
    const li = document.createElement("li");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("change", (event) => {
        const liToToggle = event.target.parentElement;
        const spanToToggle = liToToggle.querySelector("span");
        const done = event.target.checked;

        if (done) {
            spanToToggle.style.textDecoration = "line-through";
        } else {
            spanToToggle.style.textDecoration = "none";
        }

        tasks = tasks.map((t) => {
            if (t.title === spanToToggle.textContent) {
                return {
                    title: t.title,
                    done: !t.done,
                };
            }
            return t;
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
    input.checked = done

    const span = document.createElement("span");
    span.textContent = taskTitle;
    if (done) {
        span.style.textDecoration = "line-through";
    }

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("click", (event) => {
        const liToRemove = event.target.parentElement;

        const titleToRemove = liToRemove.querySelector("span");

        tasks = tasks.filter((t) => t.title !== titleToRemove);
        todoListUl.removeChild(liToRemove);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);

    todoListUl.appendChild(li);

    
}

window.onload = () => {
    const tasksOnLocalStorage = localStorage.getItem('tasks')
    
    if (!tasksOnLocalStorage) {
        return
    }

    tasks = JSON.parse(tasksOnLocalStorage)

    tasks.forEach(t => {
        renderTasksOnHtml(t.title, t.done)
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskTitle = taskTitleInput.value;

    if (taskTitle.leght < 3) {
        alert("Task title must be at least 3 characters long");
        return;
    }

    tasks.push({
        title: taskTitle,
        done: false,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasksOnHtml(taskTitle)

    taskTitleInput.value = "";
});
