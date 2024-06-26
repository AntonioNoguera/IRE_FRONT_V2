import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Importa la función para generar UUIDs
import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection"; 
import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";
import MotionImplementation from './../../components/Layouts/MotionImplementation';
import { useSnackbar } from 'notistack'; 

const NewDish = () => {
    const { enqueueSnackbar } = useSnackbar();

    const [dishName, setDishName] = useState('');
    const [dishTemperature, setDishTemperature] = useState('');
    const [dishType, setDishType] = useState('');
    const [dishSauce, setDishSauce] = useState('');
    const [dishComplement, setDishComplement] = useState('');
    const [dishProtein, setDishProtein] = useState(''); 

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
        return existingDishes.some(dish => dish.name === dishName);
    };

    const manageSave = () => {
        if (!validateForm()) {
            enqueueSnackbar("Es necesario que cubras todos los campos para poder continuar", { variant: 'warning' });
            return;
        }

        if (dishExists()) {
            enqueueSnackbar("El nombre del platillo ya existe, o genera conflicto con otra entidad", { variant: 'error' });
            return;
        }
        
        const newAdditionDish = {
            id: uuidv4(),
            name: dishName,
            sauceId: dishSauce,
            complementId: dishComplement,
            typeId: dishType,
            assamble: false,
            proteinId: dishProtein,
            temperature: dishTemperature,
            rating: 0,
            additionDate: new Date().toISOString(),
        };

        const existingDishes = JSON.parse(localStorage.getItem('dishes')) || [];
        const updatedDishes = [...existingDishes, newAdditionDish];
        
        localStorage.setItem('dishes', JSON.stringify(updatedDishes));

        setDishName('');
        setDishTemperature('');
        setDishType('');
        setDishSauce('');
        setDishComplement('');
        setDishProtein('');

        enqueueSnackbar("El platillo se ha guardado correctamente", { variant: 'success' });
    };

    const temperatureOptions = [
        { name: "Frío", value: "Frío" },
        { name: "Caliente", value: "Caliente" },
        { name: "Irrelevante", value: "Irrelevante" },
    ];

    return (
        <MotionImplementation verticalCentered='enabled'>
            <CenteredDisplay>  
                <Title>Agregar Platillo</Title>

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
 
                <Button onClick={manageSave}>Agregar</Button>  
            </CenteredDisplay> 
        </MotionImplementation>
    )
}

export default NewDish;
