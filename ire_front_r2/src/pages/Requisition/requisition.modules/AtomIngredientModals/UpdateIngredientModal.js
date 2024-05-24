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

        if( validation ) {

            passedHook(prev => prev + 1);
            enqueueSnackbar("Ingrediente actualizado correctamente", { variant: 'success' }); 

        } else {
            enqueueSnackbar("Ingrediente actualizado correctamente", { variant: 'error' }); 
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
