import "./App.css";
function App() {
  const name = "Okeke Divine";
  const role = "Software Engineer";

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-container">
          <a href="#home" className="logo">
            {name}
          </a>

          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="hero" id="home">
          <div className="container">
            <p>Hello, I'm</p>

            <h1>{name}</h1>

            <h2>{role}</h2>

            <p>
              I build modern web applications, mobile apps, games, and
              AI-powered software.
            </p>

            <a href="#about" className="btn">
              Learn More
            </a>
          </div>
        </section>

        {/* About */}
        <section className="about" id="about">
          <div className="container">
            <p>About Me</p>

            <h2>Who I Am</h2>

            <p>
              I am a Computer Science student and aspiring Software Engineer
              passionate about building useful and modern digital products.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="skills" id="skills">
          <div className="container">
            <p>My Skills</p>

            <h2>Technologies I Use</h2>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill}>
                  <h3>{skill}</h3>
                  <p>I use {skill} to build applications.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;