import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-icon">
        <i className="fa-solid fa-compass"></i>
      </div>

      <p className="eyebrow">ERROR 404</p>

      <h1>Page Not Found</h1>

      <p>
        The page you're looking for doesn't exist or may
        have been moved.
      </p>

      <Link to="/" className="primary-button">
        <i className="fa-solid fa-house"></i>
        Back Home
      </Link>
    </main>
  );
}

export default NotFound;