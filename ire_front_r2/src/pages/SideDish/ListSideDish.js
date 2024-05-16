import { Component } from "react";

import "./sidedish.module/complementHolder.css";

import CenteredDisplay from "./../../components/Layouts/CenteredDisplay";

import { motion } from 'framer-motion';

import Title from "../../components/Layouts/Title";
import ComponentHolder from "../../components/Layouts/ComponentHolder";
import HorizontalSpray from "../../components/Layouts/HorizontalSpray";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import SvgButton from "../../components/UIcomponents/SvgButton";
import  MotionImplementation  from './../../components/Layouts/MotionImplementation';

const mockData = {
    "complements": [
        {
            "id": 0,
            "name": "string"
        }
    ],
    "proteins": [
        {
            "id": 0,
            "name": "string"
        }
    ],
    "sauces": [
        {
            "id": 0,
            "name": "string"
        },
        {
            "id": 0,
            "name": "string"
        },
        {
            "id": 0,
            "name": "string"
        },{
            "id": 0,
            "name": "string"
        }, 
    ],
    "types": [
        {
            "id": 0,
            "name": "f"
        },
        {
            "id": 0,
            "name": "string"
        },
        {
            "id": 0,
            "name": "string"
        },
        {
            "id": 0,
            "name": "f"
        },
        {
            "id": 0,
            "name": "string"
        },
        {
            "id": 0,
            "name": "string"
        },
        
    ]
}

const ComplementItem = ({complementName}) => {
    return (
        <HorizontalDisplay 
            justifyDirection="start" 
            width="auto"  
            classNameSend="complementItemHolder">

            <p className="complementNameHolder" >
                {complementName}
            </p>

            <SvgButton 
                size='30px' 
                styleName = 'dark' 
                type ='editCookie'/>

            <SvgButton 
                size='30px' 
                styleName = 'dark' 
                type ='trashCan'/>

        </HorizontalDisplay>
    )
}

const TopComplementHolder = ({ name, items, classValue =  'complementHolder'}) => {
    if (name !== "types") {
        return (
            <div className = {classValue}>
                <CenteredDisplay width="100%">
                    <p className = 'complementTitle'> {name} </p>
                </CenteredDisplay> 
                {
                    items.map((item, index) => (
                        <ComplementItem 
                            key = {item.id} 
                            complementName={item.name} /> 
                    ))
                }
            </div>
        );
    }
    return null;
}


const ListSideDish = () => {

    return (
        <>
            <MotionImplementation
                initial = {{x:200, opacity:0}}
                animate={{ x: 0, opacity : 1 }} 
                transition={{ type: 'linear', stiffness: 200, duration : 0.42}} >

                    <Title> Listado de Acompañamientos </Title> 
                    <TopComplementHolder 
                        classValue = "typesHolder" 
                        key={"Tipos de Platillo"} 
                        name={"Tipos de Platillo"} 
                        items={mockData.types} 
                        /> 

                    <HorizontalDisplay  >
                        {
                            Object.entries(mockData).map(([key, value]) => (
                                <TopComplementHolder key={key} name={key} items={value} />
                            ))
                        }
                    </HorizontalDisplay>

                </MotionImplementation>
        </>
    )
}

export default ListSideDish;