import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import SubTitle from "../../components/Layouts/SubTitle";

import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";

import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";

import './../../mainStyles.css';  
import './recipe.modules/recipeHolder.css';  

import { motion } from 'framer-motion';

import SvgButton from "../../components/UIcomponents/SvgButton";

const dataMock = [
    {
        dishGroup: "Desayuno",
        items:[
            {
                id: 0,
                dish : 'tascs',
                date : '21/21/21',
                recipeItems : [
                {
                    existence: 0,
                    group_id: 0,
                    id: 0,
                    name: "string",
                    unit: "string",
                },
                {
                    existence: 0,
                    group_id: 0,
                    id: 0,
                    name: "string",
                    unit: "string",
                },
                    
                ]
            }, 
            {
                id: 0,
                dish : 'asdf',
                date : '21/21/21',
                recipeItems : [
                {
                    existence: 0,
                    group_id: 0,
                    id: 0,
                    name: "string",
                    unit: "string",
                },
                {
                    existence: 0,
                    group_id: 0,
                    id: 0,
                    name: "string",
                    unit: "string",
                },
                    
                ]
            }, 
        ]
    },
    {
        dishGroup: "Comida",
        items:[
            {
                id: 0,
                dish : 'asdf',
                date : '21/21/21',
                recipeItems : [
                {
                    existence: 0,
                    group_id: 0,
                    id: 0,
                    name: "string",
                    unit: "string",
                },
                {
                    existence: 0,
                    group_id: 0,
                    id: 0,
                    name: "string",
                    unit: "string",
                },
                    
                ]
            }, 
            {
                id: 0,
                dish : 'asdf',
                date : '21/21/21',
                recipeItems : [
                {
                    existence: 0,
                    group_id: 0,
                    id: 0,
                    name: "string",
                    unit: "string",
                },
                {
                    existence: 0,
                    group_id: 0,
                    id: 0,
                    name: "string",
                    unit: "string",
                },
                    
                ]
            }, 
        ]
    },
]



const colorOption = [
    ['#009FE3', '#1D7093'] , 
    ['#F7B334', '#786C55'] 
]

const IngredientItemHolder = ({id,name,itemCount,lastTimeUsed,backgroundColor}) => {
    return( 
        <div className = 'mainHolderStyle mainRecipeHolder' style={{  display: 'flex', backgroundColor : backgroundColor}}>
        <HorizontalDisplay> 
            <CenteredDisplay width="100%">
                <p className = 'groupName'> {name} </p>
            </CenteredDisplay>

            <div style={{flexDirection:'column', display:'flex', justifyContent : 'center' , marginInline : '30px'}}>
                <p className='itemCountTitle'>Numero:</p>
                <p className='itemCountHolder'>{itemCount}</p >
            </div> 

            <div style={{flexDirection:'column', display:'flex', justifyContent : 'center' , marginInline : '30px'}}>
                <p className='itemCountTitle'> Fecha de Creación:</p>
                <p className='itemCountHolder'>{lastTimeUsed}</p >
            </div> 
            
            <SvgButton type = 'editCookie' />
            
            <WhiteDummySpacer/>
            <SvgButton type = 'trashCan' />

        </HorizontalDisplay>
        </div>
    )
}

const RecipeGroups = ({name, items,index,backgrounColors}) => {
    return(
        <>
            <SubTitle style={{ marginTop: '70px' }}>{name}</SubTitle>
            {
                items.map((recipe, index) => (
                    <IngredientItemHolder
                        backgroundColor = {backgrounColors[index%2]}
                        key = {index}
                        id = {index}
                        name = {recipe.dish} 
                        itemCount = {items.length}
                        lastTimeUsed = {recipe.last_time_used}
                    />
                ))
            }
        </>
    )
}


const ListRecipe = () => {
    return (
        <motion.div
                initial = {{x:200, opacity:0}}
                animate={{ x: 0, opacity : 1 }} 
                transition={{ type: 'linear', stiffness: 200, duration : 0.42}} >

            <WhiteDummySpacer />
            <Title>Listado de Recetas</Title>
            
            { 
                dataMock.map((recipe, index) => (
                    <RecipeGroups 
                        backgrounColors = {colorOption[index%2]} 
                        key = {index}
                        name = {recipe.dishGroup}
                        items = {recipe.items}    
                    />
                    
                ))
            }

        </motion.div>
    )
}

export default ListRecipe;