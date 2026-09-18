function StatusArea({ loading, error, dataLength }) {
  if (loading) {
    return (
      <div className="status-card">
        <div className="spinner"></div>

        <div>
          <h3>Loading...</h3>
          <p>Fetching users from the API.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-card error-state">
        <div className="status-icon">
          <i className="fa-solid fa-circle-exclamation"></i>
        </div>

        <div>
          <h3>Something went wrong.</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (dataLength === 0) {
    return (
      <div className="status-card">
        <div className="status-icon">
          <i className="fa-solid fa-inbox"></i>
        </div>

        <div>
          <h3>No data found.</h3>
          <p>The API returned an empty result.</p>
        </div>
      </div>
    );
  }

  return null;
}

export default StatusArea;