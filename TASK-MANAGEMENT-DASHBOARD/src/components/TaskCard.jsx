function TaskCard({ task, onDelete, onToggle }) {
  return (
    <article
      className={`task-card ${
        task.completed ? "completed" : ""
      }`}
    >
      <div className="task-content">
        <button
          className="complete-btn"
          onClick={() => onToggle(task.id)}
        >
          {task.completed ? "✓" : "○"}
        </button>

        <div>
          <h3>{task.title}</h3>

          <span>
            {task.completed ? "Completed" : "Active"}
          </span>
        </div>
      </div>

      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </article>
  );
}

export default TaskCard;