function StudentStats({ total, passed, failed }) {
  return (
    <section className="stats-grid">
      <div className="stat-card">
        <div className="stat-icon total-icon">
          <i className="fa-solid fa-users"></i>
        </div>

        <div className="stat-content">
          <span>Total Students</span>
          <strong>{total}</strong>
          <small>
            <i className="fa-solid fa-arrow-up"></i>
            Current enrollment
          </small>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon passed-icon">
          <i className="fa-solid fa-circle-check"></i>
        </div>

        <div className="stat-content">
          <span>Passed</span>
          <strong>{passed}</strong>
          <small className="success-text">
            <i className="fa-solid fa-arrow-up"></i>
            Successful students
          </small>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon failed-icon">
          <i className="fa-solid fa-circle-xmark"></i>
        </div>

        <div className="stat-content">
          <span>Failed</span>
          <strong>{failed}</strong>
          <small className="danger-text">
            <i className="fa-solid fa-circle-info"></i>
            Needs attention
          </small>
        </div>
      </div>
    </section>
  );
}

export default StudentStats;