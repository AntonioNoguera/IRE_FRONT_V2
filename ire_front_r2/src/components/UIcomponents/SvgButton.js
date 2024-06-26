
import styles from './svgbutton.module.css'; // Importar estilos CSS
import Modal from './Modal';


import NewRequisitionModal from './../../pages/Requisition/requisition.modules/NewRequisitionModal';

import React, { useState } from 'react';
import ReactDOM from 'react-dom'; 

const plus = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
const editCookie = "M9.5 6C10.33 6 11 6.67 11 7.5S10.33 9 9.5 9 8 8.33 8 7.5 8.67 6 9.5 6M11.5 11C10.67 11 10 11.67 10 12.5S10.67 14 11.5 14 13 13.33 13 12.5 12.33 11 11.5 11M11 16C10.17 16 9.5 16.67 9.5 17.5C9.5 18 9.76 18.47 10.16 18.74C7.54 18.04 5.5 15.81 5.09 13.12C5 12.61 5 12.11 5 11.62C5.07 12.39 5.71 13 6.5 13C7.33 13 8 12.33 8 11.5S7.33 10 6.5 10C5.82 10 5.25 10.46 5.07 11.08C5.47 8 7.91 5.5 11 5.07V6.5C11 7.33 11.67 8 12.5 8H13V8.5C13 9.33 13.67 10 14.5 10H16V10.5C16 11.33 16.67 12 17.5 12H18.13L19.39 10.74C19.69 10.44 20.05 10.24 20.44 10.12C20.21 10 20 10 20 10H18V9C18 8 17 8 17 8H15V7C15 6 14 6 14 6H13V4C13 3 12 3 12 3C7.03 3 3 7.03 3 12C3 16.63 6.5 20.44 11 20.94V19.13L12.47 17.66C12.5 17.6 12.5 17.55 12.5 17.5C12.5 16.67 11.83 16 11 16M15 14.5C15 14.69 15.04 14.86 15.1 15.03L17.03 13.1C16.86 13.04 16.69 13 16.5 13C15.67 13 15 13.67 15 14.5M22.85 13.47L21.53 12.15C21.33 11.95 21 11.95 20.81 12.15L19.83 13.13L21.87 15.17L22.85 14.19C23.05 14 23.05 13.67 22.85 13.47M13 19.96V22H15.04L21.17 15.88L19.13 13.83L13 19.96Z";
const deleteTrash = "M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z";
const nextArrow = "M17,12L12,17V14H8V10H12V7L17,12M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12Z"

const stdViewBox = "0 0 24 24";

const SvgButton = (
					{ 	
						type = 'trashCan', size ="50px" ,
						styleName = 'light', 
						fullProps,
						hook,
						overAll = false,
						RenderedComponent = NewRequisitionModal
					}
				) => {

	var finalPath = "";
	var viewBox = stdViewBox;

	const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

	switch (type) {
		case 'trashCan':
			finalPath = deleteTrash; 
			break;
		
		case 'editCookie':
			finalPath = editCookie; 
			break;

		case 'addSign':
			finalPath = plus; 
			break;
		
		case 'Next':
			finalPath = nextArrow; 
			break;
 
	}


	return ( 
		<>
            {/* Investigar como manejar este tipo de implementación, 
			enviar componente de react como parametros, y callbacks */}
				<RenderedComponent
					closeModal={closeModal}
                    isModalOpen={isModalOpen} 
                    fullProps={fullProps}
					passedHook = {hook}
					overAllValue = {overAll}
                />
            

			<button className={styles.button} onClick={openModal}>
				<svg viewBox = {viewBox} className= {styles[styleName]} style = {{width : size , height : size}}>
					<path d = {finalPath} />
				</svg>
			</button>
		</>
	);
};

export default SvgButton;