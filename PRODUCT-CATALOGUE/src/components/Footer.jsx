function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <p>
          © {year} TechStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;