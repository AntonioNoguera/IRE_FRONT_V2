import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import MotionOpacityImplementation from '../Layouts/MotionOpacityImplementation';

import './modalStyles.css';

const Modal = ({ isOpen, children, onClose }) => {
  
  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      onClose();

    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]); 
  
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <MotionOpacityImplementation>
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close-button" onClick={onClose}>×</button>
          {children}
        </div>
      </div>
    </MotionOpacityImplementation>,
    document.getElementById('modal-root')
  );
};

export default Modal;
