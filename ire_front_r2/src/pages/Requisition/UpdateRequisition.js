import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './../../components/UIcomponents/Modal'

import './../../mainStyles.css';

import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";

import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";

const UpdateRequisition = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    

    return (<div>
        <button onClick={openModal}>Open Modal</button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <> 
            <CenteredDisplay width="100%">  
            <Title> Añadir Elemento al Platillo</Title> 

                {/** Encabezados */}
                <HorizontalDisplay width = '100%'>
                    <HorizontalDisplay justifyDirection = 'center'>
                        <Label>Tipo de platillo:</Label>
                        <Label color = 'var(--ire-skyBlue)' fontWeight = 'var(--ire-Regular)' >Lorem</Label>
                    </HorizontalDisplay>
 
                    <HorizontalDisplay justifyDirection = 'center'>
                        <Label>Tipo de platillo:</Label>
                        <Label color = 'var(--ire-skyBlue)' fontWeight = 'var(--ire-Regular)' >Lorem</Label>
                    </HorizontalDisplay>
                    
                </HorizontalDisplay> 

                {/** Inputs para la captura de Ingredientes */}
                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Grupo:</Label>
                        <DropDownSelection>Valor numérico de Ingrediente</DropDownSelection>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Ingrediente:</Label>
                        <DropDownSelection>Unidad del Ingrediente</DropDownSelection>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>
                    
                    
                    <CenteredDisplay width="100%">
                        <Label>Cantidad del Platillo:</Label>
                        <HorizontalDisplay>
                            <EditText>Unidad </EditText>
                            <Label marginTop = '5px'>Lorem</Label>
                        </HorizontalDisplay>
                    </CenteredDisplay>
                        
                    
                    
                </HorizontalDisplay>

                {/** Botones de Confirmación */}
				<HorizontalDisplay>
                	<Button>Cancelar</Button>  
					<WhiteDummySpacer/>
                	<Button>Agregar</Button>  
				</HorizontalDisplay>
                
            </CenteredDisplay> 
        </>
        </Modal>
      </div>)
}

export default UpdateRequisition;