import { Component } from "react";
import Title from "../../components/Layouts/Title";
import ComponentHolder from "../../components/Layouts/ComponentHolder";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";

import "./requisition.modules/requisitionHolder.css"

import  MotionImplementation  from './../../components/Layouts/MotionImplementation';

import { motion } from 'framer-motion';
import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";
import SvgButton from "../../components/UIcomponents/SvgButton";

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

const RequisitionAtom = ({name,amount,unit,time}) => {
    return (
        <div className='itemHolder'> 
            <div className="itemInfo">
                {name}
                <span> / </span>
                {amount} {unit}
                <span> / </span>
                <span> {time} </span> 
            </div>
            
            <div className='atomToolbar'>
                <SvgButton type = 'editCookie' styleName="dark" size = '30px'/>
                <WhiteDummySpacer/>
                <SvgButton type = 'trashCan' styleName="dark"  size = '30px'/>
            </div>
            
        </div>
    )
}

const RequisitionItem = ({name, type, services,elements}) => {
    return (
        <div  className="dishHolder">
            <HorizontalDisplay justifyDirection="space-between" >
                
                <div style={{flexDirection:'column', display:'flex', justifyContent : 'center' }}>
                    <p className='itemCountHolder'>Platillo: {name}</p >
                </div> 

                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center'}}>
                    {/** Dish toolbar */}
                    <SvgButton type="addSign" size="30" />
                    <WhiteDummySpacer/>
                    <SvgButton type="editCookie" size="30"/>
                    <WhiteDummySpacer/>
                    <SvgButton type="trashCan" size="30"/>
                </div>   
           
            </HorizontalDisplay>
            
            <hr/>
            {
                elements.map((element,index)=>(
                    <RequisitionAtom 
                        name = { element.name }
                        amount = { element.amount }
                        unit = { element.unit }
                        time = { element.time }
                    />
                ))
            } 
            
            <hr/>
            <HorizontalDisplay justifyDirection="space-between" > 
                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center' }}>
                    <p className="ItemStrongValue">Turno:</p> 
                    <p className="ItemLigthValue">{type}</p>
                </div>  

                <div style={{flexDirection:'row', display:'flex', justifyContent : 'center' }}>
                    <p className="ItemStrongValue">Servicios:</p> 
                    <p className="ItemLigthValue">{services}</p>
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
                dishes.map((dish)=>(
                    <RequisitionItem 
                        name = {dish.dish}
                        elements = {dish.elements}
                        services = {dish.services}
                        type = {dish.type}
                    />
                ))
            }
        </div>
    )
}

const ListRequisition = () => {
     
     return(
        <>
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
        </>
    )
}

export default ListRequisition;