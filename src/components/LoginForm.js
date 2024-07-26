// src/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './authModal/AuthModal.css';

const LoginForm = ({ switchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setAlert('Password must be at least 6 characters');
      return;
    }
    // Add your login logic here
    try {
      const response = await axios.post('/api/login', { email, password });
      // handle successful login
    } catch (error) {
      setAlert('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleLogin} className="auth-form">
      {alert && <div className="alert">{alert}</div>}
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
      <div className="switch" onClick={switchToRegister}>Don't have an account? Register</div>
    </form>
  );
};

export default LoginForm;
