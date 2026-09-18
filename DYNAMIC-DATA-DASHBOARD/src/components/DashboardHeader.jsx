function DashboardHeader() {
  return (
    <section className="dashboard-header">
      <div>
        <p className="eyebrow">DYNAMIC DASHBOARD</p>

        <h1>User Directory</h1>

        <p className="header-description">
          Data retrieved from a public API and rendered dynamically with React.
        </p>
      </div>

      <div className="api-badge">
        <i className="fa-solid fa-globe"></i>
        JSONPlaceholder API
      </div>
    </section>
  );
}

export default DashboardHeader;