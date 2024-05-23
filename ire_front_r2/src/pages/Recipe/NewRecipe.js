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

import { motion } from 'framer-motion';

const NewRecipe = () => {

    const storedDish = [];
    const storedGroups = [];
    const storedExtras = []
    const storedIngredient = [];

    //Hooks
    const [recipeDish, setRecipeDish ] = useState("");
    const [ingredientGroup, setIngredientGroup ] = useState("");
    const [recipeIngredient, setRecipeIngredient ] = useState("");
    const [recipeAmount, setRecipeAmount ] = useState("");
    const [recipeServices, setRecipeServices ] = useState("");

    return (
        <MotionImplementation verticalCentered="enabled" >

            <CenteredDisplay>  
            <Title> Agregar Receta </Title>

                <Label>Selecciona el Platillo:</Label> 
                <DropDownSelection
                    selectedOption = {recipeDish}
                    onChange = { e => setRecipeDish(e.target.value)}
                    placeHolder = "Selecciona un platillo"
                    optionsAvailable={storedDish}
                    />

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Selecciona el Grupo del Ingrediente:</Label> 
                        <DropDownSelection
                            optionsAvailable = {storedGroups}
                            selectedOption = {ingredientGroup}
                            placeHolder = "Grupo del Ingrediente"
                            onChange = {e => setIngredientGroup(e.target.value)} />
                    </CenteredDisplay>
                    
                    <WhiteDummySpacer/>
                    
                    <CenteredDisplay width="100%">
                        <Label>Selecciona el Ingrediente:</Label> 
                        <DropDownSelection
                            placeHolder = "Selecciona el ingrediente de la receta "
                            selectedOption = { recipeIngredient}
                            onChange = { e=> setRecipeIngredient(e.target.value)}/>
                    </CenteredDisplay>
                </HorizontalDisplay>
                

                <HorizontalDisplay>
                    <CenteredDisplay width="100%">
                        <Label>Cantidad del Ingrediente:</Label>
                        <EditText
                            onChange = {e => setRecipeAmount(e.target.value)}
                            previousValue = {recipeAmount}
                            placeholder="Valor numérico de Ingrediente"/>
                    </CenteredDisplay>

                    <WhiteDummySpacer/>

                    <CenteredDisplay width="100%">
                        <Label>¿Para cuántos Servicios?:</Label>
                        <EditText
                            onChange = { e => setRecipeServices(e.target.value)}
                            previousValue = { recipeServices }
                            placeholder="Unidad del Ingrediente"/>
                    </CenteredDisplay>
                    
                </HorizontalDisplay>
 
                <Button>Agregar</Button>  
                
            </CenteredDisplay> 
        </MotionImplementation>
    )
}

export default NewRecipe;