import React, { useEffect, useState } from 'react';
import Modal from './../../../components/UIcomponents/Modal';  // Asegúrate de que la ruta es correcta
import CenteredDisplay from "../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../components/Layouts/HorizontalDisplay";
import Title from "../../../components/Layouts/Title";
import Button from "../../../components/UIcomponents/Button";
import Label from "../../../components/UIcomponents/Label";
import WhiteDummySpacer from "../../../components/Layouts/WhiteDummySpacer";
import EditText from '../../../components/UIcomponents/EditText'; 

import { useSnackbar } from 'notistack'; 

import DropDownSelection from './../../../components/UIcomponents/DropDownSelection';

const UpdateSideDish = ({ isModalOpen, closeModal, fullProps , passedHook }) => { 
    const { enqueueSnackbar } = useSnackbar();
    
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || []; 
    // Definición de funciones manejadoras dentro del componente 
     
    const [ingredientName, setIngredientName] = useState(fullProps.name);
    const [ingredientAmount, setIngredientAmount] = useState(fullProps.existence);
    const [ingredientUnit, setIngredientUnit] = useState(fullProps.unit);
    const [ingredientGroup, setIngredientGroup] = useState(fullProps.groupId);

    const onAccept = () => {
        const passedValidation = true;
        const success = true;

        if(passedValidation){
            if(success){
                closeModal();

                const existingIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];
                const updatedIngredients = existingIngredients.map(ingredient =>
                    ingredient.id === fullProps.id
                        ? {
                            ...ingredient,
                            name: ingredientName,
                            existence: ingredientAmount,
                            unit: ingredientUnit,
                            groupId: ingredientGroup
                        }
                        : ingredient
                );

                localStorage.setItem('ingredients', JSON.stringify(updatedIngredients));



                passedHook(prev => prev +1)
                enqueueSnackbar("Ingrediente actualizado exitosamente", { variant: 'success' });
            }else{
                enqueueSnackbar("Problemas con la eliminación del ingrediente", { variant: 'error' });
            }
        }else{
            enqueueSnackbar("Todos los campos deben de ser cubiertos para poder actualizar el ingrediente", { variant: 'warning' });
        } 
    };

    const onDecline = () => {  closeModal();  };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="90%">
                <Title> Editar Ingrediente </Title>

                <Label>Nombre del Ingrediente:</Label>

                <EditText 
                    previousValue = {fullProps.name}
                    onChange = {e => setIngredientName(e.target.value)}
                    placeHolder = "Ingresa el nombre del Ingrediente"/>

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label> Cantidad del Ingrediente: </Label>
                        <EditText 
                            previousValue = {fullProps.existence}
                            placeholder = "Valor numérico de Ingrediente"
                            onChange = {e => setIngredientAmount(e.target.value) }/>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Unidad:</Label>
                        <EditText 
                            previousValue = {fullProps.unit}
                            placeholder = "Unidad del"
                            onChange = {e => setIngredientUnit(e.target.value) }
                            ></EditText>
                    </CenteredDisplay>
                    
                </HorizontalDisplay>

                <CenteredDisplay width="50%">
                    <Label>Grupo:</Label>
                    <DropDownSelection  
                        
                        selectedOption = {storedGroups.find(it => it.id === fullProps.groupId).id || ""} 
                            onChange = {  e=> setIngredientGroup((e.target.value))}
                            placeHolder = "Selecciona el grupo del ingrediente" 
                            optionsAvailable = {storedGroups.map(group => ({
                                value: group.id,
                                name: group.name
                            }))} />
                </CenteredDisplay>
 
                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick = {onDecline}>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick={onAccept}>Agregar</Button>
                </HorizontalDisplay>
                </CenteredDisplay>
        </Modal>
    );
};

export default UpdateSideDish;
