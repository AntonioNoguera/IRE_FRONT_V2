import React from 'react';
import Modal from './../../../components/UIcomponents/Modal';
import CenteredDisplay from "../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../components/Layouts/HorizontalDisplay";
import Title from "../../../components/Layouts/Title";
import SubTitle from "../../../components/Layouts/SubTitle";
import Button from "../../../components/UIcomponents/Button";
import Label from "../../../components/UIcomponents/Label";

import WhiteDummySpacer from "../../../components/Layouts/WhiteDummySpacer";import { useSnackbar } from 'notistack'; 

const DeleteIngredientModal = ({ isModalOpen, closeModal, fullProps, passedHook }) => {

    const { enqueueSnackbar } = useSnackbar();

    const onAccept = () => {
        const succesfullyDeleted = true;

        if (succesfullyDeleted) { 
 
            const existingIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];
 
            const updatedIngredients = existingIngredients.filter(ingredient => ingredient.id !== fullProps.id);
 
            localStorage.setItem('ingredients', JSON.stringify(updatedIngredients));

            closeModal();
            
            passedHook(prev => prev + 1); 

            enqueueSnackbar("El ingrediente se ha eliminado correctamente", { variant: 'success'}); 
        } else { 

            enqueueSnackbar("Problemas con la eliminación del ingrediente", { variant: 'warning' });
        }
 
    };

    const onDecline = () => {  closeModal();  };

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <CenteredDisplay width="90%">
                    <Title>Eliminar Ingrediente</Title> 

                    <SubTitle textAlignment="center" paddingLeft='0px'>
                        ¿Estás seguro de que deseas eliminar este Ingrediente? 
                        <br/>
                        Esta acción es irreversible y no se puede deshacer. 
                    </SubTitle>
                    
                    <Label textAlignment="Center">
                        Ingrediente a Eliminar: {fullProps.name}
                    </Label>

                    <HorizontalDisplay>
                        <Button type='cancelStyle' onClick={onDecline}>Cancelar</Button>
                        <WhiteDummySpacer />
                        <Button onClick={onAccept}>Eliminar</Button>
                    </HorizontalDisplay>
                </CenteredDisplay>
            </Modal>
            
        </>
    );
};

export default DeleteIngredientModal;
