import React from 'react';
import Modal from './../../../components/UIcomponents/Modal';  // Asegúrate de que la ruta es correcta
import CenteredDisplay from "../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../components/Layouts/HorizontalDisplay";
import Title from "../../../components/Layouts/Title";
import SubTitle from "../../../components/Layouts/SubTitle";
import Button from "../../../components/UIcomponents/Button";
import Label from "../../../components/UIcomponents/Label";
import WhiteDummySpacer from "../../../components/Layouts/WhiteDummySpacer";

import { useSnackbar } from 'notistack'; 

const DeleteDishModal = ({ isModalOpen, closeModal, fullProps, passedHook }) => {
    const { enqueueSnackbar } = useSnackbar();

    const onAccept = () => {
        const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
        const dishInUse = recipes.some(recipe => recipe.dishId === fullProps.id);

        if (dishInUse) {
            enqueueSnackbar("No se puede eliminar el platillo porque está asociado a una receta", { variant: 'error' });
            return;
        }

        const dishes = JSON.parse(localStorage.getItem('dishes') || '[]');
        const filteredDishes = dishes.filter(dish => dish.id !== fullProps.id);
        
        localStorage.setItem('dishes', JSON.stringify(filteredDishes));

        enqueueSnackbar("El platillo ha sido eliminado con éxito", { variant: 'success' });
        passedHook(prev => prev + 1);
        closeModal(); // Cierra el modal después de aceptar
    };

    const onDecline = () => {
        closeModal(); // Cierra el modal después de declinar
    };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="90%">
                <Title> Eliminar Platillo </Title> 

                <SubTitle textAlignment="center" paddingLeft='0px'>
                    ¿Estás seguro de que deseas eliminar este Platillo? 
                    <br/>
                    Esta acción es irreversible y no se puede deshacer. 
                </SubTitle>
                
                <Label textAlignment="center">
                    Platillo a Eliminar: {fullProps.name}
                </Label>

                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick={onDecline}>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick={onAccept}>Eliminar</Button>
                </HorizontalDisplay>
            </CenteredDisplay>
        </Modal>
    );
};

export default DeleteDishModal;
