import React, { useState } from 'react';
import Modal from './../../../components/UIcomponents/Modal';  // Asegúrate de que la ruta es correcta
import CenteredDisplay from "../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../components/Layouts/HorizontalDisplay";
import Title from "../../../components/Layouts/Title";
import Button from "../../../components/UIcomponents/Button";
import Label from "../../../components/UIcomponents/Label";
import WhiteDummySpacer from "../../../components/Layouts/WhiteDummySpacer";
import EditText from '../../../components/UIcomponents/EditText';
import BigTextArea from './../../../components/UIcomponents/BigTextArea';
import DropDownSelection from './../../../components/UIcomponents/DropDownSelection';

const ColorOption = [
    { "name": "Rosa", "value": "#FFC0CB" },
    { "name": "Rosa Claro", "value": "#FFB6C1" },
    { "name": "Salmón Claro", "value": "#FFA07A" },
    { "name": "Durazno", "value": "#FFDAB9" },
    { "name": "Rosa Brumoso", "value": "#FFE4E1" },
    { "name": "Lavanda Claro", "value": "#FFF0F5" },
    { "name": "Turquesa Pálido", "value": "#AFEEEE" },
    { "name": "Azul Polvo", "value": "#B0E0E6" },
    { "name": "Verde Pálido", "value": "#98FB98" },
    { "name": "Verde Claro", "value": "#90EE90" },
    { "name": "Amarillo Claro", "value": "#FAFAD2" },
    { "name": "Azul Claro", "value": "#ADD8E6" },
    { "name": "Cardo", "value": "#D8BFD8" },
    { "name": "Lavanda", "value": "#E6E6FA" },
    { "name": "Ciruela", "value": "#DDA0DD" }
];

const UpdateSideDish = ({ isModalOpen, closeModal, fullProps }) => {
    const [groupName, setGroupName] = useState(fullProps.name);
    const [groupDescription, setGroupDescription] = useState(fullProps.description);
    const [groupColor, setGroupColor] = useState(fullProps.color);

    const onAccept = () => {
        alert("Le picaste aceptar");
        closeModal(); // Cierra el modal después de aceptar
    };

    const onDecline = () => {
        alert("Le picaste cancelar");
        closeModal(); // Cierra el modal después de declinar
    };

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
                    selectedOption={ColorOption.find(it => it.value === groupColor)?.value || ""} 
                    optionsAvailable={ColorOption}
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
