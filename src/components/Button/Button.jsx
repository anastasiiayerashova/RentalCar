import s from './Button.module.css'
import { Link } from 'react-router-dom'

const Button = ({ to, text }) => {
    
    return (
        <Link to={to} className={s.btn}>{text}</Link>
    )
 }

export default Button