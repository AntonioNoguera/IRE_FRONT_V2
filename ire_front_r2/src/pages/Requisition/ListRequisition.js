import { Component } from "react";
import Title from "../../components/Layouts/Title";
import ComponentHolder from "../../components/Layouts/ComponentHolder";

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
                dataMock.map( (item, index) => (
                    <ComponentHolder>
                        <p>test</p>
                    </ComponentHolder>
                ))
            }
            
        </>
    )
}

export default ListRequisition;