import React from 'react';
import './AuthModal.css';

const AuthModal = () => {
  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <form className="auth-form">
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Login</button>
          <button type="button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
