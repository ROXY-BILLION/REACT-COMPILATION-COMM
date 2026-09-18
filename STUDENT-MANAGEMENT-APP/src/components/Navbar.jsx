function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="brand">
          <span className="brand-icon">
            <i className="fa-solid fa-graduation-cap"></i>
          </span>

          <span>EduTrack</span>
        </a>

        <div className="nav-links">
          <a href="#" className="active">
            Dashboard
          </a>

          <a href="#students">Students</a>

          <a href="#reports">Reports</a>

          <a href="#settings">Settings</a>
        </div>

        <div className="profile">
          <div className="profile-avatar">DG</div>

          <div className="profile-info">
            <strong>Divine Gift</strong>
            <span>Administrator</span>
          </div>

          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;