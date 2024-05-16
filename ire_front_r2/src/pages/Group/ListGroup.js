import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";

import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";

import { motion } from 'framer-motion';

import './../../mainStyles.css'; 
import "./group.modules/groupHolder.css"
import SvgButton from "../../components/UIcomponents/SvgButton";

const dataMock = [
    {
        "description": "string",
        "hexColor": "#F7B334",
        "id": 0,
        "itemCount" : 12,
        "name": "Frutas"
    },
    {
        "description": "string",
        "hexColor": "#1D7093",
        "id": 1,
        
        "itemCount" : 12,
        "name": "verduras"
    },
    {
        "description": "string",
        "hexColor": "#931D1D",
        "id": 2,
        
        "itemCount" : 12,
        "name": "Carne"
    },
    {
        "description": "string",
        "hexColor": "red",
        "id": 3,
        
        "itemCount" : 12,
        "name": "Lacteo"
    },
    {
        "description": "string",
        "hexColor": "#009FE3",
        "id": 4,
        
        "itemCount" : 12,
        "name": "Embutido"
    },
]

const GroupHolder = ({hexColor, description, name,id,itemCount}) => {
    return (
        <div className = 'mainHolderStyle' style={{ backgroundColor: hexColor, display: 'flex'}}>
            <HorizontalDisplay> 
                <CenteredDisplay width="100%">
                    <p className = 'groupName'> {name} </p>
                </CenteredDisplay> 
                <CenteredDisplay width="80%">
                    <p className='itemCountTitle'>Elementos en el grupo:</p>
                    <p className='itemCountHolder'>{itemCount}</p >
                </CenteredDisplay> 
                
                <SvgButton type = 'editCookie' />
                
                <WhiteDummySpacer/>
                <SvgButton type = 'trashCan' />
 
                
            </HorizontalDisplay>
        </div>
    )
}

const ListGroup = () => {
    return (
        <motion.div
                initial = {{x:200, opacity:0}}
                animate={{ x: 0, opacity : 1 }} 
                transition={{ type: 'linear', stiffness: 200, duration : 0.42}} >
            <WhiteDummySpacer />
            <Title>Grupos</Title>
            
            
            { 
                dataMock.map((group,index) => (
                    <GroupHolder
                        key = {index}
                        id = {group.id}
                        name = {group.name}
                        description = {group.description}
                        hexColor = {group.hexColor}
                        itemCount = {group.itemCount}
                        />
                    
                ))
            }

        </motion.div>
    )
}

export default ListGroup;