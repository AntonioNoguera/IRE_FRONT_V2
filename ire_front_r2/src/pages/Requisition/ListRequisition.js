import React, { useEffect, useState } from 'react';
import Title from "../../components/Layouts/Title";

import Subtitle from "../../components/Layouts/SubTitle";
import ComponentHolder from "../../components/Layouts/ComponentHolder";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";

import "./requisition.modules/requisitionHolder.css"

import { v4 as uuidv4 } from 'uuid'; 

import  MotionImplementation  from './../../components/Layouts/MotionImplementation';

import { motion } from 'framer-motion';
import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";
import SvgButton from "../../components/UIcomponents/SvgButton";

import UpgradeIngredientModal from "./requisition.modules/AtomIngredientModals/UpdateIngredientModal";
import DeleteDishFromRecipeModal from "../Recipe/recipe.modules/DishItemModules/DeleteDishFromRecipeModal";

 
import NewIngredientModal from './requisition.modules/AtomIngredientModals/NewIngredientModal';
import DeleteDishForRequisition from './requisition.modules/DeleteDishForRequisition';
import UpdateDayForRequisition from './requisition.modules/UpdateDayForRequisition'; 

import NewRequisitionModal from './requisition.modules/NewRequisitionModal';
import DeleteIngredientModal from './requisition.modules/AtomIngredientModals/DeleteIngredientModal';

import { useSnackbar } from 'notistack';

const storedDishes = JSON.parse(localStorage.getItem('dishes')) || [];
const storedExtras = JSON.parse(localStorage.getItem('extras')) || [];
const storedIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];

console.log("Stored Dishes:", storedDishes);
console.log("Stored Extras:", storedExtras);
console.log("Stored Ingredients:", storedIngredients);

const RequisitionAtom = ({fullAtomProps, parentHook}) => {
    const specificIngredient = storedIngredients.find(ingredient => ingredient.id === fullAtomProps.ingredientId) || { name: 'Ingrediente desconocido', unit: 'unidad' };

    if (!specificIngredient) {
        console.warn(`No se encontró ingrediente con ID: ${fullAtomProps.ingredientId}`);
    }

    if (!storedIngredients || storedIngredients.length === 0) {
        console.warn("storedIngredients no está definido o está vacío:", storedIngredients);
    }

 


    const convertISOToStandardTimeWithAMPM = (isoString) => {
        const date = new Date(isoString);

        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; // La hora '0' debe ser '12'

        return `${hours}:${minutes} ${ampm}`;
    };



    return (
        <div className='itemHolder'> 
        
            <div className="itemInfo">
                {specificIngredient.name}
                <span> / </span>
                {fullAtomProps.ingredientAmount} {specificIngredient.unit}
                <span> / </span>
                <span> {convertISOToStandardTimeWithAMPM(fullAtomProps.operationTime)} </span> 
            </div>
            
            <div className='atomToolbar'>
                <SvgButton 
                    type = 'editCookie' 
                    styleName="dark" 
                    size = '30px'
                    hook = {parentHook}
                    fullProps = {fullAtomProps}
                    RenderedComponent={UpgradeIngredientModal}  />

                <WhiteDummySpacer/>
                
                <SvgButton 
                    type = 'trashCan' 
                    styleName="dark"  
                    size = '30px'
                    hook = {parentHook}
                    fullProps = {fullAtomProps}
                    RenderedComponent={DeleteIngredientModal}
                    />
            </div>
            
        </div>
    )
}

const RequisitionItem = ({fullProps, passHook}) => { 

    if (!storedDishes || storedDishes.length === 0) {
        console.warn("storedDishes no está definido o está vacío:", storedDishes);
    }
 
    fullProps.fullDishProps = storedDishes.find(dish => dish.id === fullProps.dishId) || { name: 'Platillo desconocido', typeId: null };

    if (!fullProps.fullDishProps) {
        console.warn(`No se encontró platillo con ID: ${fullProps.dishId}`);
    }

    if (!storedExtras?.Tipos) {
        console.warn("Tipos no está definido en storedExtras:", storedExtras);
    }

    const dishType = storedExtras?.Tipos?.find(type => type.id === fullProps.fullDishProps.typeId) || { name: 'Tipo desconocido' };
    const dishName = fullProps.fullDishProps.name || 'Platillo desconocido';
 
    console.log("--------------------------------")
    console.log(fullProps)

    return (
        <div  className="dishHolder">
            <HorizontalDisplay justifyDirection="space-between" >
                
                <div style={{flexDirection:'column', display:'flex', justifyContent : 'center' }}>
                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center' }}>
                    <p className="ItemStrongValue">Platillo:</p> 
                    <p className="ItemLigthValue">{fullProps.fullDishProps.name}</p>
                </div>  

                </div> 

                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center'}}>
                    {/** Dish toolbar */}
                    <SvgButton 
                        type="addSign" 
                        size="30" 
                        fullProps = {fullProps}
                        hook = {passHook}
                        RenderedComponent={NewIngredientModal}/>

                    <WhiteDummySpacer/>

                    <SvgButton 
                        type="editCookie" 
                        size="30"
                        fullProps = {fullProps}
                        hook = {passHook}
                        RenderedComponent={UpdateDayForRequisition}/>

                    <WhiteDummySpacer/>
                    <SvgButton 
                        type="trashCan" 
                        size="30" 
                        fullProps = {fullProps} 
                        hook = {passHook}
                        RenderedComponent={DeleteDishForRequisition}/>
                </div>   
           
            </HorizontalDisplay>
            
            <hr className ="reqHr"/>
            
            {fullProps.dishIngredients.length !== 0 ? (
                fullProps.dishIngredients.map((element, index) => {
 
                    element.inheritProps = fullProps;
                    return(
                        <RequisitionAtom
                        parentHook = {passHook}
                        key={index}
                        fullAtomProps={element}
                    />
                    ) 
                })
            ) : (
                <div className='noIngredientsDish'>No hay ingredientes</div>
            )}

            
            
            <hr className ="reqHr"/> 
            <HorizontalDisplay justifyDirection="space-between" > 
                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center' }}>
                    <p className="ItemStrongValue">Tipo:  {dishType.name}</p>  
                </div>  

                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center' }}>
                    <p className="ItemStrongValue">Servicios:</p> 
                    <p className="ItemLigthValue">{fullProps.dishServices}</p>
                </div> 
            </HorizontalDisplay>
        </div>
    )
}

const RequisitionHolder = ({ fullFatherProps, fatherHook }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return ( 
        <div className='dayHolder'>  
            <div className="headerHolder">
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
                    <p className="DayStrongValue">Día:</p> 
                    <p className="DayLigthValue">{fullFatherProps.dayName}</p>
                </div> 

                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
                    <p className="DayStrongValue">Estado:</p> 
                    <p className="DayLigthValue">
                        {fullFatherProps.dayStatus ? (
                            <span className="activeDay">Activo</span>
                        ) : (
                            <span className="disabledDay">Inactivo</span>
                        )}
                    </p>
                </div>  
            </div>

            {fullFatherProps.dishes.length > 0 ? (
                fullFatherProps.dishes.map((dish, index) => {
                    dish.fatherProps = fullFatherProps;
                    return (
                        <RequisitionItem 
                            key={index}
                            fullProps={dish}
                            passHook={fatherHook}
                        />
                    );
                })
            ) : (
                <div className='noDishesOnDay'>
                    No hay platillos disponibles
                </div>
            )}

            {fullFatherProps.dayStatus && (
                <div className="addDishToDay bottomButton" onClick={openModal}> 
                    
                    Añade Platillo a la Requisición
                    <WhiteDummySpacer/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                 
                </div>
            )}
            
            <NewRequisitionModal
                fullProps = {fullFatherProps}
                passedHook={fatherHook}
                isModalOpen = {isModalOpen}
                closeModal = {closeModal}
            />
        </div>
    );
}


const ListRequisition = () => {
    const { enqueueSnackbar } = useSnackbar();

    function getWeekRangeString(date = new Date()) {
        const dayOfWeek = date.getDay(); // 0 (Domingo) - 6 (Sábado)
        const diffToMonday = (dayOfWeek + 6) % 7;
        const monday = new Date(date);
        monday.setDate(date.getDate() - diffToMonday);
        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);
      
        const formatDate = (date) => {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        };
      
        return `${formatDate(monday)} to ${formatDate(sunday)}`;
    }
      
    function createWeekDays(startDate) {
        const dayNames = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
        const weekDays = [];
        const currentDate = new Date();
      
        for (let i = 0; i < 7; i++) {
            const day = new Date(startDate);
            day.setDate(startDate.getDate() + i);
      
            const dayStatus = (currentDate - day) / (1000 * 60 * 60 * 24) <= 3;
      
            weekDays.push({
                dayId: uuidv4(),
                dayName: dayNames[i],
                dayValue: day.toISOString(),  // Almacenar la fecha completa
                dayStatus: dayStatus,
                dishes: [],
            });
        }
      
        return weekDays;
    }
      
    function recalculateDayStatus(weekDays) {
        const currentDate = new Date();
        weekDays.forEach(day => {
            const dayDate = new Date(day.dayValue);
            day.dayStatus = (currentDate - dayDate) / (1000 * 60 * 60 * 24) <= 3;
        });
    }
    
    function getRequisitionForCurrentWeek() { 
        const requisitions = JSON.parse(localStorage.getItem('requisitions')) || [];
        
        let workingSessionDay = localStorage.getItem('workingSessionDay');

        if (!workingSessionDay) {
            workingSessionDay = new Date();
            localStorage.setItem('workingSessionDay', workingSessionDay.toISOString());
        } else {
            workingSessionDay = new Date(workingSessionDay);
        }

        const currentWeekRange = getWeekRangeString(workingSessionDay);

        let currentWeekRequisition = requisitions.find(r => r.daysCovered === currentWeekRange);
      
        if (!currentWeekRequisition) {
            const monday = new Date();
            const dayOfWeek = monday.getDay();
            const diffToMonday = (dayOfWeek + 6) % 7;
            monday.setDate(monday.getDate() - diffToMonday);
      
            currentWeekRequisition = {
                daysCovered: currentWeekRange,
                weekDays: createWeekDays(monday),
            };
    
            requisitions.push(currentWeekRequisition);
            localStorage.setItem('requisitions', JSON.stringify(requisitions));
        } else {
            recalculateDayStatus(currentWeekRequisition.weekDays);
        }
      
        return currentWeekRequisition;
    }

    function getPreviousWeekRequisition() {
        const workingSessionDay = localStorage.getItem('workingSessionDay');
        
        if (!workingSessionDay) {
            return {};
        }

        const previousDate = new Date(workingSessionDay);
        previousDate.setDate(previousDate.getDate() - 7);

        const previousWeekRange = getWeekRangeString(previousDate);
        const requisitions = JSON.parse(localStorage.getItem('requisitions')) || [];
        const previousWeekRequisition = requisitions.find(r => r.daysCovered === previousWeekRange);

        if (!previousWeekRequisition) {
            enqueueSnackbar("No existe requisición más vieja", { variant: 'warning' });
            return {};
        } else {
            enqueueSnackbar("Datos cargados con éxito", { variant: 'success' });
            recalculateDayStatus(previousWeekRequisition.weekDays);
            localStorage.setItem('workingSessionDay', previousDate.toISOString());
            return previousWeekRequisition;
        }
    }

    function getNextWeekRequisition() {
        const workingSessionDay = localStorage.getItem('workingSessionDay');
        
        if (!workingSessionDay) {
            return {};
        }
    
        const nextDate = new Date(workingSessionDay);
        nextDate.setDate(nextDate.getDate() + 7);
    
        const nextWeekRange = getWeekRangeString(nextDate);
        const requisitions = JSON.parse(localStorage.getItem('requisitions')) || [];
        let nextWeekRequisition = requisitions.find(r => r.daysCovered === nextWeekRange);
    
        if (!nextWeekRequisition) {
            const monday = new Date(nextDate);
            const dayOfWeek = monday.getDay();
            const diffToMonday = (dayOfWeek + 6) % 7;
            monday.setDate(monday.getDate() - diffToMonday);
    
            nextWeekRequisition = {
                daysCovered: nextWeekRange,
                weekDays: createWeekDays(monday),
            };
    
            requisitions.push(nextWeekRequisition);
            localStorage.setItem('requisitions', JSON.stringify(requisitions));
            
            enqueueSnackbar("Datos creados con éxito", { variant: 'success' });
        } else {
            
            enqueueSnackbar("Datos cargados con éxito", { variant: 'success' });
            recalculateDayStatus(nextWeekRequisition.weekDays);
        }

        localStorage.setItem('workingSessionDay', nextDate.toISOString());
        return nextWeekRequisition;
    }

    const [currentWeekData, setCurrentWeekData] = useState(() => getRequisitionForCurrentWeek());

    const goBackRequisition = () => {
        const previousWeekData = getPreviousWeekRequisition();
        if (Object.keys(previousWeekData).length > 0) {
            setCurrentWeekData(previousWeekData); 
        }
    }

    const goForwardRequisition = () => {
        const nextWeekData = getNextWeekRequisition();
        if (Object.keys(nextWeekData).length > 0) {
            setCurrentWeekData(nextWeekData); 
        }
    }

    const [updateTrigger, setUpdateTrigger] = useState(0);

    useEffect(() => {
        setCurrentWeekData(getRequisitionForCurrentWeek());
    }, [updateTrigger]);

    return (
        <MotionImplementation>
            <WhiteDummySpacer/><WhiteDummySpacer/>
            <Title>Requisición Semanal</Title>
            <Subtitle paddingLeft='0px'>Periodo Semanal: 
                <span className='coveredPeriod'>
                    de {currentWeekData.daysCovered.replaceAll("-","/").replace("to", "a")}
                </span>
            </Subtitle>
            {
                currentWeekData.weekDays.map((requisition, index) => (
                    <RequisitionHolder
                        key = {index}
                        fullFatherProps = {requisition}
                        fatherHook = {setUpdateTrigger}
                    />
                ))
            }

            <WhiteDummySpacer/><WhiteDummySpacer/><WhiteDummySpacer/> 

            <div className='bottomNavigation'>
                <div className="bottomButton" onClick={goBackRequisition}>
                    <svg viewBox="0 0 24 24" className="rotate">
                        <path d="M17,12L12,17V14H8V10H12V7L17,12M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12Z" />
                    </svg>
                    <WhiteDummySpacer/>
                    Semana Anterior
                </div> 
                <div className="bottomButton" onClick={goForwardRequisition}>
                    Semana Posterior
                    <WhiteDummySpacer/>
                    <svg viewBox="0 0 24 24">
                        <path d="M17,12L12,17V14H8V10H12V7L17,12M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12Z" />
                    </svg>
                </div>
            </div>
        </MotionImplementation>
    );
};

export default ListRequisition;
 