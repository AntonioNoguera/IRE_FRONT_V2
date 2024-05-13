
import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";


const NewGroup = () => {
    return( 
        <>
            <Title> Agregar Grupo </Title>
            
             <CenteredDisplay>  
                    <Label>Nombre del Grupo:</Label>
                    <EditText>Ingresa el nombre del grupo</EditText>

                    <Label>Descripción del Grupo:</Label>
                    <BigTextArea>Ingresa una clara descripción acerca del grupo</BigTextArea>

                    <CenteredDisplay>
                        <Label>Color del grupo:</Label>
                        <DropDownSelection>Seleccione el color de la etiqueta</DropDownSelection>
                    </CenteredDisplay>

                    <Button> Agregar</Button>  
                    
             </CenteredDisplay> 
        </>
    )
}

export default NewGroup;