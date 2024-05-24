import React from 'react';
import Modal from './../../../../components/UIcomponents/Modal';  // Asegúrate de que la ruta es correcta
import CenteredDisplay from "../../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../../components/Layouts/HorizontalDisplay";
import Title from "../../../../components/Layouts/Title";
import SubTitle from "../../../../components/Layouts/SubTitle";
import Button from "../../../../components/UIcomponents/Button";
import Label from "../../../../components/UIcomponents/Label";
import WhiteDummySpacer from "../../../../components/Layouts/WhiteDummySpacer";

import { useSnackbar } from 'notistack'; 

const DeleteDishFromRecipeModal = ({ isModalOpen, closeModal, fullProps = {} , overAllValue, passedHook}) => {
    
    const { enqueueSnackbar } = useSnackbar();

    // Definición de funciones manejadoras dentro del componente
    const onAccept = () => {
        const validation = true;
        if(validation){

            const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
 
            const updatedRecipes = existingRecipes.filter(recipe => recipe.id !== fullProps.id);
 
            localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
            enqueueSnackbar("Ingrediente eliminado correctamente", { variant: 'success'});
            closeModal()

            passedHook(prev => prev + 1)
        }else{
            enqueueSnackbar("Problemas al eliminar el Ingrediente", { variant: 'error'});
        } 
    };

    const onDecline = () => {  closeModal();  };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal} overAll = {overAllValue}>
            <CenteredDisplay width="90%">
                <Title>Eliminar Ingrediente de la Receta</Title> 

                <SubTitle textAlignment="center" paddingLeft='0px'>
                    ¿Estás seguro de que deseas eliminar esta Receta? 
                    <br/>
                    Esta acción es irreversible y no se puede deshacer. 
                </SubTitle>
                
                <HorizontalDisplay>
                    <Label textAlignment="center">
                        Receta del platillo a Eliminar: {fullProps.dish}
                    </Label>
                    <Label textAlignment="center">
                        Receta del platillo a Eliminar: {fullProps.name}
                    </Label>
                </HorizontalDisplay>
                
                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick={onDecline}>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick={onAccept}>Eliminar</Button>
                </HorizontalDisplay>
            </CenteredDisplay>
        </Modal>
    );
};

export default DeleteDishFromRecipeModal;
