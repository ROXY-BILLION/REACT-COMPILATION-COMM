function Header() {
  return (
    <header className="page-header">
      <div>
        <span className="welcome-label">Student Portal</span>

        <h1>Student Management</h1>

        <p>
          Track student performance and manage your academic records.
        </p>
      </div>

      <div className="header-date">
        <i className="fa-regular fa-calendar"></i>
        <span>Academic Session 2026</span>
      </div>
    </header>
  );
}

export default Header;