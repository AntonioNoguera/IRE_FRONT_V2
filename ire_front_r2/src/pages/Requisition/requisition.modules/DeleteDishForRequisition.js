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


const DeleteDishForRequisition = ({ isModalOpen, closeModal, fullProps, passedHook }) => {
    const { enqueueSnackbar } = useSnackbar();

    const onDecline = () => { 
        console.log(fullProps)
        alert("Le picaste declinar");
    }
    
    const onAccept = () => { 

        const dishId = fullProps.dishId;
        const dayId = fullProps.fatherProps.dayId;
        
        const storedRequisitions = JSON.parse(localStorage.getItem('requisitions')) || [];
        
        let dishFound = false;

        storedRequisitions.forEach(requisition => {
            requisition.weekDays.forEach(day => {
                if (day.dayId === dayId) {
                    const dishIndex = day.dishes.findIndex(dish => dish.dishId === dishId);
                    if (dishIndex !== -1) {
                        day.dishes.splice(dishIndex, 1);
                        dishFound = true;
                    }
                }
            });
        });

        if (dishFound) {
            
            localStorage.setItem('requisitions', JSON.stringify(storedRequisitions));
            enqueueSnackbar("Platillo eliminado con éxito", { variant: 'success' });
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
                    <Button onClick={onDecline} type='cancelStyle'>Cancelar</Button>  
                    <WhiteDummySpacer/>
                    <Button onClick={onAccept}>Agregar</Button>  
                </HorizontalDisplay>
                
            </CenteredDisplay> 
        </>
        </Modal>
    )
}

export default DeleteDishForRequisition;