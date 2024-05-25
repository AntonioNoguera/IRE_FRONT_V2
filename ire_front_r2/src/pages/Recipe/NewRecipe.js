import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Importa la función para generar UUIDs

import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";
import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";
import MotionImplementation from './../../components/Layouts/MotionImplementation';

import { useSnackbar } from 'notistack'; 

const NewRecipe = () => {
    const storedDish = JSON.parse(localStorage.getItem('dishes')) || [];
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];  
    const storedIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];

    const { enqueueSnackbar } = useSnackbar();

    //Hooks
    const [recipeDish, setRecipeDish ] = useState("");
    const [ingredientGroup, setIngredientGroup ] = useState("");
    const [recipeIngredient, setRecipeIngredient ] = useState("");
    const [recipeAmount, setRecipeAmount ] = useState("");
    const [recipeServices, setRecipeServices ] = useState("");
    const [ingredientOption , setIngredientOptions] = useState([]);
    const [unitOfTheIngredient, setUnit ] = useState("Unidad");

    const validateForm = () => {
        return (
            recipeDish !== '' &&
            ingredientGroup !== '' &&
            recipeIngredient !== '' &&
            recipeAmount !== '' &&
            recipeServices !== ''
        );
    };

    const isUniqueRecipe = () => {
        const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        return !existingRecipes.some(recipe => recipe.dishId === recipeDish && recipe.ingredientId === recipeIngredient);
    };

    const manageConfirm = () => {
        if (!validateForm()) {
            enqueueSnackbar("Todos los campos deben de ser cubiertos para poder dar de alta la receta", { variant: 'warning' });
            return;
        }

        if (!isUniqueRecipe()) {
            enqueueSnackbar("Ya existe una receta con el mismo ingrediente para este platillo", { variant: 'error' });
            return;
        }

        const newAdditionRecipe = {
            id: uuidv4(),
            dishId: recipeDish,  
            ingredientId: recipeIngredient,
            ingredientAmount: recipeAmount,
            service: recipeServices, 
            additionDate: new Date().toISOString(),
        };

        const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        const updatedRecipes = [...existingRecipes, newAdditionRecipe];
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));

        setRecipeDish("");
        setIngredientGroup("");
        setRecipeIngredient("");
        setRecipeAmount("");
        setRecipeServices("");
        setIngredientOptions([]);

        enqueueSnackbar("Añadido con éxito", { variant: 'success' });
    };

    useEffect(() => { 
        const processedFilter = storedIngredients.filter(ingredient => { 
            return ingredient.groupId === ingredientGroup;
        });
        setIngredientOptions(processedFilter); 
    }, [ingredientGroup]);

    useEffect(() => {  
        const fullIngredientProp = storedIngredients.find(ingredient => ingredient.id === recipeIngredient);
        if (fullIngredientProp) {
            setUnit(fullIngredientProp.unit);
        }
    }, [recipeIngredient]);

    return (
        <MotionImplementation verticalCentered="enabled">
            <CenteredDisplay>  
                <Title> Agregar Receta </Title>

                <Label>Selecciona el Platillo:</Label> 
                <DropDownSelection
                    selectedOption={recipeDish}
                    onChange={e => setRecipeDish(e.target.value)}
                    placeHolder="Selecciona un platillo"
                    optionsAvailable={storedDish.map(type => ({
                        value: type.id,
                        name: type.name
                    }))}
                />

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Selecciona el Grupo del Ingrediente:</Label> 
                        <DropDownSelection 
                            optionsAvailable={storedGroups.map(type => ({
                                value: type.id,
                                name: type.name
                            }))}
                            selectedOption={ingredientGroup}
                            placeHolder="Grupo del Ingrediente"
                            onChange={e => setIngredientGroup(e.target.value)}
                        />
                    </CenteredDisplay>
                    
                    <WhiteDummySpacer />
                    
                    <CenteredDisplay width="100%">
                        <Label>Selecciona el Ingrediente:</Label> 
                        <DropDownSelection
                            placeHolder="Selecciona el ingrediente de la receta"
                            selectedOption={recipeIngredient}
                            optionsAvailable={ingredientOption.map(type => ({
                                value: type.id,
                                name: type.name
                            }))}
                            onChange={e => setRecipeIngredient(e.target.value)}
                        />
                    </CenteredDisplay>
                </HorizontalDisplay>

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Cantidad del Ingrediente:</Label>
                        <HorizontalDisplay>
                            <EditText
                                onChange={e => setRecipeAmount(e.target.value)}
                                previousValue={recipeAmount}
                                placeholder="Valor numérico de Ingrediente"
                            />
                            <Label marginTop='5px'>{unitOfTheIngredient}</Label>
                        </HorizontalDisplay>
                    </CenteredDisplay>

                    <WhiteDummySpacer />
                    <WhiteDummySpacer />
                    <WhiteDummySpacer />

                    <CenteredDisplay width="100%">
                        <Label>¿Para cuántos Servicios?:</Label>
                        <EditText
                            onChange={e => setRecipeServices(e.target.value)}
                            previousValue={recipeServices}
                            placeholder="Unidad del Ingrediente"
                        />
                    </CenteredDisplay>
                </HorizontalDisplay>

                <Button onClick={manageConfirm}>Agregar</Button>
            </CenteredDisplay> 
        </MotionImplementation>
    )
}

export default NewRecipe;
