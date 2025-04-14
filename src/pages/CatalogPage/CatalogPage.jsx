import CarList from '../../components/CarList/CarList.jsx'
import Filters from '../../components/Filters/Filters.jsx'
import Header from '../../components/Header/Header.jsx'
import s from './CatalogPage.module.css'

const CatalogPage = () => {

    return (
        <>
            {/* <Header /> */}
            <section className={s.catalog}>
                <div className={s.container}>
                    <h2 className={s.visually_hidden}>Available cars ror rent</h2>
                    <Filters />
                    <CarList/>
                </div>
            </section>
        
        </>
    )
 }

export default CatalogPage