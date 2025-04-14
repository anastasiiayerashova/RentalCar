import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
}

const transition = {
  duration: 0.6,
  ease: 'easeInOut',
}

export const AnimatedLayout = ({ children }) => {
    return (
        <motion.div 
            initial='hidden'
            animate='enter'
            exit='exit'
            variants={variants}
            transition={transition}
        >
            {children}
        </motion.div>
    )
}