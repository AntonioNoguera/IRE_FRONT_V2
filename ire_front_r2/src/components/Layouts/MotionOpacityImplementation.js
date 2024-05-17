import { motion } from 'framer-motion';

const MotionOpacityImplementation = ({children, verticalCentered = 'any' }) => {
 
    return(
        <motion.div 
                initial = {{ opacity:0}}
                animate = {{  opacity : 1 }} 
                transition = {{ type: 'linear',duration : 0.42}}  >
                    {children}
        </motion.div>
    )
}

export default MotionOpacityImplementation; 