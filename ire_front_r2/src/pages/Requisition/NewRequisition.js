import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './../../components/UIcomponents/Modal'

import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";

import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";

const NewRequisition = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


    return (<div>
        <button onClick={openModal}>Open Modal</button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <> 
            <CenteredDisplay width="100%">  
            <Title> Añadir platillo a la requisición </Title> 

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Tipo de platillo:</Label>
                        <DropDownSelection>Valor numérico de Ingrediente</DropDownSelection>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Platillo:</Label>
                        <DropDownSelection>Unidad del Ingrediente</DropDownSelection>
                    </CenteredDisplay>
                    
                </HorizontalDisplay> 

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Selecciona el turno:</Label>
                        <DropDownSelection>Valor numérico de Ingrediente</DropDownSelection>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Número de Servicios:</Label>
                        <EditText>Unidad del Ingrediente</EditText>
                    </CenteredDisplay>
                    
                </HorizontalDisplay>

				<HorizontalDisplay>
                	<Button type='cancelStyle'>Cancelar</Button>  
					<WhiteDummySpacer/>
                	<Button>Agregar</Button>  
				</HorizontalDisplay>
                
            </CenteredDisplay> 
        </>
        </Modal>
      </div>)
}

export default NewRequisition;