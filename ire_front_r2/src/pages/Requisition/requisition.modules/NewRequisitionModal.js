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

const NewRequisitionModal = ({ isModalOpen, closeModal, passedHook, fullProps }) => {
    const { enqueueSnackbar } = useSnackbar();

    const storedTypes = JSON.parse(localStorage.getItem('extras')).Tipos || [];
    const storedDish = JSON.parse(localStorage.getItem('dishes')) || [];

    const storedRequisitions = JSON.parse(localStorage.getItem('requisitions')) || [];

    //Hooks for the for
 

    const [ReqType, setReqType] = useState(""); 
    const [ReqDish, setReqDish] = useState([]); 
    const [ReqServices, setReqServices] = useState("");

    const [dishOptions, setDishOptions ] = useState([]);
 
    useEffect(() => {  
        const availableDish = storedDish.filter(dish => dish.typeId === ReqType )
        if(availableDish) {
            setDishOptions(availableDish)
        }
          
    }, [ReqType]);

    const manageSave = () => {

        const validation = true;
        const success = true;

        if( validation ){
            if( success ){ 

                const newDish = {
                    dishId: ReqDish, // Replace with actual dishId
                    dishIngredients: [],
                    dishServices: ReqServices
                };

                // Find the current requisition directly by dayId
                let found = false;

                storedRequisitions.forEach(requisition => {
                    requisition.weekDays.forEach(day => {
                        if (day.dayId === fullProps.dayId) {
                            day.dishes.push(newDish);
                            found = true;
                        }
                    });
                });

                if (!found) {
                    enqueueSnackbar("No se encontró la requisición para el día especificado", { variant: 'error' });
                    return;
                }

                // Update local storage
                localStorage.setItem('requisitions', JSON.stringify(storedRequisitions));

                passedHook(prev => prev + 1)
                closeModal();
                enqueueSnackbar("Platillo añadido correctamente", { variant: 'success' });

            } else {
                enqueueSnackbar("El platillo ya se encuentra en la requisición de este día", { variant: 'error' });
            } 

        } else {
            enqueueSnackbar("Todos los campos deben de ser cubiertos", { variant: 'warning' });
        }
    }

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="100%">  
            <Title> Añadir platillo a la requisición </Title> 

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
                    <Button type='cancelStyle'>Cancelar</Button>  
                    <WhiteDummySpacer/>
                    <Button onClick={manageSave} >Agregar</Button>  
                </HorizontalDisplay>
                
            </CenteredDisplay> 
        </Modal>
    )
}

export default NewRequisitionModal;