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
import { useSnackbar } from 'notistack'; 

const optionsTypes = [
    { name: "Tipos", value: "Tipos" },
    { name: "Proteínas", value: "Proteínas" },
    { name: "Salsas", value: "Salsas" },
    { name: "Acompañamientos", value: "Acompañamientos" }
];

const UpdateSideDish = ({ isModalOpen, closeModal, fullProps, passedHook }) => {
    
    const { enqueueSnackbar } = useSnackbar();

    const [extraName, setExtraName] = useState(fullProps.name);
    const [extraDescription, setExtraDescription] = useState(fullProps.description);
    const [extraType, setExtraType] = useState(fullProps.typeOption);

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

        return !allExtras.some(extra => extra.name === extraName && extra.id !== fullProps.id);
    }

    const onAccept = () => {
        if (validateForm()) {
            if (validation()) { 
                let extras = JSON.parse(localStorage.getItem('extras')) || {
                    Tipos: [],
                    Proteínas: [],
                    Salsas: [],
                    Acompañamientos: []
                };

                // Encontrar y actualizar el complemento
                const updateExtra = (type) => {
                    const index = extras[type].findIndex(item => item.id === fullProps.id);
                    if (index !== -1) {
                        extras[type][index] = {
                            ...extras[type][index],
                            name: extraName,
                            description: extraDescription,
                            typeOption: extraType
                        };
                    }
                };

                // Manejar cambio de tipo
                if (extraType !== fullProps.typeOption) {
                    // Eliminar del tipo original
                    const removeExtra = (type) => {
                        const index = extras[type].findIndex(item => item.id === fullProps.id);
                        if (index !== -1) {
                            extras[type].splice(index, 1);
                        }
                    };
                    switch (fullProps.typeOption) {
                        case 'Tipos':
                            removeExtra('Tipos');
                            break;
                        case 'Proteínas':
                            removeExtra('Proteínas');
                            break;
                        case 'Salsas':
                            removeExtra('Salsas');
                            break;
                        case 'Acompañamientos':
                            removeExtra('Acompañamientos');
                            break;
                        default:
                            alert(`Tipo original no válido: ${fullProps.typeOption}`);
                            return;
                    }
                    // Añadir al nuevo tipo
                    switch (extraType) {
                        case 'Tipos':
                            extras.Tipos.push({
                                id: fullProps.id,
                                name: extraName,
                                description: extraDescription,
                                typeOption: extraType
                            });
                            break;
                        case 'Proteínas':
                            extras.Proteínas.push({
                                id: fullProps.id,
                                name: extraName,
                                description: extraDescription,
                                typeOption: extraType
                            });
                            break;
                        case 'Salsas':
                            extras.Salsas.push({
                                id: fullProps.id,
                                name: extraName,
                                description: extraDescription,
                                typeOption: extraType
                            });
                            break;
                        case 'Acompañamientos':
                            extras.Acompañamientos.push({
                                id: fullProps.id,
                                name: extraName,
                                description: extraDescription,
                                typeOption: extraType
                            });
                            break;
                        default:
                            alert(`Nuevo tipo no válido: ${extraType}`);
                            return;
                    }
                } else {
                    switch (extraType) {
                        case 'Tipos':
                            updateExtra('Tipos');
                            break;
                        case 'Proteínas':
                            updateExtra('Proteínas');
                            break;
                        case 'Salsas':
                            updateExtra('Salsas');
                            break;
                        case 'Acompañamientos':
                            updateExtra('Acompañamientos');
                            break;
                        default:
                            alert(extraType);
                            return;
                    }
                }
 
                localStorage.setItem('extras', JSON.stringify(extras)); 
                
                passedHook(prev => prev + 1)
                closeModal();
                
                enqueueSnackbar("Complemento Actualizado con Éxito", { variant: 'success' });

            } else {
                enqueueSnackbar("El nombre de este complemento ya existe", { variant: 'error' });
            }
        } else {
            enqueueSnackbar("Todos los campos deben de ser cubiertos", { variant: 'warning' }); 
        }
    };

    const onDecline = () => {
        closeModal() 
    };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="90%">
                <Title> Editar Complemento </Title> 

                <Label>Nombre del Complemento:</Label>
                <EditText 
                    previousValue={extraName}
                    onChange={e => setExtraName(e.target.value)}
                    placeholder="Ingresa el nombre del complemento"
                />

                <Label>Descripción de Complemento:</Label>
                <BigTextArea 
                    previousValue={extraDescription}
                    onChange={e => setExtraDescription(e.target.value)}
                    placeholder="Ingresa un texto descriptivo de tu complemento"
                />

                <Label>Tipo de Complemento:</Label>
                <DropDownSelection
                    selectedOption={extraType}
                    onChange={e => setExtraType(e.target.value)}
                    optionsAvailable={optionsTypes}
                    placeHolder="Selecciona el tipo del complemento"
                />
                 
                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick={onDecline}>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick={onAccept}>Actualizar</Button>
                </HorizontalDisplay>
            </CenteredDisplay>
        </Modal>
    );
};

export default UpdateSideDish;
