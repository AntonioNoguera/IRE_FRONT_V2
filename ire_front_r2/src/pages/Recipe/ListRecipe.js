import React, { useEffect, useState } from 'react';

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

import  MotionImplementation  from './../../components/Layouts/MotionImplementation';

import './../../mainStyles.css';  
import './recipe.modules/recipeHolder.css';  

import { motion } from 'framer-motion';

import DeleteRecipeModal from "./recipe.modules/DeleteRecipeModal";
import UpdateRecipeModal from "./recipe.modules/UpdateRecipeModal"; 


import SvgButton from "../../components/UIcomponents/SvgButton";

const colorOption = [
    ['#009FE3', '#1D7093'] , 
    ['#F7B334', '#786C55'] 
]

const IngredientItemHolder = ({fullProps, itemCount, backgroundColor,passedHook}) => { 
    const FormattedDate = (isoDate) => {
        const formatDate = (isoDate) => {
            const date = new Date(isoDate);

            if (isNaN(date)) {
                return 'Fecha inválida';
            }

            const day = String(date.getUTCDate()).padStart(2, '0');
            const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
            const year = date.getUTCFullYear();

            return `${day}/${month}/${year}`;
        };

        const formattedDate = formatDate(isoDate);

        return formattedDate;
    };

    return( 
        <div className = 'mainHolderStyle mainRecipeHolder' style={{  display: 'flex', backgroundColor : backgroundColor}}>
        <HorizontalDisplay> 
            <CenteredDisplay width="100%">
                <p className = 'groupName'> {fullProps.name} </p>
            </CenteredDisplay>

            <div style={{flexDirection:'column', display:'flex', justifyContent : 'center' , marginInline : '30px'}}>
                <p className='itemCountTitle'>Número de Ingredientes:</p>
                <p className='itemCountHolder'>{itemCount}</p >
            </div> 

            <div style={{flexDirection:'column', display:'flex', justifyContent : 'center' , marginInline : '30px'}}>
                <p className='itemCountTitle'> Fecha de Creación:</p>
                <p className='itemCountHolder'>{FormattedDate(fullProps.additionDate)}</p >
            </div> 
             
            <SvgButton 
                type = 'editCookie'
                fullProps = { fullProps }
                hook = {passedHook}
                RenderedComponent = { UpdateRecipeModal } />
            
            <WhiteDummySpacer/>
            <SvgButton type = 'trashCan'
                fullProps = { fullProps } 
                hook = {passedHook}
                RenderedComponent = { DeleteRecipeModal } />
            
        </HorizontalDisplay>
        </div>
    )
}

const RecipeGroups = ({typeName, dishes,index,backgrounColors, fatherHook}) => {
    return(
        <>
            <SubTitle style={{ marginTop: '70px' }} paddingLeft='0PX'>{typeName}</SubTitle>
            {

            
                dishes.map((recipe, index) => ( 
                    recipe.items.length === 0 ? (
                        <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>
                            No hay recetas disponibles.
                        </div>
                    ) : (

                    <IngredientItemHolder
                        backgroundColor={backgrounColors[index % 2]}
                        key={index}
                        itemCount={recipe.items.length}
                        fullProps={recipe}
                        passedHook={fatherHook}
                        
                    />
                ))
            )
            
            }
        </>
    )
}


const ListRecipe = () => {
    const storedTypes = JSON.parse(localStorage.getItem('extras')).Tipos || [];
    const storedDishes = JSON.parse(localStorage.getItem('dishes')) || [];
    const storedIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];

    
    //Hooks
    const [updateTrigger, setUpdateTrigger] = useState(0);

    const [proccesedRecipes, setProccessedRecipes ] = useState([]);

    useEffect(() => {
        const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || []; 

        // Procesar datos  
        const grouped = storedTypes.map(type => ({
            dishType: type.name,
            dishes: storedDishes
                .filter(dish => dish.typeId === type.id)
                .map(dish => ({
                    ...dish,
                    items: storedRecipes.filter(recipe => recipe.dishId === dish.id)
                }))
        }));
         

        setProccessedRecipes(grouped); 
    }, [updateTrigger]);


    return (
        <MotionImplementation
                initial = {{x:200, opacity:0}}
                animate={{ x: 0, opacity : 1 }} 
                transition={{ type: 'linear', stiffness: 200, duration : 0.42}} >

            <WhiteDummySpacer />
            <Title>Listado de Recetas</Title>
            
            { 
            proccesedRecipes.length > 0 ? (
                proccesedRecipes.map((recipe, index) => (
                    <RecipeGroups 
                        backgrounColors = {colorOption[index%2]} 
                        key = {index}
                        typeName = {recipe.dishType}
                        dishes = {recipe.dishes}    
                        fatherHook = {setUpdateTrigger}
                    />
                    
                ))
            ) : (
                <div className='noDishes'>No hay platillos dados de alta, primero da uno de alta,<br/>Luego vuelve aquí para dar una receta de alta.</div>
            )}

        </MotionImplementation>
    )
}

export default ListRecipe;