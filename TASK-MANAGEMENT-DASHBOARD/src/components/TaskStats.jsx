function TaskStats({ total, completed, remaining }) {
  return (
    <section className="stats">
      <div className="stat-card">
        <span>Total Tasks</span>
        <strong>{total}</strong>
      </div>

      <div className="stat-card">
        <span>Completed</span>
        <strong>{completed}</strong>
      </div>

      <div className="stat-card">
        <span>Remaining</span>
        <strong>{remaining}</strong>
      </div>
    </section>
  );
}

export default TaskStats;