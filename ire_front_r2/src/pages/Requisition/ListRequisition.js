import { Component } from "react";
import Title from "../../components/Layouts/Title";
import ComponentHolder from "../../components/Layouts/ComponentHolder";
import HorizontalSpray from "../../components/Layouts/HorizontalSpray";

const dataMock = [
    {
        id : '0',
        stringDay : 'test',
        date : "string",
        state : true,
        dishes : [
            {
                id : '0',
                dish : 'LoremIpsum',
                dishGroup : '2',
                services : '200',
                elements : [
                    {
                        id : '0',
                        name : 'Carne',
                        amount : '12. 00',
                        unit : 'kg',
                        time : '17:00'
                    }, 
                ]
            },
        ],
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