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
                <Title> Editar Ingrediente </Title>

                <Label>Nombre del Ingrediente:</Label>

                <EditText previousValue = {fullProps.name}>Ingresa el nombre del grupo</EditText>

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label> Cantidad del Ingrediente: </Label>
                        <EditText previousValue = {fullProps.existence}> Valor numérico de Ingrediente</EditText>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Unidad:</Label>
                        <EditText previousValue = {fullProps.unit} >Unidad del Ingrediente</EditText>
                    </CenteredDisplay>
                    
                </HorizontalDisplay>

                <CenteredDisplay width="50%">
                    <Label>Grupo:</Label>
                    <DropDownSelection selectedOption = {fullProps.group_name} optionsAvailable = {fullProps.groupsAvailable}>Selecciona el grupo del ingrediente</DropDownSelection>
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
