import DataCard from "./DataCard";

function DataList({ shows }) {
  return (
    <section className="results-section" id="explore">
      <div className="results-header">
        <div>
          <p className="section-label">EXPLORE</p>
          <h2>Shows</h2>
        </div>

        <span className="result-count">
          {shows.length} results
        </span>
      </div>

      <div className="data-grid">
        {shows.map((show) => (
          <DataCard
            key={show.id}
            name={show.name}
            image={show.image?.medium}
            rating={show.rating?.average}
            year={show.premiered?.slice(0, 4)}
            genres={show.genres}
            language={show.language}
            status={show.status}
            summary={show.summary}
            url={show.url}
          />
        ))}
      </div>
    </section>
  );
}

export default DataList;