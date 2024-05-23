import React, { useEffect, useState } from 'react';
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
  

const UpdateSideDish = ({ isModalOpen, closeModal, fullProps , passedHook }) => { 
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || []; 
    // Definición de funciones manejadoras dentro del componente 
     
    const [ingredientName, setIngredientName] = useState(fullProps.name);
    const [ingredientAmount, setIngredientAmount] = useState(fullProps.existence);
    const [ingredientUnit, setIngredientUnit] = useState(fullProps.unit);
    const [ingredientGroup, setIngredientGroup] = useState(fullProps.groupId);

    const onAccept = () => {
        const passedValidation = true;
        const success = true;

        if(passedValidation){
            if(success){
                closeModal();

                const existingIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];
                const updatedIngredients = existingIngredients.map(ingredient =>
                    ingredient.id === fullProps.id
                        ? {
                            ...ingredient,
                            name: ingredientName,
                            existence: ingredientAmount,
                            unit: ingredientUnit,
                            groupId: ingredientGroup
                        }
                        : ingredient
                );

                localStorage.setItem('ingredients', JSON.stringify(updatedIngredients));



                passedHook(prev => prev +1)
                alert("Ingrediente dado de alta!")
            }else{
                alert("no ha sido posible dar de alta el ingrediente")
            }
        }else{
            alert("Campos pendientes")
        } 
    };

    const onDecline = () => {
        alert("Le picaste cancelar");
        closeModal(); // Cierra el modal después de declinar
    };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="90%">
                <Title> Editar Ingrediente </Title>

                <Label>Nombre del Ingrediente:</Label>

                <EditText 
                    previousValue = {fullProps.name}
                    onChange = {e => setIngredientName(e.target.value)}
                    placeHolder = "Ingresa el nombre del Ingrediente"/>

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label> Cantidad del Ingrediente: </Label>
                        <EditText 
                            previousValue = {fullProps.existence}
                            placeholder = "Valor numérico de Ingrediente"
                            onChange = {e => setIngredientAmount(e.target.value) }/>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Unidad:</Label>
                        <EditText 
                            previousValue = {fullProps.unit}
                            placeholder = "Unidad del"
                            onChange = {e => setIngredientUnit(e.target.value) }
                            ></EditText>
                    </CenteredDisplay>
                    
                </HorizontalDisplay>

                <CenteredDisplay width="50%">
                    <Label>Grupo:</Label>
                    <DropDownSelection  
                        
                        selectedOption = {storedGroups.find(it => it.id === fullProps.groupId).id || ""} 
                            onChange = {  e=> setIngredientGroup((e.target.value))}
                            placeHolder = "Selecciona el grupo del ingrediente" 
                            optionsAvailable = {storedGroups.map(group => ({
                                value: group.id,
                                name: group.name
                            }))} />
                </CenteredDisplay>
 
                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick = {onDecline}>Cancelar</Button>
                    <WhiteDummySpacer />
                    <Button onClick={onAccept}>Agregar</Button>
                </HorizontalDisplay>
                </CenteredDisplay>
        </Modal>
    );
};

export default UpdateSideDish;
