import Button from '../Button/Button.jsx'
import s from './Hero.module.css'
import { textAnimation } from '../../styles/animation.js'
import { motion } from 'framer-motion'

const Hero = () => {

    return (
        <section className={s.hero}>
            <div className={s.content}>
                <motion.h1 className={s.title} variants={textAnimation} initial='hidden' animate='visible'>Find your perfect rental car</motion.h1>
                <motion.h2 className={s.subtitle} variants={textAnimation} initial='hidden' animate='visible'>Reliable and budget-friendly rentals for any journey</motion.h2>
                <Button to='/catalog' text='View Catalog'/>
            </div>
        </section>
    )
 }

export default Hero