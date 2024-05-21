import React, { useEffect, useState } from 'react';
import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";
import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";
import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";
import MotionImplementation from './../../components/Layouts/MotionImplementation';
import { motion } from 'framer-motion';
import './../../mainStyles.css'; 
import "./group.modules/groupHolder.css"
import SvgButton from "../../components/UIcomponents/SvgButton";
import DeleteGroupModal from "./group.modules/DeleteGroupModal";
import UpdateGroupModal from "./group.modules/UpdateGroupModal";

const GroupHolder = ({ fullGroupProps,passedHook  }) => {
    return (
        <div className='mainHolderStyle' style={{ backgroundColor: fullGroupProps.color, display: 'flex' }}>
            <HorizontalDisplay> 
                <CenteredDisplay width="100%">
                    <p className='groupName'> {fullGroupProps.name} </p>
                </CenteredDisplay> 
                <div style={{ marginInline: '50px' }}>
                    <p className='itemCountTitle'>Elementos en el grupo:</p>
                    <p className='itemCountHolder'>{fullGroupProps.itemCount}</p>
                </div> 
                <SvgButton 
                    type='editCookie'
                    fullProps = {fullGroupProps} 
                    hook = {passedHook}
                    RenderedComponent = {UpdateGroupModal}  
                />
                
                <WhiteDummySpacer />
                <SvgButton
                    type='trashCan' 
                    fullProps = {fullGroupProps}  
                    hook = {passedHook}
                    RenderedComponent = {DeleteGroupModal}  
                />
            </HorizontalDisplay>
        </div>
    );
};

const ListGroup = () => {
    const [groups, setGroups] = useState([]);

    //Hook Post Operaciones
    const [updateTrigger, setUpdateTrigger] = useState(0);

    useEffect(() => {
        const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
        setGroups(storedGroups);
        console.log(storedGroups);
    }, [updateTrigger]);

    return (
        <MotionImplementation>
            <WhiteDummySpacer />
            <Title>Grupos</Title>
            
            {groups.length !== 0 ? (
                groups.map((group, index) => (
                    <GroupHolder
                        key={index}
                        fullGroupProps={group}
                        passedHook={setUpdateTrigger}
                    />
                ))
            ) : (
                <p>No hay grupos disponibles.</p>
            )}
        </MotionImplementation>
    );
};

export default ListGroup;