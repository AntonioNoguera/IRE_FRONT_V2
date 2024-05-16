import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection"; 

import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";


import  MotionImplementation  from './../../components/Layouts/MotionImplementation';

const NewDish = () => {
    return (
        <MotionImplementation verticalCentered = 'enabled'>

            <CenteredDisplay>  
            <Title> Agregar Ingrediente </Title>

                <Label>Escribe el nombre del platillo:</Label>
                <EditText>Ingresa el nombre del grupo</EditText>
                
                <Label>Selecciona la temperatura: </Label>
                <DropDownSelection>Ingresa el nombre del grupo</DropDownSelection>

                <Label>Selecciona el tipo de platillo:</Label>
                <DropDownSelection>Ingresa el nombre del grupo</DropDownSelection>

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Proteína:</Label> 
                        <DropDownSelection>Proteinas disponibles</DropDownSelection>
                    </CenteredDisplay>
                    
                    <WhiteDummySpacer/>
                    
                    <CenteredDisplay width="100%">
                        <Label>Acompañamiento:</Label> 
                        <DropDownSelection>Acompañamientos disponibles</DropDownSelection>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Salsa:</Label> 
                        <DropDownSelection>Salsas Disponibles</DropDownSelection>
                    </CenteredDisplay>
                </HorizontalDisplay>
 
 
                <Button>Agregar</Button>  
                
            </CenteredDisplay> 
        </MotionImplementation>

    )
}

export default NewDish;