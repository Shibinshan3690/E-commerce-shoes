import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Fixed import statement

const AdminLogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setLoggedIn] = useState(false); // Removed the extra space in the useState declaration

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      setLoggedIn(true);
      navigate("/Adminsection");
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
