// src/components/authModal/AuthModal.js
import React from 'react';
import Modal from '../Modal';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';

const AuthModal = ({ showLogin, setShowLogin, showRegister, setShowRegister }) => {
  return (
    <>
      <Modal show={showLogin} onClose={() => setShowLogin(false)}>
        <LoginForm switchToRegister={() => {
          setShowLogin(false);
          setShowRegister(true);
        }} />
      </Modal>
      <Modal show={showRegister} onClose={() => setShowRegister(false)}>
        <RegisterForm switchToLogin={() => {
          setShowRegister(false);
          setShowLogin(true);
        }} />
      </Modal>
    </>
  );
};

export default AuthModal;
