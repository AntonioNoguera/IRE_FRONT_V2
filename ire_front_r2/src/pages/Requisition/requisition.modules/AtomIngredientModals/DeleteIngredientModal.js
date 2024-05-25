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
        const dayId = fullProps.inheritProps.fatherProps.dayId;
        const dishId = fullProps.inheritProps.fullDishProps.id;
        const ingredientId = fullProps.ingredientId;

        // Leer las requisiciones del localStorage
        const storedRequisitions = JSON.parse(localStorage.getItem('requisitions')) || [];

        // Buscar el día correspondiente
        const requisition = storedRequisitions.find(req => 
            req.weekDays.some(day => day.dayId === dayId)
        );

        if (requisition) {
            const day = requisition.weekDays.find(day => day.dayId === dayId);

            if (day) {
                // Buscar el platillo correspondiente
                const dish = day.dishes.find(dish => dish.dishId === dishId);

                if (dish) {
                    // Filtrar los ingredientes para eliminar el que coincide
                    dish.dishIngredients = dish.dishIngredients.filter(ingredient => ingredient.ingredientId !== ingredientId);

                    // Actualizar el localStorage
                    localStorage.setItem('requisitions', JSON.stringify(storedRequisitions));

                    enqueueSnackbar("Ingrediente eliminado correctamente", { variant: 'success' });
                    passedHook(prev => prev + 1);
                } else {
                    enqueueSnackbar("Platillo no encontrado", { variant: 'error' });
                }
            } else {
                enqueueSnackbar("Día no encontrado", { variant: 'error' });
            }
        } else {
            enqueueSnackbar("Requisición no encontrada", { variant: 'error' });
        }

        closeModal();
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