import React from 'react';
import Modal from './../../../components/UIcomponents/Modal';  // Asegúrate de que la ruta es correcta
import CenteredDisplay from "../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../components/Layouts/HorizontalDisplay";
import Title from "../../../components/Layouts/Title";
import Button from "../../../components/UIcomponents/Button";
import Label from "../../../components/UIcomponents/Label";
import WhiteDummySpacer from "../../../components/Layouts/WhiteDummySpacer";
import EditText from '../../../components/UIcomponents/EditText';
import BigTextArea from './../../../components/UIcomponents/BigTextArea';

import DropDownSelection from './../../../components/UIcomponents/DropDownSelection';
 
//TODO: Crear un hash key [hex],value [texto]

const UpdateSideDish = ({ isModalOpen, closeModal, fullProps }) => {
    // Definición de funciones manejadoras dentro del componente
    const onAccept = () => {
        alert("Le picaste aceptar");
        closeModal(); // Cierra el modal después de aceptar
    };

    const onDecline = () => {
        alert("Le picaste cancelar");
        closeModal(); // Cierra el modal después de declinar
    };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="90%">
                <Title> Editar Grupo </Title> 

                <Label>Nombre del Grupo:</Label> 
                <EditText previousValue = {fullProps.name} >Ingresa el nombre del complemento</EditText>

                <Label>Descripción de Grupo:</Label> 
                <BigTextArea previousValue = {fullProps.description} >Ingresa un texto descriptivo de tu complemento</BigTextArea>

                <Label>Color del Grupo:</Label> 
                <DropDownSelection selectedOption = {fullProps.hexColor} optionsAvailable = {[fullProps.hexColor]}>Selecciona el color de tu grupo</DropDownSelection>
                 
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
