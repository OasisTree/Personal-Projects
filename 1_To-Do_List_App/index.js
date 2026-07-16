var tasks = [];

function addTask() {
  const taskInput = document.querySelector(".task-input");
  const taskText = taskInput.value;
  if (!taskText) return;

  document.querySelector(".empty-message").style.display = "none";
  document.querySelector(".task-table").style.display = "table";

  const tbody = document.querySelector(".task-table tbody");
  const row = tbody.insertRow();

  row.innerHTML = `
    <td>${taskText}</td>
    <td>
        <input type="text" class="subject-input" />
    </td>
    <td>
        <input type="date" class="duedate-input" />
    </td>
    <td>
        <select name="type-input" id="">
            <option value="none">None</option>
            <option value="exam">Assignment</option>
            <option value="quiz">Quiz</option>
            <option value="exam">Exam</option>
            <option value="club">Club</option>
            <option value="lab">Lab</option>
            <option value="project">Project</option>
            <option value="group-activity">Group Activity</option>
        </select>
    </td>
    <td>
        <select name="status-input" id="">
            <option value="not-started">Not started</option>
            <option value="in-progress">In progress</option>
            <option value="done">Done</option>
        </select>
    </td>
  `;
  taskInput.value = "";
}

if (tasks.length === 0) {
  document.querySelector(".empty-message").style.display = "flex";
  document.querySelector(".task-table").style.display = "none";
} else {
}

document.querySelector(".btn").addEventListener("click", addTask);
