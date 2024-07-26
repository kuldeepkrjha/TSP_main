// src/components/Modal.js
import React from 'react';
import './authModal/AuthModal.css';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="auth-modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
