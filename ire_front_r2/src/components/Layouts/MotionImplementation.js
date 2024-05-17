import { motion } from 'framer-motion';

const MotionImplementation = ({children, verticalCentered = 'any' }) => {

    const centeringDisplay = verticalCentered !== 'any' ? {
        height: '100%',
        display: 'flex',
        justifyContent: 'center', // Asumiendo que también quieres centrar el contenido
        alignItems: 'center'
    } : {};

    return(
        <motion.div 
                initial = {{x:200, opacity:0}}
                animate = {{ x: 0, opacity : 1 }} 
                transition = {{ type: 'linear', stiffness: 200, duration : 0.42}}
                style = {centeringDisplay} >
                    {children}
        </motion.div>
    )
}

export default MotionImplementation; 