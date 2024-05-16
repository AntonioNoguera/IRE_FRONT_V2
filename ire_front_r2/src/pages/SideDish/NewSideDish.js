import { Component } from "react";
import Title from "../../components/Layouts/Title";
import ComponentHolder from "../../components/Layouts/ComponentHolder";
import HorizontalSpray from "../../components/Layouts/HorizontalSpray";

import { motion } from 'framer-motion';

const NewSideDish = () => {

    return (
        <>
            <motion.div
                initial = {{x:200, opacity:0}}
                animate={{ x: 0, opacity : 1 }} 
                transition={{ type: 'linear', stiffness: 200, duration : 0.42}} >

                <Title> Nuevo Acompañamiento </Title> 

            </motion.div> 
        </>
    )
}

export default NewSideDish;