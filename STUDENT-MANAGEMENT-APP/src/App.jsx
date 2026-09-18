import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import StudentStats from "./components/StudentStats";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const students = [
    {
      id: 1,
      name: "John Carter",
      course: "Computer Science",
      score: 87,
      status: "Passed",
    },
    {
      id: 2,
      name: "Sarah Williams",
      course: "Software Engineering",
      score: 94,
      status: "Passed",
    },
    {
      id: 3,
      name: "David Miller",
      course: "Information Technology",
      score: 46,
      status: "Failed",
    },
    {
      id: 4,
      name: "Emily Johnson",
      course: "Computer Science",
      score: 78,
      status: "Passed",
    },
    {
      id: 5,
      name: "Michael Brown",
      course: "Cybersecurity",
      score: 39,
      status: "Failed",
    },
    {
      id: 6,
      name: "Olivia Davis",
      course: "Data Science",
      score: 91,
      status: "Passed",
    },
    {
      id: 7,
      name: "Daniel Wilson",
      course: "Software Engineering",
      score: 72,
      status: "Passed",
    },
    {
      id: 8,
      name: "Sophia Anderson",
      course: "Artificial Intelligence",
      score: 48,
      status: "Failed",
    },
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const passedStudents = students.filter(
    (student) => student.status === "Passed"
  );

  const failedStudents = students.filter(
    (student) => student.status === "Failed"
  );

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" || student.status.toLowerCase() === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="app">
      <Navbar />

      <main>
        <div className="container">
          <Header />

          <StudentStats
            total={students.length}
            passed={passedStudents.length}
            failed={failedStudents.length}
          />

          <section className="student-section">
            <div className="section-top">
              <div>
                <h2>Students</h2>
                <p>Manage and monitor student performance.</p>
              </div>

              <button className="add-button">
                <i className="fa-solid fa-plus"></i>
                Add Student
              </button>
            </div>

            <div className="student-toolbar">
              <div className="search-box">
                <i className="fa-solid fa-magnifying-glass"></i>

                <input
                  type="text"
                  placeholder="Search students..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>

              <div className="filter-buttons">
                <button
                  className={filter === "all" ? "active" : ""}
                  onClick={() => setFilter("all")}
                >
                  All
                </button>

                <button
                  className={filter === "passed" ? "active" : ""}
                  onClick={() => setFilter("passed")}
                >
                  Passed
                </button>

                <button
                  className={filter === "failed" ? "active" : ""}
                  onClick={() => setFilter("failed")}
                >
                  Failed
                </button>
              </div>
            </div>

            <div className="dashboard-grid">
              <StudentList students={filteredStudents} />

              <aside className="performance-card">
                <div className="performance-header">
                  <div>
                    <span className="card-label">Performance</span>
                    <h3>Class Overview</h3>
                  </div>

                  <div className="performance-icon">
                    <i className="fa-solid fa-chart-simple"></i>
                  </div>
                </div>

                <div className="progress-circle">
                  <strong>
                    {Math.round(
                      (passedStudents.length / students.length) * 100
                    )}
                    %
                  </strong>
                  <span>Pass Rate</span>
                </div>

                <div className="progress-info">
                  <div>
                    <span>Passed</span>
                    <strong>{passedStudents.length}</strong>
                  </div>

                  <div>
                    <span>Failed</span>
                    <strong>{failedStudents.length}</strong>
                  </div>
                </div>

                <div className="progress-bar">
                  <span
                    style={{
                      width: `${
                        (passedStudents.length / students.length) * 100
                      }%`,
                    }}
                  ></span>
                </div>

                <p className="performance-note">
                  Overall class performance based on current student scores.
                </p>
              </aside>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;