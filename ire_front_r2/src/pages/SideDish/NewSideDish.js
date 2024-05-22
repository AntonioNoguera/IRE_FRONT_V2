import React, { useState, useEffect } from 'react';

import Title from "../../components/Layouts/Title";
import ComponentHolder from "../../components/Layouts/ComponentHolder";
import HorizontalSpray from "../../components/Layouts/HorizontalSpray";
import  MotionImplementation  from './../../components/Layouts/MotionImplementation';

import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay"; 

import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";
import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";

import { v4 as uuidv4 } from 'uuid'; // Importa la función para generar UUIDs

import { motion } from 'framer-motion';

const NewSideDish = () => {     
    const optionsTypes = [
        {
            name : "Tipos",
            value : "Tipos"
        },
        {
            name : "Proteínas",
            value : "Proteínas"
        },
        {
            name : "Salsas",
            value : "Salsas"
        },
        {
            name : "Acompañamientos",
            value : "Acompañamientos"
        },
    ]

    const [extraName, setExtraName ] = useState("");
    const [extraDescription, setExtraDescription ] = useState("");
    const [extraType, setExtraType ] = useState("");

    const manageSelection = () => {
        const validation = true
        const success = true
        if (validation) {
            if(success) { 

                let extras = JSON.parse(localStorage.getItem('extras')) || {
                    Tipos: [],
                    Proteínas: [],
                    Salsas: [],
                    Acompañamientos: []
                };

                // Crear el nuevo complemento
                const newExtra = {
                    id: uuidv4(),
                    name: extraName,
                    description: extraDescription
                };

                // Añadir el nuevo complemento en la llave correspondiente
                switch (extraType) {
                    case 'Tipos':
                        extras.Tipos.push(newExtra);
                        break;
                    case 'Proteínas':
                        extras.Proteínas.push(newExtra);
                        break;
                    case 'Salsas':
                        extras.Salsas.push(newExtra);
                        break;
                    case 'Acompañamientos':
                        extras.Acompañamientos.push(newExtra);
                        break;
                    default:
                        alert('Tipo de complemento no válido');
                        return;
                }

                setExtraName("");
                setExtraDescription("");
                setExtraType("");

                alert("Guardado con exito")

                // Guardar el objeto actualizado en localStorage
                localStorage.setItem('extras', JSON.stringify(extras));
            } else {
                alert("expecifiCA ERRONEA")
            }
        } else {
            alert("Grupos pendientes")
        }
    }


    return (
            <MotionImplementation verticalCentered='enabled'>
                <CenteredDisplay>
                <Title> Nuevo Complemento </Title> 

                <Label>Nombre del Complemento:</Label> 
                <EditText
                    placeholder = "Ingresa el nombre del complemento"
                    previousValue = {extraName}
                    onChange={ e => setExtraName(e.target.value)} />

                <Label>Descripción de Complemento:</Label> 
                <BigTextArea
                    previousValue = {extraDescription}
                    onChange = {e => setExtraDescription(e.target.value)}
                    placeholder = "Ingresa un texto descriptivo de tu complemento" />

                <Label>Tipo de Complemento:</Label> 
                <DropDownSelection 
                    onChange = {e => setExtraType(e.target.value)}
                    optionsAvailable = {optionsTypes}
                    placeHolder = "Selecciona el tipo del complemento"
                    selectedOption = {extraType}/>

                <Button onClick={manageSelection}>Agregar</Button>  
                </CenteredDisplay>
            </MotionImplementation> 
    )
}

export default NewSideDish;