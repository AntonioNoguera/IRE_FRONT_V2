import React, { useState, useEffect } from 'react';
import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText"; 
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";
import MotionImplementation from './../../components/Layouts/MotionImplementation';
import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";
import { v4 as uuidv4 } from 'uuid'; 

import { useSnackbar } from 'notistack'; 

const NewIngredients = () => {
    const { enqueueSnackbar } = useSnackbar();

    const [groupsAvailable, setGroupsAvailable] = useState([]);
    const [ingredientName, setIngredientName] = useState('');
    const [ingredientAmount, setIngredientAmout] = useState('');
    const [ingredientUnit, setIngredientUnit] = useState('');
    const [ingredientGroup, setIngredientGroup] = useState('');
    
    useEffect(() => {
        const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
        setGroupsAvailable(storedGroups);
    }, []);

    const handleAddIngredient = () => {
        const addedSuccesfully = true;  
        const validation = true;

        if (validation) {
            if (addedSuccesfully) {

                const newIngredient = {
                    id: uuidv4(), 
                    name: ingredientName,
                    existence: ingredientAmount,
                    unit: ingredientUnit,
                    lastTimeUsed: new Date().toISOString(), 
                    groupId: ingredientGroup
                };

                const existingIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];
                
                const updatedIngredients = [...existingIngredients, newIngredient];
                
                localStorage.setItem('ingredients', JSON.stringify(updatedIngredients));

                // Limpiar los campos de entrada
                setIngredientName('');
                setIngredientAmout('');
                setIngredientUnit('');
                setIngredientGroup('');

                enqueueSnackbar("Se ha guardado correctamente el ingrediente", { variant: 'success'});
            } else {
                enqueueSnackbar("Problemas con el almacenado del ingrediento", { variant: 'error'});
            }
        } else {
            enqueueSnackbar("Todos los campos deben de ser cubierto para poder dar de alta el ingrediente", { variant: 'warning'});
        }
    };

    return (
        <MotionImplementation verticalCentered='enabled'>
            <CenteredDisplay>
                <Title> Agregar Ingrediente </Title>
                <Label>Nombre del Ingrediente:</Label>

                <EditText
                    placeholder="Ingresa el nombre del ingrediente"
                    previousValue={ingredientName}
                    onChange={e => setIngredientName(e.target.value)}
                />

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Cantidad del Ingrediente:</Label>
                        <EditText
                            placeholder="Valor numérico de Ingrediente"
                            previousValue={ingredientAmount}
                            onChange={e => setIngredientAmout(e.target.value)}
                        />
                    </CenteredDisplay>

                    <WhiteDummySpacer />

                    <CenteredDisplay width="100%">
                        <Label>Unidad:</Label>
                        <EditText
                            placeholder="Unidad del Ingrediente"
                            previousValue={ingredientUnit}
                            onChange={e => setIngredientUnit(e.target.value)}
                        />
                    </CenteredDisplay>
                </HorizontalDisplay>

                <CenteredDisplay width="50%">
                    <Label>Grupo:</Label>
                    <DropDownSelection
                        placeHolder="Selecciona el grupo del ingrediente"
                        selectedOption={ingredientGroup}
                        optionsAvailable={groupsAvailable.map(group => ({
                            value: group.id,
                            name: group.name
                        }))}
                        onChange={e => setIngredientGroup(e.target.value)}
                    />
                </CenteredDisplay>

                <Button onClick={handleAddIngredient}>Agregar</Button>
            </CenteredDisplay>
        </MotionImplementation>
    );
}

export default NewIngredients;
