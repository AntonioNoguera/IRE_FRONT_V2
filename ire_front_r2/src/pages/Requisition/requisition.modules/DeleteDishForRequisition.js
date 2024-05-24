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

import { useSnackbar } from 'notistack'; 

const onDecline = () => {
    alert("Le picaste declinar");
}

const DeleteDishForRequisition = ({ isModalOpen, closeModal,fullProps, passedHook }) => {
    const { enqueueSnackbar } = useSnackbar();
    
    const onAccept = () => {
        const succed = true;

        if( succed ){

            enqueueSnackbar("Platillo eliminado con éxitos", { variant: 'success' });

            passedHook(prev => prev + 1);
            closeModal();
        } else {
            enqueueSnackbar("No fue posible eliminar el platillo, verifica el estado de tu requisición", { variant: 'error' });

        }
    }

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <> 
            <CenteredDisplay width="100%">  
            <Title> Eliminar Platillo de la Requisición </Title>
            
            <SubTitle>Estás a punto de eliminar el platillo de la requisición actual esta operación es definitiva e irreversible</SubTitle>
            <WhiteDummySpacer/> 
                <HorizontalDisplay>
                    <div style={{display:'flex',flexDirection : 'row', alignItems:'center',fontSize:'20px'}}>
                        <Label marginTop='0px'>Día: </Label> <WhiteDummySpacer/>  {fullProps.fatherProps.dayName}  
                    </div>

                    <div style={{display:'flex',flexDirection : 'row', alignItems:'center',fontSize:'20px'}}>
                        <Label marginTop='0px'>Platilo:</Label> <WhiteDummySpacer/>  {fullProps.fullDishProps.name}  
                    </div>


                    <div style={{display:'flex',flexDirection : 'row', alignItems:'center',fontSize:'20px'}}>
                        <Label marginTop='0px'>Servicio:</Label>  <WhiteDummySpacer/> {fullProps.dishServices}
                    </div>
                </HorizontalDisplay>
                 

                <HorizontalDisplay>
                    <Button type='cancelStyle'>Cancelar</Button>  
                    <WhiteDummySpacer/>
                    <Button onClick={onAccept}>Agregar</Button>  
                </HorizontalDisplay>
                
            </CenteredDisplay> 
        </>
        </Modal>
    )
}

export default DeleteDishForRequisition;