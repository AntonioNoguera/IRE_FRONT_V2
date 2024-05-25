import React, { useState } from 'react';

import Title from "../../components/Layouts/Title";
import ComponentHolder from "../../components/Layouts/ComponentHolder";
import HorizontalSpray from "../../components/Layouts/HorizontalSpray";
import MotionImplementation from './../../components/Layouts/MotionImplementation';

import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay"; 

import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";
import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";

import { v4 as uuidv4 } from 'uuid'; // Importa la función para generar UUIDs

import { useSnackbar } from 'notistack'; 

const NewSideDish = () => {     
    const { enqueueSnackbar } = useSnackbar();

    const optionsTypes = [
        { name : "Tipos", value : "Tipos" },
        { name : "Proteínas", value : "Proteínas" },
        { name : "Salsas", value : "Salsas" },
        { name : "Acompañamientos", value : "Acompañamientos" },
    ]; 

    const [extraName, setExtraName ] = useState("");
    const [extraDescription, setExtraDescription ] = useState("");
    const [extraType, setExtraType ] = useState("");

    const validateForm = () => {
        return extraName !== "" && extraDescription !== "" && extraType !== "";
    }

    const validation = () => {
        const extras = JSON.parse(localStorage.getItem('extras')) || {
            Tipos: [],
            Proteínas: [],
            Salsas: [],
            Acompañamientos: []
        };

        const allExtras = [
            ...extras.Tipos,
            ...extras.Proteínas,
            ...extras.Salsas,
            ...extras.Acompañamientos
        ];

        return !allExtras.some(extra => extra.name === extraName);
    }

    const manageSelection = () => {
        if (validateForm()) {
            if(validation()) { 
                let extras = JSON.parse(localStorage.getItem('extras')) || {
                    Tipos: [],
                    Proteínas: [],
                    Salsas: [],
                    Acompañamientos: []
                };

                const newExtra = {
                    id: uuidv4(),
                    name: extraName,
                    description: extraDescription
                };

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

                enqueueSnackbar("¡Complemento almacenado con éxito!", { variant: 'success' });

                localStorage.setItem('extras', JSON.stringify(extras));

            } else {
                enqueueSnackbar("El nombre de este complemento ya está ocupado, cambia de nombre, o actualiza tu complemento.", { variant: 'error' });
            }
        } else {
            enqueueSnackbar("¡Campos pendientes, para continuar todos los campos requiren estar cubiertos!", { variant: 'warning' });
        }
    }

    return (
        <MotionImplementation verticalCentered='enabled'>
            <CenteredDisplay>
                <Title> Nuevo Complemento </Title> 

                <Label>Nombre del Complemento:</Label> 
                <EditText
                    placeholder="Ingresa el nombre del complemento"
                    previousValue={extraName}
                    onChange={e => setExtraName(e.target.value)} />

                <Label>Descripción de Complemento:</Label> 
                <BigTextArea
                    previousValue={extraDescription}
                    onChange={e => setExtraDescription(e.target.value)}
                    placeholder="Ingresa un texto descriptivo de tu complemento" />

                <Label>Tipo de Complemento:</Label> 
                <DropDownSelection 
                    onChange={e => setExtraType(e.target.value)}
                    optionsAvailable={optionsTypes}
                    placeHolder="Selecciona el tipo del complemento"
                    selectedOption={extraType}/>

                <Button onClick={manageSelection}> Agregar </Button>  
            </CenteredDisplay>
        </MotionImplementation> 
    )
}

export default NewSideDish;
