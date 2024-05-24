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

import { useSnackbar } from 'notistack';  
 
const UpdateDishFromRecipe = ({ isModalOpen, closeModal, fullProps, overAllValue, passedHook }) => {

    const { enqueueSnackbar } = useSnackbar();

    const [recipeAmount, setRecipeAmount] = useState (fullProps.ingredientAmount);
    const [recipeService, setRecipeService] = useState (fullProps.service); 

    const onAccept = () => {
        const validation = true;
        const succed = true;

        if(validation){
            if(succed){
                const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
                const updatedRecipes = existingRecipes.map(recipe =>
                    recipe.id === fullProps.id
                        ? {
                            ...recipe, 
                            id: recipe.id,
                            dishId: recipe.dishId,  
                            ingredientId: recipe.ingredientId,
                            ingredientAmount: recipeAmount,
                            service: recipeService, 
                            additionDate: recipe.additionDate, 
                        }
                        : recipe
                );

                localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
                closeModal();
                passedHook(prev => prev + 1)
                
                enqueueSnackbar("Ingrediente actualizado correctamente", { variant: 'success' }); 
            } else {
                enqueueSnackbar("Problemas con la ejecución de tu operación", { variant: 'error' });
            }
        } else {
            enqueueSnackbar("Todos los campos deben de ser cubiertos para poder realizar la operación", { variant: 'warning' });
        }
        
    };

    const onDecline = () => {  closeModal();  };

    return ( 
        <Modal isOpen={isModalOpen} onClose={closeModal} overAll = {overAllValue}>
            <CenteredDisplay width="80%">
                <Title> Modificar el Ingrediente de la Receta </Title> 

                <HorizontalDisplay>
                    <Label textAlignment = "Center" > Nombre del Platillo: <span>{fullProps.dish}</span></Label>
                    <Label textAlignment = "Center" > Nombre del Ingrediente: <span>{fullProps.name}</span></Label>
                </HorizontalDisplay>

                <Label textAlignment='start'>Cantidad del Ingrediente Necesitada:</Label>
                <HorizontalDisplay>
                    <EditText 
                        previousValue = {recipeAmount}
                        onChange = { e => setRecipeAmount(e.target.value) }
                        placeholder="Ingresa la cantidad del ingrediente"/>
                        
                    <Label marginTop = '0px'>{fullProps.unit}</Label>
                </HorizontalDisplay>
                

                <Label textAlignment='start'>Número de Servicios que cubre:</Label>
                <EditText 
                    previousValue = {recipeService}
                    placeholder = "Ingresa el número de servicios"
                    onChange = {e => setRecipeService(e.target.value)}/>

                 
                <HorizontalDisplay>
                    <Button type = 'cancelStyle' onClick = { onDecline }>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick = { onAccept }>Agregar</Button>
                </HorizontalDisplay>
                </CenteredDisplay>
        </Modal>
    );
};

export default UpdateDishFromRecipe;
