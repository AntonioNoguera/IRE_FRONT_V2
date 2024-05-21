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
 
const DeleteGroupModal = ({ isModalOpen, closeModal, fullProps, passedHook }) => {
    
    const onAccept = () => {
        
        const groups = JSON.parse(localStorage.getItem('groups') || '[]');
        
        const filteredGroups = groups.filter(group => group.id !== fullProps.id);
        
        localStorage.setItem('groups', JSON.stringify(filteredGroups));

        alert("Grupo eliminado correctamente.");
        closeModal();
        
        if (passedHook) {
            passedHook(prev => prev + 1);
        }
    };

    const onDecline = () => {
        closeModal(); 
    };

    return (
        <Modal isOpen = {isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="90%">
                <Title> Eliminar Grupo </Title> 

                <SubTitle textAlignment="center" paddingLeft='0px'>
                    ¿Estás seguro de que deseas eliminar este Grupo? 
                    <br/> 
                    Esta acción es irreversible y no se puede deshacer.
                </SubTitle>
                
                <Label textAlignment="Center" >Grupo a Eliminar: {fullProps.name}</Label>

                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick={onDecline}>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick={onAccept}>Agregar</Button>
                </HorizontalDisplay>
                </CenteredDisplay>
        </Modal>
    );
};

export default DeleteGroupModal;
