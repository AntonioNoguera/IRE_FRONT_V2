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
 
const DeleteDishModal = ({ isModalOpen, closeModal, fullProps,passedHook }) => {

    // Definición de funciones manejadoras dentro del componente
    const onAccept = () => {
        const Success = true

        const dishes = JSON.parse(localStorage.getItem('dishes') || '[]');
        
        const filteredDishes = dishes.filter(dish => dish.id !== fullProps.id);
        
        localStorage.setItem('dishes', JSON.stringify(filteredDishes));

        if(Success){
            alert("Eliminado con exito")

            passedHook(prev => prev + 1)
        } else {
            alert("Problemas para eliminar")
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
                <Title> Eliminar Platillo </Title> 

                <SubTitle textAlignment = "center" paddingLeft='0px'>
                    ¿Estás seguro de que deseas eliminar este Platillo? 
                    <br/>
                    Esta acción es irreversible y no se puede deshacer. 
                </SubTitle>
                
                <Label textAlignment="Center" >
                    Platillo a Eliminar: {fullProps.name}</Label>

                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick={onDecline}>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick={onAccept}>Agregar</Button>
                </HorizontalDisplay>
                </CenteredDisplay>
        </Modal>
    );
};

export default DeleteDishModal;
