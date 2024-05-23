import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import MotionOpacityImplementation from '../Layouts/MotionOpacityImplementation';

import './modalStyles.css';

const Modal = ({ isOpen, children, onClose, overAll = false }) => {
	let overAllClass = "modal-overlay";
	let contentClass = "modal-content";

	if(overAll){
		overAllClass = "modal-overAll";
		contentClass = "modal-contentOverAll";
	}

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
			<div className = {overAllClass}>
				<div className={contentClass}>
					<button className="modal-close-button" onClick = {onClose}>×</button>
					{children}
				</div>
			</div>
		</MotionOpacityImplementation>,
		document.getElementById('modal-root')
	);
};

export default Modal;
