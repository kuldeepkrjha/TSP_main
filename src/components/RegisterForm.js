// src/components/RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './authModal/AuthModal.css';

const RegisterForm = ({ switchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setAlert('Please fill in all fields');
      return;
    }
    try {
      const response = await axios.post('/api/register', { name, email, password });
      // handle successful registration
    } catch (error) {
      setAlert('Error registering user');
    }
  };

  return (
    <form onSubmit={handleRegister} className="auth-form">
      {alert && <div className="alert">{alert}</div>}
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Register</button>
      <div className="switch" onClick={switchToLogin}>Already have an account? Login</div>
    </form>
  );
};

export default RegisterForm;
