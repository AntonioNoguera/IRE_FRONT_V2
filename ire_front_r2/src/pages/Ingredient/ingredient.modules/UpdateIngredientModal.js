import React, { useState, useEffect } from 'react';
import Modal from './../../../components/UIcomponents/Modal';  // Asegúrate de que la ruta es correcta
import CenteredDisplay from "../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../components/Layouts/HorizontalDisplay";
import Title from "../../../components/Layouts/Title";
import Button from "../../../components/UIcomponents/Button";
import Label from "../../../components/UIcomponents/Label";
import WhiteDummySpacer from "../../../components/Layouts/WhiteDummySpacer";
import EditText from '../../../components/UIcomponents/EditText'; 
import { useSnackbar } from 'notistack'; 
import DropDownSelection from './../../../components/UIcomponents/DropDownSelection';

const UpdateSideDish = ({ isModalOpen, closeModal, fullProps , passedHook }) => { 
    console.log(fullProps)

    const clearHooks = () => {
        setIngredientName("")
        setIngredientAmount("")
        setIngredientUnit("")
        setIngredientGroup("")
    }

    const { enqueueSnackbar } = useSnackbar();
    
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    
    const [ingredientName, setIngredientName] = useState(fullProps.name);
    const [ingredientAmount, setIngredientAmount] = useState(fullProps.existence);
    const [ingredientUnit, setIngredientUnit] = useState(fullProps.unit);
    const [ingredientGroup, setIngredientGroup] = useState(fullProps.groupId);

    const validateForm = () => {
        return (
            ingredientName !== '' &&
            ingredientAmount !== '' &&
            ingredientUnit !== '' &&
            ingredientGroup !== ''
        );
    };

    const ingredientExists = () => {
        const existingIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];
        return existingIngredients.some(ingredient => ingredient.name === ingredientName && ingredient.id !== fullProps.id);
    };

    const onAccept = () => {
        if (!validateForm()) {
            enqueueSnackbar("Todos los campos deben de ser cubiertos para poder dar de alta el ingrediente", { variant: 'warning' });
            return;
        }

        if (ingredientExists()) {
            enqueueSnackbar("Ya existe un ingrediente con el mismo nombre", { variant: 'error' });
            return;
        }
        
        const existingIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];
        const updatedIngredients = existingIngredients.map(ingredient =>
            ingredient.id === fullProps.id
                ? {
                    ...ingredient,
                    name: ingredientName,
                    existence: ingredientAmount,
                    unit: ingredientUnit,
                    groupId: ingredientGroup
                }
                : ingredient
        );

        localStorage.setItem('ingredients', JSON.stringify(updatedIngredients));

        passedHook(prev => prev + 1);
        //We had some issues with the passedHook, temp fix relods page
        window.location.reload();

        enqueueSnackbar("Ingrediente actualizado exitosamente", { variant: 'success' });
        clearHooks();
        closeModal();
    };

    const onDecline = () => { clearHooks(); closeModal(); };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="90%">
                <Title>Editar Ingrediente</Title>

                <Label>Nombre del Ingrediente:</Label>
                <EditText 
                    previousValue = {ingredientName}
                    onChange={e => setIngredientName(e.target.value)}
                    placeholder="Ingresa el nombre del Ingrediente"
                />

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Cantidad del Ingrediente:</Label>
                        <EditText 
                            previousValue={ingredientAmount}
                            placeholder="Valor numérico de Ingrediente"
                            onChange={e => setIngredientAmount(e.target.value)}
                        />
                    </CenteredDisplay>

                    <WhiteDummySpacer />

                    <CenteredDisplay width="100%">
                        <Label>Unidad:</Label>
                        <EditText 
                            previousValue={ingredientUnit}
                            placeholder="Unidad del Ingrediente"
                            onChange={e => setIngredientUnit(e.target.value)}
                        />
                    </CenteredDisplay>
                </HorizontalDisplay>

                <CenteredDisplay width="50%">
                    <Label>Grupo:</Label>
                    <DropDownSelection
                        selectedOption={storedGroups.find(it => it.id === fullProps.groupId)?.id || ""}
                        onChange={e => setIngredientGroup(e.target.value)}
                        placeHolder="Selecciona el grupo del ingrediente"
                        optionsAvailable={storedGroups.map(group => ({
                            value: group.id,
                            name: group.name
                        }))}
                    />
                </CenteredDisplay>

                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick={onDecline}>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick={onAccept}>Actualizar</Button>
                </HorizontalDisplay>
            </CenteredDisplay>
        </Modal>
    );
};

export default UpdateSideDish;
