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

const DeleteIngredientModal = ({ isModalOpen, closeModal, fullProps, passedHook }) => {

    const onAccept = () => {
        const succesfullyDeleted = true;

        if (succesfullyDeleted) {
            alert("Eliminado con éxito");
            
            if (passedHook) {
                passedHook(prev => prev + 1);
            }
        } else {
            alert("Error al eliminar");
        }

        closeModal(); // Cierra el modal después de aceptar
    };

    const onDecline = () => {
        closeModal();  
    };

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
