import React, { useState } from 'react';
import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";
import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";
import MotionImplementation from './../../components/Layouts/MotionImplementation';
import { v4 as uuidv4 } from 'uuid';

import ColorOptions from './../../../src/GlobalValues';

import { useSnackbar } from 'notistack'; 

const NewGroup = () => {
    const { enqueueSnackbar } = useSnackbar();

    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [groupColor, setGroupColor] = useState('');

    const validation = () => { 
        return groupName !== "" && groupDescription !== "" && groupColor !== "";
    };

    const success = () => {
        const existingGroups = JSON.parse(localStorage.getItem('groups')) || [];
        return !existingGroups.some(group => group.name === groupName);
    };

    const handleAddGroup = () => {
        if (validation()) {
            if (success()) {
                const groupData = {
                    id: uuidv4(),
                    name: groupName,
                    description: groupDescription,
                    color: groupColor
                };

                const existingGroups = JSON.parse(localStorage.getItem('groups')) || [];

                const updatedGroups = [...existingGroups, groupData];

                localStorage.setItem('groups', JSON.stringify(updatedGroups));

                setGroupName('');
                setGroupDescription('');
                setGroupColor('');

                enqueueSnackbar("Grupo almacenado correctamente", { variant: 'success' });
            } else {
                enqueueSnackbar("El nombre del grupo ya se encuentra ocupado, o genera conflictos con otra entidad", { variant: 'error' });
            }
        } else {
            enqueueSnackbar("Todos los campos deben de ser cubiertos", { variant: 'warning' });
        }
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
                        selectedOption={groupColor}
                        placeHolder="Selecciona el color para tu grupo" 
                        optionsAvailable={ColorOptions}
                        onChange={e => setGroupColor(e.target.value)} />
                </CenteredDisplay>

                <Button onClick={handleAddGroup}>Agregar</Button>
            </CenteredDisplay>
        </MotionImplementation>
    );
}

export default NewGroup;
