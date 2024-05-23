import React, { useState, useEffect } from 'react';


import { v4 as uuidv4 } from 'uuid'; // Importa la función para generar UUIDs

import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";
import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";

import  MotionImplementation  from './../../components/Layouts/MotionImplementation';

import { motion } from 'framer-motion';

import { SnackbarProvider, useSnackbar } from 'notistack'; 

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

    const manageConfirm = () => {
        const validation = true;
        const succed = true;

        if (validation) {
            if (succed) {
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
            } else {
                enqueueSnackbar("Error al añadir la receta", { variant: 'error' });
            }
        } else {
            enqueueSnackbar("Campos pendientes", { variant: 'warning' });
        }
    };

    const [unitOfTheIngredient, setUnit ] = useState("Unidad") 


    useEffect(() => { 
        const processedFilter = storedIngredients.filter(ingredient => { 
            return ingredient.groupId === ingredientGroup;
        });
         
        setIngredientOptions(processedFilter); 
    }, [ingredientGroup]);


    useEffect(() => {  

        const fullIngredientProp = storedIngredients.find(ingredient => ingredient.id === recipeIngredient )
        if(fullIngredientProp){

            setUnit(fullIngredientProp.unit)
        } 
          
    }, [recipeIngredient]);

    return (
        <MotionImplementation verticalCentered="enabled" >

            <CenteredDisplay>  
            <Title> Agregar Receta </Title>

                <Label>Selecciona el Platillo:</Label> 
                <DropDownSelection
                    selectedOption = {recipeDish}
                    
                    onChange = { e => setRecipeDish(e.target.value)}
                    placeHolder = "Selecciona un platillo" 
                    optionsAvailable = {storedDish.map(type => ({
                        value: type.id,
                        name: type.name
                    }))}
                    />

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Selecciona el Grupo del Ingrediente:</Label> 
                        <DropDownSelection 
                            optionsAvailable = {storedGroups.map(type => ({
                                value: type.id,
                                name: type.name
                            }))}
                            selectedOption = {ingredientGroup}
                            placeHolder = "Grupo del Ingrediente"
                            onChange = {e => setIngredientGroup(e.target.value)} />
                    </CenteredDisplay>
                    
                    <WhiteDummySpacer/>
                    
                    <CenteredDisplay width="100%">
                        <Label>Selecciona el Ingrediente:</Label> 
                        <DropDownSelection
                            placeHolder = "Selecciona el ingrediente de la receta "
                            selectedOption = { recipeIngredient} 
                            optionsAvailable = {ingredientOption.map(type => ({
                                value: type.id,
                                name: type.name
                            }))}
                            onChange = { e=> setRecipeIngredient(e.target.value)}/>
                    </CenteredDisplay>
                </HorizontalDisplay>
                

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Cantidad del Ingrediente:</Label>
                        <HorizontalDisplay>
                            <EditText
                            onChange = {e => setRecipeAmount(e.target.value)}
                            previousValue = {recipeAmount}
                            placeholder="Valor numérico de Ingrediente"/>
                            <Label marginTop='5px'>{unitOfTheIngredient}</Label>
                        </HorizontalDisplay>
                        
                    </CenteredDisplay>

                    <WhiteDummySpacer/>
                    <WhiteDummySpacer/>
                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>¿Para cuántos Servicios?:</Label>
                        <EditText
                            onChange = { e => setRecipeServices(e.target.value)}
                            previousValue = { recipeServices }
                            placeholder="Unidad del Ingrediente"/>
                    </CenteredDisplay>
                    
                </HorizontalDisplay>
 
                <Button onClick = {manageConfirm}>Agregar</Button>  
                
            </CenteredDisplay> 
        </MotionImplementation>
    )
}

export default NewRecipe;