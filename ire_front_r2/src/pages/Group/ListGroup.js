import CenteredDisplay from "../../components/Layouts/CenteredDisplay";
import HorizontalDisplay from "../../components/Layouts/HorizontalDisplay";
import Title from "../../components/Layouts/Title";
import Button from "../../components/UIcomponents/Button";
import EditText from "../../components/UIcomponents/EditText";

import BigTextArea from "../../components/UIcomponents/BigTextArea";
import Label from "../../components/UIcomponents/Label";
import DropDownSelection from "../../components/UIcomponents/DropDownSelection";

import WhiteDummySpacer from "../../components/Layouts/WhiteDummySpacer";

const dataMock = [
    {
        "description": "string",
        "hexColor": "string",
        "id": 0,
        "itemCount" : 12,
        "name": "string"
    },
    {
        "description": "string",
        "hexColor": "string",
        "id": 1,
        
        "itemCount" : 12,
        "name": "string"
    },
    {
        "description": "string",
        "hexColor": "string",
        "id": 2,
        
        "itemCount" : 12,
        "name": "string"
    },
    {
        "description": "string",
        "hexColor": "red",
        "id": 3,
        
        "itemCount" : 12,
        "name": "string"
    },
    {
        "description": "string",
        "hexColor": "string",
        "id": 4,
        
        "itemCount" : 12,
        "name": "string"
    },
]

const GroupHolder = ({hexColor, description, name,id,itemCount}) => {
    return (
        <div style={{ backgroundColor: hexColor, width: '100%', display: 'flex', justifyContent : 'space-beetwen'}}>
            <HorizontalDisplay> 
                    <p>{name} </p>
                <CenteredDisplay width="30%">
                    <div>Elementos en el grupo:</div>
                    <div>{itemCount}</div>
                </CenteredDisplay> 
            </HorizontalDisplay>
    
        </div>
    )
}


const ListGroup = () => {
    return (
        <>
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

        </>
    )
}

export default ListGroup;