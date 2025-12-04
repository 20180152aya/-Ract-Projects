import React, { useState } from "react";
import Navn from "../Navbar/Nav";
import { useNavigate } from "react-router";
export default function Register() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const validate = () => {
  const newErrors = {};

  const email = formData.email.trim();
  const name = formData.name.trim();
  const username = formData.username.trim();
  const password = formData.password;
  const confirmPassword = formData.confirmPassword;

  if (!email) newErrors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(email))
    newErrors.email = "Email format is invalid";

  if (!name) newErrors.name = "Name is required";
  else if (name.length < 4)
    newErrors.name = "Name must be at least 4 characters";
  else if (!/^[A-Za-z]+$/.test(name))
    newErrors.name = "Name must contain letters only";

  if (!username) newErrors.username = "Username is required";
  else if (/\s/.test(username))
    newErrors.username = "Username cannot contain spaces";
  else if (username.length < 4)
    newErrors.username = "Username must be at least 4 characters";
  else if (!/^[A-Za-z]+$/.test(username))
    newErrors.username = "Username must contain letters only";

  if (!password) newErrors.password = "Password is required";
  else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%*#?&])[A-Za-z\d@$%*#?&]{8,}$/.test(
      password
    )
  )
    newErrors.password =
      "Password must be at least 8 chars, with uppercase, lowercase, digit & special char";

  if (confirmPassword !== password)
    newErrors.confirmPassword = "Passwords do not match";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Registered successfully! ${formData.username}`);
      navigate("/")
    }
  };

  return (
    <>
      <Navn />
      <div className="container mt-5" style={{ maxWidth: "500px" }}>
        <h2 className="mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.name}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.username}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.password}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
