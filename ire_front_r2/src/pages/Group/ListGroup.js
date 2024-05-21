import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";

import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";

import  MotionImplementation  from './../../components/Layouts/MotionImplementation';

import { motion } from 'framer-motion';

import './../../mainStyles.css'; 
import "./group.modules/groupHolder.css"
import SvgButton from "../../components/UIcomponents/SvgButton";

import DeleteGroupModal from "./group.modules/DeleteGroupModal";
import UpdateGroupModal from "./group.modules/UpdateGroupModal";


const dataMock = [
    {
        "description": "asdfasdf",
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

const GroupHolder = ({fullGroupProps}) => {
    return (
        <div className = 'mainHolderStyle' style={{ backgroundColor: fullGroupProps.hexColor, display: 'flex'}}>
            <HorizontalDisplay> 
                <CenteredDisplay width="100%">
                    <p className = 'groupName'> {fullGroupProps.name} </p>
                </CenteredDisplay> 
                <div style={{marginInline:'50px'}}>
                    <p className='itemCountTitle'>Elementos en el grupo:</p>
                    <p className='itemCountHolder'>{fullGroupProps.itemCount}</p >
                </div> 
                
                <SvgButton 
                    type = 'editCookie'
                    fullProps = {fullGroupProps} 
                    RenderedComponent = {UpdateGroupModal}  
                />
                
                <WhiteDummySpacer/>
                <SvgButton
                    type = 'trashCan' 
                    fullProps = {fullGroupProps} 
                    RenderedComponent = {DeleteGroupModal}  
                />
 
                
            </HorizontalDisplay>
        </div>
    )
}

const ListGroup = () => {
    return (
        <MotionImplementation>

            <WhiteDummySpacer />
            <Title>Grupos</Title>
            
            
            { 
                dataMock.map((group,index) => (
                    <GroupHolder
                        key = {index}
                        fullGroupProps = {group}
                        />
                    
                ))
            }

        </MotionImplementation>
    )
}

export default ListGroup;