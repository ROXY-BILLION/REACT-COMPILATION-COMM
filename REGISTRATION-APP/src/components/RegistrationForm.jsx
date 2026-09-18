import { useState } from "react";

function RegistrationForm({ onRegister }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validateForm() {
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Full name is required.";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters.";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    onRegister("Registration successful!");

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <form
      className="registration-form"
      id="register"
      onSubmit={handleSubmit}
    >
      <div className="form-heading">
        <h2>Create Account</h2>
        <p>Fill in your details to register.</p>
      </div>

      <div className="form-group">
        <label htmlFor="name">Full Name</label>

        <div className="input-wrapper">
          <i className="fa-regular fa-user"></i>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {errors.name && (
          <span className="error-message">
            {errors.name}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>

        <div className="input-wrapper">
          <i className="fa-regular fa-envelope"></i>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {errors.email && (
          <span className="error-message">
            {errors.email}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>

        <div className="input-wrapper">
          <i className="fa-solid fa-lock"></i>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {errors.password && (
          <span className="error-message">
            {errors.password}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">
          Confirm Password
        </label>

        <div className="input-wrapper">
          <i className="fa-solid fa-lock"></i>

          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        {errors.confirmPassword && (
          <span className="error-message">
            {errors.confirmPassword}
          </span>
        )}
      </div>

      <button type="submit" className="submit-button">
        Create Account
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </form>
  );
}

export default RegistrationForm;