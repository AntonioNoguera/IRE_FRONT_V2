import React from 'react';
import { motion } from 'framer-motion';

const AnimatedComponent = ({ children }) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} 
            transition={{ type: 'linear', duration: 0.42 }}
            style={{ position: 'relative', zIndex: 1 }} // Añadir z-index y position
        >
            {children}
        </motion.div>
    );
};

export default AnimatedComponent;
