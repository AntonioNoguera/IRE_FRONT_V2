import React, { useEffect, useState } from 'react';
import Title from "../../components/Layouts/Title";
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

const RequisitionAtom = ({fullAtomProps, parentHook}) => {
    const specificIngredient = storedIngredients.find(ingredient => ingredient.id === fullAtomProps.ingredientId) 

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
    fullProps.fullDishProps = storedDishes.find(dish => dish.id === fullProps.dishId)

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
            
            <hr/>
            
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
                <div>No hay ingredientes</div>
            )}
            
            <hr/>
            <HorizontalDisplay justifyDirection="space-between" > 
                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center' }}>
                    <p className="ItemStrongValue">Tipo:</p> 
                    <p className="ItemLigthValue">{storedExtras.Tipos.find(type => type.id === fullProps.fullDishProps.typeId).name}</p>
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

            {fullFatherProps.dishes.map((dish, index) => {
                dish.fatherProps = fullFatherProps;
                return (
                    <RequisitionItem 
                        key={index}
                        fullProps={dish}
                        passHook = {fatherHook}
                    />
                );
            })}

            {fullFatherProps.dayStatus && (
                <div className="addDishToDay" onClick={openModal}>
                    Añade Platillo a la Requisición
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
      
          const dayStatus = Math.abs((currentDate - day) / (1000 * 60 * 60 * 24)) <= 3;
      
          weekDays.push({
            dayId : uuidv4(), 
            dayName: dayNames[i],
            dayValue: day.getDate(),
            dayStatus: dayStatus,
            dishes: [],
          });
        }
      
        return weekDays;
      }
      
      function getRequisitionForCurrentWeek() {
        const currentWeekRange = getWeekRangeString();
        const requisitions = JSON.parse(localStorage.getItem('requisitions')) || [];

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
        }
      
        return currentWeekRequisition;
      }

      const noMockData =  getRequisitionForCurrentWeek();
 

      const [updateTrigger, setUpdateTrigger] = useState(0);

      const goBackRequisition = () => {
        
        const existPreviusReq = false;
        if(existPreviusReq){

        }else{
            enqueueSnackbar("No existe requisición más vieja", { variant: 'warning' });

        }
      }

      const goNextRequisition = () => {
            
      }

      useEffect(() => { }, [updateTrigger]);

     return(
        <MotionImplementation>
            <WhiteDummySpacer/><WhiteDummySpacer/>
            <Title>Requisición Semanal</Title>
            {
                noMockData.weekDays.map((requisition, index) => (

                        <RequisitionHolder
                            key = { index }
                            fullFatherProps = {requisition}
                            fatherHook={setUpdateTrigger}
                        />
                ))
            }

            <WhiteDummySpacer/><WhiteDummySpacer/><WhiteDummySpacer/> 

            <div className='bottomNavigation' onClick = {goNextRequisition}>
                <div className="bottomButton">
                    <svg viewBox="0 0 24 24" className="rotate">
                        <path d="M17,12L12,17V14H8V10H12V7L17,12M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12Z" />
                    </svg>
                    <WhiteDummySpacer/>
                        Semana Anterior
                </div> 
                <div className="bottomButton" onClick={goBackRequisition}>

                    Semana Posterior
                    <WhiteDummySpacer/>
                    <svg viewBox="0 0 24 24">
                        <path d="M17,12L12,17V14H8V10H12V7L17,12M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12Z" />
                    </svg>
                    
                </div>
            </div>

        </MotionImplementation>
    )
}

export default ListRequisition;