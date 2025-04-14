import CarList from '../../components/CarList/CarList.jsx'
import Filters from '../../components/Filters/Filters.jsx'
import { AnimatedLayout } from '../../components/AnimatedLayout.jsx'
import s from './CatalogPage.module.css'

const CatalogPage = () => {

    return (
        <AnimatedLayout>
            <section className={s.catalog}>
                <div className={s.container}>
                    <h2 className={s.visually_hidden}>Available cars ror rent</h2>
                    <Filters />
                    <CarList/>
                </div>
            </section>
        </AnimatedLayout>
    )
 }

export default CatalogPage