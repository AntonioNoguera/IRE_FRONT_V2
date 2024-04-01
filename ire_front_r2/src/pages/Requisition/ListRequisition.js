import { Component } from "react";
import Title from "../../components/Layouts/Title";
import ComponentHolder from "../../components/Layouts/ComponentHolder";
import HorizontalSpray from "../../components/Layouts/HorizontalSpray";

const dataMock = [
    {
        id : '0',
        name : 'test',
        content : 'body'
    },
    
    {
        id : '1',
        name : 'test1',
        content : 'body1'
    },

    {
        id : '2',
        name : 'test2',
        content : 'body2'
    },
]

const ListRequisition = () => {

    return (
        <>
            <Title> Listado de Requisición </Title>
            
            { 
                <HorizontalSpray itemsToSpray={dataMock}/>
            }
            
        </>
    )
}

export default ListRequisition;