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

const dataMock = [
    {
        groupName: "Desayuno",
        items:[
            {
                "existence": 0,
                "group_id": 0,
                "group_name": "string",
                "id": 0,
                "last_time_used": "string",
                "name": "Tacos de Buche al pastor sabroso",
                "unit": "string"
              },
              {
                "existence": 0,
                "group_id": 0,
                "group_name": "string",
                "id": 0,
                "last_time_used": "string",
                "name": "pepino",
                "unit": "string"
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

const IngredientItemHolder = ({id,name,existence,lastTimeUsed,backgroundColor}) => {
    return( 
            <div className = 'mainHolderStyle' style={{  display: 'flex', backgroundColor : backgroundColor}}>
            <HorizontalDisplay> 
                <CenteredDisplay width="100%">
                    <p className = 'groupName'> {name} </p>
                </CenteredDisplay>

                <div style={{flexDirection:'column', display:'flex', justifyContent : 'center' , marginInline : '30px'}}>
                    <p className='itemCountTitle'>Tipo:</p>
                    <p className='itemCountHolder'>{existence}</p >
                </div> 

                <div style={{flexDirection:'column', display:'flex', justifyContent : 'center' , marginInline : '30px'}}>
                    <p className='itemCountTitle'> Fecha de Creación:</p>
                    <p className='itemCountHolder'>{lastTimeUsed}</p >
                </div> 
                
                <SvgButton type = 'editCookie' />
                
                <WhiteDummySpacer/>
                <SvgButton type = 'trashCan' />

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
                        id = {ingredient.id}
                        name = {ingredient.name}
                        existence = {ingredient.existence}
                        lastTimeUsed = {ingredient.last_time_used}
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