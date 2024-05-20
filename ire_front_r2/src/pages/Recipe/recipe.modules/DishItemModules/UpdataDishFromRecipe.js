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
 
const UpdateDishFromRecipe = ({ isModalOpen, closeModal, fullProps }) => {

    console.log(fullProps)

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
            <CenteredDisplay width="80%">
                <Title> Modificar el Ingrediente de la Receta </Title> 

                <HorizontalDisplay>
                    <Label textAlignment="Center" > Nombre del Platillo: <span>{fullProps.dish}</span></Label>
                    <Label textAlignment="Center" > Nombre del Ingrediente: <span>{fullProps.name}</span></Label>
                </HorizontalDisplay>

                <Label textAlignment='start'>Cantidad del Ingrediente Necesitada:</Label>
                <HorizontalDisplay>
                    <EditText previousValue={fullProps.existence}>Ingresa la cantidad del ingrediente</EditText> 
                        
                    <Label marginTop = '0px'>{fullProps.unit}</Label>
                </HorizontalDisplay>
                

                <Label textAlignment='start'>Número de Servicios que cubre:</Label>
                <EditText previousValue = {fullProps.services}>Ingresa el número de servicios</EditText>

                 
                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick={onDecline}>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick={onAccept}>Agregar</Button>
                </HorizontalDisplay>
                </CenteredDisplay>
        </Modal>
    );
};

export default UpdateDishFromRecipe;
