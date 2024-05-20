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
import SvgButton from '../../../components/UIcomponents/SvgButton';

import DeleteDishFromRecipeModal from "./DishItemModules/DeleteDishFromRecipeModal"
import UpdataDishFromRecipe from "./DishItemModules/UpdataDishFromRecipe"

import "./recipeHolder.css"

const classOptions = ['BlueSTD', 'BlueStrong']

const UpdateRecipeModal = ({ isModalOpen, closeModal, fullProps }) => {
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
            <CenteredDisplay width="100%">
                <Title> Editar Receta </Title>
 
                <Label>Selecciona un ingrediente de la receta a editar:</Label>
                <WhiteDummySpacer/>
                 {
                    fullProps.recipeItems.map((dishItem,index) => {

                        dishItem.dish = fullProps.dish;
                        return(
                        <HorizontalDisplay  
                            classNameSend = {classOptions[index%2]}
                            justifyDirection="start" 
                            width = "auto">
                                
                            <p className='ingredientItemHolder' style={{width:"100%"}}>
                                {dishItem.name} 
                            </p>
                            
                                <SvgButton
                                    type='editCookie'
                                    size='35px'
                                    RenderedComponent={UpdataDishFromRecipe}
                                    fullProps = {dishItem}/>
                                <WhiteDummySpacer/>
                                <SvgButton 
                                    type='trashCan'
                                    size='35px' 
                                    RenderedComponent={DeleteDishFromRecipeModal}
                                    fullProps = {dishItem}
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