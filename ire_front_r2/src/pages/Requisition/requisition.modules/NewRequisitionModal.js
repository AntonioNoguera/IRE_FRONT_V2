import React, { useState, useEffect } from 'react';
import Modal from './../../../components/UIcomponents/Modal';

import CenteredDisplay from "../../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../../components/Layouts/HorizontalDisplay";
import Title from "../../../components/Layouts/Title";
import Button from "../../../components/UIcomponents/Button";
import EditText from "../../../components/UIcomponents/EditText";

import Label from "../../../components/UIcomponents/Label";
import DropDownSelection from "../../../components/UIcomponents/DropDownSelection";

import WhiteDummySpacer from "../../../components/Layouts/WhiteDummySpacer";

import { useSnackbar } from 'notistack'; 

const NewRequisitionModal = ({ isModalOpen, closeModal, passedHook, fullProps }) => {
    const { enqueueSnackbar } = useSnackbar();

    const storedTypes = JSON.parse(localStorage.getItem('extras')) || [];
    const storedDish = JSON.parse(localStorage.getItem('dishes')) || [];

    const storedRequisitions = JSON.parse(localStorage.getItem('requisitions')) || [];

    const [ReqType, setReqType] = useState(""); 
    const [ReqDish, setReqDish] = useState(""); 
    const [ReqServices, setReqServices] = useState("");

    const [dishOptions, setDishOptions ] = useState([]);
 
    useEffect(() => {  
        const availableDish = storedDish.filter(dish => dish.typeId === ReqType);
        if (availableDish) {
            setDishOptions(availableDish);
        }
    }, [ReqType]);

    const validateForm = () => {
        return ReqType !== "" && ReqDish !== "" && ReqServices !== "";
    };

    const manageSave = () => {
        if (!validateForm()) {
            enqueueSnackbar("Todos los campos deben de ser cubiertos", { variant: 'warning' });
            return;
        }

        const newDish = {
            dishId: ReqDish,
            dishIngredients: [],
            dishServices: ReqServices
        };

        let found = false;
        let duplicateDish = false;

        storedRequisitions.forEach(requisition => {
            requisition.weekDays.forEach(day => {
                if (day.dayId === fullProps.dayId) {
                    if (day.dishes.some(dish => dish.dishId === ReqDish)) {
                        duplicateDish = true;
                    } else {
                        day.dishes.push(newDish);
                    }
                    found = true;
                }
            });
        });

        if (duplicateDish) {
            enqueueSnackbar("El platillo ya se encuentra en la requisición de este día", { variant: 'error' });
            return;
        }

        if (!found) {
            enqueueSnackbar("No se encontró la requisición para el día especificado", { variant: 'error' });
            return;
        }

        localStorage.setItem('requisitions', JSON.stringify(storedRequisitions));


        setReqType(""); 
        setReqDish(""); 
    
        setReqServices("");

        passedHook(prev => prev + 1);
        closeModal();
        enqueueSnackbar("Platillo añadido correctamente", { variant: 'success' });
    };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="100%">  
                <Title>Añadir platillo a la requisición</Title> 

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Tipo de platillo:</Label>
                        <DropDownSelection
                            selectedOption={ReqType}
                            onChange={e => setReqType(e.target.value)}
                            placeHolder="Selecciona el tipo"
                            optionsAvailable={(storedTypes && storedTypes.Tipos) ? storedTypes.Tipos.map(type => ({
                                value: type.id,
                                name: type.name
                            })) : []}
                        />
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Platillo:</Label>
                        <DropDownSelection
                            selectedOption={ReqDish}
                            onChange={e => setReqDish(e.target.value)}
                            placeHolder="Selecciona un platillo" 
                            optionsAvailable={dishOptions.map(type => ({
                                value: type.id,
                                name: type.name
                            }))}
                        />
                    </CenteredDisplay>
                </HorizontalDisplay> 

                <HorizontalDisplay>
                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Número de Servicios:</Label>
                        <EditText
                            placeholder="Ingresa el número de servicios del platillo"
                            previousValue={ReqServices}
                            onChange={e => setReqServices(e.target.value)}
                        />
                    </CenteredDisplay>
                </HorizontalDisplay>

                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick={closeModal}>Cancelar</Button>  
                    <WhiteDummySpacer/>
                    <Button onClick={manageSave}>Agregar</Button>  
                </HorizontalDisplay>
            </CenteredDisplay> 
        </Modal>
    );
};

export default NewRequisitionModal;
