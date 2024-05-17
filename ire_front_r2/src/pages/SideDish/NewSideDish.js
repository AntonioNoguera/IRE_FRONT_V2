import { Component } from "react";
import Title from "../../components/Layouts/Title";
import ComponentHolder from "../../components/Layouts/ComponentHolder";
import HorizontalSpray from "../../components/Layouts/HorizontalSpray";
import  MotionImplementation  from './../../components/Layouts/MotionImplementation';

import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay"; 

import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";
import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";

import { motion } from 'framer-motion';

const NewSideDish = () => {
    return (
            <MotionImplementation verticalCentered='enabled'>
                <CenteredDisplay>
                <Title> Nuevo Complemento </Title> 

                <Label>Nombre del Complemento:</Label> 
                <EditText>Ingresa el nombre del complemento</EditText>

                <Label>Descripción de Complemento:</Label> 
                <BigTextArea>Ingresa un texto descriptivo de tu complemento</BigTextArea>

                <Label>Tipo de Complemento:</Label> 
                <DropDownSelection>Selecciona el tipo del complemento</DropDownSelection>

                <Button>Agregar</Button>  
                </CenteredDisplay>
            </MotionImplementation> 
    )
}

export default NewSideDish;