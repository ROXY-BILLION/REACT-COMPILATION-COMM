import StudentCard from "./StudentCard";

function StudentList({ students }) {
  if (students.length === 0) {
    return (
      <div className="students-panel empty-panel">
        <div className="empty-icon">
          <i className="fa-solid fa-user-slash"></i>
        </div>

        <h3>No students found</h3>

        <p>
          Try changing your search or selecting another filter.
        </p>
      </div>
    );
  }

  return (
    <div className="students-panel">
      <div className="table-header">
        <span>Student</span>
        <span>Course</span>
        <span>Score</span>
        <span>Status</span>
        <span></span>
      </div>

      <div className="student-list">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentList;