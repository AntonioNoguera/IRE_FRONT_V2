import React, { useEffect, useState } from 'react';
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

import { useSnackbar } from 'notistack'; 

import NewRequisitionModal from '../NewRequisitionModal';


const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
const storedIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];

const onDecline = () => {
    alert("Le picaste declinar");
}

const NewIngredientModal = ({ isModalOpen, closeModal, fullProps, passedHook }) => {
    const { enqueueSnackbar } = useSnackbar();

    const [groupIngredient, setGroupIngredient] = useState("");
    const [reqIngredient, setReqIngredient] = useState("");
    const [reqIngAmount, setIngAmount] = useState("");

    const [reqIngOptions, setIngOptions] = useState([]);

    const [ingUnit, setIngUnit] = useState("Unidad");

    useEffect(()=>{
        const filteredGroups = storedIngredients.filter(ingredient => ingredient.groupId === groupIngredient);
        setIngOptions(filteredGroups);
    }, [groupIngredient]);

    useEffect(()=>{ 
        const foundIngredient = storedIngredients.find(ingredient => ingredient.id === reqIngredient)

        if(foundIngredient){ 
            setIngUnit(foundIngredient.unit);
        }
        
    }, [reqIngredient]);


    const onAccept = () => {
        const validation = true;
        const success = true;
    
        if ( validation ) {
            if ( success ) {
    
                const storedRequisitions = JSON.parse(localStorage.getItem('requisitions')) || [];

                // Encontrar la requisición y el día correspondientes
                let dayFound = false;
                storedRequisitions.forEach(requisition => {
                    requisition.weekDays.forEach(day => {
                        if (day.dayId === fullProps.fatherProps.dayId) {
                            // Encontrar el platillo correspondiente
                            const dish = day.dishes.find(d => d.dishId === fullProps.dishId);
                            if (dish) {
                                // Añadir el nuevo ingrediente al platillo
                                const newIngredient = {
                                    ingredientId: reqIngredient, // Reemplazar con el actual ingredientId
                                    ingredientAmount: reqIngAmount, // Reemplazar con el valor real
                                    operationTime: new Date().toISOString() // Hora actual
                                };
                                dish.dishIngredients.push(newIngredient);
                                dayFound = true;
                            }
                        }
                    });
                });

                if (!dayFound) {
                    enqueueSnackbar("No se encontró el día especificado o el platillo en el día", { variant: 'error' });
                    return;
                }

                // Actualizar el local storage
                localStorage.setItem('requisitions', JSON.stringify(storedRequisitions));
                passedHook(prev => prev + 1)
                closeModal()
    
                enqueueSnackbar("El ingrediente se ha almacenado correctamente", { variant: 'success' });
            } else {
                enqueueSnackbar("El ingrediente ya se encuentra en este platillo, modifica sus valores", { variant: 'error' });
            }
        } else {
            enqueueSnackbar("Es necesario cubrir todos los campos para poder continuar", { variant: 'warning' });
        }
    }

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <> 
            <CenteredDisplay width="90%">  
            <Title> Añadir Ingrediente a la Requisición </Title> 

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Grupo del Ingrediente:</Label>
                        <DropDownSelection
                            optionsAvailable = {storedGroups.map(type => ({
                                value: type.id,
                                name: type.name
                            }))}
                            onChange={e => setGroupIngredient(e.target.value)}
                            selectedOption = {groupIngredient}
                            placeHolder="Selecciona el grupo de tu ingrediente"/>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Ingrediente:</Label>
                        <DropDownSelection 
                            optionsAvailable = {reqIngOptions.map(type => ({
                                value: type.id,
                                name: type.name
                            }))}
                            selectedOption={reqIngredient}
                            onChange={ e=> setReqIngredient(e.target.value)}

                            placeHolder="Ingrediente a añadir"/>
                    </CenteredDisplay>
                    
                </HorizontalDisplay> 

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Cantidad del ingrediente para <span>{fullProps.dishServices}</span> servicios:</Label>
                        <HorizontalDisplay>
                            <EditText
                            previousValue={reqIngAmount}
                            onChange={e => setIngAmount(e.target.value)}
                            placeholder = "Valor numérico de la cantidad del ingrediente"/>
                            <Label marginTop='5PX'>{ingUnit}</Label> 
                        </HorizontalDisplay>
                        
                    </CenteredDisplay>

                    <WhiteDummySpacer/>
                         
                    
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

export default NewIngredientModal;