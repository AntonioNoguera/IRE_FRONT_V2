import React, { useState } from 'react';
import Modal from './../../../components/UIcomponents/Modal';  
import CenteredDisplay from "../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../components/Layouts/HorizontalDisplay";
import Title from "../../../components/Layouts/Title";
import Button from "../../../components/UIcomponents/Button";
import Label from "../../../components/UIcomponents/Label";
import WhiteDummySpacer from "../../../components/Layouts/WhiteDummySpacer";
import EditText from '../../../components/UIcomponents/EditText'; 
import DropDownSelection from './../../../components/UIcomponents/DropDownSelection';

import { useSnackbar } from 'notistack'; 

const UpdateSideDishModal = ({ isModalOpen, closeModal, fullProps = {}, passedHook }) => {
    const { enqueueSnackbar } = useSnackbar();
    
    const temperatureOptions = [
        { name: "Frío", value: "Frío" },
        { name: "Caliente", value: "Caliente" },
        { name: "Irrelevante", value: "Irrelevante" },
    ];

    const [dishName, setDishName] = useState(fullProps.name);
    const [dishTemperature, setDishTemperature] = useState(fullProps.temperature);
    const [dishType, setDishType] = useState(fullProps.typeId);
    const [dishSauce, setDishSauce] = useState(fullProps.sauceId);
    const [dishComplement, setDishComplement] = useState(fullProps.complementId);
    const [dishProtein, setDishProtein] = useState(fullProps.proteinId); 

    const extraObject = JSON.parse(localStorage.getItem('extras')) || [];

    const validateForm = () => {
        return (
            dishName !== '' &&
            dishTemperature !== '' &&
            dishType !== '' &&
            dishSauce !== '' &&
            dishComplement !== '' &&
            dishProtein !== ''
        );
    };

    const dishExists = () => {
        const existingDishes = JSON.parse(localStorage.getItem('dishes')) || [];
        return existingDishes.some(dish => dish.name === dishName && dish.id !== fullProps.id);
    };

    const onAccept = () => {
        if (!validateForm()) {
            enqueueSnackbar("Es necesario cubrir todos los campos para poder continuar", { variant: 'warning' });
            return;
        }

        if (dishExists()) {
            enqueueSnackbar("El nombre del platillo ya existe, o genera conflicto con otra entidad", { variant: 'error' });
            return;
        }

        const dishes = JSON.parse(localStorage.getItem('dishes') || '[]');

        const dishesFound = dishes.findIndex(g => g.id === fullProps.id);
        if (dishesFound !== -1) {
            dishes[dishesFound] = {
                ...dishes[dishesFound],
                additionDate: fullProps.additionDate,
                assamble: fullProps.assamble,
                complementId: dishComplement,
                id: fullProps.id,
                name: dishName,
                proteinId: dishProtein,
                rating: fullProps.rating,
                sauceId: dishSauce,
                temperature: dishTemperature,
                typeId: dishType,
            };

            localStorage.setItem('dishes', JSON.stringify(dishes));
            passedHook(prev => prev + 1);
            closeModal();

            enqueueSnackbar("El platillo ha sido actualizado correctamente", { variant: 'success' });
        } else {
            enqueueSnackbar("Platillo no encontrado", { variant: 'error' });
        }
    };

    const onDecline = () => { closeModal(); };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="90%">
                <Title>Editar Platillo</Title>

                <Label>Escribe el nombre del platillo:</Label>
                <EditText
                    onChange={e => setDishName(e.target.value)}
                    previousValue={dishName}
                    placeholder="Ingresa el nombre del platillo"
                />
                
                <Label>Selecciona la temperatura:</Label>
                <DropDownSelection
                    onChange={e => setDishTemperature(e.target.value)}
                    selectedOption={dishTemperature}
                    optionsAvailable={temperatureOptions}
                    placeHolder="Ingresa la temperatura del platillo"
                />

                <Label>Selecciona el tipo de platillo:</Label>
                <DropDownSelection
                    onChange={e => setDishType(e.target.value)}
                    selectedOption={dishType}
                    optionsAvailable={extraObject.Tipos.map(type => ({
                        value: type.id,
                        name: type.name
                    }))}
                    placeHolder="Ingresa el tipo del platillo"
                />

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Proteína:</Label> 
                        <DropDownSelection
                            onChange={e => setDishProtein(e.target.value)}
                            selectedOption={dishProtein}
                            optionsAvailable={extraObject.Proteínas.map(type => ({
                                value: type.id,
                                name: type.name
                            }))}
                            placeHolder="Ingresa la proteína del platillo"
                        />
                    </CenteredDisplay>
                    
                    <WhiteDummySpacer />
                    
                    <CenteredDisplay width="100%">
                        <Label>Acompañamiento:</Label> 
                        <DropDownSelection
                            onChange={e => setDishComplement(e.target.value)}
                            selectedOption={dishComplement}
                            optionsAvailable={extraObject.Acompañamientos.map(type => ({
                                value: type.id,
                                name: type.name
                            }))}
                            placeHolder="Ingresa el acompañamiento del platillo"
                        />
                    </CenteredDisplay>

                    <WhiteDummySpacer />

                    <CenteredDisplay width="100%">
                        <Label>Salsa:</Label> 
                        <DropDownSelection
                            onChange={e => setDishSauce(e.target.value)}
                            selectedOption={dishSauce}
                            optionsAvailable={extraObject.Salsas.map(type => ({
                                value: type.id,
                                name: type.name
                            }))}
                            placeHolder="Ingresa la salsa del platillo"
                        /> 
                    </CenteredDisplay>
                </HorizontalDisplay>

                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick={onDecline}>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick={onAccept}>Actualizar</Button>
                </HorizontalDisplay>
            </CenteredDisplay>
        </Modal>
    );
};

export default UpdateSideDishModal;
