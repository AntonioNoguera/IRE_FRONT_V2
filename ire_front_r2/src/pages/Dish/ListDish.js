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

import MotionImplementation from './../../components/Layouts/MotionImplementation';


import './../../mainStyles.css';
import "./dish.modules/dishHolder.css"
import SvgButton from "../../components/UIcomponents/SvgButton";

import UpdateDishModal from "./dish.modules/UpdateDishModal";
import DeleteDishModal from "./dish.modules/DeleteDishModal";


const colorOption = [
    ['#009FE3', '#1D7093'],
    ['#F7B334', '#786C55']
]


let storedExtras = JSON.parse(localStorage.getItem('extras'));


const IngredientItemHolder = ({ backgroundColor, fullProps, fatherHook }) => {
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

    console.log(fullProps)

    const sauceName = storedExtras.Salsas.find(extra => extra.id === fullProps.sauceId )
    const complementName = storedExtras.Acompañamientos.find(extra => extra.id === fullProps.complementId )
    const proteinName = storedExtras.Proteínas.find(extra => extra.id === fullProps.proteinId )


    return (
        <div className='mainHolderStyle' style={{ display: 'flex', backgroundColor: backgroundColor }}>

            <CenteredDisplay width="100%">
                <p className='groupName'> {fullProps.name} </p>
            </CenteredDisplay>
            <HorizontalDisplay justifyDirection='space-beetwen'>
                <div className='propDishHolder'>
                        <div className = "propUnitHolder">
                        <p className='itemCountTitle'>Temperatura:</p>
                        <p className='itemCountHolder'>{fullProps.temperature}</p >
                    </div>
 

                        <div className = "propUnitHolder">
                        <p className='itemCountTitle'>Salsa:</p>
                        <p className='itemCountHolder'>{sauceName.name}</p >
                    </div>

                        <div className = "propUnitHolder">
                        <p className='itemCountTitle'> Acompañamiento:</p>
                        <p className='itemCountHolder'>{complementName.name}</p >
                    </div>
                        <div className = "propUnitHolder">
                        <p className='itemCountTitle'> Proteínas:</p>
                        <p className='itemCountHolder'>{proteinName.name}</p >
                    </div>
                </div>
                

                <div className='buttonHolder'>
                    <SvgButton
                        type='editCookie'
                        fullProps={fullProps}
                        RenderedComponent={UpdateDishModal}
                        hook={fatherHook}
                    />

                    <WhiteDummySpacer />

                    <SvgButton
                        type='trashCan'
                        fullProps={fullProps}
                        RenderedComponent={DeleteDishModal}
                        hook={fatherHook}
                    />
                </div>
            </HorizontalDisplay>





        </div>
    )
}

const IngredientGroupHolder = ({ name, items, index, backgrounColors, passedHook }) => {
    return (
        <>

            <SubTitle paddingLeft='0px' style={{ marginTop: '70px' }}>{name}</SubTitle>
            {
                items.map((dish, index) => (
                    <IngredientItemHolder
                        backgroundColor={backgrounColors[index % 2]}
                        key={index}
                        fullProps={dish}
                        fatherHook={passedHook}
                    />
                ))
            }
        </>
    )
}


const ListDish = () => {

    //Getting the extras object
    const storedExtras = JSON.parse(localStorage.getItem('extras')) || [];

    //Hook Post Operaciones
    const [updateTrigger, setUpdateTrigger] = useState(0);
    const [dishData, setDishData] = useState([]);

    useEffect(() => {
        const storedDishes = JSON.parse(localStorage.getItem('dishes')) || [];

        const processedData = storedExtras.Tipos.map(extra => {
            const typeDishes = storedDishes.filter(dish => dish.typeId === extra.id);
            return {
                typeName: extra.name,
                items: typeDishes
            };
        });

        setDishData(processedData);



    }, [updateTrigger]);

    return (
        <MotionImplementation >

            <WhiteDummySpacer />
            <Title>Listado de Platillos</Title>

            {dishData.length > 0 ? (
                dishData.map((dishType, index) => (
                    <IngredientGroupHolder
                        backgrounColors={colorOption[index % 2]}
                        key={index}
                        name={dishType.typeName}
                        items={dishType.items}
                        passedHook={setUpdateTrigger}
                    />
                ))
            ) : (
                <div className='noTypesDish'>No hay tipos de platillos <br /> ¡Da uno de alta para poder observarlos por acá!</div>
            )}

        </MotionImplementation>
    )
}

export default ListDish;