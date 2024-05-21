import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './../../../components/UIcomponents/Modal'

import CenteredDisplay from "../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "./../../../components/Layouts/HorizontalDisplay";
import Title from "../../../components/Layouts/Title";
import Button from "../../../components/UIcomponents/Button";
import EditText from "../../../components/UIcomponents/EditText";

import BigTextArea from "../../../components/UIcomponents/BigTextArea";
import Label from "../../../components/UIcomponents/Label";
import DropDownSelection from "../../../components/UIcomponents/DropDownSelection";

import WhiteDummySpacer from "../../../components/Layouts/WhiteDummySpacer";

import { motion } from 'framer-motion'; 

const onAccept = () => {
    alert("Le picaste aceptar");
}

const onDecline = () => {
    alert("Le picaste declinar");
}

const UpdateDayForRequisition = ({ isModalOpen, closeModal ,fullProps}) => {

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <> 
            <CenteredDisplay width="100%">  
            <Title> Modificar día de la requisición </Title> 

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Tipo de platillo:</Label>
                        <DropDownSelection selectedOption = {fullProps.type} optionsAvailable={[fullProps.type]}>Valor numérico de Ingrediente</DropDownSelection>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Platillo:</Label>
                        <DropDownSelection selectedOption = {fullProps.dish} optionsAvailable={[fullProps.dish]}>Unidad del Ingrediente</DropDownSelection>
                    </CenteredDisplay>
                    
                </HorizontalDisplay> 

                <HorizontalDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="80%">
                        <Label>Número de Servicios:</Label>
                        <EditText previousValue= {fullProps.services}>Unidad del Ingrediente</EditText>
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
    )
}

export default UpdateDayForRequisition;