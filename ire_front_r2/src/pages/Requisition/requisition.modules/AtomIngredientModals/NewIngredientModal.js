import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../../../../components/UIcomponents/Modal'

import CenteredDisplay from "../../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../../components/Layouts/HorizontalDisplay";
import Title from "../../../../components/Layouts/Title";
import Button from "../../../../components/UIcomponents/Button";
import EditText from "../../../../components/UIcomponents/EditText";

import BigTextArea from "../../../../components/UIcomponents/BigTextArea";
import Label from "../../../../components/UIcomponents/Label";
import DropDownSelection from "../../../../components/UIcomponents/DropDownSelection";

import WhiteDummySpacer from "../../../../components/Layouts/WhiteDummySpacer";

import { motion } from 'framer-motion'; 
import NewRequisitionModal from '../NewRequisitionModal';

const onAccept = () => {
    alert("Le picaste aceptar");
}

const onDecline = () => {
    alert("Le picaste declinar");
}

const NewIngredientModal = ({ isModalOpen, closeModal, fullProps }) => {
    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <> 
            <CenteredDisplay width="90%">  
            <Title> Añadir Ingrediente a la Requisición </Title> 

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Grupo del Ingrediente:</Label>
                        <DropDownSelection>Selecciona el grupo de tu ingrediente</DropDownSelection>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Ingrediente:</Label>
                        <DropDownSelection>Ingrediente a añadir </DropDownSelection>
                    </CenteredDisplay>
                    
                </HorizontalDisplay> 

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Cantidad del ingrediente para <span>{fullProps.services}</span> servicios:</Label>
                        <EditText>Valor numérico de la cantidad del ingrediente</EditText>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>
                        <Label marginTop='50px'>asdf</Label>  
                    
                </HorizontalDisplay>

                <HorizontalDisplay>
                    <Button type='cancelStyle'>Cancelar</Button>  
                    <WhiteDummySpacer/>
                    <Button>Agregar</Button>  
                </HorizontalDisplay>
                
            </CenteredDisplay> 
        </>
        </Modal>
    )
}

export default NewIngredientModal;