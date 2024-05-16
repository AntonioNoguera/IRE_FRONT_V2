import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";
import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";

import { motion } from 'framer-motion';

const NewRecipe = () => {
    return (
        <motion.div
                initial = {{x:200, opacity:0}}
                animate={{ x: 0, opacity : 1 }} 
                transition={{ type: 'linear', stiffness: 200, duration : 0.42}} >

            <CenteredDisplay>  
            <Title> Agregar Receta </Title>

                <Label>Selecciona el Platillo:</Label> 
                <DropDownSelection>Selecciona el platillo del ingrediente</DropDownSelection>

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Selecciona el Grupo del Ingrediente:</Label> 
                        <DropDownSelection>Grupo del Ingrediente</DropDownSelection>
                    </CenteredDisplay>
                    
                    <WhiteDummySpacer/>
                    
                    <CenteredDisplay width="100%">
                        <Label>Selecciona el Ingrediente:</Label> 
                        <DropDownSelection>Selecciona al platillo</DropDownSelection>
                    </CenteredDisplay>
                </HorizontalDisplay>
                

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Cantidad del Ingrediente:</Label>
                        <EditText>Valor numérico de Ingrediente</EditText>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>¿Para cuántos Servicios?:</Label>
                        <EditText>Unidad del Ingrediente</EditText>
                    </CenteredDisplay>
                    
                </HorizontalDisplay>
 
                <Button>Agregar</Button>  
                
            </CenteredDisplay> 
        </motion.div>
    )
}

export default NewRecipe;