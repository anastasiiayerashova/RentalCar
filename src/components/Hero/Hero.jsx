import s from './Hero.module.css'

const Hero = () => {
    return (
        <section className={s.hero}>
            <div className={s.content}>
                <h1 className={s.title}>Find your perfect rental car</h1>
                <h2 className={s.subtitle}>Reliable and budget-friendly rentals for any journey</h2>
                <button  type='button'>View Catalog</button>
            </div>
        </section>
    )
 }

export default Hero