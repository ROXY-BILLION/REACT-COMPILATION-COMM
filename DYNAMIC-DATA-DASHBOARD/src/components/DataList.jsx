import DataCard from "./DataCard";

function DataList({ users }) {
  return (
    <section className="data-section">
      <div className="section-heading">
        <div>
          <p className="section-label">RESULTS</p>
          <h2>Users</h2>
        </div>

        <span className="result-count">
          {users.length} users
        </span>
      </div>

      <div className="data-grid">
        {users.map((user) => (
          <DataCard
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
            website={user.website}
            company={user.company.name}
            city={user.address.city}
          />
        ))}
      </div>
    </section>
  );
}

export default DataList;