import Button from '../Button/Button.jsx'
import s from './Hero.module.css'
import { leftSlide, rightSlide } from '../../styles/animation.js'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'



const Hero = () => {

    const [refTitle, inViewTitle] = useInView({
       triggerOnce: false,   
       threshold: 0.2,      
    })

    const [refText, inViewText] = useInView({
       triggerOnce: false,   
       threshold: 0.2,      
    })

    return (
        <section className={s.hero}>
            <div className={s.content}>
                <motion.h1 ref={refTitle } className={s.title} variants={leftSlide} initial='hidden' animate={inViewTitle ? "visible" : "hidden"}>Find your perfect rental car</motion.h1>
                <motion.h2 ref={refText} className={s.subtitle} variants={rightSlide} initial='hidden' animate={inViewText ? "visible" : "hidden"}>Reliable and budget-friendly rentals for any journey</motion.h2>
                <Button to='/catalog' text='View Catalog'/>
            </div>
        </section>
    )
 }

export default Hero