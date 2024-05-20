import React from 'react';
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

const temperatureOptions = ["Frío", "Caliente", "Irrelevante"];

const UpdateSideDish = ({ isModalOpen, closeModal, fullProps = {} }) => {
    // Proporciona valores predeterminados para evitar errores si alguna propiedad es undefined
    const {
        name = '',
        temperature = '',
        type = {},
        group_name = '',
        sauce = {},
        protein = {},
        complement = {},
        complementInfo = { type: [], proteins: [], complements: [], sauces: [] },
    } = fullProps;

    // Definición de funciones manejadoras dentro del componente
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
                <Title> Editar Ingrediente </Title>

                <Label>Escribe el nombre del platillo:</Label>
                <EditText previousValue={name}>Ingresa el nuevo nombre de tu Platillo</EditText>
                
                <Label>Selecciona la temperatura: </Label>
                <DropDownSelection
                    optionsAvailable={temperatureOptions}
                    selectedOption={temperature}
                >
                    Selecciona la temperatura
                </DropDownSelection>

                <Label>Selecciona el tipo de platillo:</Label>
                <DropDownSelection
                    optionsAvailable={complementInfo.types?.map(it => it.name) || []}
                    selectedOption={type.name || ''}
                >
                    Ingresa el nombre del grupo
                </DropDownSelection>

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Proteína:</Label> 
                        <DropDownSelection
                            optionsAvailable={complementInfo.proteins?.map(it => it.name) || []}
                            selectedOption={protein.name || ''}
                        >
                            Proteínas disponibles
                        </DropDownSelection>
                    </CenteredDisplay>
                    
                    <WhiteDummySpacer/>
                    
                    <CenteredDisplay width="100%">
                        <Label>Acompañamiento:</Label> 
                        <DropDownSelection
                            optionsAvailable={complementInfo.complements?.map(it => it.name) || []}
                            selectedOption={complement.name || ''}
                        >
                            Acompañamientos disponibles
                        </DropDownSelection>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Salsa:</Label> 
                        <DropDownSelection
                            optionsAvailable={complementInfo.sauces?.map(it => it.name) || []}
                            selectedOption={sauce.name || ''}
                        >
                            Salsas disponibles
                        </DropDownSelection>
                    </CenteredDisplay>
                </HorizontalDisplay>

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
