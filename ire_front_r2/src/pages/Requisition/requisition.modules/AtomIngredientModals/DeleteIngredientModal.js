import React from 'react';
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

import DropDownSelection from './../../../../components/UIcomponents/DropDownSelection';
 
import { useSnackbar } from 'notistack';  

const DeleteIngredientModal = ({ isModalOpen, closeModal, fullProps, passedHook }) => {
    const { enqueueSnackbar } = useSnackbar();

    const storedIngredients = JSON.parse(localStorage.getItem('ingredients')) || []

    const onAccept = () => {
        console.log(fullProps)
        alert(fullProps.inheritProps.fullDishProps.id);
        alert(fullProps.inheritProps.fatherProps.dayId);
        alert(fullProps.ingredientId);


        enqueueSnackbar("Ingrediente actualizado correctamente", { variant: 'success' }); 


        passedHook(prev => prev + 1);
        closeModal(); // Cierra el modal después de aceptar
    };

    const onDecline = () => {
        closeModal();
    };

    const modifiedIngredient = storedIngredients.find(ingredient => ingredient.id === fullProps.ingredientId)

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="90%">
                <Title> Eliminar Ingrediesnte de la Requisición </Title> 

                <SubTitle textAlignment="center" paddingLeft='0px'>
                    ¿Estás seguro de que deseas eliminar esta Receta? 
                    <br/>
                    Esta acción es irreversible y no se puede deshacer. 
                </SubTitle>
                
                <HorizontalDisplay>
                    <Label textAlignment="Center" >
                         Eliminando del platillo: {fullProps.inheritProps.fullDishProps.name}
                    </Label>

                    <Label textAlignment="Center" >
                       Ingrediente: {modifiedIngredient.name}
                    </Label>
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

export default DeleteIngredientModal;