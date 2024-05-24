import React, { useState } from 'react';
import Modal from './../../../components/UIcomponents/Modal';
import CenteredDisplay from "../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../components/Layouts/HorizontalDisplay";
import Title from "../../../components/Layouts/Title";
import Button from "../../../components/UIcomponents/Button";
import Label from "../../../components/UIcomponents/Label";
import WhiteDummySpacer from "../../../components/Layouts/WhiteDummySpacer";
import EditText from '../../../components/UIcomponents/EditText';
import BigTextArea from './../../../components/UIcomponents/BigTextArea';
import DropDownSelection from './../../../components/UIcomponents/DropDownSelection'; 

import ColorOptions from './../../../../src/GlobalValues';


import { useSnackbar } from 'notistack'; 

const UpdateSideDish = ({ isModalOpen, closeModal, fullProps, passedHook}) => {  
    const { enqueueSnackbar } = useSnackbar();

    const [groupName, setGroupName] = useState(fullProps.name);
    const [groupDescription, setGroupDescription] = useState(fullProps.description);
    const [groupColor, setGroupColor] = useState(fullProps.color);

    const onAccept = () => {
        
            const groupsStr = localStorage.getItem('groups');
            const groups = groupsStr ? JSON.parse(groupsStr) : [];

            const validataion = true;

            const success = true;

            if( validataion ){

                if( success ){
                    const groupIndex = groups.findIndex( g => g.id === fullProps.id );
                    if (groupIndex !== -1) {

                        groups[groupIndex] = {
                            ...groups[groupIndex],
                            name: groupName,
                            description: groupDescription,
                            color: groupColor
                        };

                        localStorage.setItem('groups', JSON.stringify(groups)); 
                        passedHook(prev => prev + 1);
                        
                        closeModal();

                        enqueueSnackbar("Grupo actualizado correctamente", { variant: 'success' });
                        
                    } else {
                        enqueueSnackbar("Grupo no encontrado, verifica la información", { variant: 'error' });
                    }

                } else {
                    enqueueSnackbar("El grupo ya existe o genera conflicto con otra entidad", { variant: 'error' });
                }
                
            } else { 
                enqueueSnackbar("Todos los campos deben de ser cubiertos", { variant: 'warning' });
            } 
    };

    const onDecline = () => {  closeModal();  };

    return ( 
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="90%">
                <Title> Editar Grupo </Title> 

                <Label>Nombre del Grupo:</Label> 
                <EditText 
                    previousValue={groupName} 
                    onChange={e => setGroupName(e.target.value)} 
                >Ingresa el nombre del complemento</EditText>

                <Label>Descripción de Grupo:</Label> 
                <BigTextArea 
                    previousValue={groupDescription} 
                    onChange={e => setGroupDescription(e.target.value)} 
                >Ingresa un texto descriptivo de tu complemento</BigTextArea>

                <Label>Color del Grupo:</Label> 
                <DropDownSelection  
                    selectedOption = {ColorOptions.find(it => it.value === groupColor)?.value || ""} 
                    optionsAvailable = {ColorOptions}
                    placeHolder='Selecciona el color para el grupo'
                    onChange={e => setGroupColor(e.target.value)}
                />
                 
                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick={onDecline}>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick={onAccept}>Agregar</Button>
                </HorizontalDisplay>
            </CenteredDisplay>
        </Modal>
    );
};

export default UpdateSideDish;
