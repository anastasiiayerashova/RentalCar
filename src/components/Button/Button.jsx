import s from './Button.module.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Button = ({ to, text }) => {

   return (
    <MotionLink
      to={to}
      className={s.btn}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {text}
    </MotionLink>
  )
 }

export default Button