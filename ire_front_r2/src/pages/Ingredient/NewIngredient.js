import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";

import { motion } from 'framer-motion';

import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";

const NewIngredients = () => {
    return (
        <motion.div
                initial = {{x:200, opacity:0}}
                animate={{ x: 0, opacity : 1 }} 
                transition={{ type: 'linear', stiffness: 200, duration : 0.42}} >

            <CenteredDisplay>  
            <Title> Agregar Ingrediente </Title>
                <Label>Nombre del Ingrediente:</Label>

                <EditText>Ingresa el nombre del grupo</EditText>

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Cantidad del Ingrediente:</Label>
                        <EditText>Valor numérico de Ingrediente</EditText>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>Unidad:</Label>
                        <EditText>Unidad del Ingrediente</EditText>
                    </CenteredDisplay>
                    
                </HorizontalDisplay>

                <CenteredDisplay width="50%">
                    <Label>Grupo:</Label>
                    <DropDownSelection>Selecciona el grupo del ingrediente</DropDownSelection>
                </CenteredDisplay>

                <Button>Agregar</Button>  
                
            </CenteredDisplay> 
        </motion.div>
    )
}

export default NewIngredients;