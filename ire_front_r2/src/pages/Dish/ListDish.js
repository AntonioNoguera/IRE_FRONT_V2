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

const IngredientItemHolder = ({backgroundColor,fullProps,fatherHook}) => {
    const FormattedDate = ( isoDate ) => {
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

    fullProps.complementInfo = mockDatagroup

    return( 
            <div className = 'mainHolderStyle' style={{  display: 'flex', backgroundColor : backgroundColor}}>
            <HorizontalDisplay> 
                <CenteredDisplay width="100%">
                    <p className = 'groupName'> {fullProps.name} </p>
                </CenteredDisplay>

                <div style={{flexDirection:'column', display:'flex', justifyContent : 'center' , marginInline : '30px'}}>
                    <p className='itemCountTitle'>Temperatura:</p>
                    <p className='itemCountHolder'>{fullProps.temperature}</p >
                </div> 

                <div style={{flexDirection:'column', display:'flex', justifyContent : 'center' , marginInline : '30px'}}>
                    <p className='itemCountTitle'> Fecha de Creación:</p>
                    <p className='itemCountHolder'>{FormattedDate(fullProps.additionDate)}</p >
                </div> 
                
                <SvgButton 
                    type = 'editCookie'
                    fullProps = {fullProps}
                    RenderedComponent = {UpdateDishModal}
                    hook = {fatherHook}
                    />
                
                <WhiteDummySpacer/>

                <SvgButton 
                    type = 'trashCan'
                    fullProps = {fullProps}
                    RenderedComponent = {DeleteDishModal}
                    hook = {fatherHook}
                    />

            </HorizontalDisplay>
            </div> 
    )
}

const IngredientGroupHolder = ({name, items,index,backgrounColors,passedHook}) => {
    return(
        <>
            <SubTitle style={{ marginTop: '70px' }}>{name}</SubTitle>
            {
                items.map((dish, index) => (
                    <IngredientItemHolder
                        backgroundColor = {backgrounColors[index%2]}
                        key = {index} 
                        fullProps = { dish } 
                        fatherHook = {passedHook}
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
    
    console.log(dishData)

    return ( 
        <MotionImplementation >

            <WhiteDummySpacer />
            <Title>Listado de Platillos</Title>
            
            { 
                dishData.map((dishType, index) => (
                    <IngredientGroupHolder 
                        backgrounColors = {colorOption[index%2]} 
                        key = {index}
                        name = {dishType.typeName}
                        items = {dishType.items}    
                        passedHook = {setUpdateTrigger}
                    />
                    
                ))
            }
            
        </MotionImplementation> 
    )
}

export default ListDish;