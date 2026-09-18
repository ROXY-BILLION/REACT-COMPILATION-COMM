function DataCard({name,image,rating, year,genres,language,status,summary,url,}) {
  const cleanSummary = summary
    ? summary.replace(/<[^>]*>/g, "")
    : "No description available.";

  return (
    <article className="data-card">
      <div className="poster-wrapper">
        {image ? (
          <img
            src={image}
            alt={name}
            className="poster"
          />
        ) : (
          <div className="poster-placeholder">
            <i className="fa-solid fa-film"></i>
          </div>
        )}

        <div className="rating">
          <i className="fa-solid fa-star"></i>
          {rating || "N/A"}
        </div>
      </div>

      <div className="card-content">
        <div className="card-title-row">
          <h3>{name}</h3>

          <span
            className={`status-badge ${
              status === "Running"
                ? "running"
                : "ended"
            }`}
          >
            {status}
          </span>
        </div>

        <div className="show-meta">
          {year && (
            <span>
              <i className="fa-regular fa-calendar"></i>
              {year}
            </span>
          )}

          {language && (
            <span>
              <i className="fa-solid fa-language"></i>
              {language}
            </span>
          )}
        </div>

        <p className="summary">
          {cleanSummary.length > 120
            ? `${cleanSummary.slice(0, 120)}...`
            : cleanSummary}
        </p>

        <div className="genre-list">
          {genres.slice(0, 3).map((genre) => (
            <span key={genre} className="genre">
              {genre}
            </span>
          ))}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="details-link"
        >
          View details

          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </article>
  );
}

export default DataCard;