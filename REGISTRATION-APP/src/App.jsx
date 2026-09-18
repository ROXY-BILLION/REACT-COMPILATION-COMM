import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RegistrationForm from "./components/RegistrationForm";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState({
    type: "",
    message: "",
  });

  function handleRegistration(message) {
    setFeedback({
      type: "success",
      message: message,
    });
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="registration-section">
          <div className="container">
            <div className="registration-wrapper">
              <div className="registration-info">
                <span className="section-label">Create Account</span>

                <h2>Join Our Community</h2>

                <p>
                  Create your account by completing the registration form.
                  Your information will only be used for this frontend
                  demonstration.
                </p>

                <div className="info-item">
                  <i className="fa-solid fa-shield-halved"></i>
                  <div>
                    <h3>Simple & Secure</h3>
                    <p>Practice form handling with React state.</p>
                  </div>
                </div>

                <div className="info-item">
                  <i className="fa-solid fa-code"></i>
                  <div>
                    <h3>React Powered</h3>
                    <p>Built using controlled React components.</p>
                  </div>
                </div>
              </div>

              <div className="registration-card">
                <RegistrationForm
                  onRegister={handleRegistration}
                />

                <Feedback
                  type={feedback.type}
                  message={feedback.message}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;