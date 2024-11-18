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

const UpdateDayForRequisition = ({ isModalOpen, closeModal, fullProps, passedHook }) => { 

    console.log(fullProps)

    const { enqueueSnackbar } = useSnackbar();

    const storedTypes = JSON.parse(localStorage.getItem('extras')).Tipos || [];
    const storedDish = JSON.parse(localStorage.getItem('dishes')) || [];
    const storedRequisitions = JSON.parse(localStorage.getItem('requisitions')) || [];

    const [ReqType, setReqType] = useState(fullProps.fullDishProps.typeId); 
    const [ReqDish, setReqDish] = useState(""); 
    const [ReqServices, setReqServices] = useState(fullProps.dishServices);
    const [dishOptions, setDishOptions] = useState([]);
 
    useEffect(() => {  
        const availableDish = storedDish.filter(dish => dish.typeId === ReqType);
        if (availableDish) {
            setDishOptions(availableDish);
            if (ReqDish === "") {
                setReqDish(fullProps.dishId);
            } else { 
                setReqDish(availableDish[0].id);
            }
        }
    }, [ReqType]);

    const validateForm = () => {
        return ReqType !== "" && ReqDish !== "" && ReqServices !== "";
    };

    const dishExists = (day) => {
        return day.dishes.some(dish => dish.dishId === ReqDish && dish.dishId !== fullProps.dishId);
    };

    const manageSave = () => {
        if (!validateForm()) {
            enqueueSnackbar("Todos los campos deben de ser cubiertos", { variant: 'warning' });
            return;
        }

        const dayId = fullProps.fatherProps.dayId;
        const dishId = fullProps.dishId;

        let dishFound = false;
        let duplicateDish = false;

        storedRequisitions.forEach(requisition => {
            requisition.weekDays.forEach(day => {
                if (day.dayId === dayId) {
                    if (dishExists(day)) {
                        duplicateDish = true;
                    } else {
                        const dish = day.dishes.find(d => d.dishId === dishId);
                        if (dish) {
                            dish.typeId = ReqType;
                            dish.dishId = ReqDish;
                            dish.dishServices = ReqServices;
                            dishFound = true;
                        }
                    }
                }
            });
        });

        if (duplicateDish) {
            enqueueSnackbar("El platillo ya se encuentra en la requisición de este día", { variant: 'error' });
            return;
        }

        if (!dishFound) {
            enqueueSnackbar("No se encontró el platillo", { variant: 'error' });
            return;
        }

        localStorage.setItem('requisitions', JSON.stringify(storedRequisitions));
        enqueueSnackbar("Platillo actualizado correctamente", { variant: 'success' });
        passedHook(prev => prev + 1);
        closeModal();
    };

    const onDecline = () => {
        closeModal();
    };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="100%">  
                <Title> Modificar Platillo de Requisición </Title> 

                <HorizontalDisplay>
                    <CenteredDisplay width="100% ">
                        <Label>Tipo de platillo:</Label>
                        <DropDownSelection
                            selectedOption = {ReqType}
                            onChange = {e => setReqType(e.target.value)}
                            placeHolder="Selecciona el tipo" 
                            optionsAvailable={storedTypes.map(type => ({
                                value: type.id,
                                name: type.name
                            }))}
                        />
                    </CenteredDisplay>

                    <WhiteDummySpacer />

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
                    <WhiteDummySpacer />

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
                    <Button onClick={onDecline} type='cancelStyle'>Cancelar</Button>  
                    <WhiteDummySpacer />
                    <Button onClick={manageSave}>Modificar</Button>  
                </HorizontalDisplay>
            </CenteredDisplay> 
        </Modal>
    );
}

export default UpdateDayForRequisition;
