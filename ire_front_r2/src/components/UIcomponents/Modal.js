import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import MotionOpacityImplementation from '../Layouts/MotionOpacityImplementation';

import './modalStyles.css';

const Modal = ({ isOpen, children, onClose }) => {
  // Manejador para detectar la tecla Esc
  const handleKeyDown = (event) => {
    if (event.keyCode === 27) { // 27 es el código de la tecla Esc
      onClose(); // Llamar a la función onClose que debería cerrar el modal
    }
  };

  // Efecto para añadir y remover el controlador de eventos
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown); // Añadir el evento cuando el modal está abierto
    }

    // Función de limpieza para remover el controlador de eventos cuando el componente se desmonta o el modal se cierra
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]); // Dependencias para reactivar el efecto cuando cambien

  if (!isOpen) return null; // No renderizar nada si el modal no está abierto

  return ReactDOM.createPortal(
    <MotionOpacityImplementation>
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close-button" onClick={onClose}>×</button>
          {children}
        </div>
      </div>
    </MotionOpacityImplementation>,
    document.getElementById('modal-root') // Aquí es donde se anexará el portal
  );
};

export default Modal;
