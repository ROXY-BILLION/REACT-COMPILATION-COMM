function StudentCard({ student }) {
  const initials = student.name
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <article className="student-card">
      <div className="student-name">
        <div className="student-avatar">
          {initials}
        </div>

        <div>
          <h3>{student.name}</h3>
          <span>ID: STU-{String(student.id).padStart(3, "0")}</span>
        </div>
      </div>

      <div className="student-course">
        {student.course}
      </div>

      <div className="student-score">
        <strong>{student.score}%</strong>

        <div className="score-line">
          <span
            className={
              student.status === "Passed"
                ? "score-good"
                : "score-bad"
            }
            style={{ width: `${student.score}%` }}
          ></span>
        </div>
      </div>

      <div>
        {student.status === "Passed" ? (
          <span className="status-badge passed">
            <i className="fa-solid fa-check"></i>
            Passed
          </span>
        ) : (
          <span className="status-badge failed">
            <i className="fa-solid fa-xmark"></i>
            Failed
          </span>
        )}
      </div>

      <button className="more-button">
        <i className="fa-solid fa-ellipsis"></i>
      </button>
    </article>
  );
}

export default StudentCard;