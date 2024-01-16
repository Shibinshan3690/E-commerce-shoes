// Import the necessary modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim().toLowerCase();
    const trimmedPassword = password.trim();

    if (trimmedUsername === "" || trimmedPassword === "") {
      toast.error("Enter both username and password");
      return;
    }

    try {
      const url = "http://localhost:5000/api/admin/login";
      const payload = { username: trimmedUsername, password: trimmedPassword };
      const response = await axios.post(url, payload);

      // Handle successful login
      console.log(response.data);

      // Assuming you want to redirect after successful login
      navigate("/Adminsection");
    } catch (error) {
      // Handle login failure
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="container" style={{ width: "400px", padding: "50px" }}>
      <div className="mt-5">
        <h1 className="display-4" style={{ fontSize: "40px", fontFamily: "initial" }}>
          Admin Login
        </h1>
        <div className="form-group">
          <label htmlFor="username" style={{ fontWeight: "lighter" }}>
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" style={{ fontWeight: "lighter" }}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
