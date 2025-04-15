import { motion } from "framer-motion"
import { variants, transition } from "../styles/animation.js"

export const AnimatedLayout = ({ children }) => {
    
    return (
        <motion.div initial='hidden' animate='enter' exit='exit' variants={variants} transition={transition}>
            {children}
        </motion.div>
    )
}