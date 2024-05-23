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

const UpdateSideDishModal = ({ isModalOpen, closeModal, fullProps = {}, passedHook }) => {
    const temperatureOptions = [
        { name : "Frío" , value : "Frío" },
        { name : "Caliente" , value : "Caliente" },
        { name : "Irrelevante" , value : "Irrelevante" },
    ]

    const [dishName, setDishName ] = useState(fullProps.name);
    const [dishTemperature,setDishTemperature] = useState (fullProps.temperature);

    const [dishType, setDishType ] = useState(fullProps.typeId);
    const [dishSauce, setDishSauce ] = useState(fullProps.sauceId);
    const [dishComplement, setDishComplement ] = useState(fullProps.complementId);
    const [dishProtein, setDishProtein ] = useState(fullProps.proteinId); 

    const extraObject = JSON.parse(localStorage.getItem('extras')) || [];
 
 

    // Definición de funciones manejadoras dentro del componente
    const onAccept = () => {
        const validation = true;
        const success = true;
        if (validation) {
            if (success) { 
                //Update members

                
                const dishes = JSON.parse(localStorage.getItem('dishes') || '[]');
    
                const dishesFound = dishes.findIndex(g => g.id === fullProps.id);
                if (dishesFound !== -1) {

                    dishes[dishesFound] = {
                        ...dishes[dishesFound],
                        additionDate:fullProps.additionDate,
                        assamble : fullProps.assamble,
                        complementId :dishComplement,
                        id : fullProps.id,
                        name: dishName,
                        proteinId:dishProtein,
                        rating: fullProps.rating,
                        sauceId: dishSauce,
                        temperature:dishTemperature,
                        typeId:dishType, 
                    };

                

                    localStorage.setItem('dishes', JSON.stringify(dishes));

                    
                    passedHook(prev => prev + 1)
                }

            } else {
                alert("Problems")
            }
        } else {
            alert("PENDING VALIDATION")
        }
        closeModal();
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
                <EditText
                    onChange = { e => setDishName(e.target.value)}
                    previousValue= {dishName}
                    placeholder = "Ingresa el nombre del platillo"/>
                
                <Label>Selecciona la temperatura: </Label>
                <DropDownSelection
                    onChange = { e => setDishTemperature(e.target.value)}
                    selectedOption = {dishTemperature}
                    optionsAvailable = {temperatureOptions}
                    placeHolder = "Ingresa la temperatura del platillo"/>

                <Label>Selecciona el tipo de platillo:</Label>
                <DropDownSelection
                    onChange = { e => setDishType(e.target.value)} 
                    selectedOption = {dishType} 
                    optionsAvailable = {extraObject.Tipos.map(type => ({
                        value: type.id,
                        name: type.name
                    }))}
                    placeHolder = "Ingresa el tipo del platillo"/>

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Proteína:</Label> 
                        <DropDownSelection
                            onChange = { e => setDishProtein(e.target.value)}
                            selectedOption = {dishProtein}
                            optionsAvailable = {extraObject.Proteínas.map(type => ({
                                value: type.id,
                                name: type.name
                            }))}
                            placeHolder = "Ingresa la proteína del platillo"/>
                    </CenteredDisplay>
                    
                    <WhiteDummySpacer/>
                    
                    <CenteredDisplay width="100%">
                        <Label>Acompañamiento:</Label> 
                        <DropDownSelection
                            onChange = { e => setDishComplement(e.target.value)}
                            selectedOption = {dishComplement}
                            optionsAvailable = {extraObject.Acompañamientos.map(type => ({
                                value: type.id,
                                name: type.name
                            }))} 
                            placeHolder = "Ingresa el acompañamiento del platillo"/>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Salsa:</Label> 
                        <DropDownSelection
                            onChange = { e => setDishSauce(e.target.value)}
                            selectedOption = {dishSauce}
                            optionsAvailable = {extraObject.Salsas.map(type => ({
                                value: type.id,
                                name: type.name
                            }))} 
                            placeHolder = "Ingresa la salsa del platillo"/> 
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

export default UpdateSideDishModal;
