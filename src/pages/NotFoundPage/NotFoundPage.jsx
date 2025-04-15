import s from './NotFoundPage.module.css'
import Button from '../../components/Button/Button.jsx'
import { AnimatedLayout } from '../../components/AnimatedLayout.jsx'

const NotFoundPage = () => {

    return (
        <AnimatedLayout>
            <section className={s.ntf_section}>
                <div className={s.content}>
                    <h1 className={s.title}>Oops! We couldn't find the page</h1>
                    <h2 className={s.subtitle}>But don't worry, you can always go back to the homepage</h2>
                    <Button to='/' text='Go to home'/>
                </div>
            </section>
        </AnimatedLayout>
    )
 }

export default NotFoundPage