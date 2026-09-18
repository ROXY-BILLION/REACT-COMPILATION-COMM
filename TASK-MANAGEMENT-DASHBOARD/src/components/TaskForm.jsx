import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (taskTitle.trim() === "") {
      return;
    }

    onAddTask(taskTitle.trim());

    setTaskTitle("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={taskTitle}
        onChange={(event) => setTaskTitle(event.target.value)}
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;