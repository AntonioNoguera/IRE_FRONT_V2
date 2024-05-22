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

const optionsTypes = [
    { name: "Tipos", value: "Tipos" },
    { name: "Proteínas", value: "Proteínas" },
    { name: "Salsas", value: "Salsas" },
    { name: "Acompañamientos", value: "Acompañamientos" }
];

const UpdateSideDish = ({ isModalOpen, closeModal, fullProps, passedHook }) => {
    const [extraName, setExtraName] = useState(fullProps.name);
    const [extraDescription, setExtraDescription] = useState(fullProps.description);
    const [extraType, setExtraType] = useState(fullProps.typeOption);

    const onAccept = () => {
        const validate = true;
        const success = true;
        if (validate) {
            if (success) {
                alert("Complemento actualizado con éxito");
                
                let extras = JSON.parse(localStorage.getItem('extras')) || {
                    Tipos: [],
                    Proteínas: [],
                    Salsas: [],
                    Complementos: []
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
                            removeExtra('Complementos');
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
                            extras.Complementos.push({
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
                    // Si el tipo no cambia, simplemente actualiza el complemento en el mismo tipo
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
                            updateExtra('Complementos');
                            break;
                        default:
                            alert(extraType);
                            return;
                    }
                }

                // Guardar el objeto actualizado en el localStorage
                localStorage.setItem('extras', JSON.stringify(extras));
                passedHook(prev => prev + 1)
                closeModal();
            } else {
                alert("Complemento ya existe en la base de datos");
            }
        } else {
            alert("Campos pendientes");
        }
    };

    const onDecline = () => {
        alert("Le picaste cancelar");
        closeModal(); // Cierra el modal después de declinar
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
