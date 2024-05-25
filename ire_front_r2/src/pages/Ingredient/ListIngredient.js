import React, { useEffect, useState } from 'react';

import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import SubTitle from "../../components/Layouts/SubTitle";

import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";

import MotionImplementation from './../../components/Layouts/MotionImplementation';

import './../../mainStyles.css';
import "./ingredient.modules/ingredientHolder.css"
import SvgButton from "../../components/UIcomponents/SvgButton";

import DeleteIngredientModal from "./ingredient.modules/DeleteIngredientModal";
import UpdateIngredientModal from "./ingredient.modules/UpdateIngredientModal";

import { useSnackbar } from 'notistack'; 

const colorOption = [
    ['#009FE3', '#1D7093'],
    ['#F7B334', '#786C55']
];

const groupsCasted = []; 

const IngredientItemHolder = ({ fullProps, backgroundColor, fatherHook }) => {
    fullProps.complementsAvailable = groupsCasted;
    fullProps.groupsAvailable = groupsCasted;
    fullProps.proteinsAvailable = groupsCasted;
    fullProps.sauceAvailable = groupsCasted;

    return (
        <div className='mainHolderStyle' style={{ display: 'flex', backgroundColor: backgroundColor }}>
            <HorizontalDisplay>
                <CenteredDisplay width="100%">
                    <p className='groupName'> {fullProps.name} </p>
                </CenteredDisplay>

                <div className="itemInfoHolder">
                    <p className='itemCountTitle'>Fecha de Registro:</p>
                    <p className='itemCountHolder'>{fullProps.existence}</p >
                </div>

                <div className="itemInfoHolder">
                    <p className='itemCountTitle'>Cantidad Actual:</p>
                    <p className='itemCountHolder'>{fullProps.lastTimeUsed}</p >
                </div>
                <WhiteDummySpacer />
                <SvgButton
                    type='editCookie'
                    fullProps = {fullProps}
                    hook = {fatherHook}
                    RenderedComponent = {UpdateIngredientModal}
                />

                <WhiteDummySpacer />
                <SvgButton
                    type='trashCan'
                    fullProps={fullProps}
                    hook = {fatherHook}
                    RenderedComponent={DeleteIngredientModal}
                />
            </HorizontalDisplay>
        </div>
    )
}

const IngredientGroupHolder = ({ name, items, backgrounColors, passedHook }) => {
    return (
        <>
            <SubTitle style={{ marginTop: '70px',}} paddingLeft='0px'>{name}</SubTitle>
            {
                items && items.length > 0 ? (
                    items.map((ingredient, index) => (
                        <IngredientItemHolder
                            backgroundColor={backgrounColors[index % 2]}
                            key={index}
                            fatherHook = {passedHook}
                            fullProps={ingredient}
                        />
                    ))
                ) : (
                    <div className='noHayIngredientes'>No hay ingredientes disponibles en este grupo<br/>¡prueba añadir o mover uno!</div>
                )
                
            }
        </>
    )
}

const ListIngredient = () => {
    const [ingredients, setIngredients] = useState([]);
    const [dataprocessed, setDataProcessed] = useState([]);

    // Hook Post Operaciones
    const [updateTrigger, setUpdateTrigger] = useState(0);

    useEffect(() => {
        const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
        const storedIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];
        setIngredients(storedIngredients);

        // Procesar datos
        const processedData = storedGroups.map(group => {
            const groupIngredients = storedIngredients.filter(ingredient => ingredient.groupId === group.id);
            return {
                groupName: group.name,
                items: groupIngredients
            };
        });

        setDataProcessed(processedData); 
    }, [updateTrigger]);

    return (
        <MotionImplementation
            initial = {{ x: 200, opacity: 0 }}
            animate = {{ x: 0, opacity: 1 }}
            transition={{ type: 'linear', stiffness: 200, duration: 0.42 }} >

            <WhiteDummySpacer />
            <Title>Ingredientes</Title>

            {
            dataprocessed.length > 0 ? (
                dataprocessed.map((groupIngredient, index) => {
                    if (!groupsCasted.includes(groupIngredient.groupName)) {
                        groupsCasted.push(groupIngredient.groupName);
                    }

                    return (
                        <IngredientGroupHolder
                            backgrounColors={colorOption[index % 2]}
                            key={index}
                            name={groupIngredient.groupName}
                            items={groupIngredient.items}
                            passedHook={setUpdateTrigger}
                        />
                    );
                })
            ) : (
                <div className='noGroupsReq'>
                    No hay grupos de platillos<br/>Es necesario dar de alta uno para poder verlos de este lado
                </div>
            )
        }

        </MotionImplementation>
    )
}

export default ListIngredient;
