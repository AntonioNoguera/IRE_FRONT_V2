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
import { useState } from "react";

const NewDish = () => {
    const [dishName, setDishName ] = useState('');
    const [dishTemperature,setDishTemperature] = useState ('')

    const [dishType, setDishType ] = useState('');
    const [dishSauce, setDishSauce ] = useState('');
    const [dishComplement, setDishComplement ] = useState('');
    const [dishProtein, setDishProtein ] = useState(''); 

    const extraObject = JSON.parse(localStorage.getItem('extras')) || [];

    const temperatureOptions = [
        { name : "Frío" , value : "Frío" },
        { name : "Caliente" , value : "Caliente" },
        { name : "Irrelevante" , value : "Irrelevante" },
    ]


    return (
        <MotionImplementation verticalCentered = 'enabled'>

            <CenteredDisplay>  
            <Title> Agregar Ingrediente </Title>

                <Label>Escribe el nombre del platillo:</Label>
                <EditText
                    onChange = { e => setDishName(e.target.value)}
                    previousValue= {dishName}
                    placeholder = "Ingresa el nombre del platillo"/>
                
                <Label>Selecciona la temperatura: </Label>
                <DropDownSelection
                    onChange = { e => setDishTemperature(e.target.value)}
                    selectedOption = {dishTemperature}
                    optionsAvailable = {temperatureOptions}
                    placeHolder = "Ingresa la temperatura del platillo"/>

                <Label>Selecciona el tipo de platillo:</Label>
                <DropDownSelection
                    onChange = { e => setDishType(e.target.value)}
                    selectedOption = {dishType}
                    optionsAvailable={[]}
                    placeholder = "Ingresa el tipo del platillo"/>

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Proteína:</Label> 
                        <DropDownSelection
                            onChange = { e => setDishProtein(e.target.value)}
                            selectedOption = {dishProtein}
                            optionsAvailable={[]}
                            placeholder = "Ingresa la proteína del platillo"/>
                    </CenteredDisplay>
                    
                    <WhiteDummySpacer/>
                    
                    <CenteredDisplay width="100%">
                        <Label>Acompañamiento:</Label> 
                        <DropDownSelection
                            onChange = { e => setDishComplement(e.target.value)}
                            selectedOption = {dishComplement}
                            optionsAvailable={[]}
                            placeholder = "Ingresa el acompañamiento del platillo"/>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Salsa:</Label> 
                        <DropDownSelection
                            onChange = { e => setDishSauce(e.target.value)}
                            previousValue= {dishSauce}
                            optionsAvailable={[]}
                            placeholder = "Ingresa la salsa del platillo"/> 
                    </CenteredDisplay>
                </HorizontalDisplay>
 
 
                <Button>Agregar</Button>  
                
            </CenteredDisplay> 
        </MotionImplementation>

    )
}

export default NewDish;