import BrandFilter from '../BrandFilter/BrandFilter.jsx'
import s from './Filters.module.css'

const Filters = () => {
    return (
        <div className={s.filters}>
            <BrandFilter/>
        </div>
    )
 }

export default Filters