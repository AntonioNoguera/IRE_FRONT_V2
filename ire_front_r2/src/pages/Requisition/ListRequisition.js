import { Component } from "react";
import Title from "../../components/Layouts/Title";
import ComponentHolder from "../../components/Layouts/ComponentHolder";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";

import "./requisition.modules/requisitionHolder.css"


import  MotionImplementation  from './../../components/Layouts/MotionImplementation';

import { motion } from 'framer-motion';
import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";
import SvgButton from "../../components/UIcomponents/SvgButton";

import UpgradeIngredientModal from "./requisition.modules/AtomIngredientModals/UpdateIngredientModal";
import DeleteDishFromRecipeModal from "../Recipe/recipe.modules/DishItemModules/DeleteDishFromRecipeModal";

 
import NewIngredientModal from './requisition.modules/AtomIngredientModals/NewIngredientModal';
import DeleteDishForRequisition from './requisition.modules/DeleteDishForRequisition';
import UpdateDayForRequisition from './requisition.modules/UpdateDayForRequisition'; 

const dataMock = [
    {
        id : '0',
        stringDay : 'test',
        date : "string",
        state : true,
        dishes : [
            {
                id : '0',
                dish : 'LoremIpsum',
                dishGroup : '2',
                services : '200',
                type : 'Desayuno',
                elements : [
                    {
                        id : '0',
                        name : 'Carne',
                        amount : '12. 00',
                        unit : 'kg',
                        time : '17:00'
                    }, 
                ]
            },{
                id : '0',
                dish : 'LoremIpsum',
                dishGroup : '2',
                services : '200',
                
                type : 'Desayuno',
                elements : [
                    {
                        id : '0',
                        name : 'Carne',
                        amount : '12. 00',
                        unit : 'kg',
                        time : '17:00'
                    }, 
                ]
            },
        ],
    },
    {
        id : '0',
        stringDay : 'test',
        date : "string",
        state : true,
        dishes : [
            {
                id : '0',
                dish : 'LoremIpsum',
                dishGroup : '2',
                services : '200',
                type : 'Desayuno',
                elements : [
                    {
                        id : '0',
                        name : 'Carne',
                        amount : '12. 00',
                        unit : 'kg',
                        time : '17:00'
                    }, {
                        id : '0',
                        name : 'Carne',
                        amount : '12. 00',
                        unit : 'kg',
                        time : '17:00'
                    }, {
                        id : '0',
                        name : 'Carne',
                        amount : '12. 00',
                        unit : 'kg',
                        time : '17:00'
                    }, {
                        id : '0',
                        name : 'Carne',
                        amount : '12. 00',
                        unit : 'kg',
                        time : '17:00'
                    }, {
                        id : '0',
                        name : 'Carne',
                        amount : '12. 00',
                        unit : 'kg',
                        time : '17:00'
                    }, 
                ]
            },{
                id : '0',
                dish : 'LoremIpsum',
                dishGroup : '2',
                services : '200',
                type : 'Desayuno',
                elements : [
                    {
                        id : '0',
                        name : 'Carne',
                        amount : '12. 00',
                        unit : 'kg',
                        time : '17:00'
                    }, 
                ]
            },
        ],
    },
]

const RequisitionAtom = ({fullAtomProps}) => {
    return (
        <div className='itemHolder'> 
            <div className="itemInfo">
                {fullAtomProps.name}
                <span> / </span>
                {fullAtomProps.amount} {fullAtomProps.unit}
                <span> / </span>
                <span> {fullAtomProps.time} </span> 
            </div>
            
            <div className='atomToolbar'>
                <SvgButton 
                    type = 'editCookie' 
                    styleName="dark" 
                    size = '30px'
                    fullProps = {fullAtomProps}
                    RenderedComponent={UpgradeIngredientModal}  />

                <WhiteDummySpacer/>
                
                <SvgButton 
                    type = 'trashCan' 
                    styleName="dark"  
                    size = '30px'
                    fullProps = {fullAtomProps}
                    RenderedComponent={DeleteDishFromRecipeModal}
                    />
            </div>
            
        </div>
    )
}

const RequisitionItem = ({fullProps}) => {
    return (
        <div  className="dishHolder">
            <HorizontalDisplay justifyDirection="space-between" >
                
                <div style={{flexDirection:'column', display:'flex', justifyContent : 'center' }}>
                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center' }}>
                    <p className="ItemStrongValue">Platillo:</p> 
                    <p className="ItemLigthValue">{fullProps.dish}</p>
                </div>  

                </div> 

                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center'}}>
                    {/** Dish toolbar */}
                    <SvgButton 
                        type="addSign" 
                        size="30" 
                        fullProps = {fullProps}
                        RenderedComponent={NewIngredientModal}/>

                    <WhiteDummySpacer/>

                    <SvgButton 
                        type="editCookie" 
                        size="30"
                        fullProps = {fullProps}
                        RenderedComponent={UpdateDayForRequisition}/>

                    <WhiteDummySpacer/>
                    <SvgButton 
                        type="trashCan" 
                        size="30" 
                        fullProps = {fullProps}
                        RenderedComponent={DeleteDishForRequisition}/>
                </div>   
           
            </HorizontalDisplay>
            
            <hr/>
            {
                fullProps.elements.map((element,index)=>{
                    element.dishFather = fullProps;
                    
                    return(
                    <RequisitionAtom  
                        fullAtomProps = {element}
                    />)
                })
            } 
            
            <hr/>
            <HorizontalDisplay justifyDirection="space-between" > 
                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center' }}>
                    <p className="ItemStrongValue">Tipos:</p> 
                    <p className="ItemLigthValue">{fullProps.type}</p>
                </div>  

                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center' }}>
                    <p className="ItemStrongValue">Servicios:</p> 
                    <p className="ItemLigthValue">{fullProps.services}</p>
                </div> 
  
           
            </HorizontalDisplay>
        </div>
    )
}

const RequisitionHolder = ({fullFatherProps}) => {
    return ( 
        <div   className = 'dayHolder'>  
            <div className="headerHolder">
                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center' }}>
                    <p className="DayStrongValue">Dia:</p> 
                    <p className="DayLigthValue">{fullFatherProps.stringDay}</p>
                </div> 

                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center' }}>
                    <p className="DayStrongValue">Estado:</p> 
                    <p className="DayLigthValue">{fullFatherProps.stringDay}</p>
                </div>  
           
            </div>

            {
                fullFatherProps.dishes.map((dish,index)=>{
                    dish.fatherProps = fullFatherProps
                    return(
                        <RequisitionItem 
                        key={index}

                        fullProps = {dish}
                    />
                    )
                }
                )
            }
        </div>
    )
}

const ListRequisition = () => {
     
     return(
        <MotionImplementation>
        <WhiteDummySpacer/>
        <WhiteDummySpacer/>
        <Title>Requisición Semanal</Title>
        {

            dataMock.map((requisition, index) => (

                    <RequisitionHolder
                        key = { index }
                        fullFatherProps = {requisition}
                    />
            ))
        }

        <WhiteDummySpacer/><WhiteDummySpacer/><WhiteDummySpacer/> 

        <div className='bottomNavigation'>
            <div className="bottomButton">
            <svg viewBox="0 0 24 24" className="rotate">
                <path d="M17,12L12,17V14H8V10H12V7L17,12M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12Z" />
            </svg>
            <WhiteDummySpacer/>
                Semana Anterior
            </div>
            <div className="bottomButton">
                Nuevo Día de Semana
            <WhiteDummySpacer/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            </div>
            <div className="bottomButton">

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