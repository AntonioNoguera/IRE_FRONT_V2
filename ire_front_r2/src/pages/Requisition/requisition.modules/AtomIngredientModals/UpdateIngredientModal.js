import React, { useEffect, useState } from 'react';
import Modal from './../../../../components/UIcomponents/Modal';  // Asegúrate de que la ruta es correcta
import CenteredDisplay from "../../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../../components/Layouts/HorizontalDisplay";
import Title from "../../../../components/Layouts/Title";
import SubTitle from "../../../../components/Layouts/SubTitle";
import Button from "../../../../components/UIcomponents/Button";
import Label from "../../../../components/UIcomponents/Label";
import WhiteDummySpacer from "../../../../components/Layouts/WhiteDummySpacer";
import EditText from '../../../../components/UIcomponents/EditText';
import BigTextArea from './../../../../components/UIcomponents/BigTextArea';

import { useSnackbar } from 'notistack';  
import DropDownSelection from './../../../../components/UIcomponents/DropDownSelection';
 
const UpgradeIngredientModal = ({ isModalOpen, closeModal, fullProps, passedHook }) => {

    const { enqueueSnackbar } = useSnackbar();


    const [newAmount, setAmount ] = useState(fullProps.ingredientAmount); 

    
    const storedIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];

    const onAccept = () => {
        const validation = true;

        if (validation) {
            const dayId = fullProps.inheritProps.fatherProps.dayId;
            const dishId = fullProps.inheritProps.fullDishProps.id;
            const ingredientId = fullProps.ingredientId;

            // Leer las requisiciones del localStorage
            const storedRequisitions = JSON.parse(localStorage.getItem('requisitions')) || [];

            // Buscar el día correspondiente y actualizar el ingrediente
            let ingredientFound = false;

            storedRequisitions.forEach(requisition => {
                requisition.weekDays.forEach(day => {
                    if (day.dayId === dayId) {
                        const dish = day.dishes.find(dish => dish.dishId === dishId);
                        if (dish) {
                            const ingredient = dish.dishIngredients.find(ing => ing.ingredientId === ingredientId);
                            if (ingredient) {
                                ingredient.ingredientAmount = newAmount;
                                ingredient.operationTime = new Date().toISOString();
                                ingredientFound = true;
                            }
                        }
                    }
                });
            });

            if (ingredientFound) {
                // Actualizar el localStorage
                localStorage.setItem('requisitions', JSON.stringify(storedRequisitions));
                enqueueSnackbar("Ingrediente actualizado correctamente", { variant: 'success' });
                passedHook(prev => prev + 1);
            } else {
                enqueueSnackbar("No se encontró el ingrediente", { variant: 'error' });
            }
        } else {
            enqueueSnackbar("Validación fallida", { variant: 'error' });
        }

        closeModal();
    };

    const onDecline = () => {
        alert("Le picaste cancelar");
        closeModal(); // Cierra el modal después de declinar
    };

    const modifiedIngredient = storedIngredients.find(ingredient => ingredient.id === fullProps.ingredientId)

    return (
        <Modal isOpen = {isModalOpen} onClose = {closeModal}>
            <CenteredDisplay width="90%">
                <Title> Editar Ingrediente de Requisición </Title>  
                
                <SubTitle>Platillo: {fullProps.inheritProps.fullDishProps.name} </SubTitle>
                
                <SubTitle>Ingrediente: {modifiedIngredient.name} </SubTitle>

                <Label>
                    Ingresa la nueva cantidad del ingrediente para {fullProps.inheritProps.dishServices} servicios:    
                </Label>
                
                
                <HorizontalDisplay>
                    <EditText
                        previousValue = {newAmount}
                        onChange = {e => setAmount(e.target.value)}
                        placeholder = "Ingresa la nueva cantidad del ingrediente"/>

                    <Label marginTop='5px'>{modifiedIngredient.unit}</Label>
                </HorizontalDisplay>

                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick = {onDecline}>Cancelar</Button>
                        <WhiteDummySpacer />
                    <Button onClick = {onAccept}>Agregar</Button>
                </HorizontalDisplay>
                </CenteredDisplay>
        </Modal>
    );
};

export default UpgradeIngredientModal;