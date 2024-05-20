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

import  MotionImplementation  from './../../components/Layouts/MotionImplementation';


import './../../mainStyles.css'; 
import "./dish.modules/dishHolder.css"
import SvgButton from "../../components/UIcomponents/SvgButton";

import UpdateDishModal from "./dish.modules/UpdateDishModal";
import DeleteDishModal from "./dish.modules/DeleteDishModal";

const dataMock = [
    {
        groupName: "Desayuno",
        items:[
            {
                "id": 2,
                "name": "Pozole Verde",
                "assamble": true,
                "temperature": "Frío",
                "last_made": "2024-04-24T01:42:25.740694206",
                "services": 0,
                "rating": 0,
                "complement": {
                  "id": 4,
                  "name": "Tostadas"
                },
                "sauce": {
                  "id": 1,
                  "name": "Salsa Roja"
                },
                "protein": {
                  "id": 3,
                  "name": "Pollo Deshebrado"
                },
                "type": {
                  "id": 5,
                  "name": "Desayuno"
                }
              },
              {
                "id": 2,
                "name": "Pozole Amarillo",
                "assamble": true,
                "temperature": "Frío",
                "last_made": "2024-04-24T01:42:25.740694206",
                "services": 0,
                "rating": 0,
                "complement": {
                  "id": 4,
                  "name": "Tostadas"
                },
                "sauce": {
                  "id": 1,
                  "name": "Salsa Roja"
                },
                "protein": {
                  "id": 3,
                  "name": "Pollo Deshebrado"
                },
                "type": {
                  "id": 5,
                  "name": "name in order"
                }
              },
        ]
    },{
        groupName: "Comida",
        items:[
            {
                "existence": 0,
                "group_id": 0,
                "group_name": "string",
                "id": 0,
                "last_time_used": "string",
                "name": "salchicha",
                "unit": "string"
              },
              {
                "existence": 0,
                "group_id": 0,
                "group_name": "string",
                "id": 0,
                "last_time_used": "string",
                "name": "leche",
                "unit": "string"
              },
        ]
    },
] 

const colorOption = [
    ['#009FE3', '#1D7093'] , 
    ['#F7B334', '#786C55'] 
]

const mockDatagroup = {
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
            "name": "aasdf"
        },
        {
            "id": 0,
            "name": "asdfasfasdfasdf"
        },
        {
            "id": 0,
            "name": "string"
        },
        {
            "id": 0,
            "name": "f232323"
        },
        {
            "id": 0,
            "description": "OnlyItem With description",
            "name": "name in order"
        },
        {
            "id": 0,
            "name": "stringsasdaaaa"
        },
    ]
}

const IngredientItemHolder = ({backgroundColor,fullProps}) => {

    fullProps.complementInfo = mockDatagroup

    return( 
            <div className = 'mainHolderStyle' style={{  display: 'flex', backgroundColor : backgroundColor}}>
            <HorizontalDisplay> 
                <CenteredDisplay width="100%">
                    <p className = 'groupName'> {fullProps.name} </p>
                </CenteredDisplay>

                <div style={{flexDirection:'column', display:'flex', justifyContent : 'center' , marginInline : '30px'}}>
                    <p className='itemCountTitle'>Tipo:</p>
                    <p className='itemCountHolder'>{fullProps.existence}</p >
                </div> 

                <div style={{flexDirection:'column', display:'flex', justifyContent : 'center' , marginInline : '30px'}}>
                    <p className='itemCountTitle'> Fecha de Creación:</p>
                    <p className='itemCountHolder'>{fullProps.lastTimeUsed}</p >
                </div> 
                
                <SvgButton 
                    type = 'editCookie'
                    fullProps = {fullProps}
                    RenderedComponent = {UpdateDishModal}
                    />
                
                <WhiteDummySpacer/>

                <SvgButton 
                    type = 'trashCan'
                    fullProps = {fullProps}
                    RenderedComponent = {DeleteDishModal}
                    />

            </HorizontalDisplay>
            </div> 
    )
}

const IngredientGroupHolder = ({name, items,index,backgrounColors}) => {
    return(
        <>
            <SubTitle style={{ marginTop: '70px' }}>{name}</SubTitle>
            {
                items.map((ingredient, index) => (
                    <IngredientItemHolder
                        backgroundColor = {backgrounColors[index%2]}
                        key = {index} 
                        fullProps = { ingredient } 
                    />
                ))
            }
        </>
    )
}


const ListDish = () => {
    return ( 
        <MotionImplementation >

            <WhiteDummySpacer />
            <Title>Listado de Platillos</Title>
            
            { 
                dataMock.map((groupIngredient, index) => (
                    <IngredientGroupHolder 
                        backgrounColors = {colorOption[index%2]} 
                        key = {index}
                        name = {groupIngredient.groupName}
                        items = {groupIngredient.items}    
                    />
                    
                ))
            }
            
        </MotionImplementation> 
    )
}

export default ListDish;