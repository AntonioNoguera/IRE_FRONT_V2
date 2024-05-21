import React, { useState } from 'react';
import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";

import  MotionImplementation  from './../../components/Layouts/MotionImplementation';

import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";


const NewIngredients = () => {
    const groupsAvailable = [
        {
            value : "asdfladfsdfasdfa",
            name : "Test"
        }
    ];

    const [ingredientName, setIngredientName ] = useState('');
    const [ingredientAmount, setIngredientAmout ] = useState('');
    const [ingredientUnit, setIngredientUnit ] = useState('');
    const [ingredientGroup, setIngredientGroup ] = useState(''); 

    const handleAddIngredient = () => {
        const addedSuccesfully = true;  

        if(addedSuccesfully){
            setIngredientName('')
            setIngredientAmout("")
            setIngredientUnit("")
            setIngredientGroup("")

            alert("Ingrediente añadido")
        }else{
            alert("problemas con la adición")
        }
    };
    

    return (
        <MotionImplementation verticalCentered='enabled'>

            <CenteredDisplay>  
            <Title> Agregar Ingrediente </Title>
                <Label>Nombre del Ingrediente:</Label>

                <EditText
                    placeholder = "Ingresa el nombre del grupo"
                    previousValue = {ingredientName}
                    onChange = {e => setIngredientName(e.target.value)}
                />

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Cantidad del Ingrediente:</Label>
                        <EditText
                            placeholder = "Valor numérico de Ingrediente"
                            previousValue = {ingredientAmount}
                            onChange = {e => setIngredientAmout(e.target.value)}
                            />
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Unidad:</Label>
                        <EditText
                            placeholder="Unidad del Ingrediente"
                            previousValue = {ingredientUnit}
                            onChange = {e => setIngredientUnit(e.target.value)}
                            />
                    </CenteredDisplay>
                    
                </HorizontalDisplay>

                <CenteredDisplay width="50%">
                    <Label>Grupo:</Label>
                    <DropDownSelection
                        placeHolder = "Selecciona el grupo del ingrediente"
                        selectedOption = {ingredientGroup}
                        optionsAvailable = {groupsAvailable}
                        onChange = {e=> setIngredientGroup(e.target.value)}
                        />
                </CenteredDisplay>

                <Button onClick={handleAddIngredient} >Agregar</Button>  
                
            </CenteredDisplay> 
        </MotionImplementation>
    )
}

export default NewIngredients;