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
import SubTitle from '../../../components/Layouts/SubTitle';

const onAccept = () => {
    alert("Le picaste aceptar");
}

const onDecline = () => {
    alert("Le picaste declinar");
}

const DeleteDishForRequisition = ({ isModalOpen, closeModal,fullProps }) => {
 

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <> 
            <CenteredDisplay width="100%">  
            <Title> Eliminar Platillo de la Requisición </Title>
            
            <SubTitle>Estás a punto de eliminar el platillo de la requisición actual esta operación es definitiva e irreversible</SubTitle>
            <WhiteDummySpacer/> 
                <HorizontalDisplay>
                    <div style={{display:'flex',flexDirection : 'row', alignItems:'center',fontSize:'20px'}}>
                        <Label marginTop='0px'>Día: </Label> <WhiteDummySpacer/>  {fullProps.fatherProps.stringDay}  
                    </div>

                    <div style={{display:'flex',flexDirection : 'row', alignItems:'center',fontSize:'20px'}}>
                        <Label marginTop='0px'>Platilo:</Label> <WhiteDummySpacer/>  {fullProps.dish}  
                    </div>


                    <div style={{display:'flex',flexDirection : 'row', alignItems:'center',fontSize:'20px'}}>
                        <Label marginTop='0px'>Servicio:</Label>  <WhiteDummySpacer/> {fullProps.services}
                    </div>
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

export default DeleteDishForRequisition;