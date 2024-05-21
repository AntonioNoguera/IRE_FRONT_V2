import React, { useState } from 'react';
import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";
import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";
import MotionImplementation from './../../components/Layouts/MotionImplementation';

const ColorOption = [
    {
        "name": "Rosa",
        "value": "#FFC0CB"
    },
    {
        "name": "Rosa Claro",
        "value": "#FFB6C1"
    },
    {
        "name": "Salmón Claro",
        "value": "#FFA07A"
    },
    {
        "name": "Durazno",
        "value": "#FFDAB9"
    },
    {
        "name": "Rosa Brumoso",
        "value": "#FFE4E1"
    },
    {
        "name": "Lavanda Claro",
        "value": "#FFF0F5"
    },
    {
        "name": "Turquesa Pálido",
        "value": "#AFEEEE"
    },
    {
        "name": "Azul Polvo",
        "value": "#B0E0E6"
    },
    {
        "name": "Verde Pálido",
        "value": "#98FB98"
    },
    {
        "name": "Verde Claro",
        "value": "#90EE90"
    },
    {
        "name": "Amarillo Claro",
        "value": "#FAFAD2"
    },
    {
        "name": "Azul Claro",
        "value": "#ADD8E6"
    },
    {
        "name": "Cardo",
        "value": "#D8BFD8"
    },
    {
        "name": "Lavanda",
        "value": "#E6E6FA"
    },
    {
        "name": "Ciruela",
        "value": "#DDA0DD"
    }
];

const NewGroup = () => {
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [groupColor, setGroupColor] = useState('');

    const handleAddGroup = () => {
        const groupData = {
            name: groupName,
            description: groupDescription,
            color: groupColor
        };

        // Recuperar los grupos existentes del local storage
        const existingGroups = JSON.parse(localStorage.getItem('groups')) || [];

        // Añadir el nuevo grupo a la lista de grupos
        const updatedGroups = [...existingGroups, groupData];

        // Guardar la lista actualizada de grupos en el local storage
        localStorage.setItem('groups', JSON.stringify(updatedGroups));

        alert("Grupo añadido correctamente: " + JSON.stringify(groupData));
    };

    return (
        <MotionImplementation verticalCentered='enabled'>
            <CenteredDisplay>
                <Title>Agregar Grupo</Title>
                
                <Label>Nombre del Grupo:</Label>
                <EditText 
                    placeholder="Ingresa el nombre del grupo" 
                    previousValue={groupName} 
                    onChange={e => setGroupName(e.target.value)} />

                <Label>Descripción del Grupo:</Label>
                <BigTextArea 
                    placeholder="Ingresa una clara descripción acerca del grupo" 
                    previousValue={groupDescription} 
                    onChange={e => setGroupDescription(e.target.value)} />

                <CenteredDisplay width="50%">
                    <Label>Color del grupo:</Label>
                    <DropDownSelection 
                        value={groupColor}
                        placeHolder="Selecciona el color para tu grupo" 
                        optionsAvailable={ColorOption}
                        onChange={e => setGroupColor(e.target.value)} />
                </CenteredDisplay>

                <Button onClick={handleAddGroup}>Agregar</Button>
            </CenteredDisplay>
        </MotionImplementation>
    );
}

export default NewGroup;
