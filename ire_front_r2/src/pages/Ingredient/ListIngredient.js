import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import SubTitle from "../../components/Layouts/SubTitle";

import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";

import { motion } from 'framer-motion';
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";

import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";

import  MotionImplementation  from './../../components/Layouts/MotionImplementation';

import './../../mainStyles.css'; 
import "./ingredient.modules/ingredientHolder.css"
import SvgButton from "../../components/UIcomponents/SvgButton";

import DeleteIngredientModal from "./ingredient.modules/DeleteIngredientModal";
import UpdateIngredientModal from "./ingredient.modules/UpdateIngredientModal";

const dataMock = [
    {
        groupName: "EjemploA",
        items:[
            {
                "existence": 0,
                "group_id": 0,
                "group_name": "string",
                "id": 0,
                "last_time_used": "string",
                "name": "Tocino",
                "unit": "string"
              },
              {
                "existence": 0,
                "group_id": 0,
                "group_name": "string",
                "id": 0,
                "last_time_used": "string",
                "name": "pepino",
                "unit": "string"
              },
        ]
    },{
        groupName: "Ejemplo",
        items:[
            {
                "existence": 12,
                "group_id": 0,
                "group_name": "string",
                "id": 0,
                "last_time_used": "string",
                "name": "salchicha",
                "unit": "string"
              },
              {
                "existence": 0,
                "group_id": 0,
                "group_name": "string",
                "id": 0,
                "last_time_used": "string",
                "name": "leche",
                "unit": "string"
              },
        ]
    },
]

const colorOption = [
    ['#009FE3', '#1D7093'] , 
    ['#F7B334', '#786C55'] 
]

const groupsCasted = [];

const IngredientItemHolder = ({fullProps, backgroundColor}) => {

    fullProps.complementsAvailable = groupsCasted;
    fullProps.groupsAvailable = groupsCasted; 
    fullProps.proteinsAvailable = groupsCasted;
    fullProps.sauceAvailable = groupsCasted;

    return( 
        <div className = 'mainHolderStyle' style={{  display: 'flex', backgroundColor : backgroundColor}}>
        <HorizontalDisplay> 
            <CenteredDisplay width="100%">
                <p className = 'groupName'> {fullProps.name} </p>
            </CenteredDisplay>


            <CenteredDisplay width="80%">
                <p className='itemCountTitle'>Fecha de Registro:</p>
                <p className='itemCountHolder'>{fullProps.existence}</p >
            </CenteredDisplay> 

            <CenteredDisplay width="80%">
                <p className='itemCountTitle'>Cantidad Actual:</p>
                <p className='itemCountHolder'>{fullProps.lastTimeUsed}</p >
            </CenteredDisplay> 
            
            <SvgButton 
                type = 'editCookie'  
                fullProps = {fullProps} 
                RenderedComponent = {UpdateIngredientModal} 
                />
            
            <WhiteDummySpacer/> 
            <SvgButton 
                type = 'trashCan' 
                fullProps = {fullProps} 
                RenderedComponent = {DeleteIngredientModal} 
            />


            
        </HorizontalDisplay>
        </div>
    )
}

const IngredientGroupHolder = ({name, items,index,backgrounColors}) => {
    return(
        <>
            <SubTitle style={{ marginTop: '70px' }}>{name}</SubTitle>
            {
                items.map((ingredient, index) => (
                    <IngredientItemHolder
                        backgroundColor = { backgrounColors[index%2] }
                        key = { index }
                        fullProps = { ingredient } 
                    />
                ))
            }
        </>
    )
}

const ListIngredient = () => {
    return (
        <MotionImplementation
                initial = {{x:200, opacity:0}}
                animate={{ x: 0, opacity : 1 }} 
                transition={{ type: 'linear', stiffness: 200, duration : 0.42}} >

            <WhiteDummySpacer />
            <Title>Ingredientes</Title>
            
            { 
                dataMock.map((groupIngredient, index) => {
                    if(!groupsCasted.includes(groupIngredient.groupName)){
                        groupsCasted.push(groupIngredient.groupName);
                    }
                    

                    return (
                        <IngredientGroupHolder 
                            backgrounColors={colorOption[index % 2]} 
                            key={index}
                            name={groupIngredient.groupName}
                            items={groupIngredient.items}
                        />
                    );
                })
            }

        </MotionImplementation>
    )
}

export default ListIngredient;