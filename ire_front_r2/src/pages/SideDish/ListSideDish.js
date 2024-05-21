import { Component } from "react";

import "./sidedish.module/complementHolder.css";

import CenteredDisplay from "./../../components/Layouts/CenteredDisplay"; 

import Title from "../../components/Layouts/Title";
import ComponentHolder from "../../components/Layouts/ComponentHolder";
import HorizontalSpray from "../../components/Layouts/HorizontalSpray";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import SvgButton from "../../components/UIcomponents/SvgButton";
import  MotionImplementation  from './../../components/Layouts/MotionImplementation';
import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";

import UpdateSideDishModal from "./sidedish.module/UpdateSideDishModal";
import DeleteSideDishModal from "./sidedish.module/DeleteSideDishModal";

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
            "description": "OnlyItem With description",
            "name": "string"
        },
        {
            "id": 0,
            "name": "string"
        },
    ]
}

const ComplementItem = ({fullSideDish, typeOfComplement}) => {
 
    fullSideDish.typeOption = typeOfComplement;

    return (
        <HorizontalDisplay 
            justifyDirection="start" 
            width="auto"  
            classNameSend="complementItemHolder">

            <p className="complementNameHolder" >
                {fullSideDish.name}
            </p>

            <SvgButton 
                size='30px' 
                styleName = 'dark' 
                type ='editCookie'
                fullProps = {fullSideDish}
                RenderedComponent = {UpdateSideDishModal}
                />

            <SvgButton 
                size='30px' 
                styleName = 'dark' 
                type ='trashCan'
                fullProps = {fullSideDish}
                RenderedComponent = {DeleteSideDishModal}
                />

        </HorizontalDisplay>
    )
}

const backgroundItemColors = ['#009FE3', '#1D7093']

const TopComplementHolder = ({ name, items, classValue =  'complementHolder',backgroundItem = '#B89554'}) => {
    if (name !== "types") {
        return (
            <div className = {classValue} style={{backgroundColor : backgroundItem}}>
                <CenteredDisplay width="100%">
                    <p className = 'complementTitle'> {name} </p>
                </CenteredDisplay> 
                {
                    items.map((item, index) => (
                        <ComplementItem 
                            typeOfComplement = {name}
                            key = {item.id} 
                            fullSideDish = {item} /> 
                    ))
                }
            </div>
        );
    }
    return null;
}


const ListSideDish = () => {
    var iterator = 0;

    return (
        <MotionImplementation>  
            <WhiteDummySpacer/>
            <Title> Listado de Complementos </Title> 
            
            <TopComplementHolder 
                classValue = "typesHolder" 
                key={"Tipos de Platillo"} 
                name={"Tipos de Platillo"} 
                items={mockData.types} 
                /> 

            <HorizontalDisplay  >
                {
                    Object.entries(mockData).map(([key, value],index) => (
                        <TopComplementHolder 
                            key={key} 
                            name={key} 
                            items={value} 
                            backgroundItem = {backgroundItemColors[index%2]}
                            />
                    ))
                }
            </HorizontalDisplay>
 
        </MotionImplementation>
    )
}

export default ListSideDish;