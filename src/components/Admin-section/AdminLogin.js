import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const AdminLogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // In a real application, you would perform authentication here.
    // For simplicity, we'll just check if the username and password are 'admin'.
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
      navigate('/Adminsection');
    
    }
  };

  return (
    <div className="container">
      <div className="mt-5">
        <h1 className="display-4">Admin Login</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control" // Customize this class or add custom styles
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control" // Customize this class or add custom styles
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary" // Customize this class or add custom styles
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
