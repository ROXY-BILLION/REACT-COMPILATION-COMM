function DataCard({ name, username, email, phone, website, company, city,}){
  return (
    <article className="data-card">
      <div className="card-top">
        <div className="avatar">
          {name.charAt(0)}
        </div>

        <div className="user-heading">
          <h3>{name}</h3>
          <p>@{username}</p>
        </div>
      </div>

      <div className="card-info">
        <div className="info-item">
          <i className="fa-solid fa-envelope"></i>

          <div>
            <span>Email</span>
            <p>{email}</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-phone"></i>

          <div>
            <span>Phone</span>
            <p>{phone}</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-location-dot"></i>

          <div>
            <span>Location</span>
            <p>{city}</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-building"></i>

          <div>
            <span>Company</span>
            <p>{company}</p>
          </div>
        </div>
      </div>

      <a
        className="website-link"
        href={`https://${website}`}
        target="_blank"
        rel="noreferrer"
      >
        Visit website
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </article>
  );
}

export default DataCard;