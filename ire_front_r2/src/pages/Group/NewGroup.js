
import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import { motion } from 'framer-motion';

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";
import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";

import  MotionImplementation  from './../../components/Layouts/MotionImplementation';

const NewGroup = () => {
    return( 
        <MotionImplementation verticalCentered = 'enabled'>

            <CenteredDisplay>  
             <Title> Agregar Grupo </Title>
                    <Label>Nombre del Grupo:</Label>
                    <EditText>Ingresa el nombre del grupo</EditText>

                    <Label>Descripción del Grupo:</Label>
                    <BigTextArea>Ingresa una clara descripción acerca del grupo</BigTextArea>

                    <CenteredDisplay width="50%">
                        <Label>Color del grupo:</Label>
                        <DropDownSelection>Seleccione el color de la etiqueta</DropDownSelection>
                    </CenteredDisplay>

                    <Button>Agregar</Button>  
                    
             </CenteredDisplay> 
        </MotionImplementation>
    )
}

export default NewGroup;