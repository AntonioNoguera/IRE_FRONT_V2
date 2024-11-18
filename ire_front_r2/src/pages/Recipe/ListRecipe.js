import React, { useEffect, useState } from 'react';

import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import SubTitle from "../../components/Layouts/SubTitle"; 

import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";

import  MotionImplementation  from './../../components/Layouts/MotionImplementation';

import './../../mainStyles.css';  
import './recipe.modules/recipeHolder.css';  

import { motion } from 'framer-motion';

import DeleteRecipeModal from "./recipe.modules/DeleteRecipeModal";
import UpdateRecipeModal from "./recipe.modules/UpdateRecipeModal"; 


import SvgButton from "../../components/UIcomponents/SvgButton";

import { Link } from 'react-router-dom';

const colorOption = [
    ['#009FE3', '#1D7093'], 
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

const RecipeGroups = ({ typeName, dishes, index, backgrounColors, fatherHook }) => {
    // Verificar si todos los elementos tienen items vacíos
    const allEmpty = dishes.every(recipe => recipe.items.length === 0);

    return (
        <>
            <SubTitle style={{ marginTop: '70px' }} paddingLeft='0PX'>{typeName}</SubTitle>
            {
                dishes.length === 0 ? (
                    <div className="noTypes dish">
                        <img className="empty_icon" src={`${process.env.PUBLIC_URL}/icons/empty.png`} alt="Sin elementos" />
                        <p>
                            Este tipo de platillo se encuentra vacío, requieres de por lo menos uno para poder continuar.<br />
                            <Link to="/platillos/nuevo">¡Prueba Añadir uno!</Link>
                        </p>
                    </div>
                ) : allEmpty ? (
                    <div className="noRecipes">
                        <div className="noTypes dish" key={index}>
                                <p>
                                    Es necesario que existan recetas registradas en este grupo para poder manipular la receta .<br />
                                    <Link to="/recetas/nuevo">¡Prueba añadir una!</Link>
                                </p>
                            </div>
                    </div>
                ) : (
                    dishes.map((recipe, index) => (
                        recipe.items.length === 0 ? (
                            <div> </div>
                        ) : (
                            <IngredientItemHolder
                                backgroundColor={backgrounColors[index % 2]}
                                key={index}
                                itemCount={recipe.items.length}
                                fullProps={recipe}
                                passedHook={fatherHook}
                            />
                        )
                    ))
                )
            }
        </>
    );
};


const ListRecipe = () => {
    const storedTypes = JSON.parse(localStorage.getItem('extras')) || [];
    const storedDishes = JSON.parse(localStorage.getItem('dishes')) || [];
    const storedIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];

    
    //Hooks
    const [updateTrigger, setUpdateTrigger] = useState(0);

    const [proccesedRecipes, setProccessedRecipes ] = useState([]);

    useEffect(() => {
        const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || []; 

        // Procesar datos  
        const grouped = (storedTypes && storedTypes.Tipos && storedDishes && storedRecipes) ? storedTypes.Tipos.map(type => ({
            dishType: type.name,
            dishes: storedDishes
                .filter(dish => dish.typeId === type.id)
                .map(dish => ({
                    ...dish,
                    items: storedRecipes.filter(recipe => recipe.dishId === dish.id)
                }))
        })) : [];
         

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
                <div className = "noTypes group">
                    <img class='empty_icon' src={`${process.env.PUBLIC_URL}/icons/empty.png`} />
                    <p>
                        No hay ningun tipo de platillo, es necesario contar con alguno para poder observar.<br />
                        <Link to="/complementos/nuevo">¡Prueba Añadir uno!</Link>
                    </p>
                </div> 
            )}

        </MotionImplementation>
    )
}

export default ListRecipe;