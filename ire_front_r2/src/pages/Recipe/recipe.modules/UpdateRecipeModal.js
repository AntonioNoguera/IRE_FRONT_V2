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
import SvgButton from '../../../components/UIcomponents/SvgButton';

import DeleteDishFromRecipeModal from "./DishItemModules/DeleteDishFromRecipeModal"
import UpdataDishFromRecipe from "./DishItemModules/UpdataDishFromRecipe"

import "./recipeHolder.css"

const classOptions = ['BlueSTD', 'BlueStrong']

const UpdateRecipeModal = ({ isModalOpen, closeModal, fullProps, passedHook }) => {
    // Definición de funciones manejadoras dentro del componente
     
    const storedIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];

    const onDecline = () => {
        alert("Le picaste cancelar");
        closeModal(); // Cierra el modal después de declinar
    };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CenteredDisplay width="100%">
                <Title> Editar Receta </Title>
 
                <Label>Selecciona un ingrediente de la receta a editar:</Label>
                <WhiteDummySpacer/>
                 {
                    fullProps.items.map((ingredientItem,index) => {

                        const fullIngredient = storedIngredients.find( ingredient => ingredient.id === ingredientItem.ingredientId )
                        ingredientItem.name = fullIngredient.name;
                        ingredientItem.dish = fullProps.name;
                        ingredientItem.unit = fullIngredient.unit;

                        return(
                        <HorizontalDisplay  
                            classNameSend = {classOptions[index%2]}
                            justifyDirection="start" 
                            width = "auto">
                                
                            <p className='ingredientItemHolder' style={{width:"100%"}}>
                                {fullIngredient.name} 
                            </p>
                            
                                <SvgButton
                                    type='editCookie'
                                    size='35px'
                                    RenderedComponent={UpdataDishFromRecipe}
                                    fullProps = {ingredientItem}
                                    overAll = {true}
                                    hook = {passedHook}
                                    />
                                <WhiteDummySpacer/>
                                <SvgButton 
                                    type='trashCan'
                                    size='35px' 
                                    RenderedComponent={DeleteDishFromRecipeModal} 
                                    hook = {passedHook}
                                    overAll = {true}
                                    fullProps = {ingredientItem}
                                    />  
                            
                        </HorizontalDisplay>)
                    })
                 }
 
                <HorizontalDisplay>
                    <Button type='cancelStyle' onClick = {onDecline}>Volver</Button> 
                </HorizontalDisplay>
                </CenteredDisplay>
        </Modal>
    );
};

export default UpdateRecipeModal;