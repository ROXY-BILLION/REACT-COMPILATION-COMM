function StatusArea({
  loading,
  error,
  dataLength,
  onRetry,
}) {
  if (loading) {
    return (
      <div className="status-area">
        <div className="loading-spinner"></div>

        <h3>Loading shows...</h3>

        <p>
          Please wait while we fetch the latest results.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-area error-area">
        <div className="status-icon error-icon">
          <i className="fa-solid fa-circle-exclamation"></i>
        </div>

        <div>
          <h3>Something went wrong</h3>
          <p>{error}</p>
        </div>

        <button
          className="retry-button"
          onClick={onRetry}
        >
          <i className="fa-solid fa-rotate-right"></i>
          Try Again
        </button>
      </div>
    );
  }

  if (dataLength === 0) {
    return (
      <div className="status-area empty-area">
        <div className="status-icon">
          <i className="fa-solid fa-film"></i>
        </div>

        <h3>No shows found</h3>

        <p>
          Try searching with a different name or keyword.
        </p>
      </div>
    );
  }

  return null;
}

export default StatusArea;