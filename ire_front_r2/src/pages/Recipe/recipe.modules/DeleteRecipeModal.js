import React from 'react';
import Modal from './../../../components/UIcomponents/Modal';  // Asegúrate de que la ruta es correcta
import CenteredDisplay from "../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../components/Layouts/HorizontalDisplay";
import Title from "../../../components/Layouts/Title";
import SubTitle from "../../../components/Layouts/SubTitle";
import Button from "../../../components/UIcomponents/Button";
import Label from "../../../components/UIcomponents/Label";
import WhiteDummySpacer from "../../../components/Layouts/WhiteDummySpacer";
import EditText from '../../../components/UIcomponents/EditText';
import BigTextArea from './../../../components/UIcomponents/BigTextArea';

import DropDownSelection from './../../../components/UIcomponents/DropDownSelection';
 
const DeleteRecipeModal = ({ isModalOpen, closeModal, fullProps, passedHook }) => {
    console.log(fullProps)

    // Definición de funciones manejadoras dentro del componente
    const onAccept = () => {
        const succed = true;
 
        if(succed){
            const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
 
            const updatedRecipes = existingRecipes.filter(recipe => recipe.dishId !== fullProps.id);
 
            localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
            
            passedHook(prev => prev + 1)
            closeModal()
        }else{
            alert("Problem on the succed")
        }

        closeModal(); // Cierra el modal después de aceptar
    };

    const onDecline = () => {
        alert("Le picaste cancelar");
        closeModal(); // Cierra el modal después de declinar
    };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="90%">
                <Title> Eliminar Receta </Title> 

                <SubTitle textAlignment="center" paddingLeft='0px'>
                    ¿Estás seguro de que deseas eliminar esta Receta? 
                    <br/>
                    Esta acción es irreversible y no se puede deshacer. 
                </SubTitle>
                
                <Label textAlignment="Center" >
                    Receta del platillo a Eliminar: {fullProps.name}</Label>

                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick={onDecline}>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick={onAccept}>Eliminar</Button>
                </HorizontalDisplay>
                </CenteredDisplay>
        </Modal>
    );
};

export default DeleteRecipeModal;
