import React from 'react';
import Modal from './../../../components/UIcomponents/Modal';  // Asegúrate de que la ruta es correcta
import CenteredDisplay from "../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../components/Layouts/HorizontalDisplay";
import Title from "../../../components/Layouts/Title";
import Button from "../../../components/UIcomponents/Button";
import Label from "../../../components/UIcomponents/Label";
import WhiteDummySpacer from "../../../components/Layouts/WhiteDummySpacer";

const DeleteIngredientModal = ({ isModalOpen, closeModal, fullProps }) => {
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
            <CenteredDisplay width="100%">
                <Title> Añadir platillo a la requisición </Title>

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        {fullProps.name}
                        <Label>Vamos a borrar todo alv</Label> 
                    </CenteredDisplay>
                    <WhiteDummySpacer />
                </HorizontalDisplay>

                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick={onDecline}>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick={onAccept}>Agregar</Button>
                </HorizontalDisplay>
            </CenteredDisplay>
        </Modal>
    );
};

export default DeleteIngredientModal;
