import React, { useState, useEffect } from 'react';
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
import { useSnackbar } from 'notistack';



const UpdateDayForRequisition = ({ isModalOpen, closeModal ,fullProps, passedHook}) => { 
    const onDecline = () => {
        console.log(fullProps);
    }
    //Hooks
    const { enqueueSnackbar } = useSnackbar();

    const storedTypes = JSON.parse(localStorage.getItem('extras')).Tipos || [];
    const storedDish = JSON.parse(localStorage.getItem('dishes')) || [];

    const storedRequisitions = JSON.parse(localStorage.getItem('requisitions')) || [];

    //Hooks for the for
    const [ReqType, setReqType] = useState(fullProps.fullDishProps.typeId); 
    const [ReqDish, setReqDish] = useState(fullProps.dishId); 
    const [ReqServices, setReqServices] = useState(fullProps.dishServices);

    const [dishOptions, setDishOptions ] = useState([]);
 
    useEffect(() => {  
        const availableDish = storedDish.filter(dish => dish.typeId === ReqType )
        if(availableDish) {
            setDishOptions(availableDish)
        }
          
    }, [ReqType]);


    const manageSave = () => {
        const succed = true;
        const validation = true;
        
        if (validation) {
            if (succed) {
                //Day Id
                passedHook(prev => prev + 1)
                closeModal();
                enqueueSnackbar("No fue posible eliminar el platillo, verifica el estado de tu requisición", { variant: 'success' });
            } else {
                enqueueSnackbar("No fue posible eliminar el platillo, verifica el estado de tu requisición", { variant: 'error' });
            }
        } else {
            enqueueSnackbar("No fue posible eliminar el platillo, verifica el estado de tu requisición", { variant: 'warning' });
        }
    }

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="100%">  
            <Title> Modificar Platillo de Requisición </Title> 

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Tipo de platillo:</Label>
                        <DropDownSelection
                            selectedOption = { ReqType }
                            onChange = { e => setReqType(e.target.value)}
                            placeHolder = "Selecciona el tipo" 
                            optionsAvailable = {storedTypes.map(type => ({
                                value: type.id,
                                name: type.name
                            }))}
                            />
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Platillo:</Label>
                        
                        <DropDownSelection
                            selectedOption = { ReqDish }
                            onChange = { e => setReqDish(e.target.value)}
                            placeHolder = "Selecciona un platillo" 
                            optionsAvailable = {dishOptions.map(type => ({
                                value: type.id,
                                name: type.name
                            }))}
                            />
                    </CenteredDisplay>
                    
                </HorizontalDisplay> 

                <HorizontalDisplay>
                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Número de Servicios:</Label>
                        <EditText
                            placeholder="Ingresa el número de servicios del platillo"
                            previousValue ={ReqServices} 
                            onChange={e  => setReqServices(e.target.value)}/>
                    </CenteredDisplay>
                    
                </HorizontalDisplay>

                <HorizontalDisplay>
                    <Button onClick={onDecline} type='cancelStyle'>Cancelar</Button>  
                    <WhiteDummySpacer/>
                    <Button onClick={manageSave} >Agregar</Button>  
                </HorizontalDisplay>
                
            </CenteredDisplay> 
        </Modal>
    )
}

export default UpdateDayForRequisition;