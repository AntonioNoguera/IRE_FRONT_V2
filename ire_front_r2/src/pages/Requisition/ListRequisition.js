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

 
import NewDishForRequisitionModal from './requisition.modules/NewDishForRequisitionModal';
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
                    <p className='itemCountHolder'>Platillo: {fullProps.name}</p >
                </div> 

                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center'}}>
                    {/** Dish toolbar */}
                    <SvgButton 
                        type="addSign" 
                        size="30" 
                        RenderedComponent={NewDishForRequisitionModal}/>

                    <WhiteDummySpacer/>

                    <SvgButton 
                        type="editCookie" 
                        size="30"
                        RenderedComponent={UpdateDayForRequisition}/>

                    <WhiteDummySpacer/>
                    <SvgButton 
                        type="trashCan" 
                        size="30" 
                        RenderedComponent={DeleteDishForRequisition}/>
                </div>   
           
            </HorizontalDisplay>
            
            <hr/>
            {
                fullProps.elements.map((element,index)=>(
                    <RequisitionAtom  
                        fullAtomProps = {element}
                    />
                ))
            } 
            
            <hr/>
            <HorizontalDisplay justifyDirection="space-between" > 
                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center' }}>
                    <p className="ItemStrongValue">Turno:</p> 
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

const RequisitionHolder = ({stringDay='huh', state, services, dishes}) => {
    return ( 
        <div style={{background : 'red'}}  className = 'dayHolder'>  
            <div className="headerHolder">
                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center' }}>
                    <p className="DayStrongValue">Dia:</p> 
                    <p className="DayLigthValue">{stringDay}</p>
                </div> 

                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center' }}>
                    <p className="DayStrongValue">Estado:</p> 
                    <p className="DayLigthValue">{stringDay}</p>
                </div>  
           
            </div>

            {
                dishes.map((dish,index)=>(
                    <RequisitionItem 
                        key={index}

                        fullProps = {dish}
                    />
                ))
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
                        state = { requisition.state }
                        stringDay = { requisition.stringDay }
                        dishes = { requisition.dishes }
                        type = { requisition.type }
                    />
            ))
        }
        </MotionImplementation>
    )
}

export default ListRequisition;